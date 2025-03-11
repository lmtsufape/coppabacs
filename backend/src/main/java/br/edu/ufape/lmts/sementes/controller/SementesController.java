package br.edu.ufape.lmts.sementes.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
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
import br.edu.ufape.lmts.sementes.model.Finalidade;
import br.edu.ufape.lmts.sementes.model.Sementes;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


 @RestController
@RequestMapping("${prefix.url}")
public class SementesController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;

	@PreAuthorize("permitAll()")
	@GetMapping("sementes")
	public List<SementesResponse> getAllSementes() {
		return facade.getAllSementes()
			.stream()
			.map(SementesResponse::new)
			.toList();
	}

	@PreAuthorize("permitAll()")
	@GetMapping("sementes/banco/{bancoId}")
	public List<SementesResponse> getAllSementesByBanco(@PathVariable long bancoId) {
		return facade.getAllSementesByBanco(bancoId)
				.stream()
				.map(SementesResponse::new)
				.toList();
	}
	
	@GetMapping(value = "sementes/page")
	public Page<SementesResponse> getPageSementePraga(
			@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "24") Integer linesPerPage,
			@RequestParam(defaultValue = "id") String orderBy,
			@RequestParam(defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Sementes> list = facade.findPageSementes(pageRequest);
		return list.map(SementesResponse::new);
	}

	@PostMapping("sementes")
	public SementesResponse createSementes(@Valid @RequestBody SementesRequest newObj) {
		return new SementesResponse(facade.saveSementes(newObj.convertToEntity()));
	}

	@PreAuthorize("permitAll()")
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
			Sementes oldObject = facade.findSementesById(id);

			TypeMap<SementesRequest, Sementes> typeMapper = modelMapper
													.typeMap(SementesRequest.class, Sementes.class)
													.addMappings(mapper -> mapper.skip(Sementes::setId))
													.addMappings(mapper -> mapper.skip(Sementes::setFinalidades));
			obj.convertToEntity().getFinalidades().forEach(x->System.out.println(x));
			List<Finalidade> finalidades = new ArrayList<>();
			obj.convertToEntity().getFinalidades().forEach(x -> {
				finalidades.add(facade.saveFinalidade(x));
			});
			typeMapper.map(obj, oldObject);
			oldObject.setFinalidades(finalidades);
			oldObject.setResponsavelTecnico(obj.getResponsavelTecnico().convertToEntity());
			return new SementesResponse(facade.updateSementes(oldObject));
		} catch (RuntimeException e) {
			
			if (!(e instanceof ObjectNotFoundException))
				throw e;
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
			@RequestParam(defaultValue = "") String value,
			@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "24") Integer linesPerPage,
			@RequestParam(defaultValue = "id") String orderBy,
			@RequestParam(defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Sementes> list = facade.searchPageSementes(value, pageRequest);
		return list.map(SementesResponse::new);
	}
	
}
