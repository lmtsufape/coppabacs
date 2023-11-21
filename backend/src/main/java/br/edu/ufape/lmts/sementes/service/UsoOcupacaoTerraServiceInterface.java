package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.UsoOcupacaoTerra;

public interface UsoOcupacaoTerraServiceInterface {
	UsoOcupacaoTerra saveUsoOcupacaoTerra(UsoOcupacaoTerra o);
	UsoOcupacaoTerra findUsoOcupacaoTerraById(long id);
	UsoOcupacaoTerra updateUsoOcupacaoTerra(UsoOcupacaoTerra u);
	void deleteUsoOcupacaoTerra(UsoOcupacaoTerra u);
	void deleteUsoOcupacaoTerra(long id);
	List<UsoOcupacaoTerra> getAllUsoOcupacaoTerra();
    
    

    
}