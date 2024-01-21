package br.edu.ufape.lmts.sementes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufape.lmts.sementes.auth.AuthUser;
import br.edu.ufape.lmts.sementes.auth.TokenService;
import br.edu.ufape.lmts.sementes.controller.dto.request.AuthRequest;

@RestController
@CrossOrigin (origins = "http://localhost:3000", allowCredentials = "true" )
@RequestMapping("/api/v1/")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private TokenService tokenService;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("login")
	public ResponseEntity<Void> login(@RequestBody AuthRequest data) {
		System.out.println(data.getEmail());
		System.out.println(data.getSenha());
		var userNamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getSenha());
		System.out.println("user name senha " + userNamePassword);
		Authentication auth = this.authenticationManager.authenticate(userNamePassword);
		String token = tokenService.generateToken((AuthUser) auth.getPrincipal());
		System.out.println(token);
		return ResponseEntity.ok().header("Authorization", "Bearer " + token).header("access-control-expose-headers", "Authorization").build();
	}
	@PostMapping("user/current")
	public Authentication getCurrentUser() {
		return SecurityContextHolder.getContext().getAuthentication();
	}
}
