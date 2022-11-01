/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */
export default class ArticleManager {
  constructor(listeArticle) {
    this.listeArticle = listeArticle;
  }
  triArticle() {
    this.listeArticle.sort(
      (a, b) => Date.parse(b.publicationDate) - Date.parse(a.publicationDate)
    );
  }
}
