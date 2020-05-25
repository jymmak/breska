package com.spring.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.model.Product;
import com.spring.repo.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {
	@Autowired
	ProductRepository repository;

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		System.out.println("Get all products...");

		List<Product> products = new ArrayList<>();
		repository.findAll().forEach(products::add);
		return products;

	}

	@PostMapping(value = "/products/create")
	public Product postProduct(@RequestBody Product product) {
		Product _product = repository
				.save(new Product(product.getName(), product.getPrice(), product.getDescription()));
		return _product;
	}

	@DeleteMapping(value = "/products/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") long id) {
		System.out.println("Delete Product with ID = " + id + "...");
		repository.deleteById(id);
		return new ResponseEntity<>("Product has been deleted", HttpStatus.OK);
	}

	

}
