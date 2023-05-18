const shorten = text =>{

    const title = text.split(" ");
    const newTitle = `${title[0]} ${title[1]}`
    return newTitle;
}
export {shorten}
