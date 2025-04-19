export const fetchApi = async (url) => {
    const albumData = await fetch(url);
    const albumJsonData = albumData.json();
    return albumJsonData;// TODO create custom hooks for api call
}