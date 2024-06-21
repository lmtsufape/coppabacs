package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Agricultor;
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
	private String atividadesRurais;

	public Agricultor convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Agricultor obj = modelMapper.map(this, Agricultor.class);
		BancoSementes banco = new BancoSementes();
		banco.setId(bancoId);
		obj.setBancoSementes(banco);
		return obj;
	}
}
