var Xray = require("x-ray");
const filteredQuery = require("../utils/query");
var x = Xray({
  filters: {
    trim: function (value) {
      return typeof value === "string" ? value.trim() : value;
    },
  },
});

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  let category = req.query.category;
  let location = req.query.location;
  let wfh = req.query.wfh;
  res.json(category, location, wfh)
  
  try {
    x(`https://internshala.com/internships/${filter}`, {
      items: x(".individual_internship", [
        {
          title: ".view_detail_button",
          link: ".view_detail_button @href",
          company_name: ".company_name | trim",
          stipend: ".stipend | trim",
        },
      ]),
    })((error, result) => {
      let responseJson = new Object();
      let internshipsArray = new Array();
      result.items.forEach((item) => {
        internshipsArray.push(item)
      })
      responseJson["total"] = internshipsArray.length
      responseJson["internhips"] = internshipsArray
      res.json(responseJson);
    });
  } catch (err) {
    res.json(err);
  }
}

