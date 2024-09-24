import React from 'react';
import Card from '../../microfrontend/card-microfrontend/src/components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
      <section className="profile page__section">
        <ProfilePage />
      </section>
      <section className="places page__section">
        <CardPage />
      </section>
    </main>
  );
}

export default Main;
