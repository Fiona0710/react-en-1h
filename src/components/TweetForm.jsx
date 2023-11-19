// Composant pour le formulaire de création de nouveaux tweets
export function TweetForm({ onSubmit }) {
  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupération des valeurs des champs du formulaire
    const name = event.target.name.value;
    const content = event.target.content.value;

    // Création d'un nouvel objet tweet avec les valeurs du formulaire
    const newTweet = {
      name,
      content,
      like: 0,
    };

    // Appel de la fonction onSubmit fournie en prop avec le nouvel objet tweet en paramètre
    onSubmit(newTweet);
  };

  return (
    <form
      // Appelle la fonction handleSubmit lors de la soumission du formulaire
      onSubmit={handleSubmit}
      className='tweet-form'
    >
      <h4>New tweet</h4>
      <input
        placeholder='name'
        type='text'
        name='name'
      />
      <input
        placeholder='content'
        type='content'
        name='content'
      />
      <input type='submit' />
    </form>
  );
}
