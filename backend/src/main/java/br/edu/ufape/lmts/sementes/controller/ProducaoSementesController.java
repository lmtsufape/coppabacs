package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.ProducaoSementes;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.ProducaoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ProducaoSementesResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class ProducaoSementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("producaoSementes")
	public List<ProducaoSementesResponse> getAllProducaoSementes() {
		return facade.getAllProducaoSementes()
			.stream()
			.map(ProducaoSementesResponse::new)
			.toList();
	}
	
	@PostMapping("producaoSementes")
	public ProducaoSementesResponse createProducaoSementes(@Valid @RequestBody ProducaoSementesRequest newObj) {
		return new ProducaoSementesResponse(facade.saveProducaoSementes(newObj.convertToEntity()));
	}
	
	@GetMapping("producaoSementes/{id}")
	public ProducaoSementesResponse getProducaoSementesById(@PathVariable Long id) {
		try {
			return new ProducaoSementesResponse(facade.findProducaoSementesById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ProducaoSementes " + id + " not found.");
		}
	}
	
	@PatchMapping("producaoSementes/{id}")
	public ProducaoSementesResponse updateProducaoSementes(@PathVariable Long id, @Valid @RequestBody ProducaoSementesRequest obj) {
		try {
			//ProducaoSementes o = obj.convertToEntity();
			ProducaoSementes oldObject = facade.findProducaoSementesById(id);

			TypeMap<ProducaoSementesRequest, ProducaoSementes> typeMapper = modelMapper
													.typeMap(ProducaoSementesRequest.class, ProducaoSementes.class)
													.addMappings(mapper -> mapper.skip(ProducaoSementes::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ProducaoSementesResponse(facade.updateProducaoSementes(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("producaoSementes/{id}")
	public String deleteProducaoSementes(@PathVariable Long id) {
		try {
			facade.deleteProducaoSementes(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
