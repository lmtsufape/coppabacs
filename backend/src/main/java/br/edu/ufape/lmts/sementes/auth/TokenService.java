package br.edu.ufape.lmts.sementes.auth;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

@Service
public class TokenService {

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.expiration}")
	private Long expiration;

	public String generateToken(AuthUser usuario) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			String token = JWT.create().withIssuer("Projeto Sementes").withSubject(usuario.getEmail())
					.withExpiresAt(new Date(System.currentTimeMillis() + expiration)).sign(algorithm);
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
