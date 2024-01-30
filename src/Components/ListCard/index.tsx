import React from "react";

import { ICardListProps } from "../../Types/type";
import Card from "../Card";

const ListCard = ({ card, cardCount }: ICardListProps) => {
  let item;
  if (cardCount > 0) {
    item = card.slice(0, cardCount);
  } else {
    item = card;
  }

  return (
    <div className="grid grid-cols-5 gap-4 items-center justify-center">
      {item?.map(({ id, brand, title, price, thumbnail }) => (
        <Card
          key={`title + ${id}`}
          id={id}
          brand={brand}
          price={price}
          title={title}
          thumbnail={thumbnail}
        />
      ))}
    </div>
  );
};

export default ListCard;
