const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET"
    });
    const data = await response.json();
    return data;
};

export default getPosts;