This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

The goal of this test is to make a simple web app with an authentication.

We have prepared the code using Create React App, but please change whatever you want (CSS files, HTML structure, JS structure...).

There are 3 pages on this app:

- Login page
- Homepage: showing the current user information (email, first name, etc…)
- Administration page: listing all the users

The Homepage and administration must be protected by a login page, as designed below:

![Login design](design.png?raw=true)

## Task requirements

- Use semantic, accessible and valid HTML mark-up.
- Style the login page so that it looks like the design. This can be done in CSS or SCSS files but don't use CSS-in-JS
- Mock API calls and keeps a logic similar as if you were using a real API. See Example below.

```javascript
const USERS = [{id: 1, email: "user@mail.com"}, ...]
function getUsers () {
  return USERS
}
```

## Features

- Can sign in with [user@mail.com](mailto:user@mail.com) and be able to see the homepage only
- Can sign in with [admin@mail.com](mailto:admin@mail.com) and be able to see the homepage and administration page
- Can log out from the application

## Important considerations

- We are not looking for pixel-perfect design. Please just do CSS for the login page and show us your approach of styling.
- Don’t use CSS library or grid system.
- Don’t overcomplicate the JavaScript and please don’t use unnecessary plugins.
- We recommend to do the test in ~2 hours depending on your level – if you want to spend more or less time on it, that’s completely up to you.

## Questions

Please edit the README file to answer the question below:

How much time did you spend on this test?

**J'ai passé environ 3H30 sur le test.**

Can you explain the technical choice you made for the CSS and JavaScript?

**Concernant la partie CSS, j'ai pris le parti de réaliser cet exercice sans préprocesseur. La part d'intégration étant très restreinte, il ne m'a pas semblé pertinent d'y intégrer SASS. J'ai fait le choix d'utiliser les unités de mesure rem en me basant sur une font-size du document HTML de 62,5%, soit 1rem = 10px. D'autre part j'ai également fait le choix d'utiliser des variables pour les codes couleurs afin de rester cohérent sur la charte graphique si l'application avait été de taille plus importante. J'ai également utilisé un fichier de reset de styles afin d'écraser ceux prévus de base par les navigateurs. Enfin concernant les conventions de nommage des classes, j'ai utilisé la nomenclature BEM**

**Concernant la partie JavaScript, j'ai essayé de rendre l'application la plus lisible et simple possible. La logique d'authentification fonctionne uniquement avec un système de cookies afin de conserver l'utilisateur en mémoire. Seul le token est sauvegardé et il est utilisé afin de récupérer ses données (de la même manière qu'on aurait pu le faire en backend avec un req.user). La navigation sur les différentes pages se fait via React-Router-Dom, et des redirections sont effectuées en cas de token manquant. L'utilisateur est tenu au courant en cas d'identifiant ou mot de passe erroné. Pour conclure, les fonctions permettant mettre à jour l'utilisateur et de vérifier son identité sont stockées dans un context afin d'y avoir accès plus facilement sur toute l'application. (Je pensais dans un premier temps ne pas l'intégrer au projet. L'application ne contient que quelques pages, ce dernier n'était donc absolument pas nécessaire, mais suite à notre entretien j'ai pensé que vous souhaiteriez le voir en place pour ce test)**

If you had more time to spend on the test, what would you like to add to your solution?

**Il y a de nombreuses choses que j'aurais aimé perfectionner. L'élément le plus important étant la création d'un backend afin de traiter la logique d'authentification côté serveur et ajouter des middlewares pour sécuriser les routes et vérifier le token. L'architecture actuelle laisse de grosses failles de sécurité. De la même manière il serait préférable de gérer les mots de passe avec une logique de hash et de cryptage. Il aurait également été intéressant de faire une intégration CSS pour la vue d'accueil et la page d'administration tout en rendant le design de la page login plus séduisant. Et enfin pour aller un petit peu plus loin il aurait également été pertinent de mettre en place des tests afin de consolider l'application.**

## Submission

Please fork this repository and send us a pull request.
