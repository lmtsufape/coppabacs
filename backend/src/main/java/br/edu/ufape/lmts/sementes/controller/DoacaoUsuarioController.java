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

import br.edu.ufape.lmts.sementes.controller.dto.request.DoacaoUsuarioRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.DoacaoUsuarioResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class DoacaoUsuarioController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("doacaoUsuario")
	public List<DoacaoUsuarioResponse> getAllDoacaoUsuario() {
		return facade.getAllDoacaoUsuario()
			.stream()
			.map(DoacaoUsuarioResponse::new)
			.toList();
	}
	
	@GetMapping(value = "doacaoUsuario/page")
	public Page<DoacaoUsuarioResponse> getPageDoacaoUsuario(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<DoacaoUsuario> list = facade.findPageDoacaoUsuario(pageRequest);
		return list.map(DoacaoUsuarioResponse::new);
	}
	
	@PostMapping("doacaoUsuario")
	public DoacaoUsuarioResponse createDoacaoUsuario(@Valid @RequestBody DoacaoUsuarioRequest newObj) {
		return new DoacaoUsuarioResponse(facade.saveDoacaoUsuario(newObj.convertToEntity()));
	}
	
	@GetMapping("doacaoUsuario/{id}")
	public DoacaoUsuarioResponse getDoacaoUsuarioById(@PathVariable Long id) {
		return new DoacaoUsuarioResponse(facade.findDoacaoUsuarioById(id));
	}
	
	@PatchMapping("doacaoUsuario/{id}")
	public DoacaoUsuarioResponse updateDoacaoUsuario(@PathVariable Long id, @Valid @RequestBody DoacaoUsuarioRequest obj) {
		try {
			//DoacaoUsuario o = obj.convertToEntity();
			DoacaoUsuario oldObject = facade.findDoacaoUsuarioById(id);

			TypeMap<DoacaoUsuarioRequest, DoacaoUsuario> typeMapper = modelMapper
													.typeMap(DoacaoUsuarioRequest.class, DoacaoUsuario.class)
													.addMappings(mapper -> mapper.skip(DoacaoUsuario::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new DoacaoUsuarioResponse(facade.updateDoacaoUsuario(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("doacaoUsuario/{id}")
	public String deleteDoacaoUsuario(@PathVariable Long id) {
		try {
			facade.deleteDoacaoUsuario(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
