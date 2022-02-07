
export const addItemToLocalStorage = (item: string, value: string) => {
    localStorage.setItem(item, value);
};

export const getItemFromLocalStorage = (item: string) => {
    return localStorage.getItem(item);
};

export const removeItemFromLocalStorage = (item: string) => {
    localStorage.removeItem(item);
};
