package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;
import br.edu.ufape.lmts.sementes.service.exception.ContatoExistsException;
import br.edu.ufape.lmts.sementes.service.exception.CpfExistsException;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService implements UsuarioServiceInterface {
	@Autowired
	private UsuarioRepository repository;

	@Transactional
	public Usuario saveUsuario(Usuario usuario)
			throws EmailExistsException, ContatoExistsException, CpfExistsException {
		if (emailExistsInAtivo(usuario.getEmail()))
			throw new EmailExistsException("It does exist Usuario with email: " + usuario.getEmail());
		if (contatoExistsInAtivo(usuario.getContato()))
			throw new ContatoExistsException("It doesn't exist Usuario with contato:" + usuario.getContato());
		if (cpfExistsInAtivo(usuario.getCpf()))
			throw new CpfExistsException("It doesn't exist Usuario with CPF:" + usuario.getCpf());
		return repository.save(usuario);
	}

	public Usuario updateUsuario(Usuario transientObject) throws EmailExistsException, ContatoExistsException, CpfExistsException {
		findUsuarioById(transientObject.getId());
		if (emailExistsInAtivo(transientObject.getId(), transientObject.getEmail()))
			throw new EmailExistsException("It does exist Usuario with email: " + transientObject.getEmail());
		if (contatoExistsInAtivo(transientObject.getId(), transientObject.getContato()))
			throw new ContatoExistsException("It doesn't exist Usuario with contato:" + transientObject.getContato());
		if (cpfExistsInAtivo(transientObject.getId(), transientObject.getCpf()))
			throw new CpfExistsException("It doesn't exist Usuario with CPF:" + transientObject.getCpf());
		return repository.save(transientObject);
	}

	public Usuario findUsuarioById(long id) {
		return repository.findByAtivoTrueAndId(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Usuario with id = " + id));
	}

	public Usuario findUsuarioByEmail(String email) {
		return repository.findByAtivoTrueAndEmail(email)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Usuario with Email = " + email));
	}

	public Usuario findUsuarioByCpf(String cpf) {
		return repository.findByAtivoTrueAndCpf(cpf)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Usuario with CPF = " + cpf));
	}

	public List<Usuario> getAllUsuario() {
		return repository.findByAtivoTrue();
	}

	@Transactional
	public void deleteUsuario(Usuario persistentObject) {
		this.deleteUsuario(persistentObject.getId());
	}

	@Transactional
	public void deleteUsuario(long id) {
		Usuario obj = findUsuarioById(id);
		obj.setAtivo(false);
		repository.save(obj);
	}

	public boolean emailExistsInAtivo(String email) {
		return repository.existsByAtivoTrueAndEmail(email);
	}

	public boolean emailExistsInAtivo(long id, String email) {
		return repository.existsByAtivoTrueAndIdNotAndEmail(id, email);
	}

	public boolean cpfExistsInAtivo(String cpf) {
		return repository.existsByAtivoTrueAndCpf(cpf);
	}

	public boolean cpfExistsInAtivo(long id, String cpf) {
		return repository.existsByAtivoTrueAndIdNotAndCpf(id, cpf);
	}

	public boolean contatoExistsInAtivo(String contato) {
		return repository.existsByAtivoTrueAndContato(contato);
	}

	public boolean contatoExistsInAtivo(long id, String contato) {
		return repository.existsByAtivoTrueAndIdNotAndContato(id, contato);
	}

	public void addRoleToUser(Usuario usuario, TipoUsuario tipoUsuario) throws EmailExistsException, ContatoExistsException, CpfExistsException {
		findUsuarioById(usuario.getId());
		usuario.addRole(tipoUsuario);
		updateUsuario(usuario);
	}

	public Page<Usuario> findPageUsuario(Pageable pageRequest) {
		return repository.findByAtivoTrue(pageRequest);
	}

}
