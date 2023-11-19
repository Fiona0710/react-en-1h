import { TweetForm } from './components/tweetForm';
import { TweetList } from './components/TweetList';
import { useTweets } from './hooks/useTweets';

function App() {
  // Utilisation du hook custom useTweets pour gérer la logique des tweets
  const { onLike, onDelete, addTweet, tweets } = useTweets();
  return (
    <div>
      <TweetForm onSubmit={addTweet} />
      <TweetList
        tweets={tweets}
        onDelete={onDelete}
        onLike={onLike}
      />
    </div>
  );
}
export default App;
