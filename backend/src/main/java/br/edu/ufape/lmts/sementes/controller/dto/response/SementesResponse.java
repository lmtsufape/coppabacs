package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDate;
import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class SementesResponse  {
	private Long id;
	private String nome;
	private String descricao;
	private String imagem;
	private String localOrigem;
	private Boolean dominioPublico;
	private Boolean polinizaacaoAbertaMelhorada;
	private LocalDate tempoComunidade;
	private String regiaoColetaDados;
	private float altitudeMaxima;
	private float altitudeMinima;
	private String caracteristicasPositiva;
	private String caracteristicasNegativas;
	private ToleranciaAdversidadesResponse toleranciaAdversidades; 
	private List<ProducaoSementesResponse> producaoSementes; 
	private List<TabelaBancoSementesResponse> tabelaBancoSementes; 



	public SementesResponse(Sementes obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
