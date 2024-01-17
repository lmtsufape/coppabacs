package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Admin;

public interface AdminServiceInterface {
	Admin saveAdmin(Admin o);
	Admin findAdminById(Long id);
	Admin updateAdmin(Admin u);
	void deleteAdmin(Admin u);
	void deleteAdmin(long id);
	List<Admin> getAllAdmin();
    
    

    
}