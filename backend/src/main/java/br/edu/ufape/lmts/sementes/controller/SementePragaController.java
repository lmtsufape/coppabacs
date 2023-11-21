package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.SementePraga;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.SementePragaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.SementePragaResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class SementePragaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("sementePraga")
	public List<SementePragaResponse> getAllSementePraga() {
		return facade.getAllSementePraga()
			.stream()
			.map(SementePragaResponse::new)
			.toList();
	}
	
	@PostMapping("sementePraga")
	public SementePragaResponse createSementePraga(@Valid @RequestBody SementePragaRequest newObj) {
		return new SementePragaResponse(facade.saveSementePraga(newObj.convertToEntity()));
	}
	
	@GetMapping("sementePraga/{id}")
	public SementePragaResponse getSementePragaById(@PathVariable Long id) {
		try {
			return new SementePragaResponse(facade.findSementePragaById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "SementePraga " + id + " not found.");
		}
	}
	
	@PatchMapping("sementePraga/{id}")
	public SementePragaResponse updateSementePraga(@PathVariable Long id, @Valid @RequestBody SementePragaRequest obj) {
		try {
			//SementePraga o = obj.convertToEntity();
			SementePraga oldObject = facade.findSementePragaById(id);

			TypeMap<SementePragaRequest, SementePraga> typeMapper = modelMapper
													.typeMap(SementePragaRequest.class, SementePraga.class)
													.addMappings(mapper -> mapper.skip(SementePraga::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new SementePragaResponse(facade.updateSementePraga(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("sementePraga/{id}")
	public String deleteSementePraga(@PathVariable Long id) {
		try {
			facade.deleteSementePraga(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
