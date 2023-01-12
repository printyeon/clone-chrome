const form = document.querySelector("#search");
const searchInput = document.querySelector("#search input");
const button = document.querySelector("#btn");


function onSearch(event){
    event.preventDefault();
    let keyword = searchInput.value;


    location.href = `https://www.google.com/search?q=${keyword}`;
}

form.addEventListener("submit", onSearch);
