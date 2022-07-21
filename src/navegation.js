

searchBtn?.addEventListener("click", () => {
    location.hash = "#search=" + input.value})

backTrendingBtn.addEventListener("click", () => {
     window.history.back()})

backMovieBtn.addEventListener("click", () => {
        homePage() })

viewMore.addEventListener("click", () => {
location.hash = "#trends"})




window.addEventListener("DOMContentLoaded", navegator, false)
window.addEventListener("hashchange", navegator, false)



function navegator ()  {

    location.hash.startsWith("#trends")
        ? trendsPage ()
    : location.hash.startsWith("#search=") 
        ? searchPage()
        
    :location.hash.startsWith("#movie=") 
       ? moviePage()    
    :location.hash.startsWith("#category") 
        ? categoriesPage()
    :
    homePage()  
  

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

}


function homePage () {   
    getTrending()
    getCategories()
    homeOn()
}

function trendsPage () {
    homeBarOff()
    secondaryHeader.classList.remove("inactive")
    secondaryHeader.classList.remove("inactive")
    genericmovieList.classList.remove("inactive")
    categorypageTitle.classList.remove("inactive")
    categoryMainTitle.innerHTML = "Trends" 
    getTrendingGeneric()
    console.log("Trends")

}

function searchPage()  {

    secondaryHeader.classList.remove("inactive")
    genericmovieList.classList.remove("inactive")
    secondaryHeader.classList.remove("inactive")
    homeOff()

    const url = location.hash.split("=")
    const [, query] = url

    getMoviesBySearch(query)

    console.log("Search")   
}



function moviePage()  {
    homeBarOff()

    main.classList.add("inactive")
    movieDetails.classList.remove("inactive")

    console.log("Movie")

    const url = location.hash.split("=")
    const [, query] = url

    getInfoMovie(query)


}

function categoriesPage () {
    homeBarOff()

    secondaryHeader.classList.remove("inactive")
    secondaryHeader.classList.remove("inactive")
    genericmovieList.classList.remove("inactive")
    categorypageTitle.classList.remove("inactive")


    console.log("Categories")


    //URL divided into arrays util have only the ID and de name (for title)
    const url = location.hash.split("=")
    const [, idName] = url
    const [id, name] = idName.split("-")
    console.log(id, name)
    getTrendingGeneric


//Test color box title category
    const div2 = document.createElement("div")
    div2.classList.add("box-category-title")
    div2.removeAttribute("id")
    div2.setAttribute("id", "id" + id);

    categorypageTitle.insertAdjacentElement("afterbegin", div2)


    //Cateory's name    
    categoryMainTitle.textContent = name
    getMoviesByCategory(id)
}






