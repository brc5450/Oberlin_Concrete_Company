var express = require("express");
var router = express.Router();

// router.post("/", function(req, res) {
//   console.log(req.body);
// });

router.post("/calculate/squareslab", function(req, res) {
  var squareslab_depth,
    squareslab_depth_measurement,
    squareslab_length,
    squareslab_length_measurement,
    squareslab_width,
    squareslab_width_measurement,
    squareslab_quantity,
    cubicFeet,
    cubicYards;

  squareslab_depth = parseFloat(req.body.squareslab_depth);
  squareslab_depth_measurement = req.body.squareslab_depth_measurement;
  squareslab_length = parseFloat(req.body.squareslab_length);
  squareslab_length_measurement = req.body.squareslab_length_measurement;
  squareslab_width = parseFloat(req.body.squareslab_width);
  squareslab_width_measurement = req.body.squareslab_width_measurement;
  squareslab_quantity = parseFloat(req.body.squareslab_quantity);

  if (squareslab_depth_measurement == "inches") {
    squareslab_depth = squareslab_depth / 12;
  }

  if (squareslab_length_measurement == "inches") {
    squareslab_length = squareslab_length / 12;
  }

  if (squareslab_width_measurement == "inches") {
    squareslab_width = squareslab_width / 12;
  }

  cubicFeet =
    squareslab_depth *
    squareslab_length *
    squareslab_width *
    squareslab_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };
  res.render("index", hbsObject);
});

router.post("/calculate/roundslab", function(req, res) {
  var roundslab_depth,
    roundslab_depth_measurement,
    roundslab_diameter,
    roundslab_diameter_measurement,
    roundslab_quantity,
    roundslab_radius,
    squared_radius,
    roundslab_area,
    cubicFeet,
    cubicYards;

  var pi = Math.PI;

  roundslab_depth = parseFloat(req.body.roundslab_depth);
  roundslab_depth_measurement = req.body.roundslab_depth_measurement;
  roundslab_diameter = parseFloat(req.body.roundslab_diameter);
  roundslab_diameter_measurement = req.body.roundslab_diameter_measurement;
  roundslab_quantity = parseFloat(req.body.roundslab_quantity);

  if (roundslab_depth_measurement == "inches") {
    roundslab_depth = roundslab_depth / 12;
  }
  if (roundslab_diameter_measurement == "inches") {
    roundslab_diameter = roundslab_diameter / 12;
  }

  roundslab_radius = roundslab_diameter / 2;
  squared_radius = roundslab_radius * roundslab_radius;
  roundslab_area = pi * squared_radius;
  cubicFeet = roundslab_depth * roundslab_area * roundslab_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

router.post("/calculate/wall", function(req, res) {
  var wall_height,
    wall_height_measurement,
    wall_length,
    wall_length_measurement,
    wall_thickness,
    wall_thickness_measurement,
    wall_quantity,
    cubicFeet,
    cubicYards;

  wall_height = parseFloat(req.body.wall_height);
  wall_height_measurement = req.body.wall_height_measurement;
  wall_length = parseFloat(req.body.wall_length);
  wall_length_measurement = req.body.wall_length_measurement;
  wall_thickness = parseFloat(req.body.wall_thickness);
  wall_thickness_measurement = req.body.wall_thickness_measurement;
  wall_quantity = parseFloat(req.body.wall_quantity);

  if (wall_height_measurement == "inches") {
    wall_height = wall_height / 12;
  }
  if (wall_length_measurement == "inches") {
    wall_length = wall_length / 12;
  }
  if (wall_thickness_measurement == "inches") {
    wall_thickness = wall_thickness / 12;
  }

  cubicFeet = wall_height * wall_length * wall_thickness * wall_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

router.post("/calculate/footer", function(req, res) {
  var footer_depth,
    footer_depth_measurement,
    footer_length,
    footer_length_measurement,
    footer_width,
    footer_width_measurement,
    footer_quantity,
    cubicFeet,
    cubicYards;

  footer_depth = parseFloat(req.body.footer_depth);
  footer_depth_measurement = req.body.footer_depth_measurement;
  footer_length = parseFloat(req.body.footer_length);
  footer_length_measurement = req.body.footer_length_measurement;
  footer_width = parseFloat(req.body.footer_width);
  footer_width_measurement = req.body.footer_width_measurement;
  footer_quantity = parseFloat(req.body.footer_quantity);

  if (footer_depth_measurement == "inches") {
    footer_depth = footer_depth / 12;
  }
  if (footer_length == "inches") {
    footer_length = footer_length / 12;
  }
  if (footer_width_measurement == "inches") {
    footer_width = footer_width / 12;
  }

  cubicFeet = footer_depth * footer_length * footer_width * footer_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

router.post("/calculate/squarecolumn", function(req, res) {
  var squarecolumn_height,
    squarecolumn_height_measurement,
    squarecolumn_length,
    squarecolumn_length_measurement,
    squarecolumn_width,
    squarecolumn_width_measurement,
    squarecolumn_quantity,
    cubicFeet,
    cubicYards;

  squarecolumn_height = parseFloat(req.body.squarecolumn_height);
  squarecolumn_height_measurement = req.body.squarecolumn_height_measurement;
  squarecolumn_length = parseFloat(req.body.squarecolumn_length);
  squarecolumn_length_measurement = req.body.squarecolumn_length_measurement;
  squarecolumn_width = parseFloat(req.body.squarecolumn_width);
  squarecolumn_width_measurement = req.body.squarecolumn_width_measurement;
  squarecolumn_quantity = parseFloat(req.body.squarecolumn_quantity);

  if (squarecolumn_height_measurement == "inches") {
    squarecolumn_height = squarecolumn_height / 12;
  }
  if (squarecolumn_length_measurement == "inches") {
    squarecolumn_length = squarecolumn_length / 12;
  }
  if (squarecolumn_width_measurement == "inches") {
    squarecolumn_width = squarecolumn_width / 12;
  }

  cubicFeet =
    squarecolumn_height *
    squarecolumn_length *
    squarecolumn_width *
    squarecolumn_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

router.post("/calculate/roundcolumn", function(req, res) {
  var roundcolumn_height,
    roundcolumn_height_measurement,
    roundcolumn_diameter,
    roundcolumn_diameter_measurement,
    roundcolumn_quantity,
    cubicFeet,
    cubicYards,
    pi,
    radius,
    area,
    squared_radius;

  //   pi = Math.PI;
  pi = 3.14;

  roundcolumn_height = parseFloat(req.body.roundcolumn_height);
  roundcolumn_height_measurement = req.body.roundcolumn_height_measurement;
  roundcolumn_diameter = parseFloat(req.body.roundcolumn_diameter);
  roundcolumn_diameter_measurement = req.body.roundcolumn_diameter_measurement;
  roundcolumn_quantity = parseFloat(req.body.roundcolumn_quantity);

  if (roundcolumn_height_measurement == "inches") {
    roundcolumn_height = roundcolumn_height / 12;
  }
  if (roundcolumn_diameter_measurement == "inches") {
    roundcolumn_diameter = roundcolumn_diameter / 12;
  }

  radius = roundcolumn_diameter / 2;
  squared_radius = radius * radius;
  area = pi * squared_radius;

  cubicFeet = roundcolumn_height * area;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

router.post("/calculate/steps", function(req, res) {
  var steps_platformdepth,
    steps_platformdepth_measurement,
    steps_riseheight,
    steps_riseheight_measurement,
    steps_rundepth,
    steps_rundepth_measurement,
    steps_width,
    steps_width_measurement,
    steps_numberofsteps, // Number of steps including the platform
    steps_quantity,
    steps, // Number of steps not including the platform
    cubicFeet,
    cubicYards,
    platformHeight,
    platformCubicFeet,
    stepsCubicFeet;

  steps_platformdepth = parseFloat(req.body.steps_platformdepth);
  steps_platformdepth_measurement = req.body.steps_platformdepth_measurement;
  steps_riseheight = parseFloat(req.body.steps_riseheight);
  steps_riseheight_measurement = req.body.steps_riseheight_measurement;
  steps_rundepth = parseFloat(req.body.steps_rundepth);
  steps_rundepth_measurement = req.body.steps_rundepth_measurement;
  steps_width = parseFloat(req.body.steps_width);
  steps_width_measurement = req.body.steps_width_measurement;
  steps_numberofsteps = parseFloat(req.body.steps_numberofsteps);
  steps_quantity = parseFloat(req.body.steps_quantity);

  if (steps_platformdepth_measurement == "inches") {
    steps_platformdepth = steps_platformdepth / 12;
  }
  if (steps_riseheight_measurement == "inches") {
    steps_riseheight = steps_riseheight / 12;
  }
  if (steps_rundepth_measurement == "inches") {
    steps_rundepth = steps_rundepth / 12;
  }
  if (steps_width_measurement == "inches") {
    steps_width = steps_width / 12;
  }

  platformHeight = steps_numberofsteps * steps_riseheight;
  platformCubicFeet = platformHeight * steps_width * steps_platformdepth;
  steps = steps_numberofsteps - 1;
  totalRunDepth = steps * steps_rundepth;
  stepsCubicFeet = (platformHeight * steps_width * totalRunDepth) / 2;

  cubicFeet = (platformCubicFeet + stepsCubicFeet) * steps_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

router.post("/calculate/curbsgutters", function(req, res) {
  var curb_depth,
    curb_depth_measurement,
    curb_height,
    curb_height_measurement,
    gutter_width,
    gutter_width_measurement,
    flag_thickness,
    flag_thickness_measurement,
    curb_length,
    curb_length_measurement,
    curb_quantity,
    curbCubicFeet,
    gutterCubicFeet,
    cubicFeet,
    cubicYards;

  curb_depth = parseFloat(req.body.curb_depth);
  curb_depth_measurement = req.body.curb_depth_measurement;
  curb_height = parseFloat(req.body.curb_height);
  curb_height_measurement = req.body.curb_height_measurement;
  gutter_width = parseFloat(req.body.gutter_width);
  gutter_width_measurement = req.body.gutter_width_measurement;
  flag_thickness = parseFloat(req.body.flag_thickness);
  flag_thickness_measurement = req.body.flag_thickness_measurement;
  curb_length = parseFloat(req.body.curb_length);
  curb_length_measurement = req.body.curb_length_measurement;
  curb_quantity = parseFloat(req.body.curb_quantity);

  if (curb_depth_measurement == "inches") {
    curb_depth = curb_depth / 12;
  }
  if (curb_height_measurement == "inches") {
    curb_height = curb_height / 12;
  }
  if (gutter_width_measurement == "inches") {
    gutter_width = gutter_width / 12;
  }
  if (flag_thickness_measurement == "inches") {
    flag_thickness = flag_thickness / 12;
  }
  if (curb_length_measurement == "inches") {
    curb_length = curb_length / 12;
  }

  curbCubicFeet = curb_depth * curb_length * (curb_height + flag_thickness);
  gutterCubicFeet = curb_length * gutter_width * flag_thickness;

  cubicFeet = (curbCubicFeet + gutterCubicFeet) * curb_quantity;
  cubicYards = cubicFeet / 27;

  var hbsObject = {
    answerYards: cubicYards,
    answerFeet: cubicFeet
  };

  res.render("index", hbsObject);
});

module.exports = router;
