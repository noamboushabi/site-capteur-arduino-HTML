function Valider()
{
var compteur=0; //Déclarations des variables
var r1 = document.querySelector('input[name=q1]:checked').value; //récupère la valeur du bouton radio validé
var r2 = document.querySelector('input[name=q2]:checked').value; //récupère la valeur du bouton radio validé
var r3 = document.querySelector('input[name=q3]:checked').value;
var r4 = document.querySelector('input[name=q4]:checked').value;
var r5 = document.querySelector('input[name=q5]:checked').value;

if (r1=='c') compteur++; //Test des réponses et comptage des points
if (r2=='a') compteur++;
if (r3=='b') compteur++;
if (r4=='a') compteur++;
if (r5=='c') compteur++;
document.getElementById('resultats').innerHTML="Vous avez "+compteur+" bonne(s) réponse(s) sur 5";
}