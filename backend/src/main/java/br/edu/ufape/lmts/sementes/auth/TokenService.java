package br.edu.ufape.lmts.sementes.auth;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import org.springframework.web.server.ResponseStatusException;

@Service
public class TokenService {

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.expiration.user}")
	private Long expirationUser;

	@Value("${jwt.expiration.admin}")
	private Long expirationAdmins;

	public String generateToken(AuthUser usuario) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			Long expirationTime;
			if(usuario.getRoles().contains(TipoUsuario.USUARIO))
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuario não aprovado");
			expirationTime = (usuario.getRoles().contains(TipoUsuario.AGRICULTOR)) ? expirationUser : expirationAdmins;
			String token = JWT.create().withIssuer("Projeto Sementes").withSubject(usuario.getCpf())
					.withExpiresAt(new Date(System.currentTimeMillis() + expirationTime)).sign(algorithm);
			return token;

		} catch (JWTCreationException exception) {
			throw new RuntimeException("Error while generating token ", exception);
		}
	}

	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.require(algorithm).withIssuer("Projeto Sementes").build().verify(token).getSubject();
		} catch (JWTVerificationException exception) {
			return "";
		}
	}
}
