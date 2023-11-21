package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.TransacaoGenericaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.TransacaoGenericaResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class TransacaoGenericaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("transacaoGenerica")
	public List<TransacaoGenericaResponse> getAllTransacaoGenerica() {
		return facade.getAllTransacaoGenerica()
			.stream()
			.map(TransacaoGenericaResponse::new)
			.toList();
	}
	
	@PostMapping("transacaoGenerica")
	public TransacaoGenericaResponse createTransacaoGenerica(@Valid @RequestBody TransacaoGenericaRequest newObj) {
		return new TransacaoGenericaResponse(facade.saveTransacaoGenerica(newObj.convertToEntity()));
	}
	
	@GetMapping("transacaoGenerica/{id}")
	public TransacaoGenericaResponse getTransacaoGenericaById(@PathVariable Long id) {
		try {
			return new TransacaoGenericaResponse(facade.findTransacaoGenericaById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "TransacaoGenerica " + id + " not found.");
		}
	}
	
	@PatchMapping("transacaoGenerica/{id}")
	public TransacaoGenericaResponse updateTransacaoGenerica(@PathVariable Long id, @Valid @RequestBody TransacaoGenericaRequest obj) {
		try {
			//TransacaoGenerica o = obj.convertToEntity();
			TransacaoGenerica oldObject = facade.findTransacaoGenericaById(id);

			TypeMap<TransacaoGenericaRequest, TransacaoGenerica> typeMapper = modelMapper
													.typeMap(TransacaoGenericaRequest.class, TransacaoGenerica.class)
													.addMappings(mapper -> mapper.skip(TransacaoGenerica::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new TransacaoGenericaResponse(facade.updateTransacaoGenerica(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("transacaoGenerica/{id}")
	public String deleteTransacaoGenerica(@PathVariable Long id) {
		try {
			facade.deleteTransacaoGenerica(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
