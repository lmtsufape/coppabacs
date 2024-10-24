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

import br.edu.ufape.lmts.sementes.controller.dto.request.TabelaBancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.TabelaBancoSementesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


 @RestController
@RequestMapping("${prefix.url}")
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
	
	@GetMapping(value = "tabelaBancoSementes/page")
	public Page<TabelaBancoSementesResponse> getPageTabelaBancoSementes(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<TabelaBancoSementes> list = facade.findPageTabelaBancoSementes(pageRequest);
		return list.map(TabelaBancoSementesResponse::new);
	}
	
	@PostMapping("tabelaBancoSementes")
	public TabelaBancoSementesResponse createTabelaBancoSementes(@Valid @RequestBody TabelaBancoSementesRequest newObj) {
		return new TabelaBancoSementesResponse(facade.saveTabelaBancoSementes(newObj.convertToEntity(), newObj.getSementeId()));
	}

	@PostMapping("tabelaBancoSementes/all")
	public List<TabelaBancoSementesResponse> createAllTabelaBancoSementes(@Valid @RequestBody List<TabelaBancoSementesRequest> newObj) {
		return facade.saveAllTabelaBancoSementes(newObj).stream()
				.map(TabelaBancoSementesResponse::new)
				.toList();
	}
	
	@GetMapping("tabelaBancoSementes/{id}")
	public TabelaBancoSementesResponse getTabelaBancoSementesById(@PathVariable Long id) {
		return new TabelaBancoSementesResponse(facade.findTabelaBancoSementesById(id));
	}
	
	@PatchMapping("tabelaBancoSementes/{id}")
	public TabelaBancoSementesResponse updateTabelaBancoSementes(@PathVariable Long id, @Valid @RequestBody TabelaBancoSementesRequest obj) {
		try {
			
			TabelaBancoSementes oldObject = facade.findTabelaBancoSementesById(id);

			TypeMap<TabelaBancoSementesRequest, TabelaBancoSementes> typeMapper = modelMapper
													.typeMap(TabelaBancoSementesRequest.class, TabelaBancoSementes.class)
													.addMappings(mapper -> mapper.skip(TabelaBancoSementes::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new TabelaBancoSementesResponse(facade.updateTabelaBancoSementes(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("tabelaBancoSementes/{id}")
	public String deleteTabelaBancoSementes(@PathVariable Long id) {
		try {
			facade.deleteTabelaBancoSementes(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
