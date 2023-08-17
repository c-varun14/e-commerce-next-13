import Link from "next/link";
import Image from "next/image";
import logo from "public/logo.png";
import Sidebar from "./Sidebar";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import { Label } from "../ui/label";
import Searchbar from "./Searchbar";

type NavbarProps = {
  name: string;
};

const Navbar = ({ name }: NavbarProps) => {
  return (
    <nav className="fixed top-0 z-[2] w-full text-white bg-[--dark-gray] flex items-center justify-between p-2 lg:px-4">
      <div className="flex items-center">
        <Sidebar name={name} />
        <Image
          src={logo}
          alt="Verge"
          height={30}
          width={30}
          className="ml-4 lg:ml-8 lg:h-12 lg:w-12 "
        />

        {/* For desktop view */}
        <section className="hidden lg:block">
          <Link className="my-8 ml-6 p-2" href="/products?tags=men">
            Men
          </Link>
          <Link className="my-8 ml-6 p-2" href="/products?tags=women">
            Women
          </Link>
          <Link className="my-8 ml-6 p-2" href="/products?tags=kids">
            Kids
          </Link>
        </section>
      </div>

      <section className="flex">
        <Searchbar />
        <Link className="m-2 md:m-3 hidden lg:block" href="/account">
          <UserIcon className="h-5 w-5 text-gray-300 mx-auto mb-1" />
          <Label className="hidden lg:block text-xs">Profile</Label>
        </Link>
        <Link className="m-2 md:m-3" href="/wishlist">
          <HeartIcon className="h-5 w-5 text-gray-300 mx-auto mb-1" />
          <Label className="hidden lg:block text-xs">Wishlist</Label>
        </Link>
        <Link className="m-2 md:m-3" href="/bag">
          <ShoppingBagIcon className="h-5 w-5 text-gray-300 mx-auto mb-1" />
          <Label className="hidden lg:block text-xs">Bag</Label>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
