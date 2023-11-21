package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Doenca;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.DoencaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.DoencaResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class DoencaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("doenca")
	public List<DoencaResponse> getAllDoenca() {
		return facade.getAllDoenca()
			.stream()
			.map(DoencaResponse::new)
			.toList();
	}
	
	@PostMapping("doenca")
	public DoencaResponse createDoenca(@Valid @RequestBody DoencaRequest newObj) {
		return new DoencaResponse(facade.saveDoenca(newObj.convertToEntity()));
	}
	
	@GetMapping("doenca/{id}")
	public DoencaResponse getDoencaById(@PathVariable Long id) {
		try {
			return new DoencaResponse(facade.findDoencaById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Doenca " + id + " not found.");
		}
	}
	
	@PatchMapping("doenca/{id}")
	public DoencaResponse updateDoenca(@PathVariable Long id, @Valid @RequestBody DoencaRequest obj) {
		try {
			//Doenca o = obj.convertToEntity();
			Doenca oldObject = facade.findDoencaById(id);

			TypeMap<DoencaRequest, Doenca> typeMapper = modelMapper
													.typeMap(DoencaRequest.class, Doenca.class)
													.addMappings(mapper -> mapper.skip(Doenca::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new DoencaResponse(facade.updateDoenca(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("doenca/{id}")
	public String deleteDoenca(@PathVariable Long id) {
		try {
			facade.deleteDoenca(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
