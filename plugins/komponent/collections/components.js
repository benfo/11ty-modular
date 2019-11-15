module.exports = collection => {
  return collection.getFilteredByTag("component").filter(function(item) {
    if (item.data.disabled && item.data.disabled == true) {
      return false;
    }
    return item.fileSlug.startsWith("_");
  });
};
