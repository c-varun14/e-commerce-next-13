import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import shirtImg from "/public/shirt.jpeg";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

type ProductProps = {};

const Product = ({}: ProductProps) => {
  return (
    <div className="w-1/2 border-[1.5px] lg:w-48 lg:m-1 lg:border-none">
      <section className="mb-2 relative">
        <Image
          width={50}
          height={80}
          className="w-full h-64 object-cover"
          src={shirtImg}
          alt="Image"
        />
        <Heart className="absolute top-2 right-2 text-gray-400 fill-white" />
      </section>
      <section className="px-3 mb-2">
        <h2 className="font-semibold text-sm mb-1 leading-none">Levis</h2>
        <p className="text-[--gray] text-[11px] mb-2 font-light leading-none">
          {"Levi's Chilly green pure cotton"}
        </p>
        <div className="flex items-baseline">
          <h2 className="mr-2 font-semibold text-sm leading-none">$499</h2>
          <h3 className="mr-2 line-through text-xs leading-none">$999</h3>
          <p className="text-[--green] text-sm leading-none">50%</p>
        </div>
      </section>
      <section className="flex items-center px-3 mb-5">
        <h3 className="flex items-center text-sm rounded-2xl px-2 border-2 mr-1">
          5.0
          <Star className="text-[--green] w-4 h-4 ml-1 fill-[--green]" />
        </h3>
        <p className="text-xs text-[--gray]">{"(2)"}</p>
      </section>
    </div>
  );
};

export default Product;
