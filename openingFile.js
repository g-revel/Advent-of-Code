
// Fonction pour lire le contenu du fichier
function lireFichier(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      // Événement déclenché lorsque la lecture est terminée
      reader.onload = (event) => {
        const contenu = event.target.result;
        const lignes = contenu.split('\n');
        resolve(lignes);
      };
  
      // Événement déclenché en cas d'erreur de lecture
      reader.onerror = (event) => {
        reject(event.target.error);
      };
  
      // Lecture du fichier en tant que texte
      reader.readAsText(file);
    });
  }
  
  // Fonction appelée lorsque le fichier est sélectionné
  function gestionFichierSelectionne(event) {
    const fichier = event.target.files[0];
  
    if (fichier) {
      // Utilisation de la fonction pour lire le fichier
      lireFichier(fichier)
        .then((lignes) => {
            lignes.pop()
            handleFileContent(lignes);
        })
        .catch((erreur) => {
          console.error('Erreur lors de la lecture du fichier :', erreur);
        });
    }
  }
  
  // Écouteur d'événement pour le changement de sélection de fichier
  document.getElementById('inputFichier').addEventListener('change', gestionFichierSelectionne);