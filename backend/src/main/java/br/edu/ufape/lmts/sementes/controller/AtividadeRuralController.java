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

import br.edu.ufape.lmts.sementes.controller.dto.request.AtividadeRuralRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AtividadeRuralResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.AtividadeRural;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class AtividadeRuralController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("atividadeRural")
	public List<AtividadeRuralResponse> getAllAtividadeRural() {
		return facade.getAllAtividadeRural()
			.stream()
			.map(AtividadeRuralResponse::new)
			.toList();
	}
	
	@PostMapping("atividadeRural")
	public AtividadeRuralResponse createAtividadeRural(@Valid @RequestBody AtividadeRuralRequest newObj) {
		return new AtividadeRuralResponse(facade.saveAtividadeRural(newObj.convertToEntity()));
	}
	
	@GetMapping("atividadeRural/{id}")
	public AtividadeRuralResponse getAtividadeRuralById(@PathVariable Long id) {
		try {
			return new AtividadeRuralResponse(facade.findAtividadeRuralById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "AtividadeRural " + id + " not found.");
		}
	}
	
	@PatchMapping("atividadeRural/{id}")
	public AtividadeRuralResponse updateAtividadeRural(@PathVariable Long id, @Valid @RequestBody AtividadeRuralRequest obj) {
		try {
			//AtividadeRural o = obj.convertToEntity();
			AtividadeRural oldObject = facade.findAtividadeRuralById(id);

			TypeMap<AtividadeRuralRequest, AtividadeRural> typeMapper = modelMapper
													.typeMap(AtividadeRuralRequest.class, AtividadeRural.class)
													.addMappings(mapper -> mapper.skip(AtividadeRural::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new AtividadeRuralResponse(facade.updateAtividadeRural(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("atividadeRural/{id}")
	public String deleteAtividadeRural(@PathVariable Long id) {
		try {
			facade.deleteAtividadeRural(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
