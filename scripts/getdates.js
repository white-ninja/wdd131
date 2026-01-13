// Display the current year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Display the last modified date 
document.getElementsById("lastModified").textContent = document.lastModified;

fetch('https://api.github.com/repos/white-ninja/wdd131/commits?per_page=1')
  .then(response => response.json())
  .then(data => {
    const lastCommit = new Date(data[0].commit.committer.date);
    document.getElementById("lastModified").textContent = lastCommit.toLocaleString();
  })
  .catch(err => {
    console.error('Could not fetch commit info', err);
  });
