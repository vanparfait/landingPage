/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */
export default class Article {
  constructor(id, title, publicationDate, image, content) {
    this.id = id;
    this.title = title;
    this.publicationDate = publicationDate;
    this.image = image;
    this.content = content;
  }
  getFormatDate(article) {
    let timestamp = Date.parse(this.publicationDate);
    let date = new Date(timestamp);

    return date.toLocaleDateString("fr");
  }
}
