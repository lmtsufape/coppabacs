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

import br.edu.ufape.lmts.sementes.controller.dto.request.InfraestruturaComunidadeRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.InfraestruturaComunidadeResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
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
		return new InfraestruturaComunidadeResponse(facade.findInfraestruturaComunidadeById(id));
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
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("infraestruturaComunidade/{id}")
	public String deleteInfraestruturaComunidade(@PathVariable Long id) {
		try {
			facade.deleteInfraestruturaComunidade(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
