import React, { Component } from 'react';
import { Formik } from 'formik';
import apiMovie, { apiMovieMap } from '../../../../conf/api.movie';

export default class SearchBar extends Component {

    submit = (values, actions) => {

        const query = '?' + Object.keys(values).map(k => `${k}=${values[k]}&`).join('')
        apiMovie.get('/search/movie' + query)
            .then(response => response.data.results)
            .then(apiMovie => {
                const movies = apiMovie.map(apiMovieMap)
                if (movies.length > 0 && movies) {
                    this.props.updateMovies(movies)
                    actions.setSubmitting(false)
                } else {
                    window.alert('Aucun film trouvé')
                    actions.setSubmitting(false)
                    this.props.handleClick()          
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Formik onSubmit={this.submit}
                initialValues={{
                    query: '',
                    language: 'en-US'
                }}
            >
                { ({ handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <form className="d-flex flex-row m-2 p-2" onSubmit={handleSubmit}>
                        <input name="query" className="flex-fill form-control mr-2" placeholder="Chercher un film ..." onChange={handleChange} onBlur={handleBlur}></input>
                        <select className="mr-2 form-control w-25" name="language" onChange={handleChange} onBlur={handleBlur}>
                            <option value="en-US"> Anglais </option>
                            <option value="fr-FR"> Français </option>
                        </select>
                        {/* <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting }>Rechercher</button> */}
                        <button className="btn btn-small btn-success" type="submit" disabled={isSubmitting}>Rechercher</button>
                    </form>
                )}
            </Formik>
        )
    }
}