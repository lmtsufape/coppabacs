package br.edu.ufape.lmts.sementes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufape.lmts.sementes.auth.AuthUser;
import br.edu.ufape.lmts.sementes.controller.dto.request.AuthRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.PasswordRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.PasswordUpdateRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.TabelaPerguntaUsuarioRequest;
import br.edu.ufape.lmts.sementes.facade.Facade;
import jakarta.validation.Valid;

@RestController
@RequestMapping("${prefix.url}")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private Facade facade;

	@PostMapping("login")
	public ResponseEntity<Void> login(@Valid @RequestBody AuthRequest data) {
		UsernamePasswordAuthenticationToken userNamePassword = new UsernamePasswordAuthenticationToken(data.getCpf(), data.getSenha());
		Authentication auth = this.authenticationManager.authenticate(userNamePassword);
		String token = facade.generateLoginToken((AuthUser) auth.getPrincipal());
		return ResponseEntity.ok().header("Authorization", "Bearer " + token).header("access-control-expose-headers", "Authorization").build();
	}
	
	@PostMapping("forgot/{cpf}")
	public ResponseEntity<String> recoveryPassword(@Valid @RequestBody TabelaPerguntaUsuarioRequest data, @PathVariable String cpf) {
		String recoveryToken = facade.generateRecoveryPasswordToken(data.convertToEntity(), cpf);
		return ResponseEntity.ok().body(recoveryToken);
	}
	
	@PostMapping("recoverpassword/{token}")
	public ResponseEntity<String> recoverPassword(@Valid @RequestBody PasswordRequest data, @PathVariable String token) {
		String cpf = facade.recoverCpfByToken(token);
		facade.saveNewPasswordByCpf(data.senha, cpf);
		return ResponseEntity.ok().build();
	}
	
	@PatchMapping("newpassword")
	public ResponseEntity<String> updatePassword(@Valid @RequestBody PasswordUpdateRequest data) {
		facade.updatePassword(data.senha, data.novaSenha);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("user/current")
	public Authentication getCurrentUser() {
		return SecurityContextHolder.getContext().getAuthentication();
	}
}
