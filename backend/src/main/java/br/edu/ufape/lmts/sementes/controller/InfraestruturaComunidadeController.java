package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.InfraestruturaComunidadeRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.InfraestruturaComunidadeResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class InfraestruturaComunidadeController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("infraestruturaComunidade")
	public List<InfraestruturaComunidadeResponse> getAllInfraestruturaComunidade() {
		return facade.getAllInfraestruturaComunidade()
			.stream()
			.map(InfraestruturaComunidadeResponse::new)
			.toList();
	}
	
	@PostMapping("infraestruturaComunidade")
	public InfraestruturaComunidadeResponse createInfraestruturaComunidade(@Valid @RequestBody InfraestruturaComunidadeRequest newObj) {
		return new InfraestruturaComunidadeResponse(facade.saveInfraestruturaComunidade(newObj.convertToEntity()));
	}
	
	@GetMapping("infraestruturaComunidade/{id}")
	public InfraestruturaComunidadeResponse getInfraestruturaComunidadeById(@PathVariable Long id) {
		try {
			return new InfraestruturaComunidadeResponse(facade.findInfraestruturaComunidadeById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "InfraestruturaComunidade " + id + " not found.");
		}
	}
	
	@PatchMapping("infraestruturaComunidade/{id}")
	public InfraestruturaComunidadeResponse updateInfraestruturaComunidade(@PathVariable Long id, @Valid @RequestBody InfraestruturaComunidadeRequest obj) {
		try {
			//InfraestruturaComunidade o = obj.convertToEntity();
			InfraestruturaComunidade oldObject = facade.findInfraestruturaComunidadeById(id);

			TypeMap<InfraestruturaComunidadeRequest, InfraestruturaComunidade> typeMapper = modelMapper
													.typeMap(InfraestruturaComunidadeRequest.class, InfraestruturaComunidade.class)
													.addMappings(mapper -> mapper.skip(InfraestruturaComunidade::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new InfraestruturaComunidadeResponse(facade.updateInfraestruturaComunidade(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("infraestruturaComunidade/{id}")
	public String deleteInfraestruturaComunidade(@PathVariable Long id) {
		try {
			facade.deleteInfraestruturaComunidade(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
