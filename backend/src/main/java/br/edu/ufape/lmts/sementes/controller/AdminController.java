package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.controller.dto.request.AdminRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.AdminResponse;


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
		try {
			return new AdminResponse(facade.findAdminById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Admin " + id + " not found.");
		}
	}
	
	@PatchMapping("admin/{id}")
	public AdminResponse updateAdmin(@PathVariable Long id, @Valid @RequestBody AdminRequest obj) {
		try {
			//Admin o = obj.convertToEntity();
			Coppabacs oldObject = facade.findAdminById(id);

			TypeMap<AdminRequest, Coppabacs> typeMapper = modelMapper
													.typeMap(AdminRequest.class, Coppabacs.class)
													.addMappings(mapper -> mapper.skip(Coppabacs::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new AdminResponse(facade.updateAdmin(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("admin/{id}")
	public String deleteAdmin(@PathVariable Long id) {
		try {
			facade.deleteAdmin(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	

}
