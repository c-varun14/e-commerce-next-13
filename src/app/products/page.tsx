import Filters from "@/components/Filters";
import Product from "@/components/Product";

type pageProps = {
  params: {
    category: string;
  };
};

const page = ({ params: { category } }: pageProps) => {
  return (
    <div className="flex justify-center">
      <section className="min-h-[80dvh] ml-1">
        <Filters />
      </section>
      <section className="flex flex-wrap lg:w-2/3 lg:items-between">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default page;
