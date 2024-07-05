package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.repository.AgricultorRepository;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class AgricultorService implements AgricultorServiceInterface {
	@Autowired
	private AgricultorRepository repository;

	@Transactional
	public Agricultor saveAgricultor(Agricultor agricultor) throws EmailExistsException {
		return repository.save(agricultor);
	}

	public Agricultor updateAgricultor(Agricultor transientObject) {
		findAgricultorById(transientObject.getId());
		return repository.save(transientObject);
	}

	public Agricultor findAgricultorById(long id) {
		return repository.findByAtivoTrueAndId(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Agricultor with id = " + id));
	}
	public Agricultor findAgricultorByEmail(String email) {
		return repository.findByAtivoTrueAndEmail(email).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Usuario with Email = " + email));
	}

	public List<Agricultor> getAllAgricultor() {
		return repository.findByAtivoTrue();
	}

	public List<Agricultor> getAllByRole(TipoUsuario tipoUsuario) {
		return repository.findDistinctByRole(tipoUsuario);
	}

	@Transactional
	public void deleteAgricultor(Agricultor persistentObject) {
		this.deleteAgricultor(persistentObject.getId());
	}

	@Transactional
	public void deleteAgricultor(long id) {
		Agricultor obj = findAgricultorById(id);
		obj.setAtivo(false);
		repository.save(obj);
	}

	public void validateAgricultor(long id) {
		Agricultor obj = findAgricultorById(id);
		obj.addRole(TipoUsuario.AGRICULTOR);
		obj.removeRole(TipoUsuario.USUARIO);
		repository.save(obj);
	}

	public Page<Agricultor> findPageAgricultor(Pageable pageRequest) {
		return repository.findByAtivoTrue(pageRequest);
	}

	@Override
	public Agricultor findAgricultorByCpf(String cpf) {
		return repository.findByAtivoTrueAndCpf(cpf).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Usuario with cpf = " + cpf));
	}
}
