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

import br.edu.ufape.lmts.sementes.controller.dto.request.EmpalhamentoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.EmpalhamentoResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Empalhamento;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


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
		return new EmpalhamentoResponse(facade.findEmpalhamentoById(id));
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
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("empalhamento/{id}")
	public String deleteEmpalhamento(@PathVariable Long id) {
		try {
			facade.deleteEmpalhamento(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
