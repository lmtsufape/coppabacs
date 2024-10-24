package br.edu.ufape.lmts.sementes.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

	@Autowired
	private SecurityFilter securityFilter;

	@Value("${common.front-end}")
	private String allowedOrigins;

	@Value("${prefix.url}")
	private String prefixUrl;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		http.cors((cors) -> cors.configurationSource(corsConfigurationSource())).csrf(csrf -> csrf.disable())
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(authz -> authz
						// Rotas públicas
						.requestMatchers(HttpMethod.POST, prefixUrl + "/login").permitAll()
						.requestMatchers(HttpMethod.POST, prefixUrl + "/forgot/**").permitAll()
						.requestMatchers(HttpMethod.POST, prefixUrl + "/recoverpassword/**").permitAll()
						.requestMatchers(HttpMethod.POST, prefixUrl + "/agricultor/usuario/**").permitAll()
						.requestMatchers(HttpMethod.GET, prefixUrl + "/banco-sementes/**").permitAll()
						.requestMatchers(HttpMethod.GET, prefixUrl + "/perguntas").permitAll()
						.requestMatchers(HttpMethod.GET, prefixUrl + "/sementes/**").permitAll()
						.requestMatchers(HttpMethod.GET, prefixUrl + "/post/**").permitAll()
						.requestMatchers(HttpMethod.POST, prefixUrl + "/arquivos/**").permitAll()
						.requestMatchers(HttpMethod.GET, prefixUrl + "/arquivos/**").permitAll()
						// rotas de agricultor
						.requestMatchers(HttpMethod.GET, prefixUrl + "/usuario/e/**")
						.hasAnyRole("AGRICULTOR", "GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.GET, prefixUrl + "/usuario/cpf/**")
						.hasAnyRole("AGRICULTOR", "GERENTE", "COPPABACS").requestMatchers(prefixUrl + "/agricultor/**")
						.hasAnyRole("AGRICULTOR", "GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.GET, prefixUrl + "/agricultor/e/**")
						.hasAnyRole("AGRICULTOR", "GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.PATCH, prefixUrl + "/agricultor/**")
						.hasAnyRole("GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.PATCH, prefixUrl + "/agricultor/validar/**")
						.hasAnyRole("GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.GET, prefixUrl + "/agricultor/**")
						.hasAnyRole("GERENTE", "COPPABACS")

						// rotas do banco de sementes
						.requestMatchers(HttpMethod.POST, prefixUrl + "/banco-sementes/**").hasRole("COPPABACS")
						.requestMatchers(HttpMethod.PUT, prefixUrl + "/banco-sementes/**").hasRole("COPPABACS")
						.requestMatchers(HttpMethod.PATCH, prefixUrl + "/banco-sementes/**")
						.hasAnyRole("GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.GET, prefixUrl + "/banco-sementes/**")
						.hasAnyRole("GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.DELETE, prefixUrl + "/banco-semente/**").hasRole("COPPABACS")

						// rotas de coordenador
						.requestMatchers(HttpMethod.POST, prefixUrl + "/gerente").hasRole("COPPABACS")
						.requestMatchers(prefixUrl + "/gerente/**").hasAnyRole("GERENTE", "COPPABACS")
						.requestMatchers(HttpMethod.POST, prefixUrl + "/agricultor").hasAnyRole("GERENTE", "COPPABACS")
						.requestMatchers(prefixUrl + "/sementes/**").hasRole("COPPABACS")
						.requestMatchers(prefixUrl + "/responsavel-tecnico/**").hasRole("COPPABACS")
						.requestMatchers("/security/**").permitAll().requestMatchers("/api-doc/**").permitAll()
						.requestMatchers(prefixUrl + "/coppabacs/**").hasRole("COPPABACS")

						// rotas de arquivos

						.requestMatchers(HttpMethod.DELETE, prefixUrl + "/arquivos/**")
						.hasAnyRole("GERENTE", "COPPABACS").anyRequest().authenticated())
				.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();

	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();

		configuration.setAllowedOrigins(Arrays.asList(allowedOrigins.split(",")));
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
		configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
		configuration.setAllowCredentials(true);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Bean
	public PasswordEncoder passwordencoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
}