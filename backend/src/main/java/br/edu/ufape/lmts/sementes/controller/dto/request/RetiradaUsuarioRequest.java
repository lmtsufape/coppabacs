package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RetiradaUsuarioRequest {
	private long agricultorId;
	private String descricao;
	private LocalDate data = LocalDate.now();
	private List<ItemRequest> itens;
	private long bancoSementesId;

	public RetiradaUsuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		RetiradaUsuario obj = modelMapper.map(this, RetiradaUsuario.class);
		BancoSementes bancoSementes = new BancoSementes();
		bancoSementes.setId(bancoSementesId);
		obj.setBancoSementes(bancoSementes);
		Agricultor agricultor = new Agricultor();
		agricultor.setId(agricultorId);
		obj.setAgricultor(agricultor);
		if(obj.getData() == null)
			obj.setData(LocalDate.now());
		return obj;
	}

}
