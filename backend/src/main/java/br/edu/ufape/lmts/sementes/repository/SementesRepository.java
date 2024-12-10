package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.model.Sementes;

@Repository
public interface SementesRepository extends JpaRepository<Sementes, Long> {

	@Transactional(readOnly = true)
	public List<Sementes> findByAtivoTrueAndResponsavelTecnico(ResponsavelTecnico responsavelTecnico);

	@Transactional(readOnly = true)
	Page<Sementes> findByAtivoTrueAndNomeContainingOrAtivoTrueAndDescricaoContaining(String nome, String descricao,
			Pageable pageRequest);

	@Transactional(readOnly = true)
	List<Sementes> findByAtivoTrueAndNomeContainingOrAtivoTrueAndDescricaoContaining(String nome, String descricao);

	@Transactional(readOnly = true)
	public List<Sementes> findAllByAtivoTrueAndTabelaBancoSementesBancoSementes(BancoSementes bancoSementes);

	@Transactional(readOnly = true)
	Optional<Sementes> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	List<Sementes> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<Sementes> findByAtivoTrue(Pageable pageRequest);
}