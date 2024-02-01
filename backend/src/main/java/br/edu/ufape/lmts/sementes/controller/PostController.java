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

import br.edu.ufape.lmts.sementes.controller.dto.request.PostRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.PostResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Post;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class PostController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;

	@GetMapping("post")
	public List<PostResponse> getAllPost() {
		return facade.getAllPost()
			.stream()
			.map(PostResponse::new)
			.toList();
	}

	@PostMapping("post")
	public PostResponse createPost(@Valid @RequestBody PostRequest newObj) {
		return new PostResponse(facade.savePost(newObj.convertToEntity()));
	}

	@GetMapping("post/{id}")
	public PostResponse getPostById(@PathVariable Long id) {
		return new PostResponse(facade.findPostById(id));
	}

	@PatchMapping("post/{id}")
	public PostResponse updatePost(@PathVariable Long id, @Valid @RequestBody PostRequest obj) {
		try {
			//Post o = obj.convertToEntity();
			Post oldObject = facade.findPostById(id);

			TypeMap<PostRequest, Post> typeMapper = modelMapper
													.typeMap(PostRequest.class, Post.class)
													.addMappings(mapper -> mapper.skip(Post::setId));


			typeMapper.map(obj, oldObject);
			return new PostResponse(facade.updatePost(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}

	}

	@DeleteMapping("post/{id}")
	public String deletePost(@PathVariable Long id) {
		try {
			facade.deletePost(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}

	}


}
