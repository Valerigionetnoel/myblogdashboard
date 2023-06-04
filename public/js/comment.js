const NewFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#comment-title').value.trim();
    const description = document.querySelector('#comment-desc').value.trim();
    const blogId = document.getElementById('blogId').value;
    // set the value of the blog id variable by getting the element by id
    console.log(title);
    console.log(description);

    if (title && description) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ title:title, description:description, blog_id:blogId}),
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
    .addEventListener('submit', NewFormHandler)