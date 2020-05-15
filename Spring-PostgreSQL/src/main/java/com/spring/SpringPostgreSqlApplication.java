package com.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.spring.repo.ProductRepository;

@SpringBootApplication
public class SpringPostgreSqlApplication {
	@Autowired
	ProductRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringPostgreSqlApplication.class, args);
	}

}
