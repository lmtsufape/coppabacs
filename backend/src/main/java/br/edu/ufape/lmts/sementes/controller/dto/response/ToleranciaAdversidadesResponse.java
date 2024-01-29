package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.enums.Resistencia;
import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ToleranciaAdversidadesResponse {
	private Long id;
	private Resistencia altaTemperatura;
	private Resistencia baixaTemperatura;
	private Resistencia geada;
	private Resistencia chuvaExcessiva;
	private Resistencia seca;
	private Resistencia ventos;
	private Resistencia salinidade;
	private Resistencia toxidadeAluminio;
	private Resistencia soloArgiloso;
	private Resistencia soloArenoso;
	private Resistencia soloAcido;
	private Resistencia soloBaixaFertilidade;

	public ToleranciaAdversidadesResponse(ToleranciaAdversidades obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
	}

}
