package com.bibliotheque.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bibliotheque.demo.entities.Bibliotheque;
import com.bibliotheque.demo.entities.Livre;

//spring boot s'il te plaît génére moi des données en format JSON
@CrossOrigin("http://localhost:4200") //j'appelle mon font-end 
@RestController
public interface BibliothequeRepository extends JpaRepository<Bibliotheque, Long>
{
	@RestResource(path ="/searchByName")
	public List<Bibliotheque> findByNomContains(@Param ("nom") String TextR);//recherche par nom
	
	@RestResource(path= "/sarchBynbrAdherent")
	public List<Bibliotheque> findBynbrAdherentBetween(@Param ("minNbrAdherent")int minNbrAdherent,@Param("maxNbrAdherent")int maxNbrAdherent);//prend le nombre de participant entre 2 valeur
}
