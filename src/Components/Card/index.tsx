import { Link } from "react-router-dom";
import { ICardProps } from "../../Types/type";

const Card = ({ id, title, price, brand, thumbnail }: ICardProps) => {
  return (
    <div className="">
      <Link to={`/products/${id}`} className="">
        <div className="">
          <img className="" src={thumbnail} alt={title} />
          <span className="">{price}</span>
          <span className="">{brand}</span>
        </div>
      </Link>
      <span className="">{title}</span>
    </div>
  );
};

export default Card;
