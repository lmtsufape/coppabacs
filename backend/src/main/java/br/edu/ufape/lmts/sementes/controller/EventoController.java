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

import br.edu.ufape.lmts.sementes.controller.dto.request.EventoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.EventoResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Evento;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class EventoController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("evento")
	public List<EventoResponse> getAllEvento() {
		return facade.getAllEvento()
			.stream()
			.map(EventoResponse::new)
			.toList();
	}
	
	@PostMapping("evento")
	public EventoResponse createEvento(@Valid @RequestBody EventoRequest newObj) {
		return new EventoResponse(facade.saveEvento(newObj.convertToEntity()));
	}
	
	@GetMapping("evento/{id}")
	public EventoResponse getEventoById(@PathVariable Long id) {
		try {
			return new EventoResponse(facade.findEventoById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Evento " + id + " not found.");
		}
	}
	
	@PatchMapping("evento/{id}")
	public EventoResponse updateEvento(@PathVariable Long id, @Valid @RequestBody EventoRequest obj) {
		try {
			//Evento o = obj.convertToEntity();
			Evento oldObject = facade.findEventoById(id);

			TypeMap<EventoRequest, Evento> typeMapper = modelMapper
													.typeMap(EventoRequest.class, Evento.class)
													.addMappings(mapper -> mapper.skip(Evento::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new EventoResponse(facade.updateEvento(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("evento/{id}")
	public String deleteEvento(@PathVariable Long id) {
		try {
			facade.deleteEvento(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
