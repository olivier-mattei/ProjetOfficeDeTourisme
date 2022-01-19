package com.bibliotheque.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bibliotheque.demo.entities.Livre;

@CrossOrigin("http://localhost:4200") //j'appelle mon font-end 
@RestController
public interface LivreRepository extends JpaRepository<Livre, Long>
{
	
}
