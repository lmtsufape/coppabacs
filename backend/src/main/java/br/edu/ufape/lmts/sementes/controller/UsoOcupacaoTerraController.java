package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.UsoOcupacaoTerraRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.UsoOcupacaoTerraResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.UsoOcupacaoTerra;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class UsoOcupacaoTerraController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("usoOcupacaoTerra")
	public List<UsoOcupacaoTerraResponse> getAllUsoOcupacaoTerra() {
		return facade.getAllUsoOcupacaoTerra()
			.stream()
			.map(UsoOcupacaoTerraResponse::new)
			.toList();
	}
	
	@PostMapping("usoOcupacaoTerra")
	public UsoOcupacaoTerraResponse createUsoOcupacaoTerra(@Valid @RequestBody UsoOcupacaoTerraRequest newObj) {
		return new UsoOcupacaoTerraResponse(facade.saveUsoOcupacaoTerra(newObj.convertToEntity()));
	}
	
	@GetMapping("usoOcupacaoTerra/{id}")
	public UsoOcupacaoTerraResponse getUsoOcupacaoTerraById(@PathVariable Long id) {
		return new UsoOcupacaoTerraResponse(facade.findUsoOcupacaoTerraById(id));
	}
	
	@PatchMapping("usoOcupacaoTerra/{id}")
	public UsoOcupacaoTerraResponse updateUsoOcupacaoTerra(@PathVariable Long id, @Valid @RequestBody UsoOcupacaoTerraRequest obj) {
		try {
			//UsoOcupacaoTerra o = obj.convertToEntity();
			UsoOcupacaoTerra oldObject = facade.findUsoOcupacaoTerraById(id);

			TypeMap<UsoOcupacaoTerraRequest, UsoOcupacaoTerra> typeMapper = modelMapper
													.typeMap(UsoOcupacaoTerraRequest.class, UsoOcupacaoTerra.class)
													.addMappings(mapper -> mapper.skip(UsoOcupacaoTerra::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new UsoOcupacaoTerraResponse(facade.updateUsoOcupacaoTerra(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("usoOcupacaoTerra/{id}")
	public String deleteUsoOcupacaoTerra(@PathVariable Long id) {
		try {
			facade.deleteUsoOcupacaoTerra(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
