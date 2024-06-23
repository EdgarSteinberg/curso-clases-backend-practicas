export const generateUserErrorInfo = (user) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    *first_name : needs to be a String, received ${user.first_name}
    *last_name  : needs to be a String, received ${user.last_name}
    *email      : needs to be a String, received ${user.email}`;
}


export const generateUserIdErrorInfo = (uid) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    *uid: must be a Number, received '${uid}'.
    Explanation:
    The 'uid' parameter must be a positive number to identify a user.
    Please make sure to provide a valid user ID.`;
}
