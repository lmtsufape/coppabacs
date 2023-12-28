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

import br.edu.ufape.lmts.sementes.controller.dto.request.PragaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.PragaResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Praga;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class PragaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("praga")
	public List<PragaResponse> getAllPraga() {
		return facade.getAllPraga()
			.stream()
			.map(PragaResponse::new)
			.toList();
	}
	
	@PostMapping("praga")
	public PragaResponse createPraga(@Valid @RequestBody PragaRequest newObj) {
		return new PragaResponse(facade.savePraga(newObj.convertToEntity()));
	}
	
	@GetMapping("praga/{id}")
	public PragaResponse getPragaById(@PathVariable Long id) {
		try {
			return new PragaResponse(facade.findPragaById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Praga " + id + " not found.");
		}
	}
	
	@PatchMapping("praga/{id}")
	public PragaResponse updatePraga(@PathVariable Long id, @Valid @RequestBody PragaRequest obj) {
		try {
			//Praga o = obj.convertToEntity();
			Praga oldObject = facade.findPragaById(id);

			TypeMap<PragaRequest, Praga> typeMapper = modelMapper
													.typeMap(PragaRequest.class, Praga.class)
													.addMappings(mapper -> mapper.skip(Praga::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new PragaResponse(facade.updatePraga(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("praga/{id}")
	public String deletePraga(@PathVariable Long id) {
		try {
			facade.deletePraga(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
