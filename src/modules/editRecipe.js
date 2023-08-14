const editRecipe = `
<div class="add-recipe-modal">
        <div class="modal-frame">
          <div class="top-section">
            <p class="section-heading add-recipe-heading">EDITING YOUR RECIPE</p>
            <a href="#" class="close_button close_add_rec">
              <img class="close_button-icon" src="/public/icons/darker/close-darker.svg" />
            </a>
          </div>

          <div class="data-entry">
            <div class="row name-time-row">
              <div class="new-recipe-name">
                <label class="data-label">Name of recipe</label>
                <input type="text" class="name-input" placeholder="Name" />
              </div>

              <div class="cooking-time">
                <label class="data-label">Cooking time</label>
                <div class="time-field">
                  <input type="text" class="time-input" placeholder="15" />
                  <span class="min">min</span>
                </div>
              </div>
            </div>

            <div class="description-input">
              <label class="data-label">Description</label>
              <textarea class="description-textarea" placeholder="Description"></textarea>
            </div>

            <div class="row ingredients-section">
              <!-- Dropdown for ingredients -->
              <div class="ingredients-dropdown">
                <label class="data-label">Ingredients</label>
                <div class="dropdown-container">
                  <select class="dropdown ingredients-field" id="ingredients">
                    <option value="ing1">Ingridient #1</option>
                    <option value="ing2">Ingridient #2</option>
                    <option value="ing3">Ingridient #3</option>
                    <option value="ing4">Ingridient #4</option>
                  </select>
                </div>
              </div>

              <!-- Quantity section -->
              <div class="quanity">
                <label class="data-label">Quantity</label>
                <div class="quantity-section">
                  <input type="text" class="number-input" placeholder="15" />
                  <div class="dropdown-container">
                    <select class="dropdown unit-input" id="units">
                      <option value="pc">pc</option>
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                      <option value="l">l</option>
                      <option value="ml">ml</option>
                    </select>
                  </div>
                  <a href="#" class="delete_button delete_add_rec">
                    <img class="delete_button-icon" src="/public/icons/darker/delete-darker.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- DATA ENTRY END -->

          <button class="add-ingredient-btn">+ Add ingredient</button>
          <button class="primary-btn edit-recipe-btn">EDITING YOUR RECIPE</button>
        </div>
      </div>
`