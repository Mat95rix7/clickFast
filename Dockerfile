# Utiliser une image de base avec Nginx (serveur HTTP) pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers du projet dans le répertoire public de Nginx
COPY . /usr/share/nginx/html/

# Exposer le port 80 pour accéder à l'application depuis l'extérieur du conteneur
EXPOSE 80

# Démarrer Nginx (c'est la commande par défaut de l'image nginx)
CMD ["nginx", "-g", "daemon off;"]