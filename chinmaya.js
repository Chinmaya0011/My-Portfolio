const jobTitleElement = document.getElementById("job-title");
const jobTitles = jobTitleElement.getElementsByClassName("job");
let currentIndex = 0;

setInterval(function() {
    jobTitles[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % jobTitles.length;
    jobTitles[currentIndex].style.display = "inline";
}, 1000); // Change the job title every 1000 milliseconds (1 second)

// Initialize Flickity carousel for project section
const projectCarousel = new Flickity('#project-carousel', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000, // Set autoplay interval in milliseconds (3 seconds)
});

document.addEventListener('DOMContentLoaded', function () {
    var flkty = new Flickity('.carousel', {
        autoPlay: true,
        wrapAround: true,
        prevNextButtons: false
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const formSubmittedMessage = document.getElementById("form-submitted-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add code here to send the form data to the server using fetch or XMLHttpRequest.

        // For this example, we'll just simulate a delay for demonstration purposes.
        setTimeout(function() {
            // Hide the form and display the "Form submitted" message
            form.style.display = "none";
            formSubmittedMessage.style.display = "block";
        }, 2000); // Simulating a 2-second delay (you can adjust this value)
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    let currentProject = 0;
  
    function showProject(index) {
      projects[currentProject].style.display = 'none';
      projects[index].style.display = 'block';
      currentProject = index;
    }
  
    function nextProject() {
      const nextIndex = (currentProject + 1) % projects.length;
      showProject(nextIndex);
    }
  
    function prevProject() {
      const prevIndex = (currentProject - 1 + projects.length) % projects.length;
      showProject(prevIndex);
    }
  
    // Add event listeners to buttons for navigation
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
  
    nextButton.addEventListener('click', nextProject);
    prevButton.addEventListener('click', prevProject);
  
    // Automatically advance the carousel (adjust the interval as needed)
    setInterval(nextProject, 5000);
  });
  