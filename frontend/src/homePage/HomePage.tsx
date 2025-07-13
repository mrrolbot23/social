import {Typography} from "@mui/material";
import LoginBox from "../login/LoginBox.tsx";

export default function HomePage() {
    return (
        <>
            <Typography variant={"h1"} aria-label={"home page header"}>Social Media App</Typography>
            <LoginBox/>
        </>
    )
}