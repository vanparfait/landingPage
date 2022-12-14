/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
import Article from "./../../js/article.js";
import ArticleManager from "./../../js/articleManager.js";
import {
  addFavorites,
  removeFavorites,
  getFavorites,
  saveFavorites,
} from "./../../js/favotiesManager.js";

fetch("http://localhost:4000/api/article")
  .then((data) => {
    data.json();
  })
  .then((article) => {
    console.log(article);
    //  article = new Article(jsonArticle);
    document.querySelector(".container").innerHTML += `<div class="col-12 mt-5">
    <div class="card article">
        <div class="card-header ">
            <h5 class="card-title d-flex justify-content-between">${
              article.title
            }<span class="publication-date"> ${article.getFormatDate()}</span></h5>
        </div>
        <img src="${article.image}" class="card-img-top">
        <span class="fa-stack fa-2x addFavorite">
            <i class="fas fa-star fa-stack-1x"></i>
            <i class="far fa-star fa-stack-1x"></i>
        </span>
        <div class="card-body">
            <p class="card-text">${article.content}</p>
        </div>
    </div>
</div>`;
  });
// .catch((err) => {
//   console.log("Error");
// });
