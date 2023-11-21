package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class AgricultorResponse extends UsuarioResponse {
	private String numeroDap;
	private String classificacaoPronaf;
	private String rendaFamiliar;
	private String numeroPessoas;
	private Double areaPropriedade;
	private BancoSementesResponse bancoSementes; 
	private List<AtividadeRuralResponse> atividadeRural; 
	private List<infraestruturaHidricaResponse> infraestruturaHidrica; 
	private List<UsoOcupacaoTerraResponse> usoOcupacaoTerra; 
	private List<InfraestruturaComunidadeResponse> infraestruturaComunidade; 


	public AgricultorResponse(Agricultor obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
