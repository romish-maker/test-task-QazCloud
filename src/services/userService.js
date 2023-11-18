import instance from "@/api";
import { flattenObjectMethod } from "@/common/utils";

export const getUsers = async (countOfUser) => {
    try {
        const response = await instance.get('/api', {
            params: {
                results: countOfUser
            }
        });
        const { results: users } = response.data;
        return users.map(user => flattenObjectMethod(user));
    } catch (error) {
        console.error('Error when fetching users', error);
        throw error;
    }
};
