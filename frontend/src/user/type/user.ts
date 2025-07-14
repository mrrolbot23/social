export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

export type UserRegistrationRequest = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}