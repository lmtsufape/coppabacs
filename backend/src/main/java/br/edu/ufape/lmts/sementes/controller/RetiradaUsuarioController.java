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

import br.edu.ufape.lmts.sementes.controller.dto.request.RetiradaUsuarioRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.RetiradaUsuarioResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class RetiradaUsuarioController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("retiradaUsuario")
	public List<RetiradaUsuarioResponse> getAllRetiradaUsuario() {
		return facade.getAllRetiradaUsuario()
			.stream()
			.map(RetiradaUsuarioResponse::new)
			.toList();
	}
	
	@GetMapping(value = "retiradaUsuario/page")
	public Page<RetiradaUsuarioResponse> getPageRetiradaUsuario(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<RetiradaUsuario> list = facade.findPageRetiradaUsuario(pageRequest);
		return list.map(RetiradaUsuarioResponse::new);
	}
	
	@PostMapping("retiradaUsuario")
	public RetiradaUsuarioResponse createRetiradaUsuario(@Valid @RequestBody RetiradaUsuarioRequest newObj) {
		return new RetiradaUsuarioResponse(facade.saveRetiradaUsuario(newObj.convertToEntity()));
	}
	
	@GetMapping("retiradaUsuario/{id}")
	public RetiradaUsuarioResponse getRetiradaUsuarioById(@PathVariable Long id) {
		return new RetiradaUsuarioResponse(facade.findRetiradaUsuarioById(id));
	}
	
	@PatchMapping("retiradaUsuario/{id}")
	public RetiradaUsuarioResponse updateRetiradaUsuario(@PathVariable Long id, @Valid @RequestBody RetiradaUsuarioRequest obj) {
		try {
			//RetiradaUsuario o = obj.convertToEntity();
			RetiradaUsuario oldObject = facade.findRetiradaUsuarioById(id);

			TypeMap<RetiradaUsuarioRequest, RetiradaUsuario> typeMapper = modelMapper
													.typeMap(RetiradaUsuarioRequest.class, RetiradaUsuario.class)
													.addMappings(mapper -> mapper.skip(RetiradaUsuario::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new RetiradaUsuarioResponse(facade.updateRetiradaUsuario(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("retiradaUsuario/{id}")
	public String deleteRetiradaUsuario(@PathVariable Long id) {
		try {
			facade.deleteRetiradaUsuario(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
