# Micro Frontend avec Webpack Module Federation

Ce projet est une démonstration unique de l'utilisation de **Webpack Module Federation** (natif de Webpack 5) pour structurer une application en **Micro Frontends**.

## Structure du projet
- `main-app/` : L’application hôte qui charge dynamiquement le micro-frontend.
- `navbar-app/` : Le micro-frontend représentant une barre de navigation indépendante.
- `.gitignore` : Exclut `node_modules` et `dist/` du versionnement.

## Installation des dépendances
Exécutez la commande suivante **dans chaque dossier (`main-app/` et `navbar-app/`)** :

```sh
npm install
```

## Lancer l'application
Ouvrez **deux terminaux distincts** et exécutez les commandes suivantes :

```sh
# Lancer le micro-frontend navbar-app
cd navbar-app
npm start
```

```sh
# Lancer l'application principale main-app
cd main-app
npm start
```

Ensuite, ouvrez **`http://localhost:3200`** dans votre navigateur.