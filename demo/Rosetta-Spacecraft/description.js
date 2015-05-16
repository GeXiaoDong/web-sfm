module.exports = {

  "name": "Rosetta-Spacecraft",

  "root": "/demo/Rosetta-Spacecraft",

  "images": [
    { "id": 0, "name": "Colour_image_of_comet", "extension": ".jpg" },
    { "id": 1, "name": "Comet_on_5_September_2014", "extension": ".jpg" },
    { "id": 2, "name": "Comet_on_7_August_a", "extension": ".jpg" },
    { "id": 3, "name": "Comet_on_7_August_b", "extension": ".jpg" },
    { "id": 4, "name": "Comet_on_7_December_2014_NavCam", "extension": ".jpg" },
    { "id": 5, "name": "Comet_on_9_December_2014_NavCam", "extension": ".jpg" },
    { "id": 6, "name": "Comet_on_10_December_2014_NavCam", "extension": ".jpg" },
    { "id": 7, "name": "Comet_on_14_September_2014_-_NavCam.half", "extension": ".png" },
    { "id": 8, "name": "Comet_on_17_November_NavCam", "extension": ".jpg" },
    { "id": 9, "name": "Comet_on_19_September_2014_NavCam.half", "extension": ".png" },
    { "id": 10, "name": "Comet_on_22_August_2014_-_NavCam", "extension": ".jpg" },
    { "id": 11, "name": "Comet_on_24_September_NavCam", "extension": ".jpg" }
  ],

  "desc": '<p>This demo is created using photos captured by Rosetta Spacecraft (<a href="http://rosetta.jpl.nasa.gov/gallery/images/comet-67p/churyumov-gerasimenko" target="_blank">source</a>).</p><p>3D reconstruction of this demo is incomplete, not enough matches are found between the images.<br/>This can be solved by adding manual matching into the application.</p>',

  "entries": ["image", "feature", "match"]

};