import Instance from "./instance";

const todoAPI = () => {

    const { axiosAPI, authAxiosAPI } = Instance();

    const createTodo = async (todo) => {
        try {
            await axiosAPI.post('', todo)
        } catch (error) {
            console.error(error)
        }
    }

    const updateTodo = async (todo, id) => {
        try {
            await axiosAPI.patch(`/${id}`, todo)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axiosAPI.delete(`/${id}`)
        } catch (error) {
            console.error(error)
        }
    }

    const getTodo = async () => {
        try {
            const res = await authAxiosAPI.get();
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

    return { createTodo, updateTodo, deleteTodo, getTodo }
}

export default todoAPI;

