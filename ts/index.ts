window.onload = () => {
  const app: HTMLDivElement | null = document.querySelector("#app");

  if (app === null) {
    return;
  }
  
  generate();
}

const generate = () => {
  /// <reference path="Web3.d.ts" />
  const web3: Web3 = new Web3(process.env.ENDPOINT_ADDRESS || "");
  const addressInput: HTMLInputElement | null = document.getElementById("address") as HTMLInputElement;
  const keyInput: HTMLInputElement | null = document.getElementById("key") as HTMLInputElement

  const account: any = web3.eth.accounts.create();
  addressInput.value = account.address;
  keyInput.value = account.privateKey;
}

const copy = (element: HTMLElement): void => {
  const targetId: string | undefined = element.dataset.target?.slice(1);
  if (targetId === undefined) {
    return;
  }

  const targetElement: HTMLInputElement | null = document.getElementById(targetId) as HTMLInputElement;
  if (targetElement === null) return;
  navigator.clipboard.writeText(targetElement.value).then(()=>{
    alert("Copied");
  })
}

const reveal = (element: HTMLElement) => {
  const id: string | undefined = element.dataset.target?.slice(1);
  if (id === undefined) return;
  const input: HTMLInputElement = document.getElementById(id) as HTMLInputElement;

  if (element.textContent === "Reveal") {
    input.type = "text";
    element.textContent = "Hide";
    return;
  }
  
  input.type = "password";
  element.textContent = "Reveal";
}
