# Esercitazione-PPM-Front-End-Gabriele-Nannotti

## HTML
Il main della pagina è suddivisa in 7 sezioni; ogni sezione contiene uno o più layout i quali contengono articoli distribuiti secondo la definizione del layout stesso.:
- Page Top: Contiene la testata principale (con relativo layout)
- Sezione1: Contiene il layout A, il layout B e il layout C
- Sezione2: Contiene il layout D
- Sezione3: Contiene il layout E
- Sezione4: Contiene il layout F
- Sezione5: Contiene il layout G
- Sezione6: Contiene nuovamente il layout B ma con una piccola modifica sul layout degli elementi al suo interno

## CSS
I file css sono organizzati nel seguente modo:
- style.css: Contiene i css per l'impaginazione generale delle varie sezioni del main, ovvero i css che definiscono le proprietà dei vari layout della pagina.
Contiene inoltre i css per gli headers delle sezioni (section header) e i css per i banner pubblicitari (NB: Questi ultimi non sono visibili se software come Adblock sono attivi!)
- style-navbar.css, style-navbar-buttons-container.css: Contengono i css della barra di navigazione fissata in alto nella pagina
- style-pop-menu.css: Contiene i css relativi alle griglie flex e grid presenti nel menu a scomparsa del navbar.
- style-footer.css: Contiene i css relativi al footer finale e alla griglia di link infondo alla pagina.
- style-article-decoration.css, style-article-layout.css: Contengono rispettivamente i css che definiscono le proprietà dei testi che compaiono nella pagina e i css che definiscono come i tag degli articoli si devono distribuire.

### Articoli:
Nella pagina a cui è stato fatto riferimento esistono diverse varianti di articoli in termini di layout, tra cui ad esempio:
- Articoli verticali che rimangono tali a prescindere dalla risoluzione.
- Articoli verticali che diventano orizzontali in specifiche risoluzioni.
- Articoli orizzontali con immagine a destra che rimangono tali a prescindere dalla risoluzione.
- Articoli orizzontali con immagine a destra che diventano verticali in specifiche risoluzioni.
- Articoli orizzontali con immagine a sinistra.

Per non dover creare singole classi css per ciascuna particolare occorrenza dei vari layout degli articoli, orizzontali e verticali

Per ovviare a tutte queste casistiche ho proceduto nel seguente modo:
A livello di layout esistono solo due tipi di articoli: orizzontali (associato alla classe css horizontal-article-layout) e verticali (associato alla classe css vertical-article-layout).

 (dato che 
