export const getAllMemes = async() => {
    const response = await fetch(`https://api.imgflip.com/get_memes`, {
        method : "GET"
    });
    // const data = await response.json();
    // return data;
    
    return await response.json();
}