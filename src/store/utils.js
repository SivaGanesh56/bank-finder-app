export const buildData = (data, id) => {
    const modifiedData = [...data];
    const idx = modifiedData.findIndex(item => item.id === id);

    if (idx !== -1) {
        modifiedData[idx] = {
            ...modifiedData[idx],
            isFavourite: !modifiedData[idx].isFavourite
        }
    }


    return modifiedData;
};