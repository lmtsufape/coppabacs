package br.edu.ufape.lmts.sementes.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
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
public class WebSecurityConfig {
	
	@Autowired
	private SecurityFilter securityFilter;
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		http
			.cors((cors) -> cors
					.configurationSource(corsConfigurationSource()))
			.csrf(csrf -> csrf.disable())
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.authorizeHttpRequests(authz -> authz
					// Rotas públicas
					.requestMatchers(HttpMethod.POST,"/api/v1/login").permitAll()
					.requestMatchers(HttpMethod.POST, "/api/v1/agricultor").permitAll()
					.requestMatchers(HttpMethod.GET, "/api/v1/banco-sementes/**").permitAll()
					.requestMatchers(HttpMethod.GET, "/api/v1/sementes/**").permitAll()
					.requestMatchers(HttpMethod.GET, "/api/v1/posts/**").permitAll()
					
					// rotas de agricultor
					.requestMatchers("/api/v1/agricultor/**").hasAnyRole("AGRICULTOR", "GERENTE", "COPPABACS")
					.requestMatchers(HttpMethod.PATCH, "/api/v1/agricultor/**").hasAnyRole("GERENTE", "COPPABACS")
					.requestMatchers(HttpMethod.GET, "/api/v1/agricultor/**").hasAnyRole("GERENTE", "COPPABACS")

					// rotas do banco de sementes
					.requestMatchers(HttpMethod.POST, "/api/v1/banco-sementes/**").hasRole("COPPABACS")
					.requestMatchers(HttpMethod.PUT, "/api/v1/banco-sementes/**").hasRole("COPPABACS")
					.requestMatchers(HttpMethod.PATCH, "/api/v1/banco-sementes/**").hasAnyRole("GERENTE", "COPPABACS")
					.requestMatchers(HttpMethod.DELETE, "/api/v1/banco-semente/**").hasRole("COPPABACS")
					
					// rotas de coordenador
					.requestMatchers(HttpMethod.POST, "/api/v1/gerente").hasRole("COPPABACS")
					.requestMatchers("/api/v1/gerente/**").hasAnyRole("GERENTE", "COPPABACS")
					
					.requestMatchers("/api/v1/sementes/**").hasRole("COPPABACS")
					.requestMatchers("/security/**").permitAll()
					//.requestMatchers("/api/**").permitAll()
					.requestMatchers("/api/v1/coppabacs/**").hasRole("COPPABACS")
					.anyRequest().authenticated()
			)
			.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();	
		
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    
	    configuration.setAllowedOrigins(Arrays.asList("*"));
	    configuration.setAllowedMethods(Arrays.asList("*"));
	    configuration.setAllowedHeaders(Arrays.asList("*"));
	    
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}
	
	@Bean
	public PasswordEncoder passwordencoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}