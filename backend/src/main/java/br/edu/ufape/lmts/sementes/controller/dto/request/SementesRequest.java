package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.ArrayList;
import java.util.List;

import br.edu.ufape.lmts.sementes.model.*;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SementesRequest {
	private long id = 0;
	private String nome;
	private String nomePopular;
	private String descricao;
	private String pragas;
	private String doencas;
	private Boolean dominioPublico;
	private Boolean polinizaacaoAbertaMelhorada;
	private String regiaoColetaDados;
	private float altitudeMaxima;
	private float altitudeMinima;
	private String caracteristicasPositiva;
	private String caracteristicasNegativas;
	private ToleranciaAdversidadesRequest toleranciaAdversidades;
	private CaracteristicasAgronomicasRequest caracteristicasAgronomicas;
	private List<FinalidadeRequest> finalidades;
	private String regiaoAdaptacaoCultivo;
	private CulturaRequest cultura;
	private List<String> imagens;

	@Valid
	private ResponsavelTecnicoRequest responsavelTecnico;

	public Sementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Sementes obj = modelMapper.map(this, Sementes.class);
		obj.setFinalidades(finalidades.stream().map(x -> x.convertToEntity()).toList());
		obj.setCultura(cultura.convertToEntity());
		obj.setImagens(new ArrayList<>());
		return obj;
	}

}
