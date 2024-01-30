import { ICardProps } from "../../Types/type";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const CardProduct = ({ id, title, price, brand, thumbnail }: ICardProps) => {
  return (
    <Card placeholder={id} className="mt-6 overflow-hidden gap-5 ">
      <CardHeader
        placeholder={id}
        color="blue-gray"
        className="relative h-[300px]"
      >
        <img className="" src={thumbnail} alt={title} />
      </CardHeader>
      <CardBody placeholder={id}>
        <Typography
          placeholder={id}
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          <span className="">{title}</span>
        </Typography>
        <Typography placeholder={id} className="flex flex-col">
          <span className="">{`Price: ${price}`}</span>
          <span className="">{`Brand: ${brand}`}</span>
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardProduct;
