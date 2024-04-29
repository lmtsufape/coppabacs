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

import br.edu.ufape.lmts.sementes.controller.dto.request.DoencaRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.DoencaResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Doenca;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class DoencaController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("doenca")
	public List<DoencaResponse> getAllDoenca() {
		return facade.getAllDoenca()
			.stream()
			.map(DoencaResponse::new)
			.toList();
	}
	
	@GetMapping(value = "doenca/page")
	public Page<DoencaResponse> getPageDoenca(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Doenca> list = facade.findPageDoenca(pageRequest);
		return list.map(DoencaResponse::new);
	}
	
	@PostMapping("doenca")
	public DoencaResponse createDoenca(@Valid @RequestBody DoencaRequest newObj) {
		return new DoencaResponse(facade.saveDoenca(newObj.convertToEntity()));
	}
	
	@GetMapping("doenca/{id}")
	public DoencaResponse getDoencaById(@PathVariable Long id) {
		return new DoencaResponse(facade.findDoencaById(id));
	}
	
	@PatchMapping("doenca/{id}")
	public DoencaResponse updateDoenca(@PathVariable Long id, @Valid @RequestBody DoencaRequest obj) {
		try {
			//Doenca o = obj.convertToEntity();
			Doenca oldObject = facade.findDoencaById(id);

			TypeMap<DoencaRequest, Doenca> typeMapper = modelMapper
													.typeMap(DoencaRequest.class, Doenca.class)
													.addMappings(mapper -> mapper.skip(Doenca::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new DoencaResponse(facade.updateDoenca(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("doenca/{id}")
	public String deleteDoenca(@PathVariable Long id) {
		try {
			facade.deleteDoenca(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
