import StatusCodes from 'http-status-codes';
import genericQueries from '../utils/genericCrudQueries.utils.js';

/**
 * Used to generate a service for the given item
 * @param {*} TABLE_NAME The DB table name that co-respone to the item
 * @returns
 */
export const genericService = (TABLE_NAME) => {
    /**
     * Used to get all existing items.
     *
     * @returns relevant status code and array of all the item objects.
     */
    async function getitems() {
        try {
            const res = await genericQueries.getItems(TABLE_NAME);
            return { items: res, status: StatusCodes.OK };
        } catch (err) {
            return { status: StatusCodes.BAD_REQUEST, error: err.message };
        }
    }

    /**
     * Used to get a item by id.
     *
     * @param {number} id (number representing the item's id)
     *
     * @returns relevant status code and the wanted item object.
     */
    async function getitem(id) {
        try {
            const isExist = await genericQueries.isExist(TABLE_NAME, "id", id);
            if (!isExist) throw new Error(`item with this id does not exist`);

            const res = await genericQueries.getItem(TABLE_NAME, "id", id);

            return { item: res, status: StatusCodes.OK };
        } catch (err) {
            return { status: StatusCodes.BAD_REQUEST, error: err.message };
        }
    }

    /**
     * Used to add a item.
     *
     * @param {object} newitem (object representing the new item object to add)}
     *
     * @returns relevant status code.
     */
    async function additem(newitem) {
        try {
            const isExist = await genericQueries.isExist(TABLE_NAME, "name", newitem.name);
            if (isExist) throw new Error(`item with this name already exists`);

            await genericQueries.insertItem(TABLE_NAME, newitem);
            return { status: StatusCodes.OK };
        } catch (err) {
            return { status: StatusCodes.BAD_REQUEST, error: err.message };
        }
    }

    /**
     * Used to update a item.
     *
     * @param {object} id (string representing the item's id)
     * @param {object} change (object representing the properties to change)
     *
     * @returns relevant status code.
     */
    async function updateitem(id, change) {
        try {
            const isExist = await genericQueries.isExist(TABLE_NAME, "id", id);
            if (!isExist) throw new Error(`item with the id- ${id} does not exist`);
            await genericQueries.updateSpecificItem("id", id, TABLE_NAME, change);
            return { status: StatusCodes.OK };
        } catch (error) {
            return { status: StatusCodes.BAD_REQUEST, error: error.message };
        }
    }

    /**
     * Used to delete a item.
     *
     * @param {number} id (number representing the item's id)
     *
     * @returns relevant status code.
     */
    async function deleteitem(id) {
        try {
            const isExist = await genericQueries.isExist(TABLE_NAME, "id", id);
            if (!isExist) throw new Error(`item with the id- ${id} does not exist`);
            await genericQueries.deleteItem(TABLE_NAME, "id", id);
            return { status: StatusCodes.OK };
        } catch (error) {
            return { status: StatusCodes.BAD_REQUEST, error: error.message };
        }
    }

    return { getitem, getitems, deleteitem, updateitem, additem };
};