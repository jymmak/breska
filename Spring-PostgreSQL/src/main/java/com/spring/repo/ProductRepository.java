package com.spring.repo;

import org.springframework.data.repository.CrudRepository;

import com.spring.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
