export function readFromLocalStorage(key: string) {
    return window.localStorage.getItem(key);
}

export function writeToLocalStorage(key: string, value: string) {
    return  window.localStorage.setItem(key, value);
}

export function removeFromLocalStorage(key: string) {
    window.localStorage.removeItem(key);
}

export function checkExistsInLocalStorage(key: string) {
    const value: string | null = window.localStorage.getItem(key);
    return (value !== null);
}

