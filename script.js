// Function to handle job applications
function applyNow(jobTitle) {
    alert("You are applying for the ${jobTitle} position. Please send your resume to careers@techmaa.com.");
  }
function applyNow(jobTitle) {
    const email = "hrd@techmaa.org";
    const subject = 'Application for ${jobTitle}';
    const body = 'Dear Techmaa,%0D%0A%0D%0A I am interested in applying for the ${jobTitle} position.%0D%0A%0D%0ARegards,%0D%0A[Your Name]';
    window.location.href ='mailto:${email}?subject=${subject}&body=${body}';
  }