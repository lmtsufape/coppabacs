package br.edu.ufape.lmts.sementes.auth;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

import br.edu.ufape.lmts.sementes.model.Usuario;

@Service
public class TokenService {

	//@Value("${jwt.secret}")
	private String secret = "Projeto coppabacs";

	//@Value("${jwt.expiration}")
	private Long expiration = 10800000L;

	public String generateToken(Usuario usuario) {
		try {
			System.out.println("generateToken" + usuario.toString());
			Algorithm algorithm = Algorithm.HMAC256(secret);
			String token = JWT.create().withIssuer("/api/v1").withSubject(usuario.getEmail())
					.withExpiresAt(new Date(System.currentTimeMillis() + expiration)).sign(algorithm);
			return token;
			
		} catch (JWTCreationException exception) {
			throw new RuntimeException("Error while generating token ", exception);
		}
	}

	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.require(algorithm).withIssuer("/api/v1").build().verify(token).getSubject();
		} catch (JWTVerificationException exception) {
			return "";
		}
	}
}
