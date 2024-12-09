import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { PiHandbagBold } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="w-full bg-black text-white z-50 sticky">
      <div className="wrapper flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold"><span className="text-[#FF9F0D]">Food</span>tuck</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link href={"/"} className="text-[#FF9F0D] underline"> Home</Link>
          <Link href={"/our-chef"}>Menu</Link>
          <Link href={"/checkout"}>Blog</Link>
          <Link href={"/signin"}>Pages</Link>
          <Link href={"/signup"}>About</Link>
          <Link href={"/FAQ"}>Shop</Link>
          <Link href={"/404Error"}>Contact</Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiMenu className="text-2xl cursor-pointer text-white " />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-gray-900">
              <SheetHeader>
                <SheetTitle className="text-white font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col space-y-4">
                <Link href={"/"} className="text-white text-lg">Home</Link>
                <Link href={"/our-chef"} className="text-white text-lg">Menu</Link>
                <Link href={"/checkout"} className="text-white text-lg">Blog </Link>
                <Link href={"/signin"} className="text-white text-lg">Pages</Link>
                <Link href={"/signup"} className="text-white text-lg">About</Link>
                <Link href={"/FAQ"} className="text-white text-lg">Shop</Link>
                <Link href={"/404Error"} className="text-white text-lg">Contact </Link>
           </nav>

              {/* Additional Icons */}
              <div className="mt-6 flex space-x-4">
                <IoSearch className="text-xl text-white" />
                <RxPerson className="text-xl text-white" />
                <PiHandbagBold className="text-xl text-white" />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex items-center rounded-md px-3 py-2 space-x-4">
            <IoSearch  className=' bg-black text-white' />
            <RxPerson className=' bg-black text-white'/>
            <PiHandbagBold className=' bg-black text-white'/>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Navbar;
