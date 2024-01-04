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

import br.edu.ufape.lmts.sementes.controller.dto.request.TabelaBancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.TabelaBancoSementesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class TabelaBancoSementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("tabelaBancoSementes")
	public List<TabelaBancoSementesResponse> getAllTabelaBancoSementes() {
		return facade.getAllTabelaBancoSementes()
			.stream()
			.map(TabelaBancoSementesResponse::new)
			.toList();
	}
	
	@PostMapping("tabelaBancoSementes")
	public TabelaBancoSementesResponse createTabelaBancoSementes(@Valid @RequestBody TabelaBancoSementesRequest newObj) {
		return new TabelaBancoSementesResponse(facade.saveTabelaBancoSementes(newObj.convertToEntity()));
	}
	
	@GetMapping("tabelaBancoSementes/{id}")
	public TabelaBancoSementesResponse getTabelaBancoSementesById(@PathVariable Long id) {
		try {
			return new TabelaBancoSementesResponse(facade.findTabelaBancoSementesById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "TabelaBancoSementes " + id + " not found.");
		}
	}
	
	@PatchMapping("tabelaBancoSementes/{id}")
	public TabelaBancoSementesResponse updateTabelaBancoSementes(@PathVariable Long id, @Valid @RequestBody TabelaBancoSementesRequest obj) {
		try {
			//TabelaBancoSementes o = obj.convertToEntity();
			TabelaBancoSementes oldObject = facade.findTabelaBancoSementesById(id);

			TypeMap<TabelaBancoSementesRequest, TabelaBancoSementes> typeMapper = modelMapper
													.typeMap(TabelaBancoSementesRequest.class, TabelaBancoSementes.class)
													.addMappings(mapper -> mapper.skip(TabelaBancoSementes::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new TabelaBancoSementesResponse(facade.updateTabelaBancoSementes(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("tabelaBancoSementes/{id}")
	public String deleteTabelaBancoSementes(@PathVariable Long id) {
		try {
			facade.deleteTabelaBancoSementes(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
