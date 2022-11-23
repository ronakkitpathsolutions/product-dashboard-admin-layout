export const getDataFromLocal = key => localStorage.getItem(key)
export const setDataFromLocal = (key, data) => localStorage.setItem(key, data)
export const removeDataFromLocal = key => localStorage.getItem(key)
export const clearLocalStorage = () => localStorage.clear()