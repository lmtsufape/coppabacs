package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Finalidade;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.FinalidadeRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.FinalidadeResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class FinalidadeController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("finalidade")
	public List<FinalidadeResponse> getAllFinalidade() {
		return facade.getAllFinalidade()
			.stream()
			.map(FinalidadeResponse::new)
			.toList();
	}
	
	@PostMapping("finalidade")
	public FinalidadeResponse createFinalidade(@Valid @RequestBody FinalidadeRequest newObj) {
		return new FinalidadeResponse(facade.saveFinalidade(newObj.convertToEntity()));
	}
	
	@GetMapping("finalidade/{id}")
	public FinalidadeResponse getFinalidadeById(@PathVariable Long id) {
		try {
			return new FinalidadeResponse(facade.findFinalidadeById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Finalidade " + id + " not found.");
		}
	}
	
	@PatchMapping("finalidade/{id}")
	public FinalidadeResponse updateFinalidade(@PathVariable Long id, @Valid @RequestBody FinalidadeRequest obj) {
		try {
			//Finalidade o = obj.convertToEntity();
			Finalidade oldObject = facade.findFinalidadeById(id);

			TypeMap<FinalidadeRequest, Finalidade> typeMapper = modelMapper
													.typeMap(FinalidadeRequest.class, Finalidade.class)
													.addMappings(mapper -> mapper.skip(Finalidade::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new FinalidadeResponse(facade.updateFinalidade(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("finalidade/{id}")
	public String deleteFinalidade(@PathVariable Long id) {
		try {
			facade.deleteFinalidade(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
