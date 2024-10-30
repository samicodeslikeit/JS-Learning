// Factory function to create a blog post object
function Blog(title, body, author, views, comments, isLive){
    return{
        title,
        body, 
        author,
        views,
        comments,
        isLive
    }
}

// Factory function to create a comments object
function Commnets(author, body){
    return {
        author,
        body
    };  
}   

// Object Literal syntax to create a blog post object
let post = {
    title: "Titanic Drownign",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic perspiciatis molestias blanditiis aliquid optio consequuntur, tenetur ducimus sed ex deleniti ratione et. Culpa, iusto! Obcaecati facere reiciendis qui porro.",
    author: "Julain Caspher",
    views: 20023,
    comments: [
        {
            author: "Sami",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            author: "Sabo",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ],
    isLive: true
}

console.log(post);

