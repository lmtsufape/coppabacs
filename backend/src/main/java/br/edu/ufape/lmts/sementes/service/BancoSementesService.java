package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return repository.save(transientObject);
	}

	public BancoSementes findBancoSementesById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist BancoSementes with id = " + id));
	}

	public List<BancoSementes> getAllBancoSementes(){
		return repository.findAll();
	}

	public void deleteBancoSementes(BancoSementes persistentObject){
		this.deleteBancoSementes(persistentObject.getId());
		
	}
	
	public void deleteBancoSementes(long id){
		BancoSementes obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist BancoSementes with id = " + id));
		repository.delete(obj);
	}
}