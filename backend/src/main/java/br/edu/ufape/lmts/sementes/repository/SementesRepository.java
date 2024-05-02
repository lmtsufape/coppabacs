package br.edu.ufape.lmts.sementes.repository;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.BancoSementes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.model.Sementes;

@Repository
public interface SementesRepository extends JpaRepository<Sementes, Long> {

	@Transactional(readOnly = true)
	public List<Sementes> findByResponsavelTecnico(ResponsavelTecnico responsavelTecnico);
	
	@Transactional(readOnly = true)
	Page<Sementes> findByNomeContainingOrDescricaoContaining(String nome, String descricao, Pageable pageRequest);
	
	@Transactional(readOnly = true)
	List<Sementes> findByNomeContainingOrDescricaoContaining(String nome, String descricao);

	@Transactional(readOnly = true)
	public List<Sementes> findAllByTabelaBancoSementesBancoSementes(BancoSementes bancoSementes);
}