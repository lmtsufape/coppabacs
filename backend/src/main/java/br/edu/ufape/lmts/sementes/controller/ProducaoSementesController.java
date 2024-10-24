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

import br.edu.ufape.lmts.sementes.controller.dto.request.ProducaoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ProducaoSementesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.ProducaoSementes;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


 @Hidden
@RestController
@RequestMapping("${prefix.url}")
public class ProducaoSementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("producaoSementes")
	public List<ProducaoSementesResponse> getAllProducaoSementes() {
		return facade.getAllProducaoSementes()
			.stream()
			.map(ProducaoSementesResponse::new)
			.toList();
	}
	
	@GetMapping(value = "producaoSementes/page")
	public Page<ProducaoSementesResponse> getPageProducaoSementes(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<ProducaoSementes> list = facade.findPageProducaoSementes(pageRequest);
		return list.map(ProducaoSementesResponse::new);
	}
	
	@PostMapping("producaoSementes")
	public ProducaoSementesResponse createProducaoSementes(@Valid @RequestBody ProducaoSementesRequest newObj) {
		return new ProducaoSementesResponse(facade.saveProducaoSementes(newObj.convertToEntity()));
	}
	
	@GetMapping("producaoSementes/{id}")
	public ProducaoSementesResponse getProducaoSementesById(@PathVariable Long id) {
		return new ProducaoSementesResponse(facade.findProducaoSementesById(id));
	}
	
	@PatchMapping("producaoSementes/{id}")
	public ProducaoSementesResponse updateProducaoSementes(@PathVariable Long id, @Valid @RequestBody ProducaoSementesRequest obj) {
		try {
			//ProducaoSementes o = obj.convertToEntity();
			ProducaoSementes oldObject = facade.findProducaoSementesById(id);

			TypeMap<ProducaoSementesRequest, ProducaoSementes> typeMapper = modelMapper
													.typeMap(ProducaoSementesRequest.class, ProducaoSementes.class)
													.addMappings(mapper -> mapper.skip(ProducaoSementes::setId))
													.addMappings(mapper -> mapper.skip(ProducaoSementes::setAgricultor));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ProducaoSementesResponse(facade.updateProducaoSementes(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("producaoSementes/{id}")
	public String deleteProducaoSementes(@PathVariable Long id) {
		try {
			facade.deleteProducaoSementes(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
