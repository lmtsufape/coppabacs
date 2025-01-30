package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
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

import br.edu.ufape.lmts.sementes.controller.dto.request.DoacaoUsuarioRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.DoacaoUsuarioResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@RestController
@RequestMapping("${prefix.url}")
public class DoacaoUsuarioController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("doacaoUsuario")
	public List<DoacaoUsuarioResponse> getAllDoacaoUsuario() {
		return facade.getAllDoacaoUsuario()
			.stream()
			.map(DoacaoUsuarioResponse::new)
			.toList();
	}
	
	@GetMapping("doacaoUsuario/banco/{bancoId}")
	public List<DoacaoUsuarioResponse> getDoacaoUsuarioByBancoSementesId(@PathVariable Long bancoId) {
		return facade.findDoacaoUsuarioByBancoSementesId(bancoId)
			.stream()
			.map(DoacaoUsuarioResponse::new)
			.toList();
	}
	
	@GetMapping(value = "doacaoUsuario/page")
	public Page<DoacaoUsuarioResponse> getPageDoacaoUsuario(
			@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "24") Integer linesPerPage,
			@RequestParam(defaultValue = "id") String orderBy,
			@RequestParam(defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<DoacaoUsuario> list = facade.findPageDoacaoUsuario(pageRequest);
		return list.map(DoacaoUsuarioResponse::new);
	}
	
	@PostMapping("doacaoUsuario")
	public DoacaoUsuarioResponse createDoacaoUsuario(@Valid @RequestBody DoacaoUsuarioRequest newObj) throws Exception {
		DoacaoUsuario newInstance = newObj.convertToEntity();
		newInstance.setId(0);
		return new DoacaoUsuarioResponse(facade.saveDoacaoUsuario(newInstance));
	}
	
	@GetMapping("doacaoUsuario/{id}")
	public DoacaoUsuarioResponse getDoacaoUsuarioById(@PathVariable Long id) {
		return new DoacaoUsuarioResponse(facade.findDoacaoUsuarioById(id));
	}
	
	@PatchMapping("doacaoUsuario/{id}")
	public DoacaoUsuarioResponse updateDoacaoUsuario(@PathVariable Long id, @Valid @RequestBody DoacaoUsuarioRequest obj) {
		try {
			//DoacaoUsuario o = obj.convertToEntity();
			DoacaoUsuario oldObject = facade.findDoacaoUsuarioById(id);

			TypeMap<DoacaoUsuarioRequest, DoacaoUsuario> typeMapper = modelMapper
													.typeMap(DoacaoUsuarioRequest.class, DoacaoUsuario.class)
													.addMappings(mapper -> mapper.skip(DoacaoUsuario::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new DoacaoUsuarioResponse(facade.updateDoacaoUsuario(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("doacaoUsuario/{id}")
	public String deleteDoacaoUsuario(@PathVariable Long id) {
		try {
			facade.deleteDoacaoUsuario(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
