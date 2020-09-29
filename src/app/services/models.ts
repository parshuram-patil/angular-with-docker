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
    var profilePictureName =  profilePictureMap.get(firstName.toLowerCase())
    return profilePictureName ? profilePictureName : profilePictureMap.get("default")
}