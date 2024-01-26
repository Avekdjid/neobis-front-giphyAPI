const gifContaner = document.querySelector(".gif__card__container");
const apiKey = "zllX3wka09igvHnzldvV7MkpFKM7hqPc";
const inpSearch = document.querySelector(".nav__search__inp");
const inpBtn = document.querySelector(".nav__search__input__btn");
let timerId;

const getGif = async () => {
  try {
    const inpValue = inpSearch.value.trim();
    const API = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inpValue}&limit=9`;

    const res = await fetch(API);
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();

    if (data && data.data) {
      let arrData = data.data;
      console.log(arrData);
      gifContaner.innerHTML = "";
      arrData.forEach((item) => {
        gifContaner.innerHTML += `
          <div class="gif__card">
            <img class="gif__card__img" src="${item.images.downsized.url}" />
          </div>`;
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

inpBtn.addEventListener("click", () => {
  const inpValue = inpSearch.value.trim();

  setTimeout(() => {
    getGif();
  }, 1000);
});
