import React from 'react';
import { CurrentUserContext } from '../../../../src/contexts/CurrentUserContext';

function CardPage({ card, onCardClick, onCardLike, onCardDelete }) {
  return (
      <ul className="places__list">
        {cards.map((card) => (
            <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
            />
        ))}
      </ul>
  );
}

export default CardPage;
