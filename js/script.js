/*-------------------------------*/
/* Utility functions */

/* Prende tutti gli elementi html con la classe "command_tag"; quindi prende tutti gli elementi html al loro interno che
contengono la classe "old_tag" e la sostituisce con la classe "new_tag" */
function switchClassTag(command_tag, old_tag, new_tag) {
    let collection = document.getElementsByClassName(command_tag);

    /* Document media query */
    for (let i = 0; i < collection.length; i++) {
        let container = collection.item(i);
        let element = container.getElementsByClassName(old_tag);
        let length = element.length;
        for (let j = 0; j < length; j++) {
            let article = element.item(0);

            const new_classes = new_tag.split(" ");
            for( const class_name of new_classes){
                article.classList.add(class_name);
            }

            const old_classes = old_tag.split(" ");
            for( const class_name of old_classes){
                console.log(class_name);
                article.classList.remove(class_name);
            }
        }
    }
}

/* Prende tutti gli elementi html che contengono il tag "res_command"; quindi prende gli elementi html img al loro
interno e ne sostituisce l'immagine con la risoluzione specificata in res_command.
(esempio di un comando: s-res_200x200) */
function setImagesResolutions(res_command){
    const img_wrappers = document.getElementsByClassName(res_command);
    const res = res_command.split("_");
    for(let img_wrapper of img_wrappers){
        img_wrapper.getElementsByTagName("img")[0].src = "media/images/article-image-"+ res[1] + ".png";
    }
}

/*-------------------------------*/
/* Media query < 600 px */
const extra_small_media_query = window.matchMedia("(max-width: 600px)");
function extrasmallMediaQuery(extra_small_query){
    if (extra_small_query.matches){
        /* Quando si passa sotto i 600 */
        switchClassTag("xsm_set_articles_vertical", "horizontal-article-layout", "vertical-article-layout");
    }else{
        /* Quando si torna sopra i 600 */
        switchClassTag("xsm_set_articles_vertical", "vertical-article-layout", "horizontal-article-layout");
    }
}

extra_small_media_query.addEventListener("change", extrasmallMediaQuery);

/*-------------------------------*/
/* Media query < 765 px */
const small_media_query = window.matchMedia("(max-width: 765px)");
function smallMediaQuery(small_query){
    if (small_query.matches){
        /* Quando si passa sotto i 765 */
        switchClassTag("sm_set_articles_horizontal", "vertical-article-layout", "horizontal-article-layout inverse-layout" );
        setImagesResolutions("s-res_200x200");
    }else{
        /* Quando si torna sopra i 765 */
        switchClassTag("sm_set_articles_horizontal", "horizontal-article-layout inverse-layout", "vertical-article-layout" );
        setImagesResolutions("m-res_500x333");
        setImagesResolutions("m-res_760x507");
    }
}

small_media_query.addEventListener("change", smallMediaQuery);

/*-------------------------------*/
/* Media query < 1024 px */
const medium_media_query = window.matchMedia("(max-width: 1024px)");
function mediumMediaQuery(medium_query){

    const navbar = document.getElementById("navbar");
    const pop_menu = document.getElementById("pop-menu");
    if (medium_query.matches) {
        /* Quando si passa sotto i 1024 */
        navbar.classList.add("squeeze");
        pop_menu.classList.add("squeeze");

    } else {
        /* Quando si torna sopra i 1024 */
        if(!(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)){
            /* Solo se la pagina non è scrollata, ALLORA rimuovi lo squeeze */
            navbar.classList.remove("squeeze");
            pop_menu.classList.remove("squeeze");
        }
    }
}

medium_media_query.addEventListener("change", mediumMediaQuery);

/* -------------------------------*/
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const pop_menu = document.getElementById("pop-menu");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("squeeze");
        pop_menu.classList.add("squeeze");
    } else {
        if(!medium_media_query.matches){
            navbar.classList.remove("squeeze");
            pop_menu.classList.remove("squeeze");
        }
    }
}

/* -------------------------------*/
/* Click sul menu */
function menuClickCallback(){
    const menu = document.getElementById("menu-icon");
    menu.classList.toggle("change");

    const pop_menu = document.getElementById("pop-menu");
    pop_menu.classList.toggle("off");
}

/* -------------------------------*/
/* Impostazione data */

const weekday = [ "Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;
const month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

document.addEventListener("DOMContentLoaded", (event) => {
    /* ----------------------------------------------------------------------- */
    /* Document Init functions */

    /* -------------------------------*/
    /* Setup data */
    const data_text = document.getElementById("navbar-data");
    const date = new Date();
    data_text.innerText = weekday[date.getDay()] + ", " + month[date.getMonth()] + " " +date.getDate() + ", " + date.getFullYear();

    mediumMediaQuery(medium_media_query);
    smallMediaQuery(small_media_query);

    /* -------------------------------*/
    /* Setup menu click event listener */
    const menu = document.getElementById("menu-icon");
    menu.addEventListener("click", menuClickCallback)
});










