package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.SementePragaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.SementePragaResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.SementePraga;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


 @Hidden
@RestController
@RequestMapping("/api/v1/")
public class SementePragaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("sementePraga")
	public List<SementePragaResponse> getAllSementePraga() {
		return facade.getAllSementePraga()
			.stream()
			.map(SementePragaResponse::new)
			.toList();
	}
	
	@GetMapping(value = "sementePraga/page")
	public Page<SementePragaResponse> getPageSementePraga(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<SementePraga> list = facade.findPageSementePraga(pageRequest);
		return list.map(SementePragaResponse::new);
	}
	
	@PostMapping("sementePraga")
	public SementePragaResponse createSementePraga(@Valid @RequestBody SementePragaRequest newObj) {
		return new SementePragaResponse(facade.saveSementePraga(newObj.convertToEntity()));
	}
	
	@GetMapping("sementePraga/{id}")
	public SementePragaResponse getSementePragaById(@PathVariable Long id) {
		return new SementePragaResponse(facade.findSementePragaById(id));
	}
	
	@PatchMapping("sementePraga/{id}")
	public SementePragaResponse updateSementePraga(@PathVariable Long id, @Valid @RequestBody SementePragaRequest obj) {
		try {
			//SementePraga o = obj.convertToEntity();
			SementePraga oldObject = facade.findSementePragaById(id);

			TypeMap<SementePragaRequest, SementePraga> typeMapper = modelMapper
													.typeMap(SementePragaRequest.class, SementePraga.class)
													.addMappings(mapper -> mapper.skip(SementePraga::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new SementePragaResponse(facade.updateSementePraga(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("sementePraga/{id}")
	public String deleteSementePraga(@PathVariable Long id) {
		try {
			facade.deleteSementePraga(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
