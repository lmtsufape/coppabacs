package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.CaracteristicasAgronomicasRepository;
import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;

@Service
public class CaracteristicasAgronomicasService implements CaracteristicasAgronomicasServiceInterface {
	@Autowired
	private CaracteristicasAgronomicasRepository repository;


	public CaracteristicasAgronomicas saveCaracteristicasAgronomicas(CaracteristicasAgronomicas newInstance) {
		return repository.save(newInstance);
	}

	public CaracteristicasAgronomicas updateCaracteristicasAgronomicas(CaracteristicasAgronomicas transientObject) {
		return repository.save(transientObject);
	}

	public CaracteristicasAgronomicas findCaracteristicasAgronomicasById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist CaracteristicasAgronomicas with id = " + id));
	}

	public List<CaracteristicasAgronomicas> getAllCaracteristicasAgronomicas(){
		return repository.findAll();
	}

	public void deleteCaracteristicasAgronomicas(CaracteristicasAgronomicas persistentObject){
		this.deleteCaracteristicasAgronomicas(persistentObject.getId());
		
	}
	
	public void deleteCaracteristicasAgronomicas(long id){
		CaracteristicasAgronomicas obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist CaracteristicasAgronomicas with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}