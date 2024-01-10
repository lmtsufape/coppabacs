package br.edu.ufape.lmts.sementes.auth;

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


@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
	
	@Autowired
	private SecurityFilter securityFilter;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		http
			.csrf(csrf -> csrf.disable())
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.authorizeHttpRequests(authz -> authz
					.requestMatchers("/api/v1/gerente/**").hasRole("GERENTE")
					.requestMatchers(HttpMethod.POST, "/api/v1/agricultor/**").permitAll()
					.requestMatchers("/api/v1/agricultor/**").hasRole("AGRICULTOR")
					.requestMatchers("/api/v1/sementes/**").permitAll()
					.requestMatchers("/security/**").permitAll()
					.requestMatchers("/api-doc/**").permitAll()
					.requestMatchers(HttpMethod.POST,"/api/v1/login").permitAll()
					.anyRequest().authenticated()
			)
			.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();	
		
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
