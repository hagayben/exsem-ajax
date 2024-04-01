import { User } from "../types/user-types.js";
import { apiConfig } from "./apiConfig.js";

export const getallUsers = async (): Promise<User[]> => {
    const response = await fetch(apiConfig.usersUrl);
    const data=  await response.json();
    return data.results
    
}
export const getNewUsers = async (): Promise<User[]> => {
    const response = await fetch(apiConfig.usersAddUrl);
    const data=  await response.json();
    return data.results
    
}




