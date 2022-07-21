const $ = (id) => document.querySelector(id)

//header

const headerTitle = $(".header-tittle")
const secondaryHeader = $(".main-header-secondary")

const categorypageTitle = $(".main-category-title")
const categoryMainTitle = $(".category-title")
const mainSearch = $(".search-bar ")


//sections
const main = $("main")
const movieDetails = $(".movieDetails-container")

// list's

const trendingList = $(".trending-container")
const categoryList = $(".main-category-container")
const genericmovieList = $(".genericmovie-list")

//button

const searchBtn = $(".header-button")
const input = $(".header-input")
const backTrendingBtn = $(".backsymbol")
const backMovieBtn = $(".movieDetails-backsymbol")
const viewMore = $(".view-more")

//moviedetails

const movieTitle = $(".movieDetails-title")
const movieText = $(".movieText")
const rating = $(".rating")
const movieCategory = $(".movieDetails-category")
const movieImg = $(".movie-img")
const similarMovies =$(".similar-img")

//home-off


const homeOff = () => {
    headerTitle.classList.add ("inactive")
    categorypageTitle.classList.add ("inactive")
    trendingList.classList.add ("inactive")
    categoryList.classList.add ("inactive")
} 

const homeOn = () => {
    headerTitle.classList.remove ("inactive")
    categorypageTitle.classList.remove ("inactive")
    trendingList.classList.remove ("inactive")
    categoryList.classList.remove ("inactive")
    trendingList.classList.remove ("inactive")
    genericmovieList.classList.add ("inactive")
    secondaryHeader.classList.add("inactive")
    mainSearch.classList.remove ("inactive")


}

const homeBarOff = () => {
    headerTitle.classList.add ("inactive")
    categorypageTitle.classList.add ("inactive")
    mainSearch.classList.add ("inactive")
    trendingList.classList.add ("inactive")
    categoryList.classList.add ("inactive")
}

changeSection = (hash) => {
    location.hash = hash
}
