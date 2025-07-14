import type {UserRegistrationRequest} from "../type/user.ts";
import axios from 'axios';

export const registerUser = async (user: UserRegistrationRequest) => {
    await axios.post("/api/v1/register", user).then(() => {
        console.log("User successfully registered.")
    }).catch((err) => {
        console.error(`Error occurred: ${err.response}`)
    })
}