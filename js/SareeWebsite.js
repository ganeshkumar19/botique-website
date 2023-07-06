const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('.profile-grid');
const errorMessage = document.querySelector('.error-message');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundMatch = false; 
  
  items.forEach(function(item) {
    const itemName = item.querySelector('.title').textContent.toLowerCase();
    
    if (itemName.includes(searchTerm)) {
      item.style.display = 'block';  
      foundMatch = true;
    } else {
      item.style.display = 'none';
    }
  });
  
  if (!foundMatch) {
  errorMessage.textContent = 'Sorry, your search item is not in the cart.';
} else {
  errorMessage.textContent = ''; 
}
});