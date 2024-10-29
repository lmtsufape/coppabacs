package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.BancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.ObjetosBancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AgricultorResponse;
import br.edu.ufape.lmts.sementes.controller.dto.response.BancoSementesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@RestController
@RequestMapping("${prefix.url}")
public class BancoSementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;


	@PreAuthorize("permitAll()")
	@GetMapping("banco-sementes")
	public List<BancoSementesResponse> getAllBancoSementes() {
		return facade.getAllBancoSementes()
			.stream()
			.map(BancoSementesResponse::new)
			.toList();
	}
	
	@GetMapping(value = "banco-sementes/page")
	public Page<BancoSementesResponse> getPageBancoSementes(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<BancoSementes> list = facade.findPageBancoSementes(pageRequest);
		return list.map(BancoSementesResponse::new);
	}
	
	@PostMapping("banco-sementes")
	public BancoSementesResponse createBancoSementes(@Valid @RequestBody BancoSementesRequest newObj) {
		return new BancoSementesResponse(facade.saveBancoSementes(newObj.convertToEntity()));
	}

	@PreAuthorize("permitAll()")
	@GetMapping("banco-sementes/{id}")
	public BancoSementesResponse getBancoSementesById(@PathVariable Long id) {
		return new BancoSementesResponse(facade.findBancoSementesById(id));
	}
	
	@PutMapping("banco-sementes/{id}")
	public BancoSementesResponse updateBancoSementes(@PathVariable Long id, @Valid @RequestBody BancoSementesRequest obj) {
		try {
			//BancoSementes o = obj.convertToEntity();
			BancoSementes oldObject = facade.findBancoSementesById(id);

			TypeMap<BancoSementesRequest, BancoSementes> typeMapper = modelMapper
													.typeMap(BancoSementesRequest.class, BancoSementes.class)
													.addMappings(mapper -> mapper.skip(BancoSementes::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new BancoSementesResponse(facade.updateBancoSementes(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
	}
	
	@PatchMapping("/banco-sementes/{bancoSementeId}/adicionar-gerente/{gerenteId}")
    public BancoSementesResponse adicionarGerenteBancoSemente(@PathVariable long bancoSementeId, @PathVariable long gerenteId) {
		return new BancoSementesResponse(facade.adicionarGerenteBancoSemente(bancoSementeId, gerenteId)); 
	}
	
	@DeleteMapping("banco-sementes/{id}")
	public String deleteBancoSementes(@PathVariable Long id) {
		try {
			facade.deleteBancoSementes(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
	}
	
	@GetMapping("banco-sementes/{id}/agricultores")
	public List<AgricultorResponse> getAllAgricultor(@PathVariable long id) {
		return facade.getAllAgricultor(id)
				.stream()
				.map(AgricultorResponse::new)
				.toList();
		
	}
	
//	public List<SementesResponse> getAllSementesBanco(@PathVariable long id) {
//		return facade.getAllSementesBanco(id)
//				.stream()
//				.map(SementesResponse::new)
//				.toList();
//	}
	
	@PatchMapping
	public BancoSementesResponse updateObjetosBanco(@PathVariable long bancoId, @RequestBody List<ObjetosBancoSementesRequest> objetos)   {
		return null;
	}
	
	@PatchMapping("banco-sementes/{id}/remover-agricultor/")
	public void removerAgricultorBanco() {
		
	}

}
