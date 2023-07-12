const postList = document.getElementById('postList');
const loader = document.querySelector('.loader');


loader.style.display = 'block';


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
 
    loader.style.display = 'none';

  console.log(posts);
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.className = 'post';
      listItem.textContent = post.title;
      postList.appendChild(listItem);
    });
  })
  .catch(error => {
   console.log('Error:', error);
   
  });
