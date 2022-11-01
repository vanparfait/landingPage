/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */
export function addFavorites(articleId) {
  let listeFavorites = getFavorites();
  listeFavorites.push({ id: articleId, date: new Date() });
  saveFavorites(listeFavorites);
}

export function removeFavorites(articleId) {
  let listeFavorites = getFavorites();
  listeFavorites.filter((favorites) => favorites.id != articleId);
  saveFavorites(listeFavorites);
}

export function getFavorites() {
  let listeFavorites = localStorage.getItem("listeFavorites");
  if (listeFavorites == null) {
    return [];
  } else {
    return JSON.parse(listeFavorites);
  }
}

export function getFavoritesId() {
  getFavoritesId().map((favorites) => favorites.id);
}

export function saveFavorites(listeFavorites) {
  localStorage.setItem("listefavourites", JSON.stringify(listeFavorites));
}
