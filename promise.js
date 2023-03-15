const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
];

function getPosts() {
    setTimeout( () => {
        let output = '';
        posts.forEach( (post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            }else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function deleteBlog(){
     return new Promise( (resolve, reject) => {
         setTimeout( () => {
             if(posts.length > 0) {
                 const popedElement = posts.pop();
                 resolve(popedElement);
             }else {
                 reject('ERROR');  
             }
         }, 1000);
     })
     
 }

function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const lastActivity = new Date();
            console.log(lastActivity); 
        }, 1000)
        resolve();
    })
}

createPost( { title: 'Post Three', body: 'This is post Three'}).then(updateLastUserActivityTime)
.catch(err => console.log(err));

// Promise.all //

Promise.all([createPost({ title: 'Post Three', body: 'This is post Three'}), updateLastUserActivityTime(), getPosts()]);
Promise.all([deleteBlog(), updateLastUserActivityTime(), getPosts()]);

