package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.enums.TipoPergunta;
import br.edu.ufape.lmts.sementes.model.TabelaPerguntaUsuario;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class TabelaPerguntaUsuarioRequest {
	@EqualsAndHashCode.Include
	@NotEmpty(message = "Preenchimento obrigatório")
	private TipoPergunta pergunta;
	@EqualsAndHashCode.Include
	@NotEmpty(message = "Preenchimento obrigatório")
	private String resposta;

	public TabelaPerguntaUsuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		TabelaPerguntaUsuario obj = modelMapper.map(this, TabelaPerguntaUsuario.class);
		return obj;
	}
}
