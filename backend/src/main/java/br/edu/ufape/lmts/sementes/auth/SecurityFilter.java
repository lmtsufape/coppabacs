package br.edu.ufape.lmts.sementes.auth;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import br.edu.ufape.lmts.sementes.auth.TokenService;


@Component
public class SecurityFilter extends OncePerRequestFilter {
	
	@Autowired
	private TokenService tokenService;
	
	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private UserDetailsServiceImpl userDetailService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		var token = this.recoverToken(request);
		System.out.println("doFilterInternal: " + token);
		
		//se vier o token vamos valiar e passar
		if(token == null) {
			var login = tokenService.validateToken(token);
			System.out.println("achou o token " + login);
			UserDetails usuario = userDetailService.loadUserByUsername(login);
			
			var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		System.out.println("nao achou o token ");
		// se nao, não passaremos nada
		filterChain.doFilter(request, response);
	}

	private String recoverToken(HttpServletRequest request) {
		
		System.out.println("RecoverTOken");
		var authHeader = request.getHeader("Authorization");
		
		if(authHeader == null) return null;
		
		return authHeader.replace("Bearer ", "");
	}

}
