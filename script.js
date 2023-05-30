const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected ratings for each category
  const designRating = document.querySelector('input[name="rating1"]:checked').value;
  const qualityRating = document.querySelector('input[name="rating2"]:checked').value;
  const colorRating = document.querySelector('input[name="rating3"]:checked').value;
  const fontStyleRating = document.querySelector('input[name="rating4"]:checked').value;
  const qualityWorkRating = document.querySelector('input[name="rating5"]:checked').value;
  const courageRating = document.querySelector('input[name="rating6"]:checked').value;
  const dependabilityRating = document.querySelector('input[name="rating7"]:checked').value;

  // Create an object to store the ratings
  const ratings = {
    design: designRating,
    quality: qualityRating,
    color: colorRating,
    fontStyle: fontStyleRating,
    qualityWork: qualityWorkRating,
    courage: courageRating,
    dependability: dependabilityRating
  };

  // Send the ratings to the server or perform further processing
  // You can use AJAX, fetch, or any other method to send the data to the server

  // Example: Display the ratings in the console
  console.log(ratings);

  // Reset the form
  form.reset();
});