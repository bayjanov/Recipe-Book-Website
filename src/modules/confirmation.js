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

root.innerHTML += confirmationsHTML;



// Function to show the confirmation modal
function showHideConfirmation(event) {
  const confirmationModal = document.querySelector('.modal-position');
  confirmationModal.style.display = 'flex';
  event.stopPropagation();  // Stop propagation
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

