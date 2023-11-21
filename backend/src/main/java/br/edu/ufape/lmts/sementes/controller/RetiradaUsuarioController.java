package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.RetiradaUsuarioRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.RetiradaUsuarioResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
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
	
	@PostMapping("retiradaUsuario")
	public RetiradaUsuarioResponse createRetiradaUsuario(@Valid @RequestBody RetiradaUsuarioRequest newObj) {
		return new RetiradaUsuarioResponse(facade.saveRetiradaUsuario(newObj.convertToEntity()));
	}
	
	@GetMapping("retiradaUsuario/{id}")
	public RetiradaUsuarioResponse getRetiradaUsuarioById(@PathVariable Long id) {
		try {
			return new RetiradaUsuarioResponse(facade.findRetiradaUsuarioById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "RetiradaUsuario " + id + " not found.");
		}
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
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("retiradaUsuario/{id}")
	public String deleteRetiradaUsuario(@PathVariable Long id) {
		try {
			facade.deleteRetiradaUsuario(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
