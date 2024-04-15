package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Sementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SementesResponse {
	private long id;
	private String nome;
	private String nomePopular;
	private String descricao;
	private String pragas;
	private String doencas;
	private List<String> imagens;
	private Boolean dominioPublico;
	private Boolean polinizaacaoAbertaMelhorada;
	private String regiaoColetaDados;
	private float altitudeMaxima;
	private float altitudeMinima;
	private String caracteristicasPositiva;
	private String caracteristicasNegativas;
	private ToleranciaAdversidadesResponse toleranciaAdversidades;
//	private List<ProducaoSementesResponse> producaoSementes; 
//	private List<TabelaBancoSementesResponse> tabelaBancoSementes; 
	private ResponsavelTecnicoResponse responsavelTecnico;
	private CaracteristicasAgronomicasResponse caracteristicasAgronomicas;
	private List<FinalidadeResponse> finalidades;
	private List<RegioesAdaptacaoCultivoResponse> regioesAdaptacaoCultivo;
	private CulturaResponse cultura;

	public SementesResponse(Sementes obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
	}

}
