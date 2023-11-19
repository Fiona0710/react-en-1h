import { Tweet } from './Tweet';

// Composant qui affiche une liste de tweets
export function TweetList({ tweets, onDelete, onLike }) {
  // Vérifie si la liste de tweets est vide
  if (!tweets || tweets.length === 0) {
    return 'No tweets';
  }

  // Rendu du composant
  return (
    <div className='tweet-container'>
      {/* Mapping à travers chaque tweet et rendu du composant Tweet pour chacun */}
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            name={tweet.name}
            content={tweet.content}
            like={tweet.like}
            onDelete={onDelete}
            onLike={onLike}
          />
        );
      })}
    </div>
  );
}
