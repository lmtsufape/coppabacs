package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;

public interface ResponsavelTecnicoServiceInterface {
	ResponsavelTecnico saveResponsavelTecnico(ResponsavelTecnico o);
	ResponsavelTecnico findResponsavelTecnicoById(long id);
	ResponsavelTecnico findResponsavelTecnicoByCpf(String cpf);
	ResponsavelTecnico updateResponsavelTecnico(ResponsavelTecnico u);
	void deleteResponsavelTecnico(ResponsavelTecnico u);
	void deleteResponsavelTecnico(long id);
	List<ResponsavelTecnico> getAllResponsavelTecnico();
	Page<ResponsavelTecnico> findPageResponsavelTecnico(Pageable pageRequest);
}
