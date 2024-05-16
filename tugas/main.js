console.log("Sedangkan ini adalah teks yang ditampilkan pada console dengan penulisan kode javascript external.")

let box = document.querySelector("div"), 
input = document.querySelector("input");

input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
});