

export function handleToggleFavorite(from, to) {

    const id = `${from}-${to}`;

    setFavorites((prevFavorites) => {

      const exists = prevFavorites.some(
        (favorite) => favorite.id === id
      );

      if (exists) {
        return prevFavorites.filter(
          (favorite) => favorite.id !== id
        );
      }

      return [
        ...prevFavorites,
        {
          id,
          from,
          to
        },
      ];
    });
    
  }