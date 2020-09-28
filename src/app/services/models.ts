export interface RegistrationRequest {
    firstName: string;
    lastName: string;
    title: string
    company: string
    address: string;
    phone: string;
}

export interface GetUserResponse extends RegistrationRequest {
    fullName: string;
    email: string;
}

export interface GetUserRequest {
    email: string;
}