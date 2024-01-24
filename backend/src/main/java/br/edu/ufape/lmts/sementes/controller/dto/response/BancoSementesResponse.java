package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class BancoSementesResponse  {
	private Long id;
	private String nome;
	private String comunidade;
	private String anoFundacao;
	private String historiaBanco;
	private String variedadesTrabalhadas;
	private List<GerenteResponse> gerente;
	private EnderecoResponse endereco; 
	private ObjetosBancoSementesResponse objetosBancoSementes; 
	private GerenteResponse tecnico; 
	private List<DoacaoUsuarioResponse> doacaoUsuario; 
	private List<RetiradaUsuarioResponse> retiradaUsuario; 
	private List<TransacaoGenericaResponse> transacaoGenerica; 



	public BancoSementesResponse(BancoSementes obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
