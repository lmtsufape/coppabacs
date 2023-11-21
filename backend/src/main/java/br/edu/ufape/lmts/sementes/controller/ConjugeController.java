package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Conjuge;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.ConjugeRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ConjugeResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class ConjugeController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("conjuge")
	public List<ConjugeResponse> getAllConjuge() {
		return facade.getAllConjuge()
			.stream()
			.map(ConjugeResponse::new)
			.toList();
	}
	
	@PostMapping("conjuge")
	public ConjugeResponse createConjuge(@Valid @RequestBody ConjugeRequest newObj) {
		return new ConjugeResponse(facade.saveConjuge(newObj.convertToEntity()));
	}
	
	@GetMapping("conjuge/{id}")
	public ConjugeResponse getConjugeById(@PathVariable Long id) {
		try {
			return new ConjugeResponse(facade.findConjugeById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Conjuge " + id + " not found.");
		}
	}
	
	@PatchMapping("conjuge/{id}")
	public ConjugeResponse updateConjuge(@PathVariable Long id, @Valid @RequestBody ConjugeRequest obj) {
		try {
			//Conjuge o = obj.convertToEntity();
			Conjuge oldObject = facade.findConjugeById(id);

			TypeMap<ConjugeRequest, Conjuge> typeMapper = modelMapper
													.typeMap(ConjugeRequest.class, Conjuge.class)
													.addMappings(mapper -> mapper.skip(Conjuge::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ConjugeResponse(facade.updateConjuge(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("conjuge/{id}")
	public String deleteConjuge(@PathVariable Long id) {
		try {
			facade.deleteConjuge(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
