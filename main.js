var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

const Form = document.querySelector("form");
let searchURL = " ";

Form.addEventListener("submit", (event) => {
  event.preventDefault();

  searchURL = document.querySelector("input").value.trim();
  fetchResult(searchURL);
});

const fetchResult = (searchURL) => {
  fetch(`https://getvideo.p.rapidapi.com/?url=${searchURL}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "34c56a009cmsh75304c52976b92ep1a7325jsnba6430a4ce52",
      "x-rapidapi-host": "getvideo.p.rapidapi.com",
    },
  })
    .then((res) => res.json().then((data) => result(data)))
    .catch((err) => result(err));
};

const result = (data) => {
  const show = document.querySelector(".result");

  for (let i of data.streams) {
    var url1 = i.url;

    show.innerHTML += `<div class="result container">
    <div class="box response textCenter">
     <div class="box definition">
       <br />
       <div id="links" class="url_links">
       <p id="iss"><a href="${url1}">${url1}</a></p>
       </div>
       <br />
     </div>
   </div>
 </div>`;
  }
};
