<script setup lang="ts">
import { ref } from "vue";
import { getCurrentInstance } from "vue";
import api from "@/api";
function login(): void {
    let obj: FormData = new FormData();
    obj.append("password", "123456");
    obj.append("phone", "17772808825");
    api.login.login(obj).then(function (res) {
        console.log(res);
    });
}
</script>

<template>
    <div>
        <p>this is login page ~</p>
        <button @click="login">login</button>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
