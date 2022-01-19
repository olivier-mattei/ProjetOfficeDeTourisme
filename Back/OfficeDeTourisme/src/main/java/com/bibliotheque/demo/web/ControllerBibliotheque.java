package com.bibliotheque.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bibliotheque.demo.dao.BibliothequeRepository;
import com.bibliotheque.demo.entities.Bibliotheque;

@RestController
public class ControllerBibliotheque 
{
	@Autowired
	private BibliothequeRepository biblioResp;
	
	
	//affichage de tout
	@RequestMapping(value="/getBibliotheques", method= RequestMethod.GET)
	public List<Bibliotheque> getAllBiblio()
	{
		return biblioResp.findAll(); 
	}
	
	//affichage par l'id
	@RequestMapping(value="/getBibliotheques/{id}", method= RequestMethod.GET)
	public Object GetSelectBiblio(@PathVariable Long id)
	{
		return biblioResp.findById(id);
	}
	
	//création
	@RequestMapping(value="/creeBibliotheques", method= RequestMethod.POST)
	public Bibliotheque CreeBiblio(@RequestBody Bibliotheque biblio)
	{
		return biblioResp.save(biblio);
	}
	
	//modificiation d'un seul champ
//	@RequestMapping(value="/editChamp/{id}", method =RequestMethod.PATCH)
//	public Bibliotheque EditBiblioCHamp(@PathVariable Long id ,@RequestBody Bibliotheque biblio)
//	{
//		biblio.setId(id);
//		return biblioResp.findById();
//	}
	
	//modification de plusieurs champ
	@RequestMapping(value="/editBibliotheques/{id}", method =RequestMethod.PUT)
	public Bibliotheque EditBiblio(@PathVariable Long id ,@RequestBody Bibliotheque biblio)
	{
		biblio.setId(id);
		return biblioResp.save(biblio);
	}
	
	//suppression par id
	@RequestMapping(value="/suppressionBibliotheques/{id}", method =RequestMethod.DELETE)
	public boolean SuppressionBiblio(@PathVariable Long id)
	{
		try //si tout marche
		{
			biblioResp.deleteById(id);
			System.out.println("suppression de l'id " + id +" réussi");
			return true;
		}
		
		catch(Exception e) //si une erreur lors du déroulement
		{
			return false;
		}
	}

}
