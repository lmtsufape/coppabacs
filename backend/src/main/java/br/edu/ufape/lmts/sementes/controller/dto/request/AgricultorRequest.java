package br.edu.ufape.lmts.sementes.controller.dto.request;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.*;

import java.util.*;
import java.math.*;

import org.modelmapper.ModelMapper;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class AgricultorRequest extends UsuarioRequest {
	private String numeroDap;
	private String classificacaoPronaf;
	private String rendaFamiliar;
	private String numeroPessoas;
	private Double areaPropriedade;
	private BancoSementesRequest bancoSementes; 
	private List<AtividadeRuralRequest> atividadeRural; 
	private List<infraestruturaHidricaRequest> infraestruturaHidrica; 
	private List<UsoOcupacaoTerraRequest> usoOcupacaoTerra; 
	private List<InfraestruturaComunidadeRequest> infraestruturaComunidade; 


	public Agricultor convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Agricultor obj = modelMapper.map(this, Agricultor.class);
		System.out.println("dentro do agricultor request:");
		System.out.println(obj.toString());
		return obj;
	}


	@Override
	public String toString() {
		return "AgricultorRequest [numeroDap=" + numeroDap + ", classificacaoPronaf=" + classificacaoPronaf
				+ ", rendaFamiliar=" + rendaFamiliar + ", numeroPessoas=" + numeroPessoas + ", areaPropriedade="
				+ areaPropriedade + ", bancoSementes=" + bancoSementes + ", atividadeRural=" + atividadeRural
				+ ", infraestruturaHidrica=" + infraestruturaHidrica + ", usoOcupacaoTerra=" + usoOcupacaoTerra
				+ ", infraestruturaComunidade=" + infraestruturaComunidade + "agricultor=" + super.toString() +"]";
	}

}
