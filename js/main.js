
var elCardImg = document.querySelector("#card__img")

var addMovies = movies.slice(0,21);

for (let i = 0; i < addMovies.length; i++) {
 
 var newDiv1 = document.createElement("div");
 var newDiv2	 = document.createElement("div");
	var newH2 = document.createElement("h5");
	var newpYour = document.createElement("strong");
	var newRet = document.createElement("strong");
	var newIMG = document.createElement("img");
 var newBtnLink = document.createElement("a");
 var newBtn = document.createElement("button");
 var newBtnBookmar = document.createElement("button");


 newDiv1.setAttribute("class" , "card me-3 mb-3 ms-1 d-flex justify-content-between");
 newDiv1.setAttribute("style" , "width: 20rem;");

	newIMG.setAttribute("src", `http://i3.ytimg.com/vi/${addMovies[i].ytid}/maxresdefault.jpg`);
 newIMG.setAttribute("class" , "card-img-top");
 newIMG.setAttribute("style" , "height: 220px;");
	newDiv1.appendChild(newIMG);


 newH2.setAttribute("class",  "mt-4 ms-4 text-danger fw-bold" )
	newH2.textContent = movies[i].Title;
 console.log(movies[i].Title);
	newDiv1.appendChild( newH2);

	newpYour.setAttribute("class",  "mt-4 ms-4 " )
	newpYour.textContent = "Movie_year:   " + movies[i].movie_year;
	newDiv1.appendChild(newpYour);
	
	newRet.setAttribute("class",  "mt-4 ms-4 " )
 newRet.textContent = "Movie_reting:   " + movies[i].imdb_rating;
	newDiv1.appendChild(newRet);


	newDiv2.setAttribute("class", "pt-4 pb-5 ")
 newBtnLink.setAttribute("class" , "btn btn-outline-primary p-1 ms-4");
 newBtnLink.setAttribute("href" , `https://www.youtube.com/watch?v=${addMovies[i].ytid}`);
 newBtnLink.textContent = "Watch trailer";
 newBtn.setAttribute("class" , "btn btn-outline-info btn-sm p-1 ms-2");
 newBtn.textContent = "More info";
 newBtnBookmar.setAttribute("class" , "btn btn-outline-success btn-sm p-1 ms-2");
 newBtnBookmar.textContent = "Bookmarks";
 newDiv1.appendChild(newDiv2)
	newDiv2.appendChild(newBtnLink);
	newDiv2.appendChild(newBtn);
	newDiv2.appendChild(newBtnBookmar);


	elCardImg.appendChild(newDiv1);
}

console.log(elCardImg);
// .classList.add("list__item");


















newDateWrapper.setAttribute("class" , "d-flex");
newDateText.setAttribute("class" , "ms-2 fw-bolder");
newDateText.textContent = "Released: " + cutMovies[i].movie_year;

newRateWrapper.setAttribute("class" , "d-flex");
newRateText.setAttribute("class" , "ms-2 fw-bolder");
newRateText.textContent = "Rate: " + cutMovies[i].imdb_rating;

newBtnWrapper.setAttribute("class" , "pb-3");
newBtnTrailer.setAttribute("class" , "btn btn-outline-primary btn-sm me-3");
newBtnTrailer.setAttribute("href" , `https://www.youtube.com/watch?v=${cutMovies[i].ytid}`);
newBtnTrailer.textContent = "Watch trailer";
newBtnInfo.setAttribute("class" , "btn btn-outline-info btn-sm me-3");
newBtnInfo.textContent = "More info";
newBtnBookmarks.setAttribute("class" , "btn btn-outline-success btn-sm");
newBtnBookmarks.textContent = "Bookmarks";




elWrapper.appendChild(newCard);

newCard.appendChild(newImg);
newCard.appendChild(newCardBody);

newCardBody.appendChild(newTitle);

newCardBody.appendChild(newDateWrapper);
newDateWrapper.appendChild(newDateText);

newCardBody.appendChild(newRateWrapper);
newRateWrapper.appendChild(newRateText);

newCardBody.appendChild(newBtnWrapper);
newBtnWrapper.appendChild(newBtnTrailer);
newBtnWrapper.appendChild(newBtnInfo);
newBtnWrapper.appendChild(newBtnBookmarks);