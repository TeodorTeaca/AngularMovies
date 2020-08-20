export class AuthService {
    isAuthenticated() {
        const SESSION = localStorage.getItem('session');
        if (SESSION == null) {
            return false;
        } else {
            return true;
        }
    }
}