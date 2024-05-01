package br.edu.ufape.lmts.sementes.config;

import java.time.format.DateTimeFormatter;
import java.util.TimeZone;

import org.modelmapper.ModelMapper;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

@Configuration
public class ModelMapperBeanConfiguration {
	
	private static final String dateFormat = "dd-MM-yyyy";
    private static final String dateTimeFormat = "dd-MM-yyyy HH:mm:ss";
	
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setSkipNullEnabled(true);
		return modelMapper;
	}
	
	@Bean
	public Jackson2ObjectMapperBuilderCustomizer jsonCostomizer() {
		return builder -> {
			builder.simpleDateFormat(dateTimeFormat);
			builder.serializers(new LocalDateSerializer(DateTimeFormatter.ofPattern(dateFormat)));
			builder.serializers(new LocalDateTimeSerializer(DateTimeFormatter.ofPattern(dateTimeFormat)));
	        builder.timeZone(TimeZone.getTimeZone("America/Sao_Paulo"));
		};
	}
}