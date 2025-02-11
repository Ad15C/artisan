import { Injectable } from '@angular/core';
import { Artisan } from './artisan.model';
import { Observable, of } from 'rxjs';

export enum Category {
    Batiment = "Bâtiment",
    Fabrication = "Fabrication",
    Alimentation = "Alimentation",
    Services = "Services"
}
@Injectable({
  providedIn: 'root'
})

export class ArtisansService {
 artisans: Artisan[] = [
	{
		"id": 1,
		"name": "Vallis Bellemare",
		"specialty": "Plombier",
		"note": 4,
		"location": "Vienne",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"v.bellemare@gmail.com",
		"website":"https://plomberie-bellemare.com",
		"category":"Bâtiment",
		"top": false
	},
	{
		"id": 2,
		"name": "Amitee Lécuyer",
		"specialty": "Couturier",
		"note": 4.5,
		"location": "Annecy",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"a.amitee@hotmail.com",
		"website":"https://lecuyer-couture.com",
		"category":"Fabrication",
		"top": false
	},
	{
		"id": 3,
		"name": "Leala Dennis",
		"specialty": "Coiffeur",
		"note": 3.8,
		"location": "Chambéry",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"l.dennos@hotmail.fr",
		"website":"https://coiffure-leala-chambery.fr",
		"category":"Services",
		"top": false
	},
	{
		"id": 4,
		"name": "Chocolaterie Labbé",
		"specialty": "Chocolatier",
		"note": 4.9,
		"location": "Grenoble",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"chocolaterie-labbe@gmail.com",
		"website":"https://chocolaterie-labbe.fr",
		"category":"Alimentation",
		"top": true
	},
	{
		"id": 5,
		"name": "Claude Quinn",
		"specialty": "Bijoutier",
		"note": 4.2,
		"location": "Aix-les-bains",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"claude.quinn@gmail.com",
		"website":"",
		"category":"Fabrication",
		"top": false
	},
	{
		"id": 6,
		"name": "Valérie Laderoute",
		"specialty": "Toiletteur",
		"note": 4.5,
		"location": "Valence",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"v-laredoute@gmail.com",
		"website":"",
		"category":"Services",
		"top": false
	},
	{
		"id": 7,
		"name": "Boutot & fils",
		"specialty": "Menuisier",
		"note": 4.7,
		"location": "Bourg-en-bresse",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"boutot-menuiserie@gmail.com",
		"website":"https://boutot-menuiserie.com",
		"category":"Bâtiment",
		"top": false
	},
	{
		"id": 8,
		"name": "CM Graphisme",
		"specialty": "Webdesign",
		"note": 4.4,
		"location": "Valence",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"contact@cm-graphisme.com",
		"website":"https://cm-graphisme.com",
		"category":"Services",
		"top": false
	},
	{
		"id": 9,
		"name": "Orville Salmons",
		"specialty": "Chauffagiste",
		"note": 5,
		"location": "Evian",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"o-salmons@live.com",
		"website":"",
		"category":"Bâtiment",
		"top": true
	},
	{
		"id": 10,
		"name": "Au pain chaud",
		"specialty": "Boulanger",
		"note": 4.8,
		"location": "Montélimar",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"aupainchaud@hotmail.com",
		"website":"",
		"category":"Alimentation",
		"top": true
	},
	{
		"id": 11,
		"name": "Boucherie Dumont",
		"specialty": "Boucher",
		"note": 4.5,
		"location": "Lyon",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"boucherie.dumond@gmail.com",
		"website":"",
		"category":"Alimentation",
		"top": false
	},
	{
		"id": 12,
		"name": "Mont Blanc Eléctricité",
		"specialty": "Electricien",
		"note": 4.5,
		"location": "Chamonix",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"contact@mont-blanc-electricite.com",
		"website":"https://mont-blanc-electricite.com",
		"category":"Bâtiment",
		"top": false
	},
	{
		"id": 13,
		"name": "Traiteur Truchon",
		"specialty": "Traiteur",
		"note": 4.1,
		"location": "Privas",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"contact@truchon-traiteur.fr",
		"website":"https://truchon-traiteur.fr",
		"category":"Alimentation",
		"top": false
	},
	{
		"id": 14,
		"name": "Le monde des fleurs",
		"specialty": "Fleuriste",
		"note": 4.6,
		"location": "Annonay",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"contact@le-monde-des-fleurs-annonay.fr",
		"website":"https://le-monde-des-fleurs-annonay.fr",
		"category":"Services",
		"top": false
	},
	{
		"id": 15,
		"name": "Royden Charbonneau",
		"specialty": "Carrossier",
		"note": 3.8,
		"location": "Saint-Priest",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"r.charbonneau@gmail.com",
		"website":"",
		"category":"Services",
		"top": false
	},
	{
		"id": 16,
		"name": "Ernest Carignan",
		"specialty": "Ferronier",
		"note": 5,
		"location": "Le Puy-en-Velay",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"e-carigan@hotmail.com",
		"website":"",
		"category":"Fabrication",
		"top": false
	},
	{
		"id": 17,
		"name": "C'est sup'hair",
		"specialty": "Coiffeur",
		"note": 4.1,
		"location": "Romans-sur-Isère",
		"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		"email":"sup-hair@gmail.com",
		"website":"https://sup-hair.fr",
		"category":"Services",
		"top": false
	}
];

private categoryImages: { [key in Category]: string } = {
	[Category.Batiment]: "assets/favicons/batiment.png",
	[Category.Fabrication]: "assets/favicons/fabrication.png",
	[Category.Alimentation]: "assets/favicons/alimentation.png",
	[Category.Services]: "assets/favicons/service.png",
};

private categoryNames: string[] = Object.values(Category);

constructor () {}

/* Retourne la liste des artisans avec les images associées */
getArtisans(): (Artisan & { image: string })[] {
	return this.artisans.map(artisan => {
		const image = this.categoryImages[artisan.category as Category] || "assets/favicons/favicon-32.png";
		return {
			...artisan,
			image: image
		};
	});
}

/* Retourne les trois artisans ayant la meilleure note et étant notés comme top*/
getTop3Artisans(): Artisan[] {
	return this.artisans
        .filter(artisan => artisan.top)
        .sort((a, b) => b.note - a.note)
        .slice(0, 3)
        .map(artisan => {
            const image = this.categoryImages[artisan.category as Category] || "assets/favicons/favicon-32.png";
            return { ...artisan, image }; /* Ajoute l'image à l'artisan */
        });
}

/* Retourne les noms des catégories */
getCategoryNames(): string[] {
	return this.categoryNames;
}

/* Retourne un artisan en fonction de son nom */
getArtisanByName(name: string | undefined): Artisan | undefined {
	/* Vérification que le nom est défini */
	if (!name) return undefined; 
	return this.artisans.find(artisan => artisan.name.toLowerCase().replace(/\s+/g, '-') === name);
  }

 /* Méthode pour mettre à jour la note de l'artisan */
 updateNote(artisanId: number, newNote: number): Observable<Artisan> {
    const artisan = this.artisans.find(a => a.id === artisanId);
    
    if (artisan) {
      artisan.note = newNote;  /* Mise à jour de la note */
      return of(artisan);  /* Retourne l'artisan mis à jour dans un Observable */
    } else {
      throw new Error('Artisan non trouvé');
    }
  }
}

  
