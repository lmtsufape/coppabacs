package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.service.exception.ContatoExistsException;
import br.edu.ufape.lmts.sementes.service.exception.CpfExistsException;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;

public interface UsuarioServiceInterface {
	Usuario saveUsuario(Usuario o) throws EmailExistsException, ContatoExistsException, CpfExistsException;
	Usuario findUsuarioById(long id);
	Usuario findUsuarioByEmail(String email);
	Usuario findUsuarioByCpf(String cpf);
	Usuario updateUsuario(Usuario u) throws EmailExistsException, ContatoExistsException, CpfExistsException;
	boolean emailExistsInAtivo(String email);
	boolean cpfExistsInAtivo(String cpf);
	boolean contatoExistsInAtivo(String contato);
	boolean emailExistsInAtivo(long id, String email);
	boolean cpfExistsInAtivo(long id, String cpf);
	boolean contatoExistsInAtivo(long id, String contato);
	void deleteUsuario(Usuario u);
	void deleteUsuario(long id);
	List<Usuario> getAllUsuario();
	Page<Usuario> findPageUsuario(Pageable pageRequest);
	
}