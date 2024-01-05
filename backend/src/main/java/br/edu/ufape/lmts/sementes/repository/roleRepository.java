package br.edu.ufape.lmts.sementes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Role;

@Repository
public interface roleRepository extends JpaRepository<Role, Long> {

	Role findByRole(TipoUsuario tipo);
}
