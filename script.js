document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input value
    const task = document.getElementById('todo-input').value;
    if (task === '') return;
    
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    listItem.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">Remove</button>
    `;
    
    // Add the list item to the list
    document.getElementById('todo-list').appendChild(listItem);
    
    // Clear the input
    document.getElementById('todo-input').value = '';
});

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
