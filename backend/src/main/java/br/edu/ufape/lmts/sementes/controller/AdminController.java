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

import br.edu.ufape.lmts.sementes.controller.dto.request.AdminRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AdminResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Admin;
import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class AdminController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("admin")
	public List<AdminResponse> getAllAdmin() {
		return facade.getAllAdmin()
			.stream()
			.map(AdminResponse::new)
			.toList();
	}
	
	@PostMapping("admin")
	public AdminResponse createAdmin(@Valid @RequestBody AdminRequest newObj) {
		return new AdminResponse(facade.saveAdmin(newObj.convertToEntity()));
	}
	
	@GetMapping("admin/{id}")
	public AdminResponse getAdminById(@PathVariable Long id) {
		return new AdminResponse(facade.findAdminById(id));
	}
	
	@PatchMapping("admin/{id}")
	public AdminResponse updateAdmin(@PathVariable Long id, @Valid @RequestBody AdminRequest obj) {
		try {
			Admin oldObject = facade.findAdminById(id);

			TypeMap<AdminRequest, Admin> typeMapper = modelMapper
													.typeMap(AdminRequest.class, Admin.class)
													.addMappings(mapper -> mapper.skip(Admin::setId));			
			
			typeMapper.map(obj, oldObject);	
			return new AdminResponse(facade.updateAdmin(oldObject));
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	
	@DeleteMapping("admin/{id}")
	public String deleteAdmin(@PathVariable Long id) {
		try {
			facade.deleteAdmin(id);
			return "";
		} catch (RuntimeException e) {
			if (!(e instanceof ObjectNotFoundException))
				throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
			else
				throw e;
		}
		
	}
	

}
