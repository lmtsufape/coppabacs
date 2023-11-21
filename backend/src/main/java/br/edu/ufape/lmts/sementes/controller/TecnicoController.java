package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Tecnico;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.TecnicoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.TecnicoResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class TecnicoController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("tecnico")
	public List<TecnicoResponse> getAllTecnico() {
		return facade.getAllTecnico()
			.stream()
			.map(TecnicoResponse::new)
			.toList();
	}
	
	@PostMapping("tecnico")
	public TecnicoResponse createTecnico(@Valid @RequestBody TecnicoRequest newObj) {
		return new TecnicoResponse(facade.saveTecnico(newObj.convertToEntity()));
	}
	
	@GetMapping("tecnico/{id}")
	public TecnicoResponse getTecnicoById(@PathVariable Long id) {
		try {
			return new TecnicoResponse(facade.findTecnicoById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Tecnico " + id + " not found.");
		}
	}
	
	@PatchMapping("tecnico/{id}")
	public TecnicoResponse updateTecnico(@PathVariable Long id, @Valid @RequestBody TecnicoRequest obj) {
		try {
			//Tecnico o = obj.convertToEntity();
			Tecnico oldObject = facade.findTecnicoById(id);

			TypeMap<TecnicoRequest, Tecnico> typeMapper = modelMapper
													.typeMap(TecnicoRequest.class, Tecnico.class)
													.addMappings(mapper -> mapper.skip(Tecnico::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new TecnicoResponse(facade.updateTecnico(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("tecnico/{id}")
	public String deleteTecnico(@PathVariable Long id) {
		try {
			facade.deleteTecnico(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
