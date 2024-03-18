package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Endereco;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EnderecoRequest {
	@NotEmpty(message = "Preenchimento obrigatório")
	private String nome;
	private String referencia;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String cidade;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String estado;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String cep;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String numero;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String bairro;

	public Endereco convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Endereco obj = modelMapper.map(this, Endereco.class);
		return obj;
	}
}
