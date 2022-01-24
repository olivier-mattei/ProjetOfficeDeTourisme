package com.bibliotheque.demo;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.bibliotheque.demo.dao.BibliothequeRepository;
import com.bibliotheque.demo.dao.LivreRepository;
import com.bibliotheque.demo.entities.Bibliotheque;
import com.bibliotheque.demo.entities.Livre;

import net.bytebuddy.utility.RandomString;

@SpringBootApplication
public class OfficeDeTourismeApplication implements CommandLineRunner
{

	@Autowired
	private BibliothequeRepository bibliothequeRespository;
	
	@Autowired
	private LivreRepository livreRespository;
	
	@Autowired
	private RepositoryRestConfiguration RepositoryConfig;
	
	public static void main(String[] args) {
		SpringApplication.run(OfficeDeTourismeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception 
	{
		RepositoryConfig.exposeIdsFor(Bibliotheque.class);//récupération de mon id
		
//		Bibliotheque bibliotheque1 = new Bibliotheque(null, " Bibliothèque Valeyre ", " 24 rue de Rochechouart  (9e)\n"+ "\n"+ "Adulte, Jeunesse, Discothèque Portage, Pôle langues ", "https://www.api-site.paris.fr/equipements/2019/11/20/10/30/43/789be966-b5b4-471a-91c8-e4a6be66cf41/IMG_20190403_1.jpg",150);
//		Bibliotheque bibliotheque2= new Bibliotheque(null,"Bibliothèque Crimée\n","42 rue Petit  (19e)\n"+ "\n"+ "Adulte, Jeunesse Atelier multimédia, Accompagnement aux devoirs ","https://www.api-site.paris.fr/equipements/2019/10/22/11/14/14/a1885a7a-b4ca-4da5-b593-cded5cfe6f4e/BibliothequesVP.jpg",234);
//		Bibliotheque bibliotheque3= new Bibliotheque(null, "Bibliothèque Sorbier\n", " 17 rue Sorbier  (20e)\n"+ "\n"+ "Jeunesse Accompagnement aux devoirs ", "https://www.api-site.paris.fr/equipements/2019/10/22/11/14/14/a1885a7a-b4ca-4da5-b593-cded5cfe6f4e/BibliothequesVP.jpg",90);
//		Bibliotheque bibliotheque4= new Bibliotheque(null,"Bibliothèque Saint Eloi\n","23 rue du Colonel Rozanoff  (12e)\n"+ "\n"+ "Adulte, Jeunesse, Discothèque, Atelier de conversation, Pôle langues ","https://www.api-site.paris.fr/equipements/2021/08/28/15/04/36/7af099fc-464a-4877-9bc7-d61690e5a668/bibliotheque.jpg",159);
//		Bibliotheque bibliotheque5= new Bibliotheque(null,"Médiathèque Jean-Pierre Melville\n","79 rue Nationale  (13e)\n"+ "\n"+ "Adulte, Jeunesse, Discothèque, Vidéo Portage, Atelier multimédia, Atelier de conversation ","https://www.api-site.paris.fr/equipements/2020/01/17/10/41/38/7eddc94a-378b-4e82-851a-a00ea208b697/BibliothequeJPMelville.jpg",118);
		
		//enregistrement de mon produit dans la bdd
//		bibliothequeRespository.save(bibliotheque1);
//		bibliothequeRespository.save(bibliotheque2);
//		bibliothequeRespository.save(bibliotheque3);
//		bibliothequeRespository.save(bibliotheque4);
//		bibliothequeRespository.save(bibliotheque5);
		
		//affichage de mon serveur
		System.out.println("Test Serveur Back");
		
		this.CreationBibliotheque(8);//création de n bibliothèque
		// TODO Auto-generated method stub
				
				
	}
	
	public void CreationBibliotheque(int NbrBibliothequeACree)//création de n bibliothèque
	{
		for(int iter = 0;iter<NbrBibliothequeACree;iter++)
		{
			//String nomBiblio= "bibliothequeAleatoire"+iter;
			Bibliotheque bibliothequeAleatoire = new Bibliotheque();//instanciation de mon objet de type Bibliotheque

			/////////////////////////////////// je donne mes paramètre aléatoire/////////////////////////////////////////////////
			bibliothequeAleatoire.setNom("Bibliothèques "+this.CreationRandomChaineCharactere(7));
			bibliothequeAleatoire.setDescription(this.CreationRandomChaineCharactere(30));
			//bibliothequeAleatoire.setUrlPhoto(this.CreationRandomChaineCharactere(60)+".jpg"); //cause error dans le log illisible
		 	bibliothequeAleatoire.setUrlPhoto("https://www.api-site.paris.fr/equipements/2019/10/22/11/14/14/a1885a7a-b4ca-4da5-b593-cded5cfe6f4e/BibliothequesVP.jpg");
			bibliothequeAleatoire.setNbrAdherent(this.GenerationNombreRandom(500,2600));
			
			////////////////////////////////////////sauvegarde dans la bdd////////////////////////////////////////////////////////
			bibliothequeRespository.save(bibliothequeAleatoire);
			this.CreationLivre(bibliothequeAleatoire,5);//appelle de ma méthode de création par livre
		}
	}
	
	public void CreationLivre(Bibliotheque bibliothequeAleatoire ,int NbrLivreACree)
	{
		for(int iterLivre = 0;iterLivre<NbrLivreACree;iterLivre++)
		{
			//Livre livre = new Livre(); //création du nouveaux livre
			Livre livre = new Livre(CreationRandomChaineCharactere(15),CreationRandomChaineCharactere(8),CreationRandomChaineCharactere(10),bibliothequeAleatoire);
			/////////////////////////////////// je donne mes paramètre aléatoire/////////////////////////////////////////////////
			//livre.setTitle(CreationRandomChaineCharactere(15)); 
			//livre.setCategorie(CreationRandomChaineCharactere(8));
			//livre.setAuteur(CreationRandomChaineCharactere(10));
			//livre.setBibliotheque(bibliothequeAleatoire);
			
			////////////////////////////////////////sauvegarde dans la bdd////////////////////////////////////////////////////////
			livreRespository.save(livre);
		}
	}

	
	public String CreationRandomChaineCharactere(int NbrCharactereGenerer)// génération 
	{
		String randomString =RandomString.make(NbrCharactereGenerer);
		//System.out.println("generation strinf fonctionelle yes "+ randomString);
		return randomString;
	}
	
	public int  GenerationNombreRandom(int min,int max)
	{
		Random rand = new Random();
		int randomNumber=rand.nextInt(max - min + 1) + min;// génération de mon random
		return randomNumber;
	}

}
