package br.edu.ufape.lmts.sementes.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import br.edu.ufape.lmts.sementes.model.Admin;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.model.Gerente;
import br.edu.ufape.lmts.sementes.repository.AdminRepository;
import br.edu.ufape.lmts.sementes.repository.AgricultorRepository;
import br.edu.ufape.lmts.sementes.repository.CoppabacsRepository;
import br.edu.ufape.lmts.sementes.repository.GerenteRepository;
import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;

@Configuration
@Component
public class UserInitializer  implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository userRepository;
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private GerenteRepository gerenteRepository;
	@Autowired
	private AgricultorRepository agricultorRepository;
	@Autowired
	private CoppabacsRepository coppabacsRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public void run(String... args) throws Exception {
		
		if(userRepository.count() == 0) {
			Admin admin = new Admin();
			admin.setNome("Admin");
			admin.setConjuge(null);
			admin.setContato("AdminContato");
			admin.setEmail("admin@admin.com");
			admin.setCpf("adminCpf");
			admin.setEndereco(null);
			admin.setSexo("admin");
			admin.setSenha(passwordEncoder.encode("AdminSenha"));
			admin.setDataNascimento(new Date(18, 10, 2001));
			
			userRepository.save(admin);
			adminRepository.save(admin);
			
			Gerente gerente = new Gerente();
			gerente.setNome("Gerente");
			gerente.setCpf("11111111111");
			gerente.setConjuge(null);
			gerente.setEmail("gerente@gerente.com");
			gerente.setEndereco(null);
			gerente.setSexo("gerente");
			gerente.setSenha(passwordEncoder.encode("12345678"));
			gerente.setDataNascimento(new Date(18, 10, 2001));
			
			userRepository.save(gerente);
			gerenteRepository.save(gerente);
			
			Agricultor agricultor = new Agricultor();
			agricultor.setNome("Agricultor");
			agricultor.setCpf("22222222222");
			agricultor.setConjuge(null);
			agricultor.setEmail("agricultor@agricultor.com");
			agricultor.setEndereco(null);
			agricultor.setSexo("agricultor");
			agricultor.setSenha(passwordEncoder.encode("12345678"));
			agricultor.setDataNascimento(new Date(18, 10, 2001));
			
			userRepository.save(agricultor);
			agricultorRepository.save(agricultor);
			
			Coppabacs coppabacs = new Coppabacs();
			coppabacs.setNome("Coppabacs");
			coppabacs.setCpf("33333333333");
			coppabacs.setConjuge(null);
			coppabacs.setEmail("coppabacs@coppabacs.com");
			coppabacs.setEndereco(null);
			coppabacs.setSexo("coppabacs");
			coppabacs.setSenha(passwordEncoder.encode("12345678"));
			coppabacs.setDataNascimento(new Date(18, 10, 2001));
			
			userRepository.save(coppabacs);
			coppabacsRepository.save(coppabacs);
		}
	}
}
