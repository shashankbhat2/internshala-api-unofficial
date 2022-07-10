function filteredQuery(c, loc, wfh) {
  let parsedCategory = `${c.trim().replace(/\s+/g, "-")}`;
  let parsedLocation = `in-${loc.trim().replace(/\s+/g, "-")}`;
  let filter='';
  if (wfh === "true" && c.length !== 0) {
    filter = `work-from-home-${parsedCategory}-internships`;
  } else if (wfh === "true" && loc.length !== 0) {
    filter = `work-from-home-${parsedCategory}-in-${parsedLocation}`;
  }
  return filter;
}

module.exports = filteredQuery