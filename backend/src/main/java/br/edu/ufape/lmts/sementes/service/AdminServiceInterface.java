package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Coppabacs;

public interface AdminServiceInterface {
	Coppabacs saveAdmin(Coppabacs o);
	Coppabacs findAdminById(long id);
	Coppabacs updateAdmin(Coppabacs u);
	void deleteAdmin(Coppabacs u);
	void deleteAdmin(long id);
	List<Coppabacs> getAllAdmin();
    
    

    
}