package br.edu.ufape.lmts.sementes.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufape.lmts.sementes.controller.dto.response.PerguntaResponse;
import br.edu.ufape.lmts.sementes.enums.TipoPergunta;

@RestController
@RequestMapping("/api/v1/")
public class PerguntaController {

	@GetMapping("perguntas")
	public List<PerguntaResponse> getAllAdmin() {
		return Arrays.asList(TipoPergunta.values()).stream().map(x -> new PerguntaResponse(x)).toList();
	}
}
