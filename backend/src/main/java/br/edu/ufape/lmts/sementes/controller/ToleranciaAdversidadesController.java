package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.ToleranciaAdversidadesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ToleranciaAdversidadesResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
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
		try {
			return new ToleranciaAdversidadesResponse(facade.findToleranciaAdversidadesById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ToleranciaAdversidades " + id + " not found.");
		}
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
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("toleranciaAdversidades/{id}")
	public String deleteToleranciaAdversidades(@PathVariable Long id) {
		try {
			facade.deleteToleranciaAdversidades(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
