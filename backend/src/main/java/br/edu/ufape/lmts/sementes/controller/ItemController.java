package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.ItemRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ItemResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Item;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


 @Hidden
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
	
	@GetMapping(value = "item/page")
	public Page<ItemResponse> getPageItem(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Item> list = facade.findPageItem(pageRequest);
		return list.map(ItemResponse::new);
	}
	
	@PostMapping("item")
	public ItemResponse createItem(@Valid @RequestBody ItemRequest newObj) {
		return new ItemResponse(facade.saveItem(newObj.convertToEntity()));
	}
	
	@GetMapping("item/{id}")
	public ItemResponse getItemById(@PathVariable Long id) {
		return new ItemResponse(facade.findItemById(id));
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
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("item/{id}")
	public String deleteItem(@PathVariable Long id) {
		try {
			facade.deleteItem(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
