const newPostHandler = async function(event){
    event.preventDefault();
    const title = document.querySelector('');
    const body = document.querySelectorAll('');
    await fetch('api/post', {
        method:'POST',
        body:JSON.stringify({title, body}),
        //headers:
    });
    document.location.replace('')
};
document.querySelector('')
.addEventListener('submit', newPostHandler);