import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Main = () => {
  const coffeeData = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
      {coffeeData.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
      ))}
    </div>
  );
};

export default Main;
