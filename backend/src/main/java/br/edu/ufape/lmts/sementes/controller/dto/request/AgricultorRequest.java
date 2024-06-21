package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.List;
import java.util.stream.Collectors;

import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.repository.AtividadeRuralRepository;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.AtividadeRural;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AgricultorRequest extends UsuarioRequest {
	@Positive(message = "Id inválido")
	private long bancoId;
	private List<String> atividadesRurais;
	private List<AtividadeRuralRequest> atividadesRuralRequests;

	public Agricultor convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		if (atividadesRurais != null) {
			List<AtividadeRuralRequest> atividades = atividadesRurais.stream()
					.map(nome -> {
						return  new AtividadeRuralRequest(nome);
					})
					.collect(Collectors.toList());
			this.setAtividadesRuralRequests(atividades);
		}
		Agricultor obj = modelMapper.map(this, Agricultor.class);
		BancoSementes banco = new BancoSementes();
		banco.setId(bancoId);
		obj.setBancoSementes(banco);


		return obj;
	}
}
