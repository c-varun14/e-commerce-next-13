import Product from "@/components/Product";

type pageProps = {
  params: {
    category: string;
  };
};

const page = ({ params: { category } }: pageProps) => {
  return (
    <section className="flex flex-wrap lg:w-3/4 lg:items-between">
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
  );
};

export default page;
