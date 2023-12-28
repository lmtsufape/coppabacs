package br.edu.ufape.lmts.sementes.auth;

//@Configuration
//public class ResourceServerConfig  {
//	@Autowired
//	private KeycloakJwtAuthenticationConverter keycloakJwtAuthenticationConverter;
//	@Bean
//	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http
//		.csrf(csrf -> csrf.disable())
//		.authorizeHttpRequests(authz ->
//			authz
//				.requestMatchers("/api/v1/gerente/**").permitAll()
//				.requestMatchers("/api/v1/agricultor/**").permitAll()
//				.requestMatchers("/api/v1/sementes/**").permitAll()
//				.requestMatchers("/security/**").permitAll()
//				.requestMatchers("/api-doc/**").permitAll()
//				.anyRequest().authenticated()
//		)
//		.oauth2ResourceServer(oauth2ResourceServer -> 
//								oauth2ResourceServer.jwt((jwt) -> jwt
//									.jwtAuthenticationConverter(keycloakJwtAuthenticationConverter)
//								)
//							 );
//		return http.build();
//	}
//}
