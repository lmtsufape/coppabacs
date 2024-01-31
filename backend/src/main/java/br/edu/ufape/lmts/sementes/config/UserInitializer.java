package br.edu.ufape.lmts.sementes.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import br.edu.ufape.lmts.sementes.model.Admin;
import br.edu.ufape.lmts.sementes.repository.AdminRepository;
import br.edu.ufape.lmts.sementes.repository.UsuarioRepository;

@Configuration
@Component
public class UserInitializer  implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository userRepository;
	@Autowired
	private AdminRepository adminRepository;
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
			admin.setNomeMae("MaeAdmin");
			admin.setNomePai("AdminPai");
			admin.setRg("AdminRg");
			admin.setSexo("AdminSexo");
			admin.setSenha(passwordEncoder.encode("AdminSenha"));
			admin.setDataNascimento(new Date(18, 10, 2001));
			
			System.out.println(admin);
			userRepository.save(admin);
			adminRepository.save(admin);
			
			
			
		}
	}
}
