mise en place de l'environnement de développement.


L'application est composée de 2 backend 

# Backend Python 


pour le backend python. les dépendences a installer sont : 

- Flask
- flask-cors 

avec la commande 

```shell
    sudo apt install python3-flask python3-flask-cors
```

c'est cela qui va nous permettre d'utiliser notre petite API python pour faires des requetes depuis notre front React.

pour lancer le serveur, aller dans le répertoire `back/python/` de notre backend python et lancer la commande suivante : 

```shell
    python3 app.py
```

# Backend NodeJS

pour le backend python on a besoin des dépendances suivantes  : 

- express
- cors

```shell
    npm install express cors
```

ils nous permettront d'avoir plus d'aisance à la création de notre API node. 


- pour lancer le serveur, aller dans le répertoire `back/node/server` de notre backend node et lancer la commande suivante :  

```shell
    node server.js
```