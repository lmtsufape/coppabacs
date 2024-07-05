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
import org.springframework.http.ResponseEntity;
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

import br.edu.ufape.lmts.sementes.controller.dto.request.GerenteRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.GerenteUpdateRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.GerenteResponse;
import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.Gerente;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class GerenteController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("gerente")
	public List<GerenteResponse> getAllGerente() {
		return facade.getAllGerente()
			.stream()
			.filter(gerente -> gerente.getRoles().contains(TipoUsuario.GERENTE))
			.map(GerenteResponse::new)
            .collect(Collectors.toList());
	}
	
	@GetMapping(value = "gerente/page")
	public Page<GerenteResponse> getPageGerente(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<Gerente> list = facade.findPageGerente(pageRequest);
		return list.map(GerenteResponse::new);
	}
	
	@PostMapping("gerente")
	public GerenteResponse createGerente(@RequestBody GerenteRequest newObj) throws EmailExistsException {
		Gerente g = newObj.convertToEntity();
		BancoSementes banco = new BancoSementes();
		banco.setId(newObj.getBancoId());
		g.setBancoSementes(banco);
		return new GerenteResponse(facade.saveGerente(g));
	}
	
	@GetMapping("gerente/{id}")
	public GerenteResponse getGerenteById(@PathVariable Long id) {
		return new GerenteResponse(facade.findGerenteById(id));
	}
	@GetMapping("gerente/e/{email}")
	public GerenteResponse getGerenteByEmail(@PathVariable String email) {
		return new GerenteResponse(facade.findGerenteByEmail(email));
	}

	@GetMapping("gerente/cpf/{cpf}")
	public GerenteResponse getGerenteByCpf(@PathVariable String cpf) {
		return new GerenteResponse(facade.findGerenteByCpf(cpf));
	}
	
	@PatchMapping("gerente/{id}")
	public GerenteResponse updateGerente(@PathVariable Long id, @RequestBody GerenteUpdateRequest obj) {
		try {
			Gerente oldObject = facade.findGerenteById(id);
			modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());

			TypeMap<GerenteUpdateRequest, Gerente> typeMapper = modelMapper
			        .typeMap(GerenteUpdateRequest.class, Gerente.class)
			        .addMappings(mapper -> mapper.skip(Gerente::setId));
			
			typeMapper.map(obj, oldObject);	
			return new GerenteResponse(facade.updateGerente(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("gerente/{id}")
	public String deleteGerente(@PathVariable Long id) {
		try {
			facade.deleteGerente(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	@PatchMapping("/gerente/agricultor/{id}")
	public ResponseEntity<String> validateAgricultor(@PathVariable Long id) {
		facade.validateAgricultor(id);
		return ResponseEntity.status(HttpStatus.OK).body("Agricultor autorizado com sucesso.");
		
	}

}
