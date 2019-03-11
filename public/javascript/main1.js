// onClick listener for square slab tab
document
  .getElementById("square_slab_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      '/images/square_slab.png" ' +
      'alt="square slab picture" />';
  });
// onClick listener for round slab tab
document.getElementById("round_slab_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + '/images/round_slab.png" ' + 'alt="round slab picture" />';
});
//onClick listener for wall tab
document.getElementById("wall_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + '/images/wall.png" ' + 'alt="wall picture" />';
});
//onClick listener for footer tab
document.getElementById("footer_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + '/images/footer.png" ' + 'alt="footer picture" />';
});
//onClick listener for square column tab
document
  .getElementById("square_column_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      '/images/square_column.png" ' +
      'alt="square column picture" />';
  });
//onClick listener for round column tab
document
  .getElementById("round_column_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      '/images/round_column.png" ' +
      'alt="round column picture" />';
  });
//onClick listener for steps tab
document.getElementById("steps_tab").addEventListener("click", function() {
  document.getElementById("patternImg").innerHTML =
    '<img src="' + '/images/steps.png" ' + 'alt="steps picture" />';
});
//onClick listener for curb & gutter tab
document
  .getElementById("curb_gutter_tab")
  .addEventListener("click", function() {
    document.getElementById("patternImg").innerHTML =
      '<img src="' +
      '/images/curb_gutter.png" ' +
      'alt="curbs & gutters picture" />';
  });
