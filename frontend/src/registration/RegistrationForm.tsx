import {Box, Stack, Typography} from "@mui/material";
import {registerUser} from "../user/client/userClient.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {UserRegistrationRequest} from "../user/type/user.ts";


interface RegistrationFormProps {
    setShowLoginForm: (value: boolean) => void;
}

export default function RegistrationForm({setShowLoginForm}: RegistrationFormProps) {
    const {register, handleSubmit, getValues, formState: {errors, isSubmitting}} = useForm<UserRegistrationRequest>();
    const password = getValues("password");

    const handleCancel = () => {
        setShowLoginForm(true);
    }

    const onSubmit: SubmitHandler<UserRegistrationRequest> = async (data) => {
        await registerUser(data).then(() => {
            setShowLoginForm(true);
        }).catch((err) => {
            console.error(`Error occurred: ${err}`);
        })
    }

    return (
        <>
            <Typography variant={"h3"} margin={1.5}>Register</Typography>
            <Box maxWidth={"400px"} mx={"auto"}>
                <form aria-label={"user registration form"} onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap={2}>
                        <input
                            style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                            type={"text"}
                            placeholder={"First name"}
                            aria-label={"first name input field"}
                            {...register("firstName",
                                {
                                    required: "First Name is required",
                                    pattern: {
                                        value: /^[A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF\-\']*(?: [A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF\-\']*){0,2}$/i,
                                        message: "Enter a valid First name"
                                    }
                                }
                            )}
                        />
                        {errors.firstName &&
                            <Typography variant={"body1"} color={"error"}>{errors.firstName.message}</Typography>}
                        <input
                            style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                            type={"text"}
                            placeholder={"Last Name"}
                            aria-label={"last name input field"}
                            {...register("lastName",
                                {
                                    required: "Last Name is required",
                                    pattern: {
                                        value: /^[A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF\-\']*(?: [A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF\-\']*){0,2}$/i,
                                        message: "Enter a valid Last name"
                                    }
                                }
                            )}
                        />
                        {errors.lastName &&
                            <Typography variant={"body1"} color={"error"}>{errors.lastName.message}</Typography>}
                        <input
                            style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                            type={"text"}
                            placeholder={"Email"}
                            aria-label={"email input field"}
                            {...register("email",
                                {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
                                        message: "Enter a valid email"
                                    }
                                }
                            )}
                        />
                        {errors.email &&
                            <Typography variant={"body1"} color={"error"}>{errors.email.message}</Typography>}
                        <input
                            style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                            type={"password"}
                            placeholder={"Password"}
                            aria-label={"password input field"}
                            {...register("password",
                                {
                                    required: "Password cannot be blank",
                                    minLength: {
                                        value: 10,
                                        message: "Must be at least 10 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{10,}).*$/i,
                                        message: "Must have 1 special, 1 upper case"
                                    }
                                }
                            )}
                        />
                        {errors.password &&
                            <Typography variant={"body1"} color={"error"}>{errors.password.message}</Typography>}
                        <input
                            style={{padding: "1rem", height: "1rem", border: "none", borderRadius: "5px"}}
                            type={"password"}
                            placeholder={"Confirm Password"}
                            aria-label={"password confirmation field"}
                            {...register("confirmPassword",
                                {
                                    required: "Confirm Password cannot be blank",
                                    minLength: {
                                        value: 10,
                                        message: "Must be at least 10 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{10,}).*$/i,
                                        message: "Must have 1 special, 1 upper case"
                                    },
                                    validate: (value) => {
                                        return value === password || "Passwords do not match"
                                    }
                                }
                            )}
                        />
                        {errors.confirmPassword &&
                            <Typography variant={"body1"} color={"error"}>{errors.confirmPassword.message}</Typography>}
                        <Stack direction={"row"} justifyContent={"right"} gap={2}>
                            <button type={"button"} aria-label={"cancel button"} onClick={handleCancel}>Cancel</button>
                            <button disabled={isSubmitting} type={"submit"}
                                    aria-label={"register button"}>{!isSubmitting ? "Register" : "Registering"}</button>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </>
    )
}