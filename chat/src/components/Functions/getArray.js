
/**
 * Так как в FireBase RealTime database данные хранятся в виде объектов JSON,
 * для удобства нам необходимо преобразовать полученный объект в массив
 * @param {Object} obj 
 * @returns {Array} array - возвращаемый массив
 * 
 * с помощью метода перебора ключей объекта for мы создаем объект с данными сообщения
 * и пушим этот объект в массив, который в последствии вернет функция
 * 
 */
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