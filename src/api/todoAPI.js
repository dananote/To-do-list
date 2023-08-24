import Instance from "./instance";

const todoAPI = () => {

    const createTodo = async (todo) => {
        try {
            await Instance.post('', todo)
        } catch (error) {
            console.error(error)
        }
    }

    const updateTodo = async (todo, id) => {
        try {
            await Instance.patch(`/${id}`, todo)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            await Instance.delete(`/${id}`)
        } catch (error) {
            console.error(error)
        }
    }

    const getTodo = async () => {
        try {
            const res = await Instance.get("?offset=0&limit=50");
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

    const getTodoOne = async (id) => {
        try {
            const res = await Instance.get(`/${id}`);
            return res.data
        } catch (error) {
            return error.response.data.error;
        }
    }

    return { createTodo, updateTodo, deleteTodo, getTodo, getTodoOne }
}

export default todoAPI;

