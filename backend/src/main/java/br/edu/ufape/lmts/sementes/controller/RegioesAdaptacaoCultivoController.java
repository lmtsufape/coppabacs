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

import br.edu.ufape.lmts.sementes.controller.dto.request.RegioesAdaptacaoCultivoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.RegioesAdaptacaoCultivoResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class RegioesAdaptacaoCultivoController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("regioesAdaptacaoCultivo")
	public List<RegioesAdaptacaoCultivoResponse> getAllRegioesAdaptacaoCultivo() {
		return facade.getAllRegioesAdaptacaoCultivo()
			.stream()
			.map(RegioesAdaptacaoCultivoResponse::new)
			.toList();
	}
	
	@PostMapping("regioesAdaptacaoCultivo")
	public RegioesAdaptacaoCultivoResponse createRegioesAdaptacaoCultivo(@Valid @RequestBody RegioesAdaptacaoCultivoRequest newObj) {
		return new RegioesAdaptacaoCultivoResponse(facade.saveRegioesAdaptacaoCultivo(newObj.convertToEntity()));
	}
	
	@GetMapping("regioesAdaptacaoCultivo/{id}")
	public RegioesAdaptacaoCultivoResponse getRegioesAdaptacaoCultivoById(@PathVariable Long id) {
		return new RegioesAdaptacaoCultivoResponse(facade.findRegioesAdaptacaoCultivoById(id));
	}
	
	@PatchMapping("regioesAdaptacaoCultivo/{id}")
	public RegioesAdaptacaoCultivoResponse updateRegioesAdaptacaoCultivo(@PathVariable Long id, @Valid @RequestBody RegioesAdaptacaoCultivoRequest obj) {
		try {
			//RegioesAdaptacaoCultivo o = obj.convertToEntity();
			RegioesAdaptacaoCultivo oldObject = facade.findRegioesAdaptacaoCultivoById(id);

			TypeMap<RegioesAdaptacaoCultivoRequest, RegioesAdaptacaoCultivo> typeMapper = modelMapper
													.typeMap(RegioesAdaptacaoCultivoRequest.class, RegioesAdaptacaoCultivo.class)
													.addMappings(mapper -> mapper.skip(RegioesAdaptacaoCultivo::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new RegioesAdaptacaoCultivoResponse(facade.updateRegioesAdaptacaoCultivo(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("regioesAdaptacaoCultivo/{id}")
	public String deleteRegioesAdaptacaoCultivo(@PathVariable Long id) {
		try {
			facade.deleteRegioesAdaptacaoCultivo(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
