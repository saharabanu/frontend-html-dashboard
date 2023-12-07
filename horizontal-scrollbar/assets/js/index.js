const attachmentTriggers = document.querySelectorAll('.attachment-trigger');
const attachmentCountEl = document.getElementById('attachment-count');
const attachmentList = document.getElementById('attachmentList');

// Handle file upload
const handleFileUpload = (attachmentList, attachmentCountEl, fileInput) => {
  const files = fileInput.files;

  // Clear existing list
  attachmentList.innerHTML = '';

  for (const file of files) {
    // Create list item
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    // Get file name and extension
    const fileName = file.name;
    const extension = fileName.split('.').pop();

    // Display file information
    listItem.textContent = `${fileName} (${extension})`;

    // Add list item to the list
    attachmentList.appendChild(listItem);
  }

  // Update attachment count
  attachmentCountEl.textContent = files.length;
  
};

// Initialize the file input
document.getElementById('fileInput').addEventListener('change', () => {
  // This function requires arguments for specific elements
  // Modify your code to pass the relevant elements as arguments.
  handleFileUpload(attachmentList, attachmentCountEl, document.getElementById('fileInput'));
});

// Add click event listener to each trigger
attachmentTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    // Open the modal
    const modalElement = document.getElementById('attachmentModal');
    modalElement.classList.add('show');
    modalElement.style.display = 'block';

    const card = event.target.closest('.card');
    if (!card) {
      return; 
    }

    const cardSpecificList = card.querySelector('#attachmentList');
    const cardSpecificCount = card.querySelector('#attachment-count');
    const cardSpecificInput = card.querySelector('#fileInput');

    // Handle file upload for specific card
    cardSpecificInput.addEventListener('change', () => {
      handleFileUpload(cardSpecificList, cardSpecificCount, cardSpecificInput);
    });
  });
});








// Close button functionality
const closeButton = document.querySelector('#attachmentModal .btn-close');

closeButton.addEventListener('click', () => {
  const modalElement = document.getElementById('attachmentModal');
  modalElement.classList.remove('show');
  modalElement.style.display = 'none';
});