import Product from "@/components/Product";

type pageProps = {
  params: {
    category: string;
  };
};

const page = ({ params: { category } }: pageProps) => {
  return (
    <div className="flex flex-wrap lg:w-2/3 md:justify-center md:items-between">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default page;
