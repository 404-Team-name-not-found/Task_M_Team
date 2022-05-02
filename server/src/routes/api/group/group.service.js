const { StatusCodes } = require('http-status-codes');
const genericQueries = require("../../../../services/genericCrudQueries")

const TABLE_NAME = "groups";

/**
 * Used to get all existing groups.
 * 
 * @returns relevant status code and array of all the group objects.
 */
async function getgroups() {
    try {
        const res = await genericQueries.getItems(TABLE_NAME);
        return { groups: res, status: StatusCodes.OK };
    } catch (err) {
        return { status: StatusCodes.BAD_REQUEST, error: err.message };
    }
}

/**
 * Used to get a group by id.
 *
 * @param {number} id (number representing the group's id)
 * 
 * @returns relevant status code and the wanted group object.
 */
async function getgroup(id) {
    try {
        const isExist = await genericQueries.isExist(TABLE_NAME, "id", id);
        if (!isExist) throw new Error(`group with this id does not exist`);

        const res = await genericQueries.getItem(TABLE_NAME, "id", id);
        return { group: res[0], status: StatusCodes.OK };
    }
    catch (err) {
        return { status: StatusCodes.BAD_REQUEST, error: err.message };
    }
}

/**
 * Used to add a group.
 *
 * @param {object} newgroup (object representing the new group object to add)}
 * 
 * @returns relevant status code.
 */
async function addgroup(newgroup) {
    try {
        const isExist = await genericQueries.isExist(TABLE_NAME, "name", newgroup.name);
        if (isExist) throw new Error(`group with this name already exists`);

        await genericQueries.insertItem(TABLE_NAME, newgroup);
        return { status: StatusCodes.OK };
    }
    catch (err) {
        return { status: StatusCodes.BAD_REQUEST, error: err.message };
    }
}

/**
 * Used to update a group.
 *
 * @param {object} id (string representing the group's id)
 * @param {object} change (object representing the properties to change)
 *
 * @returns relevant status code.
 */
async function updategroup(id, change) {
    try {
        const isExist = await genericQueries.isExist(TABLE_NAME, "id", id);
        if (!isExist) throw new Error(`group with the id- ${id} does not exist`);
        await genericQueries.updateSpecificItem("id", id, TABLE_NAME, change);
        return { status: StatusCodes.OK };
    }
    catch (error) {
        return { status: StatusCodes.BAD_REQUEST, error: error.message };
    }
}

/**
 * Used to delete a group.
 *
 * @param {number} id (number representing the group's id)
 * 
 * @returns relevant status code.
 */
async function deletegroup(id) {
    try {
        const isExist = await genericQueries.isExist(TABLE_NAME, "id", id);
        if (!isExist) throw new Error(`group with the id- ${id} does not exist`);
        await genericQueries.deleteItem(TABLE_NAME, "id", id);
        return { status: StatusCodes.OK };
    }
    catch (error) {
        return { status: StatusCodes.BAD_REQUEST, error: error.message };
    }
}

module.exports = { getgroups, getgroup, addgroup, updategroup, deletegroup, };