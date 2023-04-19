# Esercitazione-PPM-Front-End-Gabriele-Nannotti

## HTML
Il main della pagina è suddivisa in 7 sezioni; ogni sezione contiene uno o più layout di impaginazione:
- Page Top: Contiene la testata principale (con relativo layout)
- Sezione1: Contiene il layout A, il layout B e il layout C
- Sezione2: Contiene il layout D
- Sezione3: Contiene il layout E
- Sezione4: Contiene il layout F
- Sezione5: Contiene il layout G
- Sezione6: Contiene nuovamente il layout B ma con una piccola modifica sul layout degli elementi al suo interno

Ciascuno di questi layout di impaginazione contiene articles a loro volta caratterizzati da diversi layout (gli article possono essere orizzontali o verticali) 

## CSS
I file css sono organizzati nel seguente modo:
- style.css: Contiene i css per l'impaginazione generale delle varie sezioni del main, ovvero i css che definiscono le proprietà dei vari layout della pagina.
Contiene inoltre i css per gli headers delle sezioni (section header) e i css per i banner pubblicitari (NB: Questi ultimi non sono visibili se software come Adblock sono attivi!)
- style-navbar.css, style-navbar-buttons-container.css: Contengono i css della barra di navigazione fissata in alto nella pagina
- style-pop-menu.css: Contiene i css relativi alle griglie flex e grid presenti nel menu a scomparsa del navbar.
- style-footer.css: Contiene i css relativi al footer finale e alla griglia di link infondo alla pagina.
- style-article-decoration.css, style-article-layout.css: Contengono rispettivamente i css che definiscono le proprietà dei testi che compaiono nella pagina e i css che definiscono come i tag degli articoli si devono distribuire.

## Articoli:
Nella pagina a cui è stato fatto riferimento esistono diverse varianti di articoli in termini di layout (dove con articolo è da intendere una immagine con associato titolo ed eventuale descrizione), tra cui ad esempio:
- Articoli verticali che rimangono tali a prescindere dalla risoluzione.
- Articoli verticali che diventano orizzontali in specifiche risoluzioni.
- Articoli orizzontali con immagine a destra che rimangono tali a prescindere dalla risoluzione.
- Articoli orizzontali con immagine a destra che diventano verticali in specifiche risoluzioni.
- Articoli orizzontali con immagine a sinistra.

Per non dover creare singole classi css per ciascuna particolare occorrenza dei vari layout di articolo, ho proceduto nel seguente modo:
A livello di classi css sono concepiti solo due tipi di articoli: 
- articoli orizzontali (associato alla classe css horizontal-article-layout) 
- articoli verticali (associato alla classe css vertical-article-layout).

#### Distinzione tra articoli con layout orizzontale con immagine a destra e immagine a sinistra:

Per distringuere tra articoli orizzontali con immagine a destra e con immagine a sinistra, di default è previsto che un article con classe "horizontal-article-layout" abbia immagine a destra; aggiungendo a tale article la classe "inverse-layout", questa sovrascrive le proprietà di griglia css dell'"horizontal-article-layout" e impagina l'articolo in modo tale che sia conforme con l'immagine a sinistra.

#### Cambio di orientamento da verticale a orizzontale e viceversa:

Per modificare l'orientamento degli articoli da verticale a orizzontale e viceversa, alle diverse risoluzioni, viene utilizzato javascript; in particolare il meccanismo implementato è il seguente:

Come prima cosa, sono rese disponibili le seguenti classi:
- xsm_set_articles_vertical
- sm_set_articles_horizontal

Quindi succede questo:  
Se si associa la classe "xsm_set_articles_vertical" a un div , quando la risoluzione dello schermo diventa xsm ( ovvero minore di 600px), gli articoli con classe "horizontal-article-layout" CONTENUTI IN TALE DIV si vedono tale classe rimossa e sostituita con la classe "vertical-article-layout".  
Questo passaggio viene effettuato al contrario quando si torna sopra i 600px.  

La classe "sm_set_articles_horizontal" fa invece il contrario ovvero converte gli articoli da verticali a orizzontali quando si passa sotto alla risolizione sm (768px).  

(Lo script.js è strutturato in modo tale che sia possibile estendere facilmente questo set di comandi dove necessario)  

Infine, per far si che gli articoli orizzontali con immagine a destra, trasformati in verticali, si ritrovino l'immagine all'inizio dell'articolo una volta trasformati, le image-wrapper dei vertical-article-layout per risoluzioni < 600px hanno la proprietà css "order:-1".


