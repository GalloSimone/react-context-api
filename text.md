Consegna

Partiamo col creare il file relativo al Context come descritto:
1 Creare il contesto
2 Esportare il provider
3 Esportare l'oggetto rappresentante il contesto (possiamo inserire qui l'array statico dei post)

Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione
Se non lo abbiamo già fatto in precedenza, creiamo un componente PostsPage.jsx che conterrà al suo interno un titolo e un componente PostsList.jsx.

Creiamo un file per definire il nostro Context ed esportiamolo
Infine facciamo in modo che il componente PostsList.jsx recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.
La struttura dell’App deve essere
App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx
