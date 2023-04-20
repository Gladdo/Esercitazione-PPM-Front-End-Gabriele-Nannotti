# Esercitazione-PPM-Front-End-Gabriele-Nannotti

Piccolo riassunto sull'organizzazione dei files e delucidazioni su alcuni punti chiave dell'esercitazione.

ATTENZIONE: Due div della pagina vengono rimossi da adblock (quelli che simulano i banner); per visualizzare correttamente la pagina va disabilitato!

## HTML
A livello macroscopico la pagina html è suddivisa nelle classiche 3 parti: header, main e footer.

#### Header
Contiene la navbar e il menu a comparsa; sia navbar che pop menu hanno positioning fixed. Il resize della navbar avviene attraverso l'aggiunta e la rimozione della classe .squeeze al tag nav.

#### Main

Il main della pagina è suddiviso in 7 sezioni; ogni sezione contiene uno o più layout di impaginazione:
- Page Top: Contiene la testata principale (con relativo layout)
- Sezione1: Contiene il layout A, il layout B e il layout C
- Sezione2: Contiene il layout D
- Sezione3: Contiene il layout E
- Sezione4: Contiene il layout F
- Sezione5: Contiene il layout G
- Sezione6: Contiene nuovamente il layout B ma con una piccola modifica degli elementi al suo interno

Ciascun layout è implementato con classi css e definisce come sono distribuiti gli article al suo interno.

A loro volta ogni article definisce come i tag al suo interno si devono distribuire (prevalentemente determina se il suo contenuto è distribuito verticalmente o orizzontalmente attraverso le classi "vertical-article-layout" e "horizontal-article-layout").

#### Footer
E' diviso in due parti:
- Una griglia contenente più blocchi a loro volta contenenti liste di links
- L'effettivo footer della pagina, con link social etc.
 
## CSS
I file css sono organizzati nel seguente modo:
- **style.css**: Contiene i css per l'impaginazione generale delle varie sezioni del main, ovvero i css che definiscono le proprietà dei vari layout della pagina.
Contiene inoltre i css per gli headers delle sezioni (section header) e i css per i banner pubblicitari (NB: Questi ultimi non sono visibili se software come Adblock sono attivi!)
- **style-navbar.css** | **style-navbar-buttons-container.css**: Contengono i css della barra di navigazione fissata in alto nella pagina
- **style-pop-menu.css**:  
Contiene i css relativi alle griglie flex e grid presenti nel menu a scomparsa del navbar.
- **style-footer.css**: Contiene i css relativi al footer finale e alla griglia di link infondo alla pagina.
- **style-article-decoration.css** | **style-article-layout.css**: Contengono rispettivamente i css che definiscono le proprietà dei testi che compaiono nella pagina e i css che definiscono come i tag degli articoli si devono distribuire.

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

Quindi i vari comportamenti (le trasformazioni verticale<->orizzontale alle diverse risoluzioni) sono ottenuti attraverso script javascript.

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

Infine, per far si che gli articoli orizzontali con immagine a destra, trasformati in verticali, si ritrovino l'immagine all'inizio dell'articolo una volta verticalizzati, le image-wrapper dei vertical-article-layout per risoluzioni < 600px hanno la proprietà css "order:-1". In questo modo ogni articolo verticale avrà l'immagine posizionata all'inizio, a prescindere di come questa sia posizionata nel codice html.

## Layouts
Breve schema riassuntivo sui layout della pagina

#### Layout Top

| (res>1024) | (1024>res>600)| (600>res)|
| --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233175507-3e1bda1c-7c97-42c2-9e44-3524a4eea75d.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233176228-3a5414c4-0423-4e11-8489-ace9bd950c81.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233177134-120c5ce1-8fc3-4307-8feb-faa71869c540.png" height="200"> |

#### Layout A

| (res>768) | (768>res>600)| (600>res)|
| --- | --- | --- |
<img src="https://user-images.githubusercontent.com/94845303/233177939-3583e41e-dcfa-4d34-878c-c42d9cbc2f48.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233178787-851242a0-ece9-41bf-805b-3aef80b87ec3.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233179085-876c36da-88eb-4885-a177-a690f8de8c75.png" height="200">

#### Layout B (Con immmagini)

| (res>768) | (768>res>600)| (600>res)|
| --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233179864-4aa764f5-5bdb-47d4-aa91-e9ded924906a.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233180041-252acacd-eb21-48fe-b46d-8c03f5130522.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233180139-20aa050b-6b6a-457c-9f76-ef227f1d2d35.png" height="200"> |

In questo layout, nel passaggio da res>768 a res<768, tramite javascript agli articoli viene sostituito la classe "vertical-article-layout" con le classi "horizontal-article-layout" e "inverse-layout". Inoltre, sempre tramite javascript, quando si scende sotto i 768 viene modificata la risoluzione dell'immagine per renderla più appropiata alla nuova organizzazione.

#### Layout C

| (res>1024) | (1024>res>600)| (600>res)|
| --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233181643-139171a6-0f6b-48cd-a814-f3d7b482a4ce.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233181783-8e832b4d-5b74-4fd4-a622-274da7b21e11.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233181997-fe7d3d8c-ff01-4cd1-a8f1-cb322732c65e.png" height="200"> |

Sopra ai 1024 l'articolo di questo layout è caratterizzato solamente dalla classe css "horizontal-article-layout". Quando la risoluzione scende sotto i 1024, assieme a "horizontal-article-layout" si attiva la classe "split" che sovrascrive le proprietà di griglia dell'articolo e fa in modo tale che testo e immagine condividano lo spazio orizzontale equamente.

Quando la risoluzione scende sotto i 600, il layout dell'articolo passa da orizzontale a verticale (tramite javascript e la classe "xms_set_vertical_layout").

#### Layout D

| (res>768) | (768>res)|
| --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233183089-e252d909-5448-4d9d-afec-95481ecbbe47.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233183351-5ff572c3-4e66-472c-a661-e61666bc2c2a.png" height="200"> |

Simile al layout B ma in questo caso manca una fase intermedia e sotto ai 768 gli articoli sono già in colonna. 

#### Layout E

| (res>600) | (600>res)|
| --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233184068-ecdf6268-574f-4d19-a23f-ddfe66addae2.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233184227-a1df615a-ce50-48f2-a65f-891d2c42fe2c.png" height="200"> |


#### Layout F

| (res>768) | (768>res>600)| (600>res) |
| --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233184448-37a663b7-7bb8-46cc-b226-ef67e5508dd0.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233184668-00197e71-8860-4b2e-aab8-cb3fdbd0bfd6.png" height="200"> | <img src="https://user-images.githubusercontent.com/94845303/233184834-e4014e43-f897-4ff0-872d-985e86fb2276.png" height="200"> 

Prevalentemente questo layout è caratterizzato dalla disposizione del banner; la disposizione del layout è caratterizzato nei css mentre l'immagine del banner viene modificata attraverso javascript.

#### Layout G

| (res>768) | (768>res) |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/94845303/233185675-640bbb78-4139-4002-a226-2a3b024741c7.png" height="200">  | <img src="https://user-images.githubusercontent.com/94845303/233186037-e215405a-c255-4dc3-915d-a8d1defc8caa.png" height="200">  |





























