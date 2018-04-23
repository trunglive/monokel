export const HouseSelectors = (
  listing,
  typeValue,
  priceRange,
  sortValue,
  searchValue
) => {
  return listing
    .filter(
      home =>
        (typeValue === "All" || typeValue === home.type) &&
        (priceRange === "All" ||
          (home.price >= parseInt(priceRange.slice(0, 4)) &&
            home.price <= parseInt(priceRange.slice(0, 4)) + 2000)) &&
        home.location.city.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort(
      (currentHome, nextHome) =>
        currentHome[sortValue.toLowerCase()] > nextHome[sortValue.toLowerCase()]
          ? 1
          : -1
    );
};
