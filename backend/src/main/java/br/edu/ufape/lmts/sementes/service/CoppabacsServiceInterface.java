package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;


public interface CoppabacsServiceInterface {
	
	Coppabacs saveCoppabacs(Coppabacs o) throws EmailExistsException;
	Coppabacs findCoppabacsbyId(long id);
	Coppabacs updateCoppabacs(Coppabacs o);
	void deleteCoppabacs(Coppabacs o);
	void deleteCoppabacs(long id);
	List<Coppabacs> getAllCoppabacs();

}
