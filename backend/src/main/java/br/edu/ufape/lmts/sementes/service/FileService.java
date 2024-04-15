package br.edu.ufape.lmts.sementes.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.service.exception.FileException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class FileService implements FileServiceInterface{
	
	@Value("${files.storage}")
	private String location;

	
	public File findFile(String fileName) {
		String caminho = formatedPath(fileName);
		File file = new File(caminho);
		if (file.exists()) {
			return file;
		} else {
			throw new ObjectNotFoundException("It doesn't exist File with name = " + fileName);
		}

	}

	public String storeFile(InputStream file, String fileName) {
		File f = new File(formatedPath(fileName));
		createDir(f.getParentFile());
		try (OutputStream output = new FileOutputStream(f, false)) {
	            file.transferTo(output);
	            return fileName;
		 } catch (IOException e) {
            throw new FileException("Error storing file " + fileName + ": " + e.getMessage());
        }
	}

	public void deleteFile(String fileName) throws ObjectNotFoundException {
		File file = findFile(fileName);
		file.delete();
	}
	
	private void createDir(File dir) {
		if(!dir.exists()) {
			dir.mkdirs();
		}
	}
	
	private String formatedPath(String fileName) {
		return location.replace('*', File.separatorChar).concat(fileName);
	}
}
