package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.repository.BancoSementesRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class BancoSementesService implements BancoSementesServiceInterface {
	@Autowired
	private BancoSementesRepository repository;

	public BancoSementes saveBancoSementes(BancoSementes newInstance) {
		return repository.save(newInstance);
	}

	public BancoSementes updateBancoSementes(BancoSementes transientObject) {
		findBancoSementesById(transientObject.getId());
		return repository.save(transientObject);
	}

	public BancoSementes findBancoSementesById(long id) {
		return repository.findByAtivoTrueAndId(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist BancoSementes with id = " + id));
	}

	public List<BancoSementes> getAllBancoSementes() {
		return repository.findByAtivoTrue();
	}

	public void deleteBancoSementes(BancoSementes persistentObject) {
		this.deleteBancoSementes(persistentObject.getId());
	}

	public void deleteBancoSementes(long id) {
		BancoSementes obj = findBancoSementesById(id);
		obj.setAtivo(false);
		repository.save(obj);
	}

	public Page<BancoSementes> findPageBancoSementes(Pageable pageRequest) {
		return repository.findByAtivoTrue(pageRequest);
	}

}