// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directores = moviesArray.map(movies => movies.director)
    return directores
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let spielberg = moviesArray.filter(element => {

        return element.director === "Steven Spielberg" && element.genre.includes('Drama')
    })
    // console.log(spielberg)

    return spielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    //console.log(moviesArray, 'estroyzxjvnx')
    if (moviesArray.length === 0) {
        return 0
    }

    const score = moviesArray.map(movies => movies.score)
    const total = score.reduce(function (accumulator, currentValue) {
        //console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
        return accumulator + currentValue;
    });
    const promedio = parseInt(total) / moviesArray.length
    const rounded = Math.round((promedio + Number.EPSILON) * 100) / 100;
    return rounded

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { 
    console.log(moviesArray)
    
    let moviesDrama = moviesArray.filter(element => element.genre.includes('Drama'))
    // console.log(moviesDrama, "aqui retorno drama")
    if (moviesDrama.length === 0) {
        return 0
    }
    let dramaScore = moviesDrama.map(movieDrama => movieDrama.score)
    console.log(dramaScore, 'score')
    const totalPuntuacion = dramaScore.reduce(function (accumulator, currentValue) {
        //console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
        return accumulator + currentValue;
    });
    const promedioScore = parseInt(totalPuntuacion) / moviesDrama.length
    const redondeo = Math.round((promedioScore + Number.EPSILON) * 100) / 100;
    return redondeo
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    const years = moviesArray.map(element => element.year)
    console.log(years, 'años')
    const ordenAscen = years.sort((a, b) => a - b);
    
    return ordenAscen

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
