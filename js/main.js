var addMovies = movies.slice(0,100); 

var elCardImg = document.querySelector("#card__img")
var elForm = document.querySelector("#form");
var elRatingInput = document.querySelector("#inputReting");
var elTitleInput = document.querySelector("#inputname")
var elSelectInput = document.querySelector("#input-select-reting");
var elTitle = document.querySelector("#title")



var normolizedMovieList =  addMovies.map(movieItem =>{
	return {
		title: movieItem.Title.toString(),
		categories: movieItem.Categories,
		rating: movieItem.imdb_rating,
		year: movieItem.movie_year,
		imageLink: `https://i.ytimg.com/vi/${movieItem.ytid}/mqdefault.jpg`,
		youtubeLink: `https://www.youtube.com/watch?v=${movieItem.ytid}`
		
	}
})


var renderCategors = function (moveList, renderSelect) {
	var renderCategorsArry = []
	moveList.forEach((item) => {
		
		var splititIyem = item.categories.split("|");
		
		splititIyem.forEach(categoryItem => {
			
			var esListSlect = renderCategorsArry.includes(categoryItem)
			if (!esListSlect) {
				renderCategorsArry.push(categoryItem)
			}
			
		})
		renderCategorsArry.sort()
	
	})  
	
	 var selectOption = document.createDocumentFragment()
		renderCategorsArry.forEach(function (option) {
			var elepntOption = document.createElement("option")
			console.log(elepntOption);
			elepntOption.setAttribute("class", " ")
			elepntOption.textContent = option
			elepntOption.value = option

		  selectOption.appendChild(elepntOption)
		})
   
  elSelectInput.appendChild(selectOption)

}





renderCategors(normolizedMovieList, elSelectInput )


function renderMovies(felimArry, wrapper) {
	
	felimArry.forEach( movis  => {
		var newDiv1 = document.createElement("div");
		var newDiv2	 = document.createElement("div");
		var newH2 = document.createElement("h4");
		var newpYour = document.createElement("h5");
		var newRet = document.createElement("h6");
		var newCategors = document.createElement("h6");
		var newIMG = document.createElement("img");
		var newBtnLink = document.createElement("a");
		var newBtn = document.createElement("button");
		var newBtnBookmar = document.createElement("button");
		
		
		newDiv1.setAttribute("class" , "card me-2 mb-3");
		newDiv1.setAttribute("style" , "width: 20rem;");
		
		newIMG.setAttribute("src", movis.imageLink);
		newIMG.setAttribute("class" , "card-img-bottom card");
		newIMG.setAttribute("style" , "height: 220px;");
		
		newH2.setAttribute("class",  "mt-4 ms-4 text-danger fw-bold flex-grow-1" )
		newH2.textContent = movis.title;
		
		newpYour.setAttribute("class",  "mt-4 ms-4 d-blog  fw-bold" )
		newpYour.textContent = "Movie_year:   " + movis.year;
		
		newRet.setAttribute("class",  "mt-4 ms-4  fw-bold" )
		newRet.textContent = "Movie_reting:   " + movis.rating;
		
		newCategors.setAttribute("class", "fw-bold ms-4 mt-3 text-primary")
		newCategors.textContent = "Categors: " + movis.categories
		
		newDiv2.setAttribute("class", "pt-4 pb-5 ")
		newBtnLink.setAttribute("class" , "btn btn-outline-primary p-1 ms-3 fs-6");
		newBtnLink.setAttribute("href" , movis.youtubeLink);
		newBtnLink.textContent = "Watch trailer";
		newBtn.setAttribute("class" , "btn btn-outline-info btn-sm p-1 ms-2 fs-6");
		newBtn.textContent = "More info";
		newBtnBookmar.setAttribute("class" , "btn btn-outline-success btn-sm p-1 ms-2 fs-6");
		newBtnBookmar.textContent = "Bookmarks";
		
		
		wrapper.appendChild(newDiv1)
		newDiv1.appendChild(newIMG);
		newDiv1.appendChild( newH2);
		newDiv1.appendChild(newpYour);
		newDiv1.appendChild(newRet);
		newDiv1.appendChild(newCategors);
		
		newDiv1.appendChild(newDiv2)
		newDiv2.appendChild(newBtnLink);
		newDiv2.appendChild(newBtn);
		newDiv2.appendChild(newBtnBookmar);
		
		elCardImg.appendChild(newDiv1)
	})
	
	elTitle.textContent = `Sear result: ${felimArry.length}`;
} 

renderMovies(normolizedMovieList, elCardImg)



var findMovies = function (title, minRating, genre) {
	
	return normolizedMovieList.filter((movie) => {
		var doesMatchCategory = genre === 'All' || movie.categories.includes(genre);
		
		return  movie.title.match(title) && movie.rating >= minRating && doesMatchCategory;
	});
};



elForm.addEventListener('submit', function(evt){
	evt.preventDefault()
	var resalt = []
	
	var selectInput = elTitleInput.value.trim()
	
	var searchKey = new RegExp(selectInput, "gi");
	
	var ratingInput = elRatingInput.value.trim()
	
	var categorySelect = elSelectInput.value.trim()
	
	var resaltList = findMovies(searchKey, ratingInput,  categorySelect)
	console.log(resaltList);
	
	if (resaltList.length > 0) {
		elCardImg.innerHTML = null
		renderMovies(resaltList, elCardImg);
	} else{
		elCardImg.innerHTML = "Kino yo'q"
		elTitle.textContent = `Search results: 0`;
	}
	
})

