package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.RegioesAdaptacaoCultivoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.RegioesAdaptacaoCultivoResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
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
		try {
			return new RegioesAdaptacaoCultivoResponse(facade.findRegioesAdaptacaoCultivoById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "RegioesAdaptacaoCultivo " + id + " not found.");
		}
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
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("regioesAdaptacaoCultivo/{id}")
	public String deleteRegioesAdaptacaoCultivo(@PathVariable Long id) {
		try {
			facade.deleteRegioesAdaptacaoCultivo(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
