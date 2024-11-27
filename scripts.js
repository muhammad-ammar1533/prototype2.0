// Search button interaction
document.querySelector(".search-button").addEventListener("click", function() {
    alert("Search function coming soon!");
});

// Feedback button interaction on the Dataset Detail Page
const feedbackButton = document.querySelector(".feedback-button");
if (feedbackButton) {
    feedbackButton.addEventListener("click", function() {
        alert("Feedback submitted! Thank you for your input.");
    });
}

// Upload button interaction on the Analytics Dashboard Page
const uploadButton = document.querySelector(".upload-button");
if (uploadButton) {
    uploadButton.addEventListener("click", function() {
        alert("Upload functionality coming soon!");
    });
}

// Edit button interaction on the Analytics Dashboard Page
const editButton = document.querySelector(".edit-button");
if (editButton) {
    editButton.addEventListener("click", function() {
        alert("Edit functionality coming soon!");
    });
}
// Search function to filter datasets based on user input
function searchForData() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let dataItems = document.getElementsByClassName('data-item');
    
    for (let i = 0; i < dataItems.length; i++) {
        let title = dataItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            dataItems[i].style.display = 'block';
        } else {
            dataItems[i].style.display = 'none';
        }
    }
}

// Simulated file upload function for demonstration
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Capture input values
    const title = document.getElementById('dataset-title').value;
    const category = document.getElementById('dataset-category').value;
    const description = document.getElementById('dataset-description').value;
    
    // Simulate adding a new row to the dataset table
    const table = document.getElementById('dataset-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    // Add new cells to the row
    const titleCell = newRow.insertCell(0);
    const categoryCell = newRow.insertCell(1);
    const descriptionCell = newRow.insertCell(2);
    const downloadCell = newRow.insertCell(3);
    
    titleCell.innerText = title;
    categoryCell.innerText = category;
    descriptionCell.innerText = description;
    downloadCell.innerHTML = '<a href="#" download="' + title.replace(/\s+/g, '_').toLowerCase() + '.csv">Download CSV</a>';
    
    // Clear the form after submission
    document.getElementById('upload-form').reset();
    alert('Dataset uploaded successfully! (Simulated)');
});

// Search function to filter datasets based on user input in "data-catalog.html"
function searchForData() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let dataItems = document.getElementsByClassName('data-item');
    
    for (let i = 0; i < dataItems.length; i++) {
        let title = dataItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let category = dataItems[i].getElementsByClassName('category')[0].innerText.toLowerCase();
        
        if (title.includes(input) || category.includes(input)) {
            dataItems[i].style.display = 'block';
        } else {
            dataItems[i].style.display = 'none';
        }
    }
}

// Search function for "index.html"
function searchFromIndex() {
    let input = document.getElementById('index-search-input').value.toLowerCase();
    let dataItems = document.getElementsByClassName('index-data-item');
    
    for (let i = 0; i < dataItems.length; i++) {
        let title = dataItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            dataItems[i].style.display = 'block';
        } else {
            dataItems[i].style.display = 'none';
        }
    }
}
