<script>
import router from "../router/index";
import userServiceClass from "../services/user.service";

import Header from "./Header.vue";

const userService = new userServiceClass();

export default {
    name: "Login",
    components: {
        Header,
    },
    data() {
        return {
            login: null,
            password: null,
        };
    },
    methods: {
        loginMethod() {
            userService.login({ login: this.login, password: this.password }).then((res) => {
                if (res.message == "Success") {
                    localStorage.setItem("currentUserId", res.data);
                    router.push({ path: "/" });
                } else {
                    alert("Incorrect login or password!");
                    console.log("Incorrect login or password!");
                }
            });
        },
    },
};
</script>

<template>
    <div id="login">
        <Header></Header>
        <div id="login-subblock">
            <div id="login-form">
                <h3 id="login-form-title">Login</h3>
                <div id="input-subblock">
                    <input type="text" id="login-input" v-model="login" placeholder="Login" />
                    <input type="password" id="password-input" v-model="password" placeholder="Password" />
                </div>
                <router-link to="/signup" id="form-link">Don't have an account?</router-link>
                <button @click="loginMethod" id="login-btn">Login</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#login-subblock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

#login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--form-color);
    padding: 15px 25px;
    border-radius: 10px;
}

#login-form-title {
    margin-bottom: 10px;
}

input {
    width: 180px;
}

#input-subblock {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

#login-btn {
    margin-top: 15px;
    width: 55%;
}

#form-link {
    width: 100%;
    font-size: small;
    color: var(--dark-ultramarine);
    text-align: end;
    margin-top: 4px;
}
</style>
