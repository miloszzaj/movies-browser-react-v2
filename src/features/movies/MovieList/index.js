import React, { useEffect } from 'react'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList, selectMovieList } from './movieListSlice'
import { Title } from '../../../common/components/Title'
import { Pagination } from '../../../common/components/Pagination'
import { useSearch } from '../../useParameters'
import { Section } from '../../../common/components/Section'
import { queryKeys } from '../../queryKeys'

const MovieList = () => {
    const { loading, movieList, error } = useSelector(selectMovieList)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const query = useSearch(queryKeys.search)
    const page = useSearch(queryKeys.page)
    useEffect(() => {
        dispatch(fetchMovieList({ query, page }))
    }, [dispatch, query, page])

    const routeToMoviePage = (id) => {
        navigate(`/movie/${id}`)
    }

    const showTitle = () => (query ? `Search for "${query}"` : 'Popular movies')

    return (
        <Section>
            {error && !loading && <ErrorMessage />}
            {!error && loading && (
                <>
                    <Title title={showTitle()} />
                    <Loader />
                </>
            )}
            {!error && !loading && <Title title={showTitle()} />}

            {!error &&
                !loading &&
                movieList &&
                movieList.map((movie) => (
                    <React.Fragment key={movie.id}>
                        <Tile
                            isList
                            nonInList
                            key={nanoid()}
                            onClick={() => routeToMoviePage(movie.id)}
                            title={movie.title}
                            poster={movie.poster_path}
                            year={
                                movie.release_date
                                    ? movie.release_date.slice(0, 4)
                                    : 'Unknown'
                            }
                            rate={movie.vote_average}
                            votes={movie.vote_count}
                            genres={movie.genre_ids}
                            country={movie.production_countries}
                        />
                    </React.Fragment>
                ))}
            {!error && !loading && <Pagination />}
        </Section>
    )
}

export default MovieList
