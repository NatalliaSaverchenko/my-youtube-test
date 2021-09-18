export const saveFavorite = (username, favorite) => {
  const favorites = getFavorites(username) || [];
  localStorage.setItem(username, JSON.stringify([...favorites, favorite]));
};
export const getFavorites = (username) => {
  return JSON.parse(localStorage.getItem(username));
};
export const deleteFavoriteFromLs = (username,id) => {
  const favorites = getFavorites(username);
  if (!favorites){
    return;
  }
  localStorage.setItem(username, JSON.stringify(favorites.filter(f=>f.id!==id)));
};
