// URL
let url = "https://icanhazdadjoke.com/";

// Ascessing the DOM
const button = document.querySelector("button");
const result = document.querySelector(".result");

// Fetching data
const fetchData = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "Application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok) {
      throw new Error("error");
    }
    let data = await response.json();
    result.innerHTML = data.joke
  } catch (error) {
    result.textContent = "An error occured";
  }
};

fetchData();

button.addEventListener("click",fetchData)