package br.edu.ufape.lmts.sementes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;

@Repository
public interface DoacaoUsuarioRepository extends JpaRepository<DoacaoUsuario, Long> {

	@Transactional(readOnly = true)
	List<DoacaoUsuario> findByBancoSementes(BancoSementes bancoSementes);

}