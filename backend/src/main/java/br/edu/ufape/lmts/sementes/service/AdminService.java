package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Admin;
import br.edu.ufape.lmts.sementes.repository.AdminRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class AdminService implements AdminServiceInterface {
	@Autowired
	private AdminRepository repository;

	public Admin saveAdmin(Admin newInstance) {
		return repository.save(newInstance);
	}

	public Admin updateAdmin(Admin transientObject) {
		return repository.save(transientObject);
	}

	public Admin findAdminById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Admin with id = " + id));
	}

	public List<Admin> getAllAdmin() {
		return repository.findAll();
	}

	public void deleteAdmin(Admin persistentObject) {
		this.deleteAdmin(persistentObject.getId());
	}

	public void deleteAdmin(long id) {
		Admin obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Admin with id = " + id));
		repository.delete(obj);
	}

	public Page<Admin> findPageAdmin(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}