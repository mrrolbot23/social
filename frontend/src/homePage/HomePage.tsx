import {Typography} from "@mui/material";
import LoginBox from "../login/LoginBox.tsx";
import {useState} from "react";
import RegistrationForm from "../registration/RegistrationForm.tsx";

export default function HomePage() {
    const [showLoginForm, setShowLoginForm] = useState<boolean>(true);

    return (
        <>
            <Typography variant={"h1"} aria-label={"home page header"}>Social Media App</Typography>
            {showLoginForm? <LoginBox setShowLoginForm={setShowLoginForm}/> : <RegistrationForm setShowLoginForm={setShowLoginForm}/> }

        </>
    )
}