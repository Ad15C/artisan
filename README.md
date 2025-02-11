# Présentation du Projet

Ce projet consiste en la création d'une plateforme permettant de trouver des artisans dans la région Auvergne-Rhône-Alpes. 
L'objectif étant d'offrir aux utilisateurs une interface simple pour trouver un artisan près de chez eux, ainsi qu'un formulaire de contact pour envoyer des demandes. 
Le formulaire est temporairement configuré pour envoyer les demandes à l'administrateur, mais dans le futur, chaque artisan recevra les demandes directement.

# Technologies utilisées 

- **GitHub** : Gestion du code source.
- **VSCode** : IDE utilisé pour le développement.
- **HTML5, Sass, JS, AngularJS** : Technologies principales pour la création de l'interface utilisateur.
- **Node.js, NPM** : Environnement de développement et gestion des dépendances.
- **Figma** : Outil de design pour l'interface graphique.
- **EmailJS** : Service pour l'envoi des emails via le formulaire de contact.
- **AlwaysData** : Hébergement de la plateforme.

# Installation du projet (Projet utilisant AngularJS)

Voici les différentes lignes de commandes qui vous seront utiles:

## Clôner le projet depuis Github
    git clone [https://github.com/Ad15C/Artisan.git]
    cd Artisan

## Installation de Node.js et npm
node -v
npm -v

## Installation des dépendances
npm install

## Installation de Bootstrap et Sass
npm install bootstrap
npm install sass

## Lancement de l'éditeur de code
code .

## Démarrer le serveur de développement Angular
ng serve et vous aurait un lien [`http://localhost:4200/`] qui vous permettra de voir le projet dans votre navigateur.

# Identité Graphique

## Police utilisée 
- **Graphik** : La police utilisée pour tout le texte du site.

## Palette de couleurs:
- **#f1f8fc** : Fond des sections, du header et du formulaire, texte du footer.
- **#0074c7** : Footer, étoiles, texte au survol du bouton de recherche, sections d'accordéon (A propos, Nos informations, Formulaire de contact), et bouton "Envoyer votre demande".
- **#00497c** : Fond des étoiles, contour de la barre de recherche, bouton de recherche.
- **#384050** : Texte général.
- **#0074c736** : Survol des cartes d'artisans.

# Images

Les favicons ont été téléchargés sur le site [Flaticon](https://www.flaticon.com), et ont été personnalisés selon la charte graphique du projet.
Les images utilisées dans ce projet sont libres de droit.
Le logo et favicon de la région Auvergne-Rhône-Alpes ont été par la région pour une utilisation sur la plateforme.

# Pré requis pour la plateforme

## Header  

**Présent sur toutes les pages**
Il contient :
Un menu de navigation vers les pages : **Bâtiment**, **Fabrication**, **Service**, **Alimentation**.
Le logo de la région Auvergne-Rhône-Alpes.
Une barre de recherche.

## Footer 

**Identique sur toutes les pages**
Il contient:
L'**adresse**, les **coordonnées téléphoniques**, les **horaires d'ouverture** de l'antenne de Lyon,
Les liens vers les **réseaux sociaux** et les **pages légales**

## Pages Principales

- **Page d'Accueil** : Présente un aperçu du fonctionnement de la plateforme et le top 3 des artisans du mois. Chaque artisan est cliquable et mène à une page de détails.
- **Page par catégorie d'artisan** : Affiche une liste d'artisans par catégorie avec une brève description (nom, localisation, note). Chaque artisan est cliquable.
- **Page Fiche Artisan** : Détaille toutes les informations nécessaires sur un artisan, avec un formulaire de contact.
- **Page Erreur** : Si un utilisateur clique sur un lien incorrect, il est redirigé vers une page d'erreur avec un lien pour retourner à la page d'accueil.

 Il a été également demander d'**héberger** la plateforme en ligne, et cela a été fait par le biais de **Always Data**.

# Structure du projet

- **public/** : Contient les fichiers statiques (CSS, images, etc.).
  - **styles/** : Fichiers CSS compilés.
  
- **src/** : Contient le code source de l'application.
  - **app/** : Contient les composants Angular.
  - **assets/** : Contient les ressources statiques (images, icônes).
  - **environnements/** : Configuration de l'environnement Angular (prod, dev).
  - **index.html** : Le fichier principal HTML de l'application.
  - **main.ts** : Le fichier principal de démarrage de l'application Angular.
  - **styles.scss** : Fichier de styles principal.

- **editoringconfig**:  Fichier de configuration utilisé pour définir des règles de formatage et de style de code au sein d'un projet.
- **.gitignore** : Fichiers et dossiers ignorés par Git.
- **angular.json** : Configuration du projet Angular.
- **package-lock.json** : Fichier qui verrouille les versions exactes des dépendances installées pour garantir que l'application fonctionne de façon cohérente.
- **package.json** : Liste des dépendances et scripts de développement.
- **README.md** : Ce fichier.
- **server.ts** : Fichier utilisé dans des projets Angular avec un serveur Node.js pour servir l'application côté serveur.
- **tsconfig.app.json** : Fichier contenant la configuration spécifique de TypeScript pour l'application Angular.
- **tsconfig.json** : Configuration TypeScript.
- **tsconfig.spec.json** : permet de configurer le compilateur TypeScript pour gérer les fichiers de tests.

# Informations complémentaires

Pour toute question ou demande d'information supplémentaire sur ce projet, n'hésitez pas à me contacter via email **ad15canon@gmail.com**

