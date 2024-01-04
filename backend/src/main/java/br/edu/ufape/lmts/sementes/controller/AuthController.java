package br.edu.ufape.lmts.sementes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufape.lmts.sementes.controller.dto.request.AuthRequest;
import jakarta.validation.Valid;

@RestController
@CrossOrigin (origins = "http://localhost:8081/" )
@RequestMapping("/api/v1/")
public class AuthController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("login")
	public ResponseEntity login(@Valid @RequestBody AuthRequest data) {
		
		var userNamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getSenha());
		
		var auth = this.authenticationManager.authenticate(userNamePassword);
		
		return ResponseEntity.ok().build();
		
	}
}
