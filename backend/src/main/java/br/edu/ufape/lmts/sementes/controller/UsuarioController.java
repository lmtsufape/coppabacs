package br.edu.ufape.lmts.sementes.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.Conditions;
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

import br.edu.ufape.lmts.sementes.controller.dto.request.UsuarioRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.UsuarioUpdateRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.UsuarioResponse;
import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081" )
@Hidden
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
	public UsuarioResponse createUsuario(@Valid @RequestBody UsuarioRequest newObj) throws EmailExistsException {
		return new UsuarioResponse(facade.saveUsuario(newObj.convertToEntity()));
	}
	
	@GetMapping("usuario/{id}")
	public UsuarioResponse getUsuarioById(@PathVariable Long id) {
		return new UsuarioResponse(facade.findUsuarioById(id));
	}
	
	@PatchMapping("usuario/{id}")
	public UsuarioResponse updateUsuario(@PathVariable Long id, @Valid @RequestBody UsuarioUpdateRequest obj) {
		try {
			Usuario oldObject = facade.findUsuarioById(id);
			modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
			TypeMap<UsuarioUpdateRequest, Usuario> typeMapper = modelMapper
													.typeMap(UsuarioUpdateRequest.class, Usuario.class)
													.addMappings(mapper -> mapper.skip(Usuario::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new UsuarioResponse(facade.updateUsuario(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("usuario/{id}")
	public String deleteUsuario(@PathVariable Long id) {
		try {
			facade.deleteUsuario(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@GetMapping("usuarios/solicitacoes")
	public List<UsuarioResponse> filterUsuariosComRoleUsuario() {
	    return facade.getAllUsuario()
	            .stream()
	            .filter(usuario -> usuario.getRoles().contains(TipoUsuario.USUARIO))
	            .map(UsuarioResponse::new)
	            .collect(Collectors.toList());
	}

}
