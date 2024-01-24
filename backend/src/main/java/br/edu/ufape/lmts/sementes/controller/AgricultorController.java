package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

import br.edu.ufape.lmts.sementes.controller.dto.request.AgricultorRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AgricultorResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:3000/" )
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

//	@PostMapping(value = "agricultor", consumes = MediaType.APPLICATION_JSON_VALUE,
//	        produces = MediaType.APPLICATION_JSON_VALUE)
	@PostMapping("agricultor")
	public AgricultorResponse createAgricultor(@Valid @RequestBody AgricultorRequest newObj) throws EmailExistsException {
		return new AgricultorResponse(facade.saveAgricultor(newObj.convertToEntity()));
	}

	@GetMapping("agricultor/{id}")
	public AgricultorResponse getAgricultorById(@PathVariable Long id) {
		return new AgricultorResponse(facade.findAgricultorById(id));
	}

	@PatchMapping("agricultor/{id}")
	public AgricultorResponse updateAgricultor(@PathVariable Long id, @Valid @RequestBody AgricultorRequest obj) {
		try {
			//Agricultor o = obj.convertToEntity();
			Agricultor oldObject = facade.findAgricultorById(id);

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
	@PreAuthorize("hasRole('GERENTE', 'COPPABACS')")
	@PatchMapping("validar/{id}")
	public ResponseEntity validateAgricultor(@PathVariable long id) {
		facade.validateAgricultor(id);
		return ResponseEntity.status(HttpStatus.OK).build();
		
	}


}
