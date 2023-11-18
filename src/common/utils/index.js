export const flattenObjectMethod = (user) => {
    let flattened = {};
    for (let key in user) {
        const value = user[key];
        if (typeof value === 'object' && value !== null) {
            const nestedObject = flattenObjectMethod(value);
            flattened = { ...flattened, ...nestedObject };
        } else {
            flattened[key] = value;
        }
    }
    return flattened;
};

export const filterDataBySearch = (data, searchText) => {
    if (!searchText.trim()) {
        return data;
    }

    const searchTextLower = searchText.toLowerCase();

    return data.filter(item => {
        return Object.values(item)
            .map(value => String(value).toLowerCase())
            .some(value => value.indexOf(searchTextLower) !== -1);
    });
};

export const sortData = (filteredData, sortColumn, sortOrder) => {
    if (!sortColumn) {
        return filteredData;
    }

    return filteredData.slice().sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (sortOrder === "asc") {
            return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0);
        } else {
            return aValue > bValue ? -1 : (aValue < bValue ? 1 : 0);
        }
    });
}