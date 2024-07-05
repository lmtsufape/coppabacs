package br.edu.ufape.lmts.sementes.config;

import java.util.*;

import br.edu.ufape.lmts.sementes.controller.dto.request.*;
import br.edu.ufape.lmts.sementes.enums.Resistencia;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.*;

@Configuration
@Component
public class UserInitializer implements CommandLineRunner {

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
	@Autowired
	private SementesRepository sementesRepository;
	@Autowired
	private BancoSementesRepository bancoSementesRepository;
	@Autowired
	private Facade facade;

	@Override
	public void run(String... args) throws Exception {

		if (bancoSementesRepository.count() == 0) {
			BancoSementes banco = createBancoSementesRequest().convertToEntity();
			facade.saveBancoSementes(banco);
		}

		if (sementesRepository.count() == 0) {

			List<SementesRequest> sementesList = prepareAllSementes();
			sementesList.forEach(sementesRequest -> {
				Sementes sementes = sementesRequest.convertToEntity();
				facade.saveSementes(sementes);
			});
			TabelaBancoSementesRequest tabelaBancoSementesRequest = new TabelaBancoSementesRequest(0, 200, "05/2024", 1,
					1);
			facade.saveTabelaBancoSementes(tabelaBancoSementesRequest.convertToEntity(), 1);

		}

		if (userRepository.count() == 0) {

			Agricultor usuario = new Agricultor();
			usuario.setNome("Usuario");
			usuario.setConjuge(null);
			usuario.setEmail("usuario@usuario.com");
			usuario.setSenha(passwordEncoder.encode("12345678"));
			usuario.setEndereco(null);
			usuario.setNomePopular("Junior");
			usuario.setCpf("444.444.444-44");
			usuario.setContato("(87)33333-3333");
			usuario.setDataNascimento(new Date());
			usuario.setSexo("Masculino");

			facade.saveUsuario(usuario);

			Admin admin = new Admin();
			admin.setNome("Admin");
			admin.setConjuge(null);
			admin.setContato("(14)22222-2222");
			admin.setEmail("admin@admin.com");
			admin.setCpf("555.555.555-55");
			admin.setEndereco(null);
			admin.setSexo("admin");
			admin.setSenha(passwordEncoder.encode("12345678"));
			admin.setDataNascimento(new Date(18, 10, 2001));

			userRepository.save(admin);
			adminRepository.save(admin);

			BancoSementes banco = facade.getAllBancoSementes().get(0);

			Gerente gerente = new Gerente();
			gerente.setNome("Gerente");
			gerente.setCpf("111.111.111-11");
			gerente.setContato("(14)11111-1111");
			gerente.setConjuge(null);
			gerente.setEmail("gerente@gerente.com");
			gerente.setEndereco(null);
			gerente.setSexo("gerente");
			gerente.setSenha(passwordEncoder.encode("12345678"));
			gerente.setDataNascimento(new Date(18, 10, 2001));
			gerente.setBancoSementes(banco);
			gerente.setNomePopular("Seu João");

			userRepository.save(gerente);
			gerente = gerenteRepository.save(gerente);
			banco.setGerentes(Collections.singletonList(gerente));

			Agricultor agricultor = new Agricultor();
			agricultor.setNome("Agricultor");
			agricultor.setNomePopular("Seu Zé");
			agricultor.setCpf("222.222.222-22");
			agricultor.setContato("(87)11111-1111");
			agricultor.setConjuge(null);
			agricultor.setEmail("agricultor@agricultor.com");
			agricultor.setEndereco(null);
			agricultor.setSexo("agricultor");
			agricultor.setSenha(passwordEncoder.encode("12345678"));
			agricultor.setDataNascimento(new Date(18, 10, 2001));

			userRepository.save(agricultor);
			agricultor.addRole(TipoUsuario.AGRICULTOR);
			agricultorRepository.save(agricultor);

			Coppabacs coppabacs = new Coppabacs();
			coppabacs.setNome("Coppabacs");
			coppabacs.setCpf("333.333.333-33");
			coppabacs.setContato("(13)11111-1111");
			coppabacs.setConjuge(null);
			coppabacs.setEmail("coppabacs@coppabacs.com");
			coppabacs.setEndereco(null);
			coppabacs.setSexo("coppabacs");
			coppabacs.setSenha(passwordEncoder.encode("12345678"));
			coppabacs.setDataNascimento(new Date(18, 10, 2001));
			coppabacs.setCargo("Funcionário");
			coppabacs.setNomePopular("Seu Marcos");

			userRepository.save(coppabacs);
			coppabacsRepository.save(coppabacs);
		}

	}

	public static BancoSementesRequest createBancoSementesRequest() {
		EnderecoRequest endereco = new EnderecoRequest("Estrada do Caroá, Km 5", "Próximo ao posto agropecuário", null,
				"Caetés", "PE", "55360-000", null, "Zona rural");
		ObjetosBancoSementesRequest objetos = new ObjetosBancoSementesRequest(10, 5, 2, 3, 2, 12, 2);

		return new BancoSementesRequest("Banco de Sementes do Alto Sertão", "Comunidade Agrícola Sertaneja", "1997",
				"Fundado com o objetivo de preservar variedades locais de sementes e promover a agricultura sustentável na região...",
				"Milho Crioulo, Feijão Macassa, Mandioca Mansa, Sorgo Nativo, Abóbora Seridó", endereco, objetos,0, "Dono","0800", new ArrayList<>());
	}

	private static List<SementesRequest> prepareAllSementes() {
		List<SementesRequest> sementes = new ArrayList<>();

		sementes.add(new SementesRequest(0, "Coffea arabica", "Café Arábica",
				"Uma das espécies de café mais cultivadas e apreciadas mundialmente, conhecida por seu aroma suave e sabor delicado.",
				"Broca-do-café, Bicho-mineiro", "Ferrugem do cafeeiro, Mancha de Phoma", true, true,
				"Minas Gerais, Brasil", 1200, 600, "Alta qualidade do grão, bom rendimento em altitudes elevadas",
				"Sensibilidade à geada e necessidade de sombreamento",
				new ToleranciaAdversidadesRequest(Resistencia.ALTA, Resistencia.ALTA, Resistencia.ALTA,
						Resistencia.MEDIA, Resistencia.BAIXA, Resistencia.ALTA, Resistencia.ALTA, Resistencia.ALTA,
						Resistencia.MEDIA, Resistencia.BAIXA, Resistencia.ALTA, Resistencia.MEDIA),
				new CaracteristicasAgronomicasRequest(210, 5000, 1500, 120.0, 150.0, 800.0, "Oblongo", "Verde",
						"Marrom Escuro", "Verde Claro", "Branca", "Erecto", new EmpalhamentoRequest("Parcial")),
				List.of(new FinalidadeRequest("Produção de café gourmet")),
				Arrays.asList(new RegioesAdaptacaoCultivoRequest("Sul de Minas Gerais"),
						new RegioesAdaptacaoCultivoRequest("Cerrado Mineiro")),
				new CulturaRequest("Café", "Coffea"),
				new ResponsavelTecnicoRequest("João Silva", "123.456.789-00", "002134", "MG")));
		sementes.add(new SementesRequest(0, "Glycine max", "Soja",
				"Principal cultura de leguminosa para produção de óleo e proteína vegetal, com ampla adaptação climática.",
				"Lagarta-da-soja, Percevejo-verde", "Podridão radicular, Antracnose", true, false,
				"Brasil, América do Sul", 500, 100, "Alto teor de proteína, boa adaptabilidade",
				"Sensibilidade a herbicidas e necessidade de rotação de culturas",
				new ToleranciaAdversidadesRequest(Resistencia.ALTA, Resistencia.ALTA, Resistencia.MEDIA,
						Resistencia.ALTA, Resistencia.ALTA, Resistencia.BAIXA, Resistencia.MEDIA, Resistencia.MEDIA,
						Resistencia.ALTA, Resistencia.ALTA, Resistencia.BAIXA, Resistencia.MEDIA),
				new CaracteristicasAgronomicasRequest(100, 4000, 3000, 300.0, 200.0, 750.0, "Esferico", "Amarelo",
						"Verde Escuro", "Verde", "Amarela", "Prostrado", new EmpalhamentoRequest("Total")),
				List.of(new FinalidadeRequest("Produção de óleo e proteína")),
				Arrays.asList(new RegioesAdaptacaoCultivoRequest("Mato Grosso do Sul"),
						new RegioesAdaptacaoCultivoRequest("Paraná")),
				new CulturaRequest("Soja", "Glycine max"),
				new ResponsavelTecnicoRequest("Maria Pereira", "987.654.321-00", "001234", "PR")));
		sementes.add(new SementesRequest(0, "Zea mays", "Milho",
				"Cultura de grande importância econômica para cereais e produção de etanol.",
				"Lagarta-do-cartucho, Pulgão", "Fusariose, Mancha branca", true, true, "Sudeste e Sul do Brasil", 900,
				200, "Alta produtividade, resistência a pragas", "Sensível a variações de temperatura e umidade",
				new ToleranciaAdversidadesRequest(Resistencia.MEDIA, Resistencia.ALTA, Resistencia.BAIXA,
						Resistencia.ALTA, Resistencia.MEDIA, Resistencia.ALTA, Resistencia.BAIXA, Resistencia.MEDIA,
						Resistencia.ALTA, Resistencia.MEDIA, Resistencia.MEDIA, Resistencia.ALTA),
				new CaracteristicasAgronomicasRequest(150, 6000, 5000, 250.0, 300.0, 850.0, "Cilíndrico", "Amarelo",
						"Marrom Claro", "Amarelo Claro", "Laranja", "Vertical", new EmpalhamentoRequest("Moderado")),
				List.of(new FinalidadeRequest("Produção de grãos e etanol")),
				Arrays.asList(new RegioesAdaptacaoCultivoRequest("Rio Grande do Sul"),
						new RegioesAdaptacaoCultivoRequest("São Paulo")),
				new CulturaRequest("Milho", "Zea mays"),
				new ResponsavelTecnicoRequest("Carlos Neto", "222.333.444-55", "005678", "SP")));

		return sementes;
	}

}