package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

	@Transactional(readOnly = true)
	Optional<Post> findByVisibilidadeTrueAndId(long id);

	@Transactional(readOnly = true)
	List<Post> findByVisibilidadeTrue();

	@Transactional(readOnly = true)
	Page<Post> findByVisibilidadeTrue(Pageable pageRequest);
}
