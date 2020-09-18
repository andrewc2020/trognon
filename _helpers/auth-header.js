import { authenticationService } from '../_services/authentication-service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { "x-access-token": `${currentUser.token}` };
    } else {
        return {};
    }
}