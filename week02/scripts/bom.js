// Declare variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button[type="submit"]');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    // Check if input is not empty
    if (input.value.trim() !== '') {
        // Create list item
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';

        // Add event listener to delete button
        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Append delete button to li, then li to list
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // Clear input and focus
        input.value = '';
        input.focus();
    }
});