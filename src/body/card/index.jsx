import Card_Footer from "./card-footer";

const Card = ({
  title,
  year,
  genre,
  rating,
  description,
  img,
  id,
  completed,
}) => {
  return (
    <div className="w-[300px] h-fit border flex flex-col gap-[5px] m-auto my-[50px]">
      <img className="w-full h-[300px] object-cover" src={img} alt="" />
      <div className="flex justify-between py-[10px] px-[10px]">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
      <div className="flex justify-between py-[10px] px-[10px]">
        <h1>{genre}</h1>
        <p>{rating}</p>
      </div>
      <p className="py-[10px] px-[10px]">{description}</p>
      <Card_Footer id={id} completed={completed} />
    </div>
  );
};

export default Card;
