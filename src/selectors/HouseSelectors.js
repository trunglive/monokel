export const HouseSelectors = (listing, typeValue, sortValue, searchValue) => {
  return listing
    .filter(
      home =>
        (typeValue === "All" || typeValue === home.type) &&
        home.location.city.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort(
      (currentHome, nextHome) =>
        currentHome[sortValue.toLowerCase()] > nextHome[sortValue.toLowerCase()]
          ? 1
          : -1
    );
};
