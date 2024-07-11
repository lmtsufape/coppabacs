package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;


public interface CoppabacsServiceInterface {
	
	Coppabacs saveCoppabacs(Coppabacs o) throws EmailExistsException;
	Coppabacs findCoppabacsById(long id);
	Coppabacs updateCoppabacs(Coppabacs o);
	Coppabacs findCoppabacsByEmail(String email);
	Coppabacs findCoppabacsByCpf(String cpf);
	void deleteCoppabacs(Coppabacs o);
	void deleteCoppabacs(long id);
	List<Coppabacs> getAllCoppabacs();
	Page<Coppabacs> findPageCoppabacs(Pageable pageRequest);
}
