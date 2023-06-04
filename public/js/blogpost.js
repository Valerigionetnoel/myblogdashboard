const NewFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();

    if (title && description) {
        const response = await fetch (`/api/blogpost`, {
            method: 'POST',
            body: JSON.stringify({ title, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create a blogpost')
        }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submitblog', NewFormHandler)