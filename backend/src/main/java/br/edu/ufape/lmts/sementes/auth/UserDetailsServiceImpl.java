package br.edu.ufape.lmts.sementes.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UsuarioRepository repository;

	@Override
	public UserDetails loadUserByUsername(String cpf) throws UsernameNotFoundException {
		Usuario usuario = repository.findByAtivoTrueAndCpf(cpf).orElseThrow(() -> new UsernameNotFoundException(cpf));
        return new AuthUser(usuario);
	}
	
	public AuthUser authenticated() {
		try {
			return (AuthUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		} catch (Exception e) {
			return null;
		}
	}
}
