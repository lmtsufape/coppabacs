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

import br.edu.ufape.lmts.sementes.controller.dto.request.infraestruturaHidricaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.infraestruturaHidricaResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.infraestruturaHidrica;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class infraestruturaHidricaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("infraestruturaHidrica")
	public List<infraestruturaHidricaResponse> getAllinfraestruturaHidrica() {
		return facade.getAllinfraestruturaHidrica()
			.stream()
			.map(infraestruturaHidricaResponse::new)
			.toList();
	}
	
	@PostMapping("infraestruturaHidrica")
	public infraestruturaHidricaResponse createinfraestruturaHidrica(@Valid @RequestBody infraestruturaHidricaRequest newObj) {
		return new infraestruturaHidricaResponse(facade.saveinfraestruturaHidrica(newObj.convertToEntity()));
	}
	
	@GetMapping("infraestruturaHidrica/{id}")
	public infraestruturaHidricaResponse getinfraestruturaHidricaById(@PathVariable Long id) {
		return new infraestruturaHidricaResponse(facade.findinfraestruturaHidricaById(id));
	}
	
	@PatchMapping("infraestruturaHidrica/{id}")
	public infraestruturaHidricaResponse updateinfraestruturaHidrica(@PathVariable Long id, @Valid @RequestBody infraestruturaHidricaRequest obj) {
		try {
			//infraestruturaHidrica o = obj.convertToEntity();
			infraestruturaHidrica oldObject = facade.findinfraestruturaHidricaById(id);

			TypeMap<infraestruturaHidricaRequest, infraestruturaHidrica> typeMapper = modelMapper
													.typeMap(infraestruturaHidricaRequest.class, infraestruturaHidrica.class)
													.addMappings(mapper -> mapper.skip(infraestruturaHidrica::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new infraestruturaHidricaResponse(facade.updateinfraestruturaHidrica(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("infraestruturaHidrica/{id}")
	public String deleteinfraestruturaHidrica(@PathVariable Long id) {
		try {
			facade.deleteinfraestruturaHidrica(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
