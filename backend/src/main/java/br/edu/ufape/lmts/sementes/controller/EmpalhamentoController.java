package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Empalhamento;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.EmpalhamentoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.EmpalhamentoResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class EmpalhamentoController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("empalhamento")
	public List<EmpalhamentoResponse> getAllEmpalhamento() {
		return facade.getAllEmpalhamento()
			.stream()
			.map(EmpalhamentoResponse::new)
			.toList();
	}
	
	@PostMapping("empalhamento")
	public EmpalhamentoResponse createEmpalhamento(@Valid @RequestBody EmpalhamentoRequest newObj) {
		return new EmpalhamentoResponse(facade.saveEmpalhamento(newObj.convertToEntity()));
	}
	
	@GetMapping("empalhamento/{id}")
	public EmpalhamentoResponse getEmpalhamentoById(@PathVariable Long id) {
		try {
			return new EmpalhamentoResponse(facade.findEmpalhamentoById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Empalhamento " + id + " not found.");
		}
	}
	
	@PatchMapping("empalhamento/{id}")
	public EmpalhamentoResponse updateEmpalhamento(@PathVariable Long id, @Valid @RequestBody EmpalhamentoRequest obj) {
		try {
			//Empalhamento o = obj.convertToEntity();
			Empalhamento oldObject = facade.findEmpalhamentoById(id);

			TypeMap<EmpalhamentoRequest, Empalhamento> typeMapper = modelMapper
													.typeMap(EmpalhamentoRequest.class, Empalhamento.class)
													.addMappings(mapper -> mapper.skip(Empalhamento::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new EmpalhamentoResponse(facade.updateEmpalhamento(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("empalhamento/{id}")
	public String deleteEmpalhamento(@PathVariable Long id) {
		try {
			facade.deleteEmpalhamento(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
