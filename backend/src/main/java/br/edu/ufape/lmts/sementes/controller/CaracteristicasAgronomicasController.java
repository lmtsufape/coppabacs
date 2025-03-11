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

import br.edu.ufape.lmts.sementes.controller.dto.request.CaracteristicasAgronomicasRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.CaracteristicasAgronomicasResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@Hidden
@RestController
@RequestMapping("${prefix.url}")
public class CaracteristicasAgronomicasController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("caracteristicasAgronomicas")
	public List<CaracteristicasAgronomicasResponse> getAllCaracteristicasAgronomicas() {
		return facade.getAllCaracteristicasAgronomicas()
			.stream()
			.map(CaracteristicasAgronomicasResponse::new)
			.toList();
	}
	
	@GetMapping(value = "caracteristicasAgronomicas/page")
	public Page<CaracteristicasAgronomicasResponse> getPageCaracteristicasAgronomicas(
			@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "24") Integer linesPerPage,
			@RequestParam(defaultValue = "id") String orderBy,
			@RequestParam(defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<CaracteristicasAgronomicas> list = facade.findPageCaracteristicasAgronomicas(pageRequest);
		return list.map(CaracteristicasAgronomicasResponse::new);
	}
	
	@PostMapping("caracteristicasAgronomicas")
	public CaracteristicasAgronomicasResponse createCaracteristicasAgronomicas(@Valid @RequestBody CaracteristicasAgronomicasRequest newObj) {
		return new CaracteristicasAgronomicasResponse(facade.saveCaracteristicasAgronomicas(newObj.convertToEntity()));
	}
	
	@GetMapping("caracteristicasAgronomicas/{id}")
	public CaracteristicasAgronomicasResponse getCaracteristicasAgronomicasById(@PathVariable Long id) {
		return new CaracteristicasAgronomicasResponse(facade.findCaracteristicasAgronomicasById(id));
	}
	
	@PatchMapping("caracteristicasAgronomicas/{id}")
	public CaracteristicasAgronomicasResponse updateCaracteristicasAgronomicas(@PathVariable Long id, @Valid @RequestBody CaracteristicasAgronomicasRequest obj) {
		try {
			//CaracteristicasAgronomicas o = obj.convertToEntity();
			CaracteristicasAgronomicas oldObject = facade.findCaracteristicasAgronomicasById(id);

			TypeMap<CaracteristicasAgronomicasRequest, CaracteristicasAgronomicas> typeMapper = modelMapper
													.typeMap(CaracteristicasAgronomicasRequest.class, CaracteristicasAgronomicas.class)
													.addMappings(mapper -> mapper.skip(CaracteristicasAgronomicas::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new CaracteristicasAgronomicasResponse(facade.updateCaracteristicasAgronomicas(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("caracteristicasAgronomicas/{id}")
	public String deleteCaracteristicasAgronomicas(@PathVariable Long id) {
		try {
			facade.deleteCaracteristicasAgronomicas(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
