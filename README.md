# ☕️ JS → CoffeeScript Converter

Ce projet est un outil web moderne qui permet de convertir facilement du code JavaScript en CoffeeScript avec une interface intuitive et élégante.

## 🚀 Fonctionnalités

- **Conversion instantanée** : Transformez votre code JavaScript en CoffeeScript en temps réel
- **Coloration syntaxique** : Visualisation claire grâce à Prism.js pour les deux langages
- **Interface responsive** : Utilisation confortable sur tous les appareilsé

## 🛠️ Technologies

- **TypeScript** comme langage de développement principal
- **Vite** pour le bundling et le développement rapide
- **js2coffee** pour la conversion du code
- **Prism.js** pour la coloration syntaxique

## 📁 Structure du projet

```
js2coffee-app
├── .vscode
├── node_modules
├── public
├── src
│   └── maint.ts
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
```

## 🔧 Installation

1. Clonez le dépôt
2. Installez les dépendances avec `npm install`
3. Lancez en mode développement avec `npm run dev`
4. Ouvrez `localhost:5173`

## 🖥️ Code test

```JavaScript
function greet(name) {
  if (name) {
    console.log("Bonjour, " + name + " !");
  } else {
    console.log("Bonjour, invité !");
  }
}

greet("Name");
```

## 📋 Prérequis

- Node.js 16+
- npm ou yarn

## 📦 Dépendances principales

- **js2coffee** : Bibliothèque de conversion JS → CoffeeScript
- **prismjs** : Coloration syntaxique
- **typescript** : Support TypeScript
- **vite** : Serveur de développement et bundler

## 🖥️ Interface utilisateur

L'interface utilisateur est divisée en trois parties principales :

1. **En-tête** : Titre de l'application
2. **Éditeurs de code** : 
   - Panneau en haut pour le code JavaScript
   - Panneau en bas pour le résultat en CoffeeScript

## 🔄 Flux de travail

1. L'utilisateur saisit ou colle du code JavaScript dans l'éditeur en haut
2. Il clique sur le bouton "Convertir"
3. Le résultat s'affiche dans l'éditeur en bas avec la coloration syntaxique

## 🔍 Fonctionnement interne

Le convertisseur s'appuie sur la bibliothèque js2coffee pour transformer le code JavaScript en CoffeeScript. Le processus comprend :

1. Analyse du code JavaScript d'entrée
2. Transformation en AST (Abstract Syntax Tree)
3. Génération du code CoffeeScript correspondant

---

Tutoriel disponible sur [YouTube](https://www.youtube.com/watch?v=PctqrK31vRk) ou sur ma [Chaîne YouTube](https://www.youtube.com/@TaAilsFR)
