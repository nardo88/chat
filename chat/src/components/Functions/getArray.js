

export const getArray = obj => {
    const array = [];

    for(let key in obj){
        array.push({
            id: key,
            message: obj[key].message,
            name: obj[key].name,
            date: obj[key].date,
        })
    }
    
    return array;

    
}