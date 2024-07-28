document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            code: document.getElementById('code').value,
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            image: document.getElementById('image').value
        };

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Data submitted successfully!');

            // Reset các trường nhập liệu
            document.getElementById('dataForm').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the data.');
        });
    });
});
