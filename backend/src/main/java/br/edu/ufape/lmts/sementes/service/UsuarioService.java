package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService implements UsuarioServiceInterface {
	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Transactional
	public Usuario saveUsuario(Usuario usuario) throws EmailExistsException {

		if(emailExists(usuario.getEmail())) {
			throw new EmailExistsException( "Esse email já existe: " + usuario.getEmail());
		}

		usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));

		return repository.save(usuario);
	}

	public Usuario updateUsuario(Usuario transientObject) {
		if(transientObject.getSenha() != null) {
			transientObject.setSenha(passwordEncoder.encode(transientObject.getSenha()));			
		}
		return repository.save(transientObject);
	}

	public Usuario findUsuarioById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Usuario with id = " + id));
	}

	public List<Usuario> getAllUsuario(){
		return repository.findAll();
	}

	@Transactional
	public void deleteUsuario(Usuario persistentObject){
		this.deleteUsuario(persistentObject.getId());

	}

	@Transactional
	public void deleteUsuario(long id){
		Usuario obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Usuario with id = " + id));
		repository.delete(obj);
	}

	public boolean emailExists(String email) {
		return repository.existsByEmail(email);
	}

	public void addRoleToUser(Usuario usuario, TipoUsuario tipoUsuario) {
	    usuario.addRole(tipoUsuario);
	    updateUsuario(usuario);
	}

	public Page<Usuario> findPageUsuario(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
}
