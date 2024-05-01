package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Post;

public interface PostServiceInterface {
	Post savePost(Post o);
	Post findPostById(long id);
	Post updatePost(Post u);
	void deletePost(Post u);
	void deletePost(long id);
	List<Post> getAllPost();
	Page<Post> findPagePost(Pageable pageRequest);

}
