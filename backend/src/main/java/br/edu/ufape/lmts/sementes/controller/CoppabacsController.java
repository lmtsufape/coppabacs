package br.edu.ufape.lmts.sementes.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.Conditions;
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

import br.edu.ufape.lmts.sementes.controller.dto.request.CoppabacsRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.CoppabacsUpdateRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.CoppabacsResponse;
import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import jakarta.validation.Valid;

@CrossOrigin (origins = "http://localhost:8081" )
@RestController
@RequestMapping("/api/v1/")
public class CoppabacsController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	
	@GetMapping("coppabacs")
	public List<CoppabacsResponse> getAllCoppabacs() {
		System.out.println("oi");
		return facade.getAllCoppabacs()
				.stream()
				.filter(coppabacs -> coppabacs.getRoles().contains(TipoUsuario.COPPABACS))
				.map(CoppabacsResponse::new)
				.collect(Collectors.toList());
	}
	
	@GetMapping(value = "coppabacs/page")
	public Page<CoppabacsResponse> getPageCoppabacs(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Coppabacs> list = facade.findPageCoppabacs(pageRequest);
		return list.map(CoppabacsResponse::new);
	}
	
	@PostMapping("coppabacs")
	public CoppabacsResponse createCoppabacs(@Valid @RequestBody CoppabacsRequest newObj) throws EmailExistsException {
		return new CoppabacsResponse(facade.saveCoppabacs(newObj.convertToEntity()));
	}
	
	@GetMapping("coppabacs/{id}")
	public CoppabacsResponse getCoppabacsById(@PathVariable long id) {
		try {
			return new CoppabacsResponse(facade.findCoppabacsById(id));
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Coppabacs " + id + " not found.");
		}
	}
	
	@PatchMapping("coppabacs/{id}")
	public CoppabacsResponse updateCoppabacs(@PathVariable long id, @Valid @RequestBody CoppabacsUpdateRequest obj) {
		try {
			Coppabacs oldObject = facade.findCoppabacsById(id);
			modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
			TypeMap<CoppabacsUpdateRequest, Coppabacs> typeMapper = modelMapper
													.typeMap(CoppabacsUpdateRequest.class, Coppabacs.class)
													.addMappings(mapper -> mapper.skip(Coppabacs::setId));
			typeMapper.map(obj, oldObject);
			return new CoppabacsResponse(facade.updateCoppabacs(oldObject));
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
		}
	}
	
	@DeleteMapping("coppabacs/{id}")
	public String deleteCoppabacs(@PathVariable long id) {
		try {
			facade.deleteCoppabacs(id);
			return "";
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
		}
	}
	
}
