package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.repository.CoppabacsRepository;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class CoppabacsService implements CoppabacsServiceInterface {

	@Autowired
	private CoppabacsRepository repository;

	@Transactional
	public Coppabacs saveCoppabacs(Coppabacs coppabacs) throws EmailExistsException {
		return repository.save(coppabacs);
	}

	public Coppabacs updateCoppabacs(Coppabacs coppabacs) {
		findCoppabacsById(coppabacs.getId());
		return repository.save(coppabacs);
	}

	public List<Coppabacs> getAllCoppabacs() {
		return repository.findByAtivoTrue();
	}

	public Coppabacs findCoppabacsById(long id) {
		return repository.findByAtivoTrueAndId(id)
				.orElseThrow(() -> new RuntimeException("It doesn't exist Coppabacs with id = " + id));
	}
	public Coppabacs findCoppabacsByEmail(String email) {
		return repository.findByAtivoTrueAndEmail(email).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Cooppabacs with Email = " + email));
	}
	@Transactional
	public void deleteCoppabacs(Coppabacs coppabacs) {
		this.deleteCoppabacs(coppabacs);
	}

	@Transactional
	public void deleteCoppabacs(long id) {
		Coppabacs obj = findCoppabacsById(id);
		obj.setAtivo(false);
		repository.save(obj);
	}

	public Page<Coppabacs> findPageCoppabacs(Pageable pageRequest) {
		return repository.findByAtivoTrue(pageRequest);
	}

}
