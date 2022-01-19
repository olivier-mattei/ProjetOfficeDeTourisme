package com.bibliotheque.demo.entities;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Bibliotheque 
{
	@Id //création de l'id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//incrementation de l'id
	private Long id;
	private String nom;

	@Column(length=1000)//taille de charactére pour l'url
	private String description;
	
	@Column(length=1000)
	private String urlPhoto;
	private int nbrAdherent;
	
	@OneToMany(mappedBy = "bibliotheque")//j'ai ma clé étrangére bibliothèque
	private Collection<Livre> livres; //bibliothèque peut contenir plusieurs livres
	
	public Bibliotheque() 
	{
		super();
	}

	public Bibliotheque(Long id, String nom, String description, String urlPhoto, int nbrAdherent, Collection<Livre> livres) 
	{
		super();
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.urlPhoto = urlPhoto;
		this.nbrAdherent=nbrAdherent;
		this.livres=livres;
	}

	
	public Long getId() 
	{
		return id;
	}

	public void setId(Long id) 
	{
		this.id = id;
	}

	public String getNom() 
	{
		return nom;
	}

	public void setNom(String nom) 
	{
		this.nom = nom;
	}

	public String getDescription() 
	{
		return description;
	}

	public void setDescription(String description) 
	{
		this.description = description;
	}

	public String getUrlPhoto() 
	{
		return urlPhoto;
	}

	public void setUrlPhoto(String urlPhoto)
	{
		this.urlPhoto = urlPhoto;
	}
	
	public int getNbrAdherent() {
		return nbrAdherent;
	}

	public void setNbrAdherent(int nbrAdherent) {
		this.nbrAdherent = nbrAdherent;
	}
			
}
