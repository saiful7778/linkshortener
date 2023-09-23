const getItemData = (itemName) => {
  const itemData = localStorage.getItem(itemName);
  if (itemData) {
    return JSON.parse(itemData);
  }
  return [];
};

const setItemData = (itemName, itemData) => {
  localStorage.setItem(itemName, JSON.stringify(itemData));
};

const addItemData = (itemName, itemData) => {
  const listData = getItemData(itemName);
  if (listData) {
    listData.push(itemData);
    setItemData(itemName, listData);
  } else {
    setItemData(itemName, [itemData]);
  }
};

const removeItemData = (itemName, itemData) => {
  const remaining = getItemData(itemName);
  if (remaining) {
    const updateData = remaining.filter((ele) => ele !== itemData);
    setItemData(updateData);
    return true;
  }
  return false;
};

export { getItemData, setItemData, addItemData, removeItemData };
