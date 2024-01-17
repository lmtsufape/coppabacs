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

import br.edu.ufape.lmts.sementes.controller.dto.request.FinalidadeRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.FinalidadeResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Finalidade;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class FinalidadeController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("finalidade")
	public List<FinalidadeResponse> getAllFinalidade() {
		return facade.getAllFinalidade()
			.stream()
			.map(FinalidadeResponse::new)
			.toList();
	}
	
	@PostMapping("finalidade")
	public FinalidadeResponse createFinalidade(@Valid @RequestBody FinalidadeRequest newObj) {
		return new FinalidadeResponse(facade.saveFinalidade(newObj.convertToEntity()));
	}
	
	@GetMapping("finalidade/{id}")
	public FinalidadeResponse getFinalidadeById(@PathVariable Long id) {
		return new FinalidadeResponse(facade.findFinalidadeById(id));
	}
	
	@PatchMapping("finalidade/{id}")
	public FinalidadeResponse updateFinalidade(@PathVariable Long id, @Valid @RequestBody FinalidadeRequest obj) {
		try {
			//Finalidade o = obj.convertToEntity();
			Finalidade oldObject = facade.findFinalidadeById(id);

			TypeMap<FinalidadeRequest, Finalidade> typeMapper = modelMapper
													.typeMap(FinalidadeRequest.class, Finalidade.class)
													.addMappings(mapper -> mapper.skip(Finalidade::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new FinalidadeResponse(facade.updateFinalidade(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("finalidade/{id}")
	public String deleteFinalidade(@PathVariable Long id) {
		try {
			facade.deleteFinalidade(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
