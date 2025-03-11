package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PasswordRequest {
	@NotEmpty(message = "Preenchimento obrigatório")
	@Length(min = 8, message = "A senha deve conter no mínimo 8 caracteres")
	public String senha;
}
