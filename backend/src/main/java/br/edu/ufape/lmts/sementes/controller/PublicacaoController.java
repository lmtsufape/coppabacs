package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Publicacao;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.PublicacaoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.PublicacaoResponse;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class PublicacaoController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("publicacao")
	public List<PublicacaoResponse> getAllPublicacao() {
		return facade.getAllPublicacao()
			.stream()
			.map(PublicacaoResponse::new)
			.toList();
	}
	
	@PostMapping("publicacao")
	public PublicacaoResponse createPublicacao(@Valid @RequestBody PublicacaoRequest newObj) {
		return new PublicacaoResponse(facade.savePublicacao(newObj.convertToEntity()));
	}
	
	@GetMapping("publicacao/{id}")
	public PublicacaoResponse getPublicacaoById(@PathVariable Long id) {
		try {
			return new PublicacaoResponse(facade.findPublicacaoById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Publicacao " + id + " not found.");
		}
	}
	
	@PatchMapping("publicacao/{id}")
	public PublicacaoResponse updatePublicacao(@PathVariable Long id, @Valid @RequestBody PublicacaoRequest obj) {
		try {
			//Publicacao o = obj.convertToEntity();
			Publicacao oldObject = facade.findPublicacaoById(id);

			TypeMap<PublicacaoRequest, Publicacao> typeMapper = modelMapper
													.typeMap(PublicacaoRequest.class, Publicacao.class)
													.addMappings(mapper -> mapper.skip(Publicacao::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new PublicacaoResponse(facade.updatePublicacao(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("publicacao/{id}")
	public String deletePublicacao(@PathVariable Long id) {
		try {
			facade.deletePublicacao(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
