package br.edu.ufape.lmts.sementes.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import br.edu.ufape.lmts.sementes.model.AtividadeRural;
import br.edu.ufape.lmts.sementes.repository.AtividadeRuralRepository;

@Configuration
@Component
public class AtividadesRuraisInitializer implements CommandLineRunner {

	@Autowired
	private AtividadeRuralRepository atividadeRuralRepository;

	@Override
	public void run(String... args) throws Exception {

		if (atividadeRuralRepository.count() == 0) {
			List<String> atividades = new ArrayList<>();
			atividades.addAll(Arrays.asList("Caprino", "Suinocultura", "Pecuáriua", "Pesca artesanal", "Fruticultura",
					"Aquicultura", "Avicultura", "Apiculcutura", "Agricultura de feijão", "Agricultura de sequeiro",
					"Agricultura de milho"));
			
			atividadeRuralRepository.saveAll(atividades.stream().map((nome)-> new AtividadeRural(nome)).toList());
		}
	}
}
