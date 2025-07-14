import {Stack, Typography} from "@mui/material";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {LoginInput} from "./type/LoginInput.ts";

interface LoginBoxProps {
    setShowLoginForm: (value: boolean) => void;
}

export default function LoginBox({setShowLoginForm}: LoginBoxProps) {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginInput>();

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        console.log(data);
    }

    const handleRegister = () => {
        setShowLoginForm(false);
    }

    return (
        <>
            <Typography variant={"h3"} margin={1.5}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack maxWidth={"380px"} mx={"auto"} gap={2}>
                    <input
                        aria-label={"email input field"}
                        type={"text"}
                        style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                        placeholder={"Email"}
                        {...register("email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/i,
                                    message: "Please enter a valid email"
                                }
                            }
                        )}
                    />
                    {errors.email && <Typography variant={"body1"} color={"error"}>{errors.email.message}</Typography>}
                    <input
                        aria-label={"password input field"}
                        type={"password"}
                        style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                        placeholder={"Password"}
                        {...register("password",
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 10,
                                    message: "Minimum length of 10 characters"
                                }
                            }
                        )}
                    />
                    {errors.password &&
                        <Typography variant={"body1"} color={"error"}>{errors.password.message}</Typography>}
                    <Stack direction={"row"} gap={2} justifyContent={"right"}>
                        <button aria-label={"registration button"} onClick={handleRegister}>Register</button>
                        <button aria-label={"submit button"}
                                type={"submit"}>{!isSubmitting ? "Submit" : "Login In..."}</button>
                    </Stack>
                </Stack>
            </form>
        </>
    )
}