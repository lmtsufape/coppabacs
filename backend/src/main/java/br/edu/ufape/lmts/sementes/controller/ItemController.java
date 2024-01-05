package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.ItemRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ItemResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Item;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class ItemController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("item")
	public List<ItemResponse> getAllItem() {
		return facade.getAllItem()
			.stream()
			.map(ItemResponse::new)
			.toList();
	}
	
	@PostMapping("item")
	public ItemResponse createItem(@Valid @RequestBody ItemRequest newObj) {
		return new ItemResponse(facade.saveItem(newObj.convertToEntity()));
	}
	
	@GetMapping("item/{id}")
	public ItemResponse getItemById(@PathVariable Long id) {
		try {
			return new ItemResponse(facade.findItemById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item " + id + " not found.");
		}
	}
	
	@PatchMapping("item/{id}")
	public ItemResponse updateItem(@PathVariable Long id, @Valid @RequestBody ItemRequest obj) {
		try {
			//Item o = obj.convertToEntity();
			Item oldObject = facade.findItemById(id);

			TypeMap<ItemRequest, Item> typeMapper = modelMapper
													.typeMap(ItemRequest.class, Item.class)
													.addMappings(mapper -> mapper.skip(Item::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ItemResponse(facade.updateItem(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("item/{id}")
	public String deleteItem(@PathVariable Long id) {
		try {
			facade.deleteItem(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
