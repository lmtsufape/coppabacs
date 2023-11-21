package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;

public interface RegioesAdaptacaoCultivoServiceInterface {
	RegioesAdaptacaoCultivo saveRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo o);
	RegioesAdaptacaoCultivo findRegioesAdaptacaoCultivoById(long id);
	RegioesAdaptacaoCultivo updateRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo u);
	void deleteRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo u);
	void deleteRegioesAdaptacaoCultivo(long id);
	List<RegioesAdaptacaoCultivo> getAllRegioesAdaptacaoCultivo();
    
    

    
}