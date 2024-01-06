package br.edu.ufape.lmts.sementes.auth;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UsuarioRepository repository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		System.out.println("loadUserByUsername ");
		Usuario usuario = repository.findByEmail(email);
		System.out.println("email " + email);
		if (usuario == null) {
            throw new UsernameNotFoundException("No user found with username: " + email);
        }
		System.out.println("loadUserByUsername " + usuario.getSenha());
		boolean enabled = true;
        boolean accountNonExpired = true;
        boolean credentialsNonExpired = true;
        boolean accountNonLocked = true;
        
        return new org.springframework.security.core.userdetails.User(
          usuario.getEmail(), usuario.getSenha(), enabled, accountNonExpired,
          credentialsNonExpired, accountNonLocked, getAuthorities(usuario.getRoles()));
    }
	
	public Collection<? extends GrantedAuthority> getAuthorities(Set<TipoUsuario> roles) {
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRole()))
				.collect(Collectors.toList());
	}
		
}
