const api = axios.create(
    {
        baseURL:"https://api.themoviedb.org/3/",
        params: {
            "api_key": apikey
        }

    }
)


//utils


const createMoviesImg = (movie, container) => {
    
    container.innerHTML = "";

    movie.forEach(x => {
        const img = document.createElement("img")
        img.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + x.poster_path)
        img.setAttribute("alt", x.title )
        img.addEventListener("click", () => location.hash = "#movie=" + x.id)

        container.appendChild(img)   
    });

}

const createCategoriesList = (categories, container ) => {

    container.innerHTML = "";
    categories.forEach(x => {
    
        const div1 = document.createElement("div")
        div1.classList.add("item")
    
        const div2 = document.createElement("div")
        div2.setAttribute("id", "id" + x.id);
    
        const p = document.createElement("p") 
        p.textContent =x.name;
        p.addEventListener("click", () => location.hash = `#category=${x.id}-${x.name}`)
        
    
        container.appendChild(div1)
        div1.appendChild(div2)
        div1.appendChild(p)
})
}

// API request

const getTrending = async () => {     // get and put trending images in the conteiner
    const {data} = await api("trending/movie/day");

    const movies = data.results;

    const container = document.querySelector(".img-container")
 
    createMoviesImg(movies, container)
}

const getTrendingGeneric = async () => {     // get and put trending images in the conteiner
    const {data} = await api("trending/movie/day");

    const movies = data.results;

    
    createMoviesImg(movies, genericmovieList);
}




const getCategories = async () => {
    const {data} = await api("genre/movie/list");

    const categories = data.genres;

    categoryList.innerHTML = "";

    const container = document.createElement("div")
    container.classList.add("category-items-container")
    categoryList.appendChild(container)

    createCategoriesList(categories, container)
   

}



const getMoviesByCategory = async (id) => {
    const {data} = await api("/discover/movie", {
        params: {
            with_genres: id
        }
    });

    const movies = data.results;

  

    createMoviesImg(movies, genericmovieList);

}


const getMoviesBySearch = async (query) => {

    const {data} = await api("/search/movie", {
        params: {
            query,
        }
    });

    const movies = data.results;
    console.log("movies1", movies);



    createMoviesImg(movies, genericmovieList);

}


const getInfoMovie = async (id) => {

    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
    const data = await request.json()

    console.log(data)
    //

    movieTitle.textContent = data.original_title;
    movieText.textContent = data.overview;
    rating.textContent = data.vote_average;
    movieImg.src = "https://image.tmdb.org/t/p/w400/" + data.poster_path

    createCategoriesList(data.genres, movieCategory)
    getSimilarMovies(id)


}

const getSimilarMovies = async (id) =>{
    const {data} = await api(`movie/${id}/similar`)

    console.log(data)

    createMoviesImg(data.results, similarMovies)
    
}



