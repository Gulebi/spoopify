<script>
import router from "../router/index";
import userServiceClass from "../services/user.service";

import Header from "./Header.vue";

const userService = new userServiceClass();

export default {
    name: "Signup",
    components: {
        Header,
    },
    data() {
        return {
            name: null,
            surname: null,
            login: null,
            password: null,
        };
    },
    methods: {
        signupMethod() {
            userService
                .signup({ name: this.name, surname: this.surname, login: this.login, password: this.password })
                .then((res) => {
                    if (res.message == "Success") {
                        router.push({ path: "/login" });
                    }
                });
        },
    },
};
</script>

<template>
    <div id="signup">
        <Header></Header>
        <div id="signup-subblock">
            <div id="signup-form">
                <h3 id="signup-form-title">Signup</h3>
                <div id="input-subblock">
                    <input type="text" id="name-input" v-model="name" placeholder="Name" />
                    <input type="text" id="surname-input" v-model="surname" placeholder="Surname" />
                    <input type="text" id="login-input" v-model="login" placeholder="Login" />
                    <input type="password" id="password-input" v-model="password" placeholder="Password" />
                </div>
                <router-link to="/login" id="form-link">Already have an account?</router-link>
                <button @click="signupMethod" id="signup-btn">Signup</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#signup-subblock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

#signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--form-color);
    padding: 15px 25px;
    border-radius: 10px;
}

#signup-form-title {
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

#signup-btn {
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
