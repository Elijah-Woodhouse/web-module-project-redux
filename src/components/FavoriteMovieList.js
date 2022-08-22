import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { removeFavorite } from "./../actions/favoritesActions";

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const { push } = useHistory();
    const { favorites, removeFavorite } = props;

    const handleRemoveClick = (id) => {
      removeFavorite(id)
      push('./favorites')
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(favorite=>{
                return <div key={favorite.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${favorite.id}`}>
                        {favorite.title}
                        <span><span onClick={() => handleRemoveClick(favorite.id)} class="material-icons">remove_circle</span></span>
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

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
