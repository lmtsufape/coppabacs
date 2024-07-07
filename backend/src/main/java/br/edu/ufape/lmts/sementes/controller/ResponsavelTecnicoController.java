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

import br.edu.ufape.lmts.sementes.controller.dto.request.ResponsavelTecnicoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.ResponsavelTecnicoResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


 @RestController
@RequestMapping("/api/v1/")
public class ResponsavelTecnicoController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("responsavel-tecnico")
	public List<ResponsavelTecnicoResponse> getAllResponsavelTecnico() {
		return facade.getAllResponsavelTecnico()
			.stream()
			.map(ResponsavelTecnicoResponse::new)
			.toList();
	}
	
	@GetMapping(value = "responsavel-tecnico/page")
	public Page<ResponsavelTecnicoResponse> getPageResponsavelTecnico(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<ResponsavelTecnico> list = facade.findPageResponsavelTecnico(pageRequest);
		return list.map(ResponsavelTecnicoResponse::new);
	}
	
	@PostMapping("responsavel-tecnico")
	public ResponsavelTecnicoResponse createResponsavelTecnico(@Valid @RequestBody ResponsavelTecnicoRequest newObj) {
		return new ResponsavelTecnicoResponse(facade.saveResponsavelTecnico(newObj.convertToEntity()));
	}
	
	@GetMapping("responsavel-tecnico/{id}")
	public ResponsavelTecnicoResponse getResponsavelTecnicoById(@PathVariable Long id) {
		return new ResponsavelTecnicoResponse(facade.findResponsavelTecnicoById(id));
	}
	
	@GetMapping("responsavel-tecnico/sementes/{id}")
	public ResponsavelTecnicoResponse getResponsavelTecnicoBySementesId(@PathVariable Long id) {
		return new ResponsavelTecnicoResponse(facade.findResponsavelTecnicoBySementesId(id));
	}
	
	@PatchMapping("responsavel-tecnico/{id}")
	public ResponsavelTecnicoResponse updateResponsavelTecnico(@PathVariable Long id, @Valid @RequestBody ResponsavelTecnicoRequest obj) {
		try {
			//ResponsavelTecnico o = obj.convertToEntity();
			ResponsavelTecnico oldObject = facade.findResponsavelTecnicoById(id);

			TypeMap<ResponsavelTecnicoRequest, ResponsavelTecnico> typeMapper = modelMapper
													.typeMap(ResponsavelTecnicoRequest.class, ResponsavelTecnico.class)
													.addMappings(mapper -> mapper.skip(ResponsavelTecnico::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new ResponsavelTecnicoResponse(facade.updateResponsavelTecnico(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("responsavel-tecnico/{id}")
	public String deleteResponsavelTecnico(@PathVariable Long id) {
		try {
			facade.deleteResponsavelTecnico(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
