// Create navbar elements
const navbar = document.createElement('nav');
navbar.classList.add('navbar');
const ul = document.createElement('ul');
const xrpl = document.createElement('li');
const home = document.createElement('li');
const howItWorks = document.createElement('li');
const login = document.createElement('li');
const xrplLink = document.createElement('a');
const homeLink = document.createElement('a');
const howItWorksLink = document.createElement('a');
const loginLink = document.createElement('a');

// Set link text and href
xrplLink.textContent = 'XRPL Crowdfunding';
xrplLink.href = '#';
homeLink.textContent = 'Home';
homeLink.href = '#';
howItWorksLink.textContent = 'How it works';
howItWorksLink.href = '#';
loginLink.textContent = 'Login';
loginLink.href = '#';

// Add event listeners to the links to update active class
xrplLink.addEventListener('click', updateActiveLink);
homeLink.addEventListener('click', updateActiveLink);
howItWorksLink.addEventListener('click', updateActiveLink);
loginLink.addEventListener('click', updateActiveLink);

// Append elements to the DOM
ul.appendChild(xrpl);
ul.appendChild(home);
ul.appendChild(howItWorks);
ul.appendChild(login);
xrpl.appendChild(xrplLink);
home.appendChild(homeLink);
howItWorks.appendChild(howItWorksLink);
login.appendChild(loginLink);
navbar.appendChild(ul);
document.body.appendChild(navbar);

// Function to update active class on clicked link
function updateActiveLink(event) {
  const currentLink = document.querySelector('.active');
  currentLink.classList.remove('active');
  event.target.classList.add('active');
}