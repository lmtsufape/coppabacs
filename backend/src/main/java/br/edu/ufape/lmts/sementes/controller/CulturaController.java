package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Cultura;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.CulturaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.CulturaResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class CulturaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("cultura")
	public List<CulturaResponse> getAllCultura() {
		return facade.getAllCultura()
			.stream()
			.map(CulturaResponse::new)
			.toList();
	}
	
	@PostMapping("cultura")
	public CulturaResponse createCultura(@Valid @RequestBody CulturaRequest newObj) {
		return new CulturaResponse(facade.saveCultura(newObj.convertToEntity()));
	}
	
	@GetMapping("cultura/{id}")
	public CulturaResponse getCulturaById(@PathVariable Long id) {
		try {
			return new CulturaResponse(facade.findCulturaById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cultura " + id + " not found.");
		}
	}
	
	@PatchMapping("cultura/{id}")
	public CulturaResponse updateCultura(@PathVariable Long id, @Valid @RequestBody CulturaRequest obj) {
		try {
			//Cultura o = obj.convertToEntity();
			Cultura oldObject = facade.findCulturaById(id);

			TypeMap<CulturaRequest, Cultura> typeMapper = modelMapper
													.typeMap(CulturaRequest.class, Cultura.class)
													.addMappings(mapper -> mapper.skip(Cultura::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new CulturaResponse(facade.updateCultura(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("cultura/{id}")
	public String deleteCultura(@PathVariable Long id) {
		try {
			facade.deleteCultura(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
