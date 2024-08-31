document.querySelector("#buttonText").addEventListener("click", () =>{
    let texto = document.querySelector("#inputText").value;
    localStorage.setItem("texto", texto);
    window.location.href = 'data.html';
});