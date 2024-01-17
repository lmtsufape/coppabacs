package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.repository.CoppabacsRepository;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import jakarta.transaction.Transactional;

@Service
public class CoppabacsService {
	
	@Autowired
	private CoppabacsRepository repository;
	@Autowired
	private UsuarioService usuario;
	
	@Transactional
	public Coppabacs saveCoppabacs(Coppabacs coppabacs) throws EmailExistsException {
		
		usuario.saveUsuario(coppabacs);
		
		return repository.save(coppabacs);
	}
	
	public Coppabacs updateCoppabacs(Coppabacs coppabacs) {
		return repository.save(coppabacs);
	}
	
	public List<Coppabacs> getAllCoppabacs() {
		return repository.findAll();
	}
	
	public Coppabacs findCoppabacsById(long id) {
		return repository.findById(id).orElseThrow(() -> new RuntimeException("It doesn't exist Coppabacs with id = " + id));
	}
	
	@Transactional
	public void deleteCoppabacs(Coppabacs coppabacs) {
		this.deleteCoppabacs(coppabacs);
	}
	
	@Transactional
	public void deleteCoppabacs(long id) {
		Coppabacs obj = repository.findById(id).orElseThrow(() -> new RuntimeException("It doesn't exist user with id = " + id));
		repository.delete(obj);
	}
	
	
	
}
