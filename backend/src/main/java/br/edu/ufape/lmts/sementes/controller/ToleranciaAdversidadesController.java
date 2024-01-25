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

import br.edu.ufape.lmts.sementes.controller.dto.request.ToleranciaAdversidadesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ToleranciaAdversidadesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class ToleranciaAdversidadesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("toleranciaAdversidades")
	public List<ToleranciaAdversidadesResponse> getAllToleranciaAdversidades() {
		return facade.getAllToleranciaAdversidades()
			.stream()
			.map(ToleranciaAdversidadesResponse::new)
			.toList();
	}
	
	@PostMapping("toleranciaAdversidades")
	public ToleranciaAdversidadesResponse createToleranciaAdversidades(@Valid @RequestBody ToleranciaAdversidadesRequest newObj) {
		return new ToleranciaAdversidadesResponse(facade.saveToleranciaAdversidades(newObj.convertToEntity()));
	}
	
	@GetMapping("toleranciaAdversidades/{id}")
	public ToleranciaAdversidadesResponse getToleranciaAdversidadesById(@PathVariable Long id) {
		return new ToleranciaAdversidadesResponse(facade.findToleranciaAdversidadesById(id));
	}
	
	@PatchMapping("toleranciaAdversidades/{id}")
	public ToleranciaAdversidadesResponse updateToleranciaAdversidades(@PathVariable Long id, @Valid @RequestBody ToleranciaAdversidadesRequest obj) {
		try {
			//ToleranciaAdversidades o = obj.convertToEntity();
			ToleranciaAdversidades oldObject = facade.findToleranciaAdversidadesById(id);

			TypeMap<ToleranciaAdversidadesRequest, ToleranciaAdversidades> typeMapper = modelMapper
													.typeMap(ToleranciaAdversidadesRequest.class, ToleranciaAdversidades.class)
													.addMappings(mapper -> mapper.skip(ToleranciaAdversidades::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ToleranciaAdversidadesResponse(facade.updateToleranciaAdversidades(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("toleranciaAdversidades/{id}")
	public String deleteToleranciaAdversidades(@PathVariable Long id) {
		try {
			facade.deleteToleranciaAdversidades(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
