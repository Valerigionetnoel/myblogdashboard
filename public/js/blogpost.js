const NewFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
    console.log(title);
    console.log(description);

    if (title && description) {
        const response = await fetch (`/api/blogpost`, {
            method: 'POST',
            body: JSON.stringify({ name:title, description:description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create a blogpost')
        }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', NewFormHandler)