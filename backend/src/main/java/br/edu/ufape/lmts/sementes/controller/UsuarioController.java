package br.edu.ufape.lmts.sementes.controller;

import java.sql.SQLOutput;
import java.util.List;

import com.sun.source.util.SourcePositions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.UsuarioRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.UsuarioResponse;

import javax.print.attribute.standard.Media;


@CrossOrigin (origins = "http://localhost:8081" )
@RestController
@RequestMapping("/api/v1/")
public class UsuarioController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("usuario")
	public List<UsuarioResponse> getAllUsuario() {
		return facade.getAllUsuario()
			.stream()
			.map(UsuarioResponse::new)
			.toList();
	}
	
	@PostMapping("usuario")
	public UsuarioResponse createUsuario(@Valid @RequestBody UsuarioRequest newObj) {
		return new UsuarioResponse(facade.saveUsuario(newObj.convertToEntity()));
	}
	
	@GetMapping("usuario/{id}")
	public UsuarioResponse getUsuarioById(@PathVariable Long id) {
		try {
			return new UsuarioResponse(facade.findUsuarioById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario " + id + " not found.");
		}
	}
	
	@PatchMapping("usuario/{id}")
	public UsuarioResponse updateUsuario(@PathVariable Long id, @Valid @RequestBody UsuarioRequest obj) {
		try {
			//Usuario o = obj.convertToEntity();
			Usuario oldObject = facade.findUsuarioById(id);

			TypeMap<UsuarioRequest, Usuario> typeMapper = modelMapper
													.typeMap(UsuarioRequest.class, Usuario.class)
													.addMappings(mapper -> mapper.skip(Usuario::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new UsuarioResponse(facade.updateUsuario(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("usuario/{id}")
	public String deleteUsuario(@PathVariable Long id) {
		try {
			facade.deleteUsuario(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
