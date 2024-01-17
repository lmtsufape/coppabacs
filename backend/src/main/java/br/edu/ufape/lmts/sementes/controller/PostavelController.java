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

import br.edu.ufape.lmts.sementes.controller.dto.request.PostavelRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.PostavelResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Postavel;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class PostavelController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("postavel")
	public List<PostavelResponse> getAllPostavel() {
		return facade.getAllPostavel()
			.stream()
			.map(PostavelResponse::new)
			.toList();
	}
	
	@PostMapping("postavel")
	public PostavelResponse createPostavel(@Valid @RequestBody PostavelRequest newObj) {
		return new PostavelResponse(facade.savePostavel(newObj.convertToEntity()));
	}
	
	@GetMapping("postavel/{id}")
	public PostavelResponse getPostavelById(@PathVariable Long id) {
		return new PostavelResponse(facade.findPostavelById(id));
	}
	
	@PatchMapping("postavel/{id}")
	public PostavelResponse updatePostavel(@PathVariable Long id, @Valid @RequestBody PostavelRequest obj) {
		try {
			//Postavel o = obj.convertToEntity();
			Postavel oldObject = facade.findPostavelById(id);

			TypeMap<PostavelRequest, Postavel> typeMapper = modelMapper
													.typeMap(PostavelRequest.class, Postavel.class)
													.addMappings(mapper -> mapper.skip(Postavel::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new PostavelResponse(facade.updatePostavel(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("postavel/{id}")
	public String deletePostavel(@PathVariable Long id) {
		try {
			facade.deletePostavel(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
