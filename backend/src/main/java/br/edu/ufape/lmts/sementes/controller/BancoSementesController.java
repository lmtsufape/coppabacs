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

import br.edu.ufape.lmts.sementes.controller.dto.request.BancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AgricultorResponse;
import br.edu.ufape.lmts.sementes.controller.dto.response.BancoSementesResponse;
import br.edu.ufape.lmts.sementes.controller.dto.response.GerenteResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class BancoSementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("bancoSementes")
	public List<BancoSementesResponse> getAllBancoSementes() {
		return facade.getAllBancoSementes()
			.stream()
			.map(BancoSementesResponse::new)
			.toList();
	}
	
	@PostMapping("bancoSementes")
	public BancoSementesResponse createBancoSementes(@Valid @RequestBody BancoSementesRequest newObj) {
		return new BancoSementesResponse(facade.saveBancoSementes(newObj.convertToEntity()));
	}
	
	@GetMapping("bancoSementes/{id}")
	public BancoSementesResponse getBancoSementesById(@PathVariable Long id) {
		return new BancoSementesResponse(facade.findBancoSementesById(id));
	}
	
	@PatchMapping("bancoSementes/{id}")
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
	
	@DeleteMapping("bancoSementes/{id}")
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
	
	@GetMapping("bancoSementes/{id}/agricultores")
	public List<AgricultorResponse> getAllAgricultoresByBanco(@PathVariable long id) {
		return facade.getAllAgricultoresByBanco(id)
				.stream()
				.map(AgricultorResponse::new)
				.toList();
	}
	
	@GetMapping("bancoSementes/{id}/coordenadores")
	public List<GerenteResponse> getAllGerentesByBanco(@PathVariable long id) {
		return facade.getAllGerentesByBanco(id)
				.stream()
				.map(GerenteResponse::new)
				.toList();
	}
}
