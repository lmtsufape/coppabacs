package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.PostRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.PostResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Post;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("${prefix.url}")
public class PostController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;

	@GetMapping("post")
	@PreAuthorize("permitAll()")
	public List<PostResponse> getAllPost() {
		return facade.getAllPost().stream().map(PostResponse::new).toList();
	}
	
	@GetMapping("post/public")
	public List<PostResponse> getVisiblePost() {
		return facade.getVisiblePost().stream().map(PostResponse::new).toList();
	}

	@GetMapping(value = "post/page")
	@PreAuthorize("permitAll()")
	public Page<PostResponse> getPagePost(@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Post> list = facade.findPagePost(pageRequest);
		return list.map(PostResponse::new);
	}
	
	@GetMapping(value = "post/page/public")
	public Page<PostResponse> getPageVisiblePost(@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Post> list = facade.findPageVisiblePost(pageRequest);
		return list.map(PostResponse::new);
	}

	@PostMapping("post")
	@PreAuthorize("hasRole('ADMIN') or hasRole('COPPABACS')")
	public PostResponse createPost(@Valid @RequestBody PostRequest newObj) {
		return new PostResponse(facade.savePost(newObj.convertToEntity()));
	}

	@GetMapping("post/{id}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('COPPABACS')")
	public PostResponse getPostById(@PathVariable Long id) {
		return new PostResponse(facade.findPostById(id));
	}
	
	@GetMapping("post/public/{id}")
	public PostResponse getVisiblePostById(@PathVariable Long id) {
		return new PostResponse(facade.findVisiblePostById(id));
	}

	@PatchMapping("post/{id}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('COPPABACS')")
	public PostResponse updatePost(@PathVariable Long id, @Valid @RequestBody PostRequest obj) {
		try {
			//Post o = obj.convertToEntity();
			Post oldObject = facade.findPostById(id);

			TypeMap<PostRequest, Post> typeMapper = modelMapper
													.typeMap(PostRequest.class, Post.class)
													.addMappings(mapper -> mapper.skip(Post::setId))
													.addMappings(mapper -> mapper.skip(Post::setData))
													.addMappings(mapper -> mapper.skip(Post::setAutor));
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
	@PreAuthorize("hasRole('ADMIN') or hasRole('COPPABACS')")
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
