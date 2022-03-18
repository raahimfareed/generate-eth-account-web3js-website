"use strict";
window.onload = () => {
    const app = document.querySelector("#app");
    if (app === null) {
        return;
    }
    generate();
};
const generate = () => {
    /// <reference path="Web3.d.ts" />
    const web3 = new Web3("https://mainnet.infura.io/v3/9db181b291444e198e85af740ce8435c");
    const addressInput = document.getElementById("address");
    const keyInput = document.getElementById("key");
    const account = web3.eth.accounts.create();
    addressInput.value = account.address;
    keyInput.value = account.privateKey;
};
const copy = (element) => {
    var _a;
    const targetId = (_a = element.dataset.target) === null || _a === void 0 ? void 0 : _a.slice(1);
    if (targetId === undefined) {
        return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement === null)
        return;
    navigator.clipboard.writeText(targetElement.value).then(() => {
        alert("Copied");
    });
};
const reveal = (element) => {
    var _a;
    const id = (_a = element.dataset.target) === null || _a === void 0 ? void 0 : _a.slice(1);
    if (id === undefined)
        return;
    const input = document.getElementById(id);
    if (element.textContent === "Reveal") {
        input.type = "text";
        element.textContent = "Hide";
        return;
    }
    input.type = "password";
    element.textContent = "Reveal";
};
