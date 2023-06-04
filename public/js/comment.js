const NewFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#comment-title').value.trim();
    const description = document.querySelector('#comment-desc').value.trim();
    console.log(title);
    console.log(description);

    if (title && description) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ title, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert('It worked!')

            document.location.reload();
        } else {
            alert('Failed to create comment')
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submitcomment', NewFormHandler)