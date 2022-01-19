package com.bibliotheque.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Livre
{
	@Id //création de l'id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//incrementation de l'id
	private Long id;
	
	@Column(length=50)//50 charactère max
	private String title;
	private String auteur;
	private String categorie;
	
	@ManyToOne
	private Bibliotheque bibliotheque;

	public Livre() 
	{
		super();
	}

	public Livre(String title, String auteur, String categorie, Bibliotheque biblioLivre) 
	{
		super();
		this.title = title;
		this.auteur = auteur;
		this.categorie = categorie;
		this.bibliotheque= biblioLivre;//récupération
	}

	public Bibliotheque getBibliotheque()
	{
		return bibliotheque;
	}

	public void setBibliotheque(Bibliotheque bibliotheque) 
	{
		this.bibliotheque = bibliotheque;
	}

	public String getTitle() 
	{
		return title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getAuteur()
	{
		return auteur;
	}

	public void setAuteur(String auteur)
	{
		this.auteur = auteur;
	}

	public String getCategorie() 
	{
		return categorie;
	}

	public void setCategorie(String categorie) 
	{
		this.categorie = categorie;
	}	
}
