package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.AgricultorRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.AgricultorUpdateRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.SementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AgricultorResponse;
import br.edu.ufape.lmts.sementes.controller.exceptions.ConflictingFieldsException;
import br.edu.ufape.lmts.sementes.controller.exceptions.FieldMessage;
import br.edu.ufape.lmts.sementes.controller.validation.ValidateUsuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;

@RestController
@Validated
@RequestMapping("${prefix.url}")
public class AgricultorController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private ValidateUsuario validateUsuario;

	@GetMapping("agricultor")
	public List<AgricultorResponse> getAllAgricultor() {
		return facade.getAllAgricultor().stream().map(AgricultorResponse::new).toList();

	}

	@GetMapping("agricultor/usuarios")
	public List<AgricultorResponse> getAllAgricultorUsuario() {
		return facade.getAllAgricultorUsuario().stream().map(AgricultorResponse::new).toList();
	}

	@GetMapping(value = "agricultor/page")
	public Page<AgricultorResponse> getPageAgricultor(@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "24") Integer linesPerPage, @RequestParam(defaultValue = "id") String orderBy,
			@RequestParam(defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Agricultor> list = facade.findPageAgricultor(pageRequest);
		return list.map(AgricultorResponse::new);
	}

	@PostMapping("agricultor/usuario")
	public AgricultorResponse createAgricultorUsuario(@Valid @RequestBody AgricultorRequest newObj)
			throws EmailExistsException {
		Agricultor agricultor = newObj.convertToEntity();
		return new AgricultorResponse(facade.saveAgricultorUsuario(agricultor));
	}

	@PostMapping("agricultor/{id}/adicionar-sementes")
	public AgricultorResponse addSementesAgricultor(@Valid @RequestBody List<SementesRequest> sementes,
			@PathVariable Long id) {
		return new AgricultorResponse(
				facade.addSementeAgricultor(sementes.stream().map(SementesRequest::convertToEntity).toList(), id));
	}

	@PostMapping("agricultor/{id}/remover-sementes")
	public AgricultorResponse removeSementesAgricultor(@Valid @RequestBody List<SementesRequest> sementes,
			@PathVariable Long id) {
		return new AgricultorResponse(
				facade.removeSementeAgricultor(sementes.stream().map(SementesRequest::convertToEntity).toList(), id));
	}

	@PostMapping("agricultor")
	public AgricultorResponse createAgricultor(@Valid @RequestBody AgricultorRequest newObj)
			throws EmailExistsException {
		Agricultor agricultor = newObj.convertToEntity();
		return new AgricultorResponse(facade.saveAgricultor(agricultor));
	}

	@GetMapping("agricultor/{id}")
	public AgricultorResponse getAgricultorById(@PathVariable Long id) {
		return new AgricultorResponse(facade.findAgricultorById(id));
	}

	@GetMapping("agricultor/e/{email}")
	public AgricultorResponse getAgricultorByEmail(@PathVariable String email) {
		return new AgricultorResponse(facade.findAgricultorByEmail(email));
	}

	@GetMapping("agricultor/cpf/{cpf}")
	public AgricultorResponse getAgricultorByCpf(@PathVariable String cpf) {
		return new AgricultorResponse(facade.findAgricultorByCpf(cpf));
	}

	@PutMapping("agricultor/{id}")
	public AgricultorResponse updateAgricultor(@PathVariable Long id, @Valid @RequestBody AgricultorUpdateRequest obj) {
		List<FieldMessage> listErrors = validateUsuario.validateUsuarioUpdate(obj, id);
		if (!listErrors.isEmpty())
			throw new ConflictingFieldsException(listErrors);
		
		try {
			Agricultor oldObject = facade.findAgricultorById(id);
			modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
			TypeMap<AgricultorUpdateRequest, Agricultor> typeMapper = modelMapper
					.typeMap(AgricultorUpdateRequest.class, Agricultor.class)
					.addMappings(mapper -> mapper.skip(Agricultor::setId));

			typeMapper.map(obj, oldObject);
			return new AgricultorResponse(facade.updateAgricultor(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException)) {
				e.printStackTrace();
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());				
			} else
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

	@PreAuthorize("hasRole('COPPABACS') || hasRole('GERENTE')")
	@DeleteMapping("agricultor/recusar/{id}")
	public ResponseEntity<Void> refuseAgricultor(@PathVariable long id) {
		facade.refuseAgricultor(id);
		return ResponseEntity.ok().build();
	}
}
