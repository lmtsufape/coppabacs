package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.AtividadeRural;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class AgricultorRequest extends UsuarioRequest {
	private String nomePopular;
	private String rendaFamiliar;
	private String numeroPessoas;
	private Double areaPropriedade;
	private String comunidade;
	private long bancoId;
	private List<String> atividadesRurais; 
	//private List<ProducaoSementesRequest> producaoSementes; 
	private List<infraestruturaHidricaRequest> infraestruturaHidrica; 
	private List<UsoOcupacaoTerraRequest> usoOcupacaoTerra; 
	private List<InfraestruturaComunidadeRequest> infraestruturaComunidade; 


	public Agricultor convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Agricultor obj = modelMapper.map(this, Agricultor.class);
		BancoSementes banco = new BancoSementes();
		banco.setId(bancoId);
		obj.setBancoSementes(banco);
		System.out.println("atividades rurais:" +  atividadesRurais);

		obj.setAtividadeRural(atividadesRurais.stream().map(n -> new AtividadeRural(n)).toList());
		System.out.println(obj.toString());
		return obj;
	}
}
