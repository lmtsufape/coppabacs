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

import br.edu.ufape.lmts.sementes.controller.dto.request.CulturaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.CulturaResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Cultura;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


 @Hidden
@RestController
@RequestMapping("${prefix.url}")
public class CulturaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("cultura")
	public List<CulturaResponse> getAllCultura() {
		return facade.getAllCultura()
			.stream()
			.map(CulturaResponse::new)
			.toList();
	}
	
	@GetMapping(value = "cultura/page")
	public Page<CulturaResponse> getPage(
			@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "24") Integer linesPerPage,
			@RequestParam(defaultValue = "id") String orderBy,
			@RequestParam(defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Cultura> list = facade.findPageCultura(pageRequest);
		return list.map(CulturaResponse::new);
	}
	
	@PostMapping("cultura")
	public CulturaResponse createCultura(@Valid @RequestBody CulturaRequest newObj) {
		return new CulturaResponse(facade.saveCultura(newObj.convertToEntity()));
	}
	
	@GetMapping("cultura/{id}")
	public CulturaResponse getCulturaById(@PathVariable Long id) {
		return new CulturaResponse(facade.findCulturaById(id));
	}
	
	@PatchMapping("cultura/{id}")
	public CulturaResponse updateCultura(@PathVariable Long id, @Valid @RequestBody CulturaRequest obj) {
		try {
			//Cultura o = obj.convertToEntity();
			Cultura oldObject = facade.findCulturaById(id);

			TypeMap<CulturaRequest, Cultura> typeMapper = modelMapper
													.typeMap(CulturaRequest.class, Cultura.class)
													.addMappings(mapper -> mapper.skip(Cultura::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new CulturaResponse(facade.updateCultura(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("cultura/{id}")
	public String deleteCultura(@PathVariable Long id) {
		try {
			facade.deleteCultura(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
