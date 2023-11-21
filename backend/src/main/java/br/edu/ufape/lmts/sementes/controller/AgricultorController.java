package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.AgricultorRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AgricultorResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class AgricultorController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("agricultor")
	public List<AgricultorResponse> getAllAgricultor() {
		return facade.getAllAgricultor()
			.stream()
			.map(AgricultorResponse::new)
			.toList();
	}
	
	@PostMapping("agricultor")
	public AgricultorResponse createAgricultor(@Valid @RequestBody AgricultorRequest newObj) {
		return new AgricultorResponse(facade.saveAgricultor(newObj.convertToEntity()));
	}
	
	@GetMapping("agricultor/{id}")
	public AgricultorResponse getAgricultorById(@PathVariable Long id) {
		try {
			return new AgricultorResponse(facade.findAgricultorById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Agricultor " + id + " not found.");
		}
	}
	
	@PatchMapping("agricultor/{id}")
	public AgricultorResponse updateAgricultor(@PathVariable Long id, @Valid @RequestBody AgricultorRequest obj) {
		try {
			//Agricultor o = obj.convertToEntity();
			Agricultor oldObject = facade.findAgricultorById(id);

			TypeMap<AgricultorRequest, Agricultor> typeMapper = modelMapper
													.typeMap(AgricultorRequest.class, Agricultor.class)
													.addMappings(mapper -> mapper.skip(Agricultor::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new AgricultorResponse(facade.updateAgricultor(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("agricultor/{id}")
	public String deleteAgricultor(@PathVariable Long id) {
		try {
			facade.deleteAgricultor(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
