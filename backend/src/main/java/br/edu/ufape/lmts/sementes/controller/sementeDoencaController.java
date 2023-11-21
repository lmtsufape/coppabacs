package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.sementeDoenca;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.sementeDoencaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.sementeDoencaResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class sementeDoencaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("sementeDoenca")
	public List<sementeDoencaResponse> getAllsementeDoenca() {
		return facade.getAllsementeDoenca()
			.stream()
			.map(sementeDoencaResponse::new)
			.toList();
	}
	
	@PostMapping("sementeDoenca")
	public sementeDoencaResponse createsementeDoenca(@Valid @RequestBody sementeDoencaRequest newObj) {
		return new sementeDoencaResponse(facade.savesementeDoenca(newObj.convertToEntity()));
	}
	
	@GetMapping("sementeDoenca/{id}")
	public sementeDoencaResponse getsementeDoencaById(@PathVariable Long id) {
		try {
			return new sementeDoencaResponse(facade.findsementeDoencaById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "sementeDoenca " + id + " not found.");
		}
	}
	
	@PatchMapping("sementeDoenca/{id}")
	public sementeDoencaResponse updatesementeDoenca(@PathVariable Long id, @Valid @RequestBody sementeDoencaRequest obj) {
		try {
			//sementeDoenca o = obj.convertToEntity();
			sementeDoenca oldObject = facade.findsementeDoencaById(id);

			TypeMap<sementeDoencaRequest, sementeDoenca> typeMapper = modelMapper
													.typeMap(sementeDoencaRequest.class, sementeDoenca.class)
													.addMappings(mapper -> mapper.skip(sementeDoenca::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new sementeDoencaResponse(facade.updatesementeDoenca(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("sementeDoenca/{id}")
	public String deletesementeDoenca(@PathVariable Long id) {
		try {
			facade.deletesementeDoenca(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
