import { useEffect, useState } from "react";

/**
 * 
 * @param {Firebase} dataBase - экземпляр firebase.database.Reference
 * @returns 
 * Здесь мы создали локальный state c помощью useState
 * Далее хуку useEffect мы передаем callback функцию,
 * которая сначала создает ref ссылку для firebase,
 * затем вешает слушатель on на ref ссылку. Слушатель 
 * в качестве второго аргумента получает callback функцию,
 * которая в свою очередь получает снимок данных (snapshot),
 * этот снимок данных мы передаем функции setDb, которая запишет 
 * в локальный state данные пришедшие из firebase.
 * useEffect в качестве массива зависимостей передаем массив с 
 * одним параметром - dataBase 
 * 
 */
export const useDataBase = dataBase => {

    const [db, setDb] = useState(null);

    useEffect(() => {
        const dbRef = dataBase.ref('message/');
        
        dbRef.on('value', snapshot => {
            setDb(snapshot.val())
        })
    }, [dataBase])

    return db

}