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

import br.edu.ufape.lmts.sementes.auth.AuthUser;
import br.edu.ufape.lmts.sementes.auth.TokenService;
import br.edu.ufape.lmts.sementes.controller.dto.request.AuthRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.LoginResponseDTO;

@RestController
@CrossOrigin (origins = "http://localhost:8081/" )
@RequestMapping("/api/v1/")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private TokenService tokenService;

	@PostMapping("login")
	public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthRequest data) {
		var userNamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getSenha());
		var auth = this.authenticationManager.authenticate(userNamePassword);
		var token = tokenService.generateToken((AuthUser) auth.getPrincipal());

		return ResponseEntity.ok(new LoginResponseDTO(data.getEmail(), token));
	}
}
