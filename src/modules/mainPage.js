const htmlToRender = `
<!-- Sidebar -->
<div id="sidebar">
  <div class="nav-button main-fr">
    <a href="#" class="nav-icon-button"><img class="main-page-icon" src="/public/icons/main-page-icon.svg" /></a>
  </div>
  <div class="nav-button fav-fr">
    <a href="#" class="nav-icon-button"><img class="fav-page-icon" src="/public/icons/fav-page-icon.svg" /></a>
  </div>
</div>

<!-- Main content -->
<div class="content">
  <!-- Header -->
  <div class="header">
    <h1 class="title">RECIPES</h1>
    <button class="primary-btn  add-button">+ ADD NEW RECIPE</button>
  </div>

  <!-- Recipe of the day -->
  <p class="section-heading">RECIPE OF THE DAY</p>
  <div class="recipe_of_the_day">
    <!-- First card-->
    <div class="recipe_card first">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Second card-->
    <div class="recipe_card second">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Third card-->
    <div class="recipe_card third">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>
  </div>
  <!-- Explore recipes -->
  <p class="section-heading">EXPLORE RECIPES</p>
  <div class="explore-recipe-section">
    <!-- First card-->
    <div class="recipe_card first">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Second card-->
    <div class="recipe_card second">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Third card-->
    <div class="recipe_card third">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Fourth card-->
    <div class="recipe_card fourth">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Fifth card-->
    <div class="recipe_card fifth">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>

    <!-- Sixth card-->
    <div class="recipe_card sixth">
      <!-- The recipe card is a card with rounded angles and a bg image in it. In this part, there are three button to the top of the card block: Favorite (left side alone), edit and delete on the right side. Bottom left there is a Name, number of ingredients, e.g. "10 ingredients", bottom right - cooking time-->
      <div class="recipe_card_header">
        <div class="recipe_card_header_left">
          <a href="#" class="save_button"
            ><img class="save_button-icon" src="/public/icons/card-button-icons/save-passive.svg" />
          </a>
        </div>
        <div class="recipe_card_header_right">
          <a href="#" class="edit_button"
            ><img class="edit_button-icon" src="/public/icons/card-button-icons/edit-passive.svg" />
          </a>
          <a href="#" class="delete_button"
            ><img class="delete_button-icon" src="/public/icons/card-button-icons/delete-passive.svg" />
          </a>
        </div>
      </div>
      <div class="recipe_card_bottom">
        <div class="recipe_info">
          <p class="name">Name</p>
          <p class="ingredients">10 ingredients</p>
        </div>
        <p class="time">30 min</p>
      </div>
    </div>
  </div>
</div>`;


const recipeDetailsHTML =  `<div class="recipe-details">
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

const confirmationsHTML = `
<div class="modal-position">
  <div class="confirmation-frame">
    <div class="confirmation-header">
        <p class="section-heading modal-title">CONFIRMATION</p>
        <a href="#" class="close_button close_conf">
          <img
            class="close_button-icon"
            src="/public/icons/darker/close-darker.svg"
          />
        </a>
    </div>
    <p class="message">Are you sure you want to delete this recipe?</p>

    <div class="confirmation-buttons">
        <button class="secondary-btn cancel-btn">CANCEL</button>
        <button class="primary-btn confirm-btn">YES, DELETE</button>
    </div>
  </div>
</div>`;




const root = document.querySelector('#root');
root.innerHTML = htmlToRender;

root.innerHTML += recipeDetailsHTML;
root.innerHTML += confirmationsHTML;

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


// Make sidebar buttons active with white background when clicked
const mainPageBtn = document.querySelector('.main-fr');
const favPageBtn = document.querySelector('.fav-fr');

function makeMainPageBtnActive() {
  mainPageBtn.style.backgroundColor = '#fff';
  favPageBtn.style.backgroundColor = '#FFEECA';
}

function makeFavPageBtnActive() {
  favPageBtn.style.backgroundColor = '#fff';
  mainPageBtn.style.backgroundColor = '#FFEECA';
}

mainPageBtn.addEventListener('click', makeMainPageBtnActive);
favPageBtn.addEventListener('click', makeFavPageBtnActive);




// Function to show the confirmation modal
function showHideConfirmation() {
  const confirmationModal = document.querySelector('.modal-position');
  confirmationModal.style.display = 'flex';
}

// Attach click event to each delete button to show the confirmation modal
const deleteBtns = document.querySelectorAll('.delete_button');
deleteBtns.forEach(btn => {
  btn.addEventListener('click', showHideConfirmation);
});

// Function to close the confirmation modal
function closeConfirmation() {
  const confirmationModal = document.querySelector('.modal-position');
  confirmationModal.style.display = 'none';
}

// Attach click event to the close button to close the confirmation modal
const closeConfBtn = document.querySelector('.close_conf');
closeConfBtn.addEventListener('click', closeConfirmation);

// Attach click event to the cancel button to close the confirmation modal
const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.addEventListener('click', closeConfirmation);
