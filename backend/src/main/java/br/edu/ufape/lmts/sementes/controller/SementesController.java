package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.SementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.SementesResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Sementes;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class SementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("sementes")
	public List<SementesResponse> getAllSementes() {
		return facade.getAllSementes()
			.stream()
			.map(SementesResponse::new)
			.toList();
	}
	
	@PostMapping("sementes")
	public SementesResponse createSementes(@Valid @RequestBody SementesRequest newObj) {
		return new SementesResponse(facade.saveSementes(newObj.convertToEntity()));
	}
	
	@GetMapping("sementes/{id}")
	public SementesResponse getSementesById(@PathVariable Long id) {
		return new SementesResponse(facade.findSementesById(id));
	}
	
	@GetMapping("sementes/responsavel-tecnico/{ResponsavelTecnicoId}")
	public List<SementesResponse> getSementesByResponsavelTecnicoId(@PathVariable Long ResponsavelTecnicoId) {
		return facade.findSementesByResponsavelTecnico(ResponsavelTecnicoId)
			.stream()
			.map(SementesResponse::new)
			.toList();
	}
	
	@PatchMapping("sementes/{id}")
	public SementesResponse updateSementes(@PathVariable Long id, @Valid @RequestBody SementesRequest obj) {
		try {
			//Sementes o = obj.convertToEntity();
			Sementes oldObject = facade.findSementesById(id);

			TypeMap<SementesRequest, Sementes> typeMapper = modelMapper
													.typeMap(SementesRequest.class, Sementes.class)
													.addMappings(mapper -> mapper.skip(Sementes::setId));
			oldObject.setResponsavelTecnico(null);
			oldObject.setFinalidades(null);
			//oldObject.setCultura(null);
			typeMapper.map(obj, oldObject);	
			//oldObject.setCultura(obj.getCultura().convertToEntity());
			oldObject.setResponsavelTecnico(obj.getResponsavelTecnico().convertToEntity());
			return new SementesResponse(facade.updateSementes(oldObject));
		} catch (RuntimeException e) {
			
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("sementes/{id}")
	public String deleteSementes(@PathVariable Long id) {
		try {
			facade.deleteSementes(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@GetMapping(value = "sementes/search")
	public Page<SementesResponse> searchPageSementesByNomeAndDescricao(
			@RequestParam(value = "value", defaultValue = "") String value,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Sementes> list = facade.searchPageSementes(value, pageRequest);
		return list.map(SementesResponse::new);
	}
	
}
