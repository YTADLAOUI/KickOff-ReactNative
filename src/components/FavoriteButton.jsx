import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favorites/favoriteSlice';

const FavoriteButton = ({ match }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.value);
  const isFavorite = favorites.some((fav) => fav.id === match.id);
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(favorites.filter((fav) => fav.id !== match.id)));
    } else {
      dispatch(addFavorite([...favorites, match]));
    }
    setIsClicked(!isClicked);
  };
    // useEffect(() => {
    //   console.log(favorites);
    // }, [isFavorite, isClicked]);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={30}
        color={ 'red'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;