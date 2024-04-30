package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;
import br.edu.ufape.lmts.sementes.repository.RegioesAdaptacaoCultivoRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class RegioesAdaptacaoCultivoService implements RegioesAdaptacaoCultivoServiceInterface {
	@Autowired
	private RegioesAdaptacaoCultivoRepository repository;


	public RegioesAdaptacaoCultivo saveRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo newInstance) {
		return repository.save(newInstance);
	}

	public RegioesAdaptacaoCultivo updateRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo transientObject) {
		return repository.save(transientObject);
	}

	public RegioesAdaptacaoCultivo findRegioesAdaptacaoCultivoById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist RegioesAdaptacaoCultivo with id = " + id));
	}

	public List<RegioesAdaptacaoCultivo> getAllRegioesAdaptacaoCultivo(){
		return repository.findAll();
	}

	public void deleteRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo persistentObject){
		this.deleteRegioesAdaptacaoCultivo(persistentObject.getId());
		
	}
	
	public void deleteRegioesAdaptacaoCultivo(long id){
		RegioesAdaptacaoCultivo obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist RegioesAdaptacaoCultivo with id = " + id));
		repository.delete(obj);
	}	
	
	public Page<RegioesAdaptacaoCultivo> findPageRegioesAdaptacaoCultivo(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
	
	
}