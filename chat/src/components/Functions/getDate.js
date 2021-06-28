
/**
 * 
 * @returns {String} дата в формате "28 июня 2021 г., 15:28:47"
 */
export const getDate = () => {
    const date = new Date()

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return date.toLocaleString("ru", options)
}