import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { favorites, toggleFavorites, removeFavorite } from "./../actions/favoritesActions";

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const push = useHistory();
    const id = useParams();
    const {favorites, toggleFavorites, removeFavorite} = props;

    const favorite = favorites.find(favorite => favorite.id===Number(id));

    const handleRemoveClick = () => {
      removeFavorite(favorite.id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={handleRemoveClick} class="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            })
        }
    </div>);
}


const mapStateToProps = (state) => {
  return({
    favorites: state.favoritesReducer.favorites
  });
}

export default connect(mapStateToProps, {toggleFavorites, removeFavorite})(FavoriteMovieList);
