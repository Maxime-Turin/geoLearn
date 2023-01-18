# geoLearn

But : Gestion d'une base de donnée mongoDB (CRUD complet) d'information liées à la géographie.

## User Stories
> "En tant que" inutil, usage uniquement personnel.

|Je veux|Afin de|
|---|---|
|Afficher les collections de la bdd||
|Afficher les documents d'une collection particulière||
|Créer une collection||
|Modifier une collection||
|Supprimer une collection||
|Créer un document||
|Modifier un document||
|Supprimer un document||
|Lancer un quizz sur la collection countries||

## router

|Endpoint|Méthode|But|
|---|---|---|
|/collections|GET|Retourne toutes les collections|
|/collection/:name|GET|Retourne tous les documents d'une collection|
|/collection/create|POST| Créer une nouvelle collection|
|

## mongoDB

+ Collection "countries"

Exemple d'un document de la collection countries :  

{  
  "_id": ObjectId("63c6a8xxxxxxxxxxxxxxxxx"),  
  "name": "France",  
  "capitalCity": "Paris",  
  "population": "67.75M",  
  "officialLanguage": "Français",  
  "continent": "Europe"  
}

## Quizz collection countries  

1. Quelle est la capitale de "name"  
    + 4 réponses possibles "capitalCity"
2. De quelle pays "capitalCity" est elle la capitale
    + 4 réponses possibles "name"

## Dependencies 
+ Express
+ Dotenv
+ MongoDB

## DevDependencies
+ eslint  
```bash
npm init @eslint/config
```
+ nodemon  