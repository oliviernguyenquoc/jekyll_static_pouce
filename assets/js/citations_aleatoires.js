// Programme qui tire une citation, son auteur et son établissement au pif parmis celles sélectionnées

function aleatoire(N) {
   return (Math.floor((N)*Math.random()+1));
   }

//On écrit toutes les citations, établissements et auteurs. Pas opti comme méthode.

var listeCitations=['"Un moment privilégié pour s\'ouvrir aux opportunités, aux surprises et aux autres. Pour laisser les choses nous tomber dessus."',
					'"J\'ai trouvé ça très sympathique même si on s\'est pris la pluie violemment pendant 1h30."',
					'"C\'était la folie mais on a eu froid à 5h du mat à Amsterdam."',
					'"Aventure exceptionnelle, avec plein de merveilleuses rencontres et des souvenirs gravés à jamais !"',
					'"Superbe aventure, avec la présence rassurante d\'un staff organisé !"',
					'"Comme l\'année dernière, un régal d\'émotions!"',
					'"Expérience unique, parfois fatiguante et exaspérante mais passionnante ! On a adoré."',
					'"Une expérience complétement inédite pour moi de vagabonder comme ça sur les routes, au gré des voitures."',
					'"C\'était génial ! Juste un peu déçus d\'avoir été bloqués dans Lyon par la manif des motards.."',
					'"A refaire l\'année prochaine, (en évitant de s\'engouffrer dans des routes paumées au milieu de la nuit ceci-dit)."',
				    '"Et à partir de maintenant, je jure de prendre tout autostoppeur que je croise sur le bord de la route !"',
				    '"Fou !!!!! Super experience, à refaire, et maintenant c\'est sûr que je prendrai des gens en stop :)"',
				    '"C\'était trop cool, sauf la petite nuit aux étoiles à Amsterdam."'];

var listeAuteurs=['Stop\'épique',
					'Les Divas',
					'Les Oiseaux Mines-Gratteurs',
					'Thierry\'Golo',
					'Les Impouçuptibles',
					'PKR',
					'Kathzzzfu',
					'The Dobby\'s',
					'Les Trimardeurs',
					'Bourriquet et Stitch',
				    'Traverovitch',
				    'Les Neiffeurs',
				    'Les poucettes'];

var listeEcoles=['Audencia', 'Centrale Nantes', 'Mines de St-Etienne', 'ENSE3',
					'Centrale Nantes', 'Centrale Marseille', 'Centrale Lyon',
					'Oniris Nantes', 'Centrale Marseille', 'Oniris Nantes',
					'Oniris Nantes', 'EM Normandie', 'Université Catholique de Lille'];

var n;

var citation;
var auteur;
var etablissement;

for (var i=0; i<3; i++){

	n=aleatoire(listeCitations.length-i);  // Nombre au pif, modifier le 13 si on ajoute/enlève des citations !

	citation=document.getElementById('c'+i); // On s'attaque à la ième citation
	auteur=document.getElementById('a'+i);
	etablissement=document.getElementById('e'+i);

	citation.innerHTML=listeCitations[n-1]; // n-1 : aleatoire renvoie un nombre entre 1 et N ! Or liste comment à 0.
	auteur.innerHTML=listeAuteurs[n-1];
	etablissement.innerHTML=listeEcoles[n-1];

	listeCitations.splice(n-1,1);
	listeAuteurs.splice(n-1,1);
	listeEcoles.splice(n-1,1);
}
