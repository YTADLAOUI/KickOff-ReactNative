Ce projet React Native est une application mobile permettant aux utilisateurs de suivre les matchs de football, d'accéder aux détails des matchs et de découvrir des informations sur les joueurs.

## Clonage du Projet

```bash
git clone https://github.com/YTADLAOUI/KickOff-ReactNative.git
cd KickOff-ReactNative.git  
```
## Configuration de l'Environnement
Avant de lancer l'application, assurez-vous d'avoir les éléments suivants installés sur votre machine :

 - Node.js (version recommandée)
 - npm (installé avec Node.js)
 - React Native Expo
## Installation des Dépendances
Dans le répertoire du projet, exécutez la commande suivante pour installer toutes les dépendances nécessaires :
```bash
    npm install  
```
## Lancement de l'Application
Pour lancer l'application sur un émulateur ou un appareil physique, utilisez la commande suivante :

```bash
    npm run start
        ou
    npx react-native run-android
    # ou
    npx react-native run-ios  
```
Assurez-vous d'avoir un émulateur Android/iOS en cours d'exécution ou un appareil connecté à votre machine.

## Fonctionnalités
### Écran 1: Matchs
- Affiche une liste des matchs de football.
- Deux boutons de filtrage : "Tous les matchs" et "Matchs en direct".
- Possibilité de sauvegarder un match dans l'écran des favoris.
### Écran 2: Détails du Match
- Affiche des informations détaillées sur un match sélectionné.
- Bouton pour retourner à l'écran des matchs.
###  Écran 3: Joueurs
- Affiche une liste de tous les joueurs avec leur photo et leur nom complet.
- Possibilité de rechercher un joueur par son nom.
- Navigation vers l'écran de détails du joueur en cliquant sur un joueur.
### Écran 4: Détails du Joueur
- Affiche des informations détaillées sur un joueur sélectionné.
- Option pour revenir à l'écran des joueurs.
## Contribution
Les contributions sont les bienvenues! Si vous souhaitez améliorer ou ajouter des fonctionnalités, n'hésitez pas à ouvrir une pull request.

## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE.md pour plus de détails.
