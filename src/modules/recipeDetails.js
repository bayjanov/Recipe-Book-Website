const recipeDetailsHTML =  `
<div class="recipe-details">
  <div class="recipe-details-content">
    <!-- close side pop up icon/button -->
    <div class="details-hero">
      <a href="#" class="close_button">
        <img class="close_button-icon" src="/public/icons/close-default.svg" />
      </a>
    </div>
    <!-- Recipe Details -->
    <div class="details">
      <div class="name-time-row">
        <p class="section-heading recipe-title">NAME</p>
        <p class="section-heading recipe-time">25 min.</p>
      </div>

      <!-- recipe-description -->
      <p class="description">
        Description Description Description Description Description Description Description Description Description
      </p>

      <!-- recipe-ingredients -->
      <p class="ingredients-heading">INGREDIENTS</p>
      <!-- list of ingredients -->
      <ul class="ingredients ingredients-list">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
        <li>Ingredient 4</li>
        <li>Ingredient 5</li>
        <li>Ingredient 6</li>
      </ul>

      <!-- action buttons -->
      <div class="action-buttons">
        <div class="left-side">
          <a href="#" class="save_button">
            <img class="save_button-icon" src="/public/icons/darker/save-darker.svg" />
          </a>
        </div>
        <div class="right-side">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/darker/edit-darker.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/darker/delete-darker.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

const root = document.querySelector('#root');
// root.innerHTML = recipeDetailsHTML;

root.innerHTML += recipeDetailsHTML;



// Function to show the recipe details modal
function showHideRecipeDetails() {
  const recipeDetails = document.querySelector('.recipe-details');
  recipeDetails.style.display = 'block';
}

// Attach click event to each recipe-card to show the recipe details
const recipeCards = document.querySelectorAll('.recipe_card');
recipeCards.forEach(card => {
  card.addEventListener('click', showHideRecipeDetails);
});

// Function to close the recipe details modal
function closeRecipeDetails() {
  const recipeDetailsModal = document.querySelector('.recipe-details');
  recipeDetailsModal.style.display = 'none';
}

// Attach click event to the close button to close the recipe details
const closeBtn = document.querySelector('.close_button');
closeBtn.addEventListener('click', closeRecipeDetails);
