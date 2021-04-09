import * as Axios from 'axios';

const apiMovie = Axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTg5ZmNhMjk1ZmI0OGZlMzNlNGMwMTc1OWQyNmVmYiIsInN1YiI6IjYwNjU4ZjJiYzI4MjNhMDA1Nzc3NThjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4WCzUrSGRuit4s_OrhF4fSXvqsPN5apwnDMyQTsK6Dg'
    return req;
})

export default apiMovie;

export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
    description: m.overview
  })