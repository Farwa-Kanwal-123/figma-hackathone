import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
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
        <h1 className="text-2xl font-bold w-full text-center pt-10"><span className="text-[#FF9F0D]">Food</span>tuck</h1>
      <div className="wrapper flex justify-between items-center py-4">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link href={"/"} className="text-[#FF9F0D] underline hover:text-[#bd832c]"> Home</Link>
          <Link href={"/menu"} className="hover:text-[#FF9F0D]">Menu</Link>
          <Link href={"/checkout"} className="hover:text-[#FF9F0D]">Blog</Link>
          <Link href={"/FAQ"} className="hover:text-[#FF9F0D]">Pages</Link>
          <Link href={"/about"} className="hover:text-[#FF9F0D]">About</Link>
          <Link href={"/signin"} className="hover:text-[#FF9F0D]">Shop</Link>
          <Link href={"/our-chef"} className="hover:text-[#FF9F0D]">Contact</Link>
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
                <Link href={"/menu"} className="text-white text-lg">Menu</Link>
                <Link href={"/checkout"} className="text-white text-lg">Blog </Link>
                <Link href={"/FAQ"} className="text-white text-lg">Pages</Link>
                <Link href={"/about"} className="text-white text-lg">About</Link>
                <Link href={"/signin"} className="text-white text-lg">Shop</Link>
                <Link href={"/our-chef"} className="text-white text-lg">Contact </Link>
           </nav>

              {/* Additional Icons */}
              <div className="mt-6 flex space-x-4">
                <IoSearch className="text-xl text-white" />
                <PiHandbagBold className="text-xl text-white" />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex items-center rounded-md px-3 py-2 space-x-4">
            <input type="search" placeholder="Search..." className="rounded-full h-[35px] w-[310px] border border-[#FF9F0D] bg-black placeholder:pl-4" />
            <IoSearch  className=' -translate-x-12 bg-black text-white' />
            <PiHandbagBold className='-translate-x-8 bg-black text-white'/>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Navbar;
