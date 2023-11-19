import { useState } from 'react';
import DEFAULT_TWEET from '../data/default_tweet';

// Le hook custom qui gère la logique des tweets
export function useTweets() {
  // State pour stocker les tweets, initialisé avec les tweets par défaut
  let [tweets, setTweets] = useState(DEFAULT_TWEET);

  // Ajoute un nouveau tweet à la liste
  const addTweet = (tweet) => {
    setTweets((curr) => {
      // Crée un nouveau tweet avec un ID incrémenté et initialise le nombre de likes à 0
      const newTweet = {
        id: curr[curr.length - 1]?.id + 1 ?? 0,
        name: tweet.name,
        content: tweet.content,
        like: 0,
      };
      // Retourne une nouvelle liste de tweets avec le nouveau tweet ajouté
      return [...tweets, newTweet];
    });
  };

  // Supprime un tweet en fonction de son ID
  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  // Incrémente le nombre de likes d'un tweet en fonction de son ID
  const onLike = (tweetId) => {
    setTweets((curr) => {
      // Crée une copie de la liste actuelle de tweets
      const copyTweet = [...curr];

      // Trouve le tweet correspondant à l'ID
      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);

      // Incrémente le nombre de likes du tweet
      likedTweet.like += 1;

      // Retourne la nouvelle liste de tweets avec le like mis à jour
      return copyTweet;
    });
  };

  // Retourne les fonctions et la liste de tweets pour être utilisées dans d'autres composants
  return { onLike, onDelete, addTweet, tweets };
}
