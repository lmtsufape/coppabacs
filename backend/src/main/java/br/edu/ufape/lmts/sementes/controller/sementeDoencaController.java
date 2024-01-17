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

import br.edu.ufape.lmts.sementes.controller.dto.request.sementeDoencaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.sementeDoencaResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.sementeDoenca;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


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
		return new sementeDoencaResponse(facade.findsementeDoencaById(id));
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
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("sementeDoenca/{id}")
	public String deletesementeDoenca(@PathVariable Long id) {
		try {
			facade.deletesementeDoenca(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
