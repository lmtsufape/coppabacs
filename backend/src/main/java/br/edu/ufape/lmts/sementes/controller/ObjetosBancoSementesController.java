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

import br.edu.ufape.lmts.sementes.controller.dto.request.ObjetosBancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ObjetosBancoSementesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.ObjetosBancoSementes;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class ObjetosBancoSementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("objetosBancoSementes")
	public List<ObjetosBancoSementesResponse> getAllObjetosBancoSementes() {
		return facade.getAllObjetosBancoSementes()
			.stream()
			.map(ObjetosBancoSementesResponse::new)
			.toList();
	}
	
	@PostMapping("objetosBancoSementes")
	public ObjetosBancoSementesResponse createObjetosBancoSementes(@Valid @RequestBody ObjetosBancoSementesRequest newObj) {
		return new ObjetosBancoSementesResponse(facade.saveObjetosBancoSementes(newObj.convertToEntity()));
	}
	
	@GetMapping("objetosBancoSementes/{id}")
	public ObjetosBancoSementesResponse getObjetosBancoSementesById(@PathVariable Long id) {
		try {
			return new ObjetosBancoSementesResponse(facade.findObjetosBancoSementesById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ObjetosBancoSementes " + id + " not found.");
		}
	}
	
	@PatchMapping("objetosBancoSementes/{id}")
	public ObjetosBancoSementesResponse updateObjetosBancoSementes(@PathVariable Long id, @Valid @RequestBody ObjetosBancoSementesRequest obj) {
		try {
			//ObjetosBancoSementes o = obj.convertToEntity();
			ObjetosBancoSementes oldObject = facade.findObjetosBancoSementesById(id);

			TypeMap<ObjetosBancoSementesRequest, ObjetosBancoSementes> typeMapper = modelMapper
													.typeMap(ObjetosBancoSementesRequest.class, ObjetosBancoSementes.class)
													.addMappings(mapper -> mapper.skip(ObjetosBancoSementes::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ObjetosBancoSementesResponse(facade.updateObjetosBancoSementes(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("objetosBancoSementes/{id}")
	public String deleteObjetosBancoSementes(@PathVariable Long id) {
		try {
			facade.deleteObjetosBancoSementes(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
