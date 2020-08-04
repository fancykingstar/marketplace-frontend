import { api, authApi } from '../../util/api';

class Auth {
    constructor() {
    }

    async createUserWithEmailAndPassword(user) {
        return authApi({
            method: "post",
            url: "/users/register",
            data: user
        })
    }

    async signInWithEmailAndPassword({ email, password }) {
        return authApi({
            method: "post",
            url: "/users/login",
            data: { email, password }
        })
    }

    async signInWithGoogle(user) {
        return authApi({
            method: "post",
            url: "/users/login/google",
            data: user
        })
    }

    async signInWithFacebook(user) {
        return authApi({
            method: "post",
            url: "/users/login/facebook",
            data: user
        })
    }

    async signInWithTwitter(user) {
        return authApi({
            method: "post",
            url: "/users/login/twitter",
            data: user
        })
    }

    async signInWithInstagram(user) {
        return authApi({
            method: "post",
            url: "/users/login/instagram",
            data: user
        })
    }

    async forgotPassword({ email }) {
        return authApi({
            method: "post",
            url: "/users/forgot-password",
            data: { email }
        })    
    }

    async resetPassword(data) {
        return authApi({
            method: "put",
            url: "/users/reset-password",
            data: data
        })    
    }
}

export default Auth;