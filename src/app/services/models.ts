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

var profilePictureMap = new Map()
profilePictureMap.set("parshuram", "parshuram.jpg");
profilePictureMap.set("manoj", "manoj.jpg");
profilePictureMap.set("jane", "jane.jpg");
profilePictureMap.set("default", "default.jpg");

export function getProfilePictureName(firstName: string): string {
    if (!firstName)
        firstName = 'default'
    var profilePictureName = profilePictureMap.get(firstName.toLowerCase())
    return profilePictureName ? profilePictureName : profilePictureMap.get("default")
}


export function getApiUrl() {
    let SERVER_HOST = process.env.SERVER_HOST
    let SERVER_PORT = process.env.SERVER_PORT
    let SERVER_PROTOCOL = process.env.SERVER_PROTOCOL

    return SERVER_HOST && SERVER_PORT && SERVER_PROTOCOL
        ? SERVER_PROTOCOL + '://' + SERVER_HOST + ':' + SERVER_PORT
        : 'http://localhost:8091'
}