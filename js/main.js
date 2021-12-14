var addMovies = movies.slice(0,100); 

var elCardImg = document.querySelector("#card__img")
var elBookmarkList = document.querySelector("#bookmark-ul")
var elForm = document.querySelector("#form");
var elRatingInput = document.querySelector("#inputReting");
var elTitleInput = document.querySelector("#inputname")
var elSelectInput = document.querySelector("#input-select-reting");
var elTitle = document.querySelector("#title")

var elCardMoviesTemplate = document.querySelector("#card-moves").content
var elCarBuutonTemplate = document.querySelector("#card-button-template").content


var normolizedMovieList = addMovies.map((movieItem, index )=>{
	return {
		id: index + 1,
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
		
		elepntOption.setAttribute("class", " ")
		elepntOption.textContent = option
		elepntOption.value = option
		
		selectOption.appendChild(elepntOption)
	})
	
	elSelectInput.appendChild(selectOption)
	
}

renderCategors(normolizedMovieList, elSelectInput )
normolizedMovieList.sort()

function renderMovies(felimArry, wrapper) {
	var resultRender = document.createDocumentFragment()
	felimArry.forEach( movis  => {
		var moviesCard = elCardMoviesTemplate.cloneNode(true)
		
		moviesCard.querySelector("#moves-img").src = movis.imageLink;
		moviesCard.querySelector("#moves-title").textContent = movis.title;
		moviesCard.querySelector("#moves-year").textContent = `Year: ${movis.year}`;
		moviesCard.querySelector("#moves-reting").textContent = `Reating: ${movis.rating}`;
		moviesCard.querySelector("#moves-categors").textContent = movis.categories;
		moviesCard.querySelector("#moves-youtobe").href = movis.youtubeLink;
		moviesCard.querySelector("#bookmark").dataset.idJonSalom = movis.id
		
		resultRender.appendChild(moviesCard)
		
	})
	elCardImg.innerHTML = null
	elCardImg.appendChild(resultRender)
	
	elTitle.textContent = `Sear result: ${felimArry.length}`;
} 

renderMovies(normolizedMovieList, elCardImg)


function renderBookmark(bookmarkList) {
	var elItem = document.createDocumentFragment();
	
	bookmarkList.forEach((item) => {
		var newLi = elCarBuutonTemplate.cloneNode(true)
		
		
		newLi.querySelector("#moves-img").src = item.imageLink;
		newLi.querySelector("#moves-title").textContent = item.title;
		newLi.querySelector("#moves-year").textContent = `Year: ${item.year}`;
		newLi.querySelector("#moves-reting").textContent = `Reating: ${item.rating}`;
		newLi.querySelector("#moves-categors").textContent = item.categories;
		newLi.querySelector("#moves-youtobe").href = item.youtubeLink;
		newLi.querySelector("#button-danger").dataset.idJon = item.id
		elItem.appendChild(newLi)
	})
	
	elBookmarkList.innerHTML = null
	elBookmarkList.appendChild(elItem)
}


var findMovies = function (title, minRating, genre) {
	
	return normolizedMovieList.filter((movie) => {
		var doesMatchCategory = genre === 'All' || movie.categories.includes(genre);
		
		return  movie.title.match(title) && movie.rating >= minRating && doesMatchCategory;
	});
};



elForm.addEventListener('submit', function(evt){
	evt.preventDefault()
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



let storage = window.localStorage

var getBookmark = storage.getItem("bookmark")
var bookArry = JSON.parse(getBookmark) || []

renderBookmark(bookArry);

elCardImg.addEventListener("click", (evt) => {
	var elementId = evt.target.dataset.idJonSalom
	
	if (elementId) {
		var fountItem = normolizedMovieList.find(function (item) {
			if (item.id == elementId) {
				return item		
			}
		})
		console.log(fountItem);

		
		///inclodes
		var resaltInclode = bookArry.includes(fountItem)
		if (!resaltInclode) {
			bookArry.push(fountItem)
		}
		
	}
	storage.setItem('bookmark', JSON.stringify(bookArry))
	renderBookmark(bookArry)
});


elBookmarkList.addEventListener("click", (evt) =>{
	 var elButton = evt.target.dataset.idJon
		
		if (elButton) {
			var fountItem = bookArry.find(function (item) {
				if (item.id == elButton) {
					return item		
				}
			})
			bookArry.splice(fountItem,1)
			renderBookmark(bookArry)
			
			console.log(elButton);
			
		}
})