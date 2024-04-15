package br.edu.ufape.lmts.sementes.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.edu.ufape.lmts.sementes.facade.Facade;
import io.swagger.v3.oas.annotations.Hidden;

@CrossOrigin(origins = "http://localhost:8081/")
@Hidden
@RestController
@RequestMapping("/api/v1/")
public class FileController {
	@Autowired
	private Facade facade;

	@GetMapping(value = "arquivos/{filename}", produces = MediaType.ALL_VALUE)
	public ResponseEntity<byte[]> getFile(@PathVariable String filename) throws IOException {
		File file = facade.findFile(filename);
		byte[] bytes = StreamUtils.copyToByteArray(new FileInputStream(file));
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(bytes);

	}

	@PostMapping("arquivos")
	public List<String> storageFile(@RequestParam(name = "file") List<MultipartFile> files) throws IOException {
		List<String> filenames = new ArrayList<>();
		for (MultipartFile file : files) {
			filenames.add(facade.storeFile(file.getInputStream(), file.getOriginalFilename()));
		}
		return filenames;
	}

	@DeleteMapping("arquivos/{filename}")
	public void deleteFile(@PathVariable String filename) {
		facade.deleteFile(filename);
	}
}
