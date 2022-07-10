function queryBuilder(category, location, wfh) {
  let parsedCategory = category && `${category.trim().replace(/\s+/g, "-")}`;
  let parsedLocation = location && `${location.trim().replace(/\s+/g, "-")}`;
  let filter = "";
  if (wfh && category && location) {
    filter = `work-from-home-${parsedCategory}-in-${parsedLocation}`;
  } else if (wfh && category ) {
    filter = `work-from-home-${parsedCategory}-internships`;
  } else if (category && location) {
    filter = `${parsedCategory}-internship-in-${parsedLocation}`;
  } else if (wfh && location) {
    filter = `work-from-home-internships-in-${parsedLocation}`;
  } else if (category) {
    filter = `${parsedCategory}-internship`;
  } else if (location) {
    filter = `internship-in-${parsedLocation}`;
  }else if(wfh){
    filter = `work-from-home-internships`
  }

  return filter;
}

module.exports = queryBuilder;
