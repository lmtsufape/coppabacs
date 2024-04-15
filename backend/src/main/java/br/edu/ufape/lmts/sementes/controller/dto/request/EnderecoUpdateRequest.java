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
public class EnderecoUpdateRequest {
	
	private String logradouro;
	private String referencia;
	private String complemento;
	private String cidade;
	private String estado;
	private String cep;
	private String numero;
	private String bairro;

	public Endereco convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Endereco obj = modelMapper.map(this, Endereco.class);
		return obj;
	}
}
