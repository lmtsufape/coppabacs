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

import br.edu.ufape.lmts.sementes.controller.dto.request.PublicacaoRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.PublicacaoResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Publicacao;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
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
		return new PublicacaoResponse(facade.findPublicacaoById(id));
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
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("publicacao/{id}")
	public String deletePublicacao(@PathVariable Long id) {
		try {
			facade.deletePublicacao(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
