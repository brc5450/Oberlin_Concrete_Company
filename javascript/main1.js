// var imgObject = {
//   square_slab_tab:
//     '<img src="./images/square_slab.png" alt="square slab picture" />',
//   round_slab_tab:
//     '<img src="./images/round_slab.png" alt="round slab picture" />',
//   wall_tab: '<img src="./images/wall.png" alt="wall picture" />',
//   footer_tab: '<img src="./images/footer.png" alt="footer picture" />',
//   square_column_tab:
//     '<img src="./images/square_column.png" alt="square column picture" />',
//   round_column_tab:
//     '<img src="./images/round_column.png" alt="round column picture" />',
//   steps_tab: '<img src="./images/steps.png" alt="steps picture" />',
//   curb_gutter_tab:
//     '<img src=".images/curb_gutter.png" alt="curb & gutters picture" />'
// };

// function navTabClicked(linkId) {
//   document.getElementById("patternImg").innerHTML = "<" + linkId;
// }

// onClick listener for square slab tab
document
  .getElementById("square_slab_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      './images/square_slab.png" ' +
      'alt="square slab picture" />';
  });
// onClick listener for round slab tab
document.getElementById("round_slab_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + './images/round_slab.png" ' + 'alt="round slab picture" />';
});
//onClick listener for wall tab
document.getElementById("wall_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + './images/wall.png" ' + 'alt="wall picture" />';
});
//onClick listener for footer tab
document.getElementById("footer_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + './images/footer.png" ' + 'alt="footer picture" />';
});
//onClick listener for square column tab
document
  .getElementById("square_column_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      './images/square_column.png" ' +
      'alt="square column picture" />';
  });
//onClick listener for round column tab
document
  .getElementById("round_column_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      './images/round_column.png" ' +
      'alt="round column picture" />';
  });
//onClick listener for steps tab
document.getElementById("steps_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + './images/steps.png" ' + 'alt="steps picture" />';
});
//onClick listener for curb & gutter tab
document
  .getElementById("curb_gutter_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      './images/curb_gutter.png" ' +
      'alt="curbs & gutters picture" />';
  });

// Calculator logic

/*
function calculateYardage(submitId) {
  switch (submitId) {
    case "squareslab_submit":
      var squareslab_depth,
        squareslab_depth_measurement,
        squareslab_length,
        squareslab_length_measurement,
        squareslab_width,
        squareslab_width_measurement,
        squareslab_quantity,
        squareslab_totalCubicYardage,
        squareslab_totalCubicFeet;

      squareslab_depth = parseFloat(
        document.getElementById("squareslab-depth").nodeValue
      );
      squareslab_depth_measurement = document.getElementById(
        "squareslab-depth-measurement"
      ).nodeValue;
      squareslab_length = parseFloat(
        document.getElementById("squareslab-length")
      ).nodeValue;
      squareslab_length_measurement = document.getElementById(
        "squareslab-length-measurement"
      ).nodeValue;
      squareslab_width = parseFloat(
        document.getElementById("squareslab-width").nodeValue
      );
      squareslab_width_measurement = document.getElementById(
        "squareslab-width-measurement"
      ).nodeValue;
      squareslab_quantity = parseFloat(
        document.getElementById("squareslab-quantity").nodeValue
      );

      if (squareslab_depth_measurement == "inches") {
        squareslab_depth = squareslab_depth / 12;
      } else {
        return;
      }

      if (squareslab_length_measurement == "inches") {
        squareslab_length = squareslab_length / 12;
      } else {
        return;
      }

      if (squareslab_width_measurement == "inches") {
        squareslab_width = squareslab_width / 12;
      } else {
        return;
      }

      squareslab_totalCubicYardage =
        squareslab_depth * squareslab_length * squareslab_width;

      squareslab_totalCubicFeet = squareslab_totalCubicYardage / 27;

      break;

    case "roundslab_submit":
      break;

    case "wall_submit":
      break;

    case "footer_submit":
      break;

    case "squarecolumn_submit":
      break;

    case "roundcolumn_submit":
      break;

    case "steps_submit":
      break;

    case "curb_submit":
      break;
  }
}
*/
