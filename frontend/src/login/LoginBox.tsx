import {Stack, Typography} from "@mui/material";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {LoginInput} from "./type/LoginInput.ts";

export default function LoginBox() {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginInput>();

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack maxWidth={"380px"} my={2} mx={"auto"} gap={1}>
                    <input
                        type={"text"}
                        style={{height: "2rem"}}
                        placeholder={"email"}
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
                        type={"password"}
                        style={{height: "2rem"}}
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
                    {errors.password && <Typography variant={"body1"} color={"error"}>{errors.password.message}</Typography>}
                    <button type={"submit"}>{!isSubmitting? "Submit" : "Login In..."}</button>
                </Stack>
            </form>
        </>
    )
}