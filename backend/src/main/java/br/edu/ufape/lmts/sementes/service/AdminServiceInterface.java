package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Admin;

public interface AdminServiceInterface {
	Admin saveAdmin(Admin o);
	Admin findAdminById(long id);
	Admin findAdminByCpf(String cpf);
	Admin updateAdmin(Admin u);
	void deleteAdmin(Admin u);
	void deleteAdmin(long id);
	List<Admin> getAllAdmin();
	Page<Admin> findPageAdmin(Pageable pageRequest);
}