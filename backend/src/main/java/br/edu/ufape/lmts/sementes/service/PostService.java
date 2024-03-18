package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Post;
import br.edu.ufape.lmts.sementes.repository.PostRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class PostService implements PostServiceInterface {
	@Autowired
	private PostRepository repository;

	@Transactional
	public Post savePost(Post newInstance) {
		return repository.save(newInstance);
	}

	public Post updatePost(Post transientObject) {
		return repository.save(transientObject);
	}

	public Post findPostById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Post with id = " + id));
	}

	public List<Post> getAllPost(){
		return repository.findAll();
	}

	public void deletePost(Post persistentObject){
		this.deletePost(persistentObject.getId());

	}

	public void deletePost(long id){
		Post obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Post with id = " + id));
		repository.delete(obj);
	}



}
