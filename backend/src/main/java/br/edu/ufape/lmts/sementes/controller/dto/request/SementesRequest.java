package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Sementes;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SementesRequest {
	private String nome;
	private String nomePopular;
	private String descricao;
	private String pragas;
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
	private List<RegioesAdaptacaoCultivoRequest> regioesAdaptacaoCultivo;
	private CulturaRequest cultura;
	
	@Valid
	private ResponsavelTecnicoRequest responsavelTecnico;

	public Sementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Sementes obj = modelMapper.map(this, Sementes.class);
		obj.setImagens(new ArrayList<>());
		return obj;
	}

}
