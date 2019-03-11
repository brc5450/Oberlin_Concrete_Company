document
  .getElementById("squareslab_submit")
  .addEventListener("click", function() {
    var squareslab_depth,
      squareslab_length,
      squareslab_width,
      squareslab_quantity,
      squareslab_totalYardage;

    squareslab_depth = document.getElementById("squareslab-depth").value;
    squareslab_length = document.getElementById("squareslab-length").value;
    squareslab_width = document.getElementById("squareslab-width").value;
    squareslab_quantity = document.getElementById("squareslab-quantity").value;

    squareslab_totalYardage =
      squareslab_depth *
      squareslab_length *
      squareslab_width *
      squareslab_quantity;

    document.getElementById("answer-totalYardage").innerHTML =
      "<h3>" + squareslab_totalYardage + "</h3>";
  });
/*
  document
  .getElementById("roundslab_submit")
  .addEventListener("submit", function() {});
document
  .getElementById("wall_submit")
  .addEventListener("submit", function() {});
document
  .getElementById("footer_submit")
  .addEventListener("submit", function() {});
document
  .getElementById("squarecolumn_submit")
  .addEventListener("submit", function() {});
document
  .getElementById("roundcolumn_submit")
  .addEventListener("submit", function() {});
document
  .getElementById("steps_submit")
  .addEventListener("submit", function() {});
document
  .getElementById("curb_submit")
  .addEventListener("submit", function() {});
*/
