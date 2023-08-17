import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon, User2Icon } from "lucide-react";

const Sidebar = ({ name }: { name: string }) => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden inline">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="text-white p-0 m-0">
        <SheetHeader className="text-white text-left bg-[#3E3847] p-6">
          <div className="bg-white mb-2 rounded font-normal  w-14 h-14 flex items-center justify-center">
            <User2Icon className="text-black h-8 w-8 " />
          </div>
          <Link href="/account" className="text-white">
            {name}
          </Link>
        </SheetHeader>
        <main className="text-black">
          <section>
            <Link
              className="block my-8 ml-6 font-semibold"
              href="/products?tags=men"
            >
              Men
            </Link>
            <Link
              className="block my-8 ml-6 font-semibold"
              href="/products?tags=women"
            >
              Women
            </Link>
            <Link
              className="block my-8 ml-6 font-semibold"
              href="/products?tags=kids"
            >
              Kids
            </Link>
          </section>
          <div className="bg-gray-200 h-1"></div>
          <section>
            <Link className="block my-8 ml-6" href="/account">
              Account
            </Link>
            <Link className="block my-8 ml-6" href="/orders">
              Orders
            </Link>
          </section>
        </main>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
