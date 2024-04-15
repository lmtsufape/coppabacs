package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.AgricultorRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AgricultorResponse;
import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/", allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/")
public class AgricultorController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;

	@GetMapping("agricultor")
	public List<AgricultorResponse> getAllAgricultor() {
		return facade.getAllAgricultor()
			.stream()
			.map(AgricultorResponse::new)
			.toList();
	}
	
	@GetMapping("agricultor/usuarios")
	public List<AgricultorResponse> getAllAgricultorUsuario() {
		return facade.getAllAgricultorUsuario()
			.stream()
			.map(AgricultorResponse::new)
			.toList();
	}

	@PostMapping("agricultor/usuario")
	public AgricultorResponse createAgricultorUsuario(@Valid @RequestBody AgricultorRequest newObj) throws EmailExistsException {
		Agricultor agricultor = newObj.convertToEntity();
		return new AgricultorResponse(facade.saveAgricultorUsuario(agricultor));
	}
	
	@PreAuthorize("hasRole('COPPABACS') or hasRole('GERENTE')")
	@PostMapping("agricultor")
	public AgricultorResponse createAgricultor(@Valid @RequestBody AgricultorRequest newObj) throws EmailExistsException {
		Agricultor agricultor = newObj.convertToEntity();
		return new AgricultorResponse(facade.saveAgricultor(agricultor));
	}

	@GetMapping("agricultor/{id}")
	public AgricultorResponse getAgricultorById(@PathVariable Long id) {
		return new AgricultorResponse(facade.findAgricultorById(id));
	}

	@PutMapping("agricultor/{id}")
	public AgricultorResponse updateAgricultor(@PathVariable Long id, @Valid @RequestBody AgricultorRequest obj) {
		try {
			Agricultor oldObject = facade.findAgricultorById(id);
			modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
			TypeMap<AgricultorRequest, Agricultor> typeMapper = modelMapper
													.typeMap(AgricultorRequest.class, Agricultor.class)
													.addMappings(mapper -> mapper.skip(Agricultor::setId));


			typeMapper.map(obj, oldObject);
			return new AgricultorResponse(facade.updateAgricultor(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}

	}

	@DeleteMapping("agricultor/{id}")
	public String deleteAgricultor(@PathVariable Long id) {
		try {
			facade.deleteAgricultor(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}

	}

	@PreAuthorize("hasRole('COPPABACS')")
	@PatchMapping("agricultor/validar/{id}")
	public ResponseEntity<Void> validateAgricultor(@PathVariable long id) {
		facade.validateAgricultor(id);
		return ResponseEntity.ok().build();
	}
}
