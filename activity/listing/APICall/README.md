Bonjour ,

Ceci est un script de récupération et d'affichage d'activités via l'API Activity et vous permet de gérer les informations qui y sont stockées de façon dynamique.

Après avoir éxécuté ce script vous pouvez :

    - Soit afficher directement les données en incluant un id="ApiTargetContainer" dans le HTML sur une balise ( <div> par exemple ) à l'endroit voulu.
    N'oubliez pas de préalablement lier votre script au document HTML en ajoutant ce lien dans le head : <script src="./script.js" defer ></script>
    Pour personnaliser l'affichage ajoutez au même endroit:  <link rel="stylesheet" href="style.css"> et utilisez le fichier css pour la mise en forme.

    - Soit utiliser les données d'une autre manière parceque le script les rend aussi accessibles via le localstorage au format JSON 
    Elles peuvent par exemple être récupérées comme suit en javaScript : 

                const storedData = localStorage.getItem("activityData");
                if (storedData) {
                const parsedData = JSON.parse(storedData);
                // Utiliser parsedData comme vous le souhaitez
                } 

Voici les différents code d'erreur

    - 400 : la requête n'est pas bonne.
    - 403 : vous n'avez pas les droits.
    - 404 : la page n'a pas été trouvée.
    - 422 : il y a une erreur de validation.
    - 429 : il y a trop de requêtes.
    - 500 : erreur interne du serveur.

La réponse 200 signifie que tout est ok.                

Si besoin la documentation de l'API est accessible à l'URL : https://activity-utuvyi37ea-ew.a.run.app/v5/activity/docs#/ .
