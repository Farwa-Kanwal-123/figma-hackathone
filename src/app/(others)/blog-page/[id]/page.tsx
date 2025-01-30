// import Link from "next/link";
// import Rightside from "../rightside";
// import Blog from "@/app/blog/leftside";
// async function fetchPost(id: string) {
//     const res = await fetch(`https://677c0f1720824100c07bb9bc.mockapi.io/blog/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch post");
//     }
//     return res.json();
//   }
  
//   interface Post {
//     id: string;
//     image: string;
//     date: string;
//     title: string;
//     description: string;
//   }
  
//   const BlogDetails = async ({ params }: { params: { id: string } }) => {
//     const post: Post = await fetchPost(params.id);
  
//     return (
//         <div >
//         <section
//         className="bg-cover bg-center h-64 flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/bg.png')" }}
//       >
//         <div className="text-center text-white">
//           <h2 className="text-4xl font-bold">Blog Details</h2>
//           <p className="pt-2">
//             <Link href="/" className="text-yellow-400">Home</Link> › Blog details
//           </p>
//         </div>
//       </section>
//       <div className='md:max-w-[1920px] justify-center items-center object-cover'>
//         <div className='md:max-w-[1320px] mt-16 flex flex-col lg:flex-row'>
//           <div className='md:max-w-2/4'>
//             <Rightside />
//           </div>
//           < className='md:max-w-1/4 mb-8'>
//           import Link from "next/link";
// import Rightside from "../rightside";
// import Blog from "@/app/blog/leftside";
// async function fetchPost(id: string) {
//     const res = await fetch(`https://677c0f1720824100c07bb9bc.mockapi.io/blog/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch post");
//     }
//     return res.json();
//   }
  
//   interface Post {
//     id: string;
//     image: string;
//     date: string;
//     title: string;
//     description: string;
//   }
  
//   const BlogDetails = async ({ params }: { params: { id: string } }) => {
//     const post: Post = await fetchPost(params.id);
  
//     return (
//         <div >
//         <section
//         className="bg-cover bg-center h-64 flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/bg.png')" }}
//       >
//         <div className="text-center text-white">
//           <h2 className="text-4xl font-bold">Blog Details</h2>
//           <p className="pt-2">
//             <Link href="/" className="text-yellow-400">Home</Link> › Blog details
//           </p>
//         </div>
//       </section>
//       <div className='md:max-w-[1920px] justify-center items-center object-cover'>
//         <div className='md:max-w-[1320px] mt-16 flex flex-col lg:flex-row'>
            
//           <div className='md:max-w-2/4'>
          
//           </div>
//           <div className='md:max-w-1/4 mb-8'>
//            <Blog/>
//             </div>
//           </div>
//       </div>
     
//     </div>
//   )
// }
// export default BlogDetails

import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus,PiQuotes  } from "react-icons/pi";
import Image from "next/image";

import Rightside from "./rightside";
import Leftside from "../leftside";

// Function to fetch a single blog post dynamically
async function fetchPost(id: string) {
  const res = await fetch(`https://677c0f1720824100c07bb9bc.mockapi.io/blog/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

interface Post {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const post: Post = await fetchPost(params.id);

  return (
    <div>
      {/* Header Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Details</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Blog details
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className='md:max-w-[1920px] justify-center items-center object-cover'>
       <div className='md:max-w-[1320px] mt-16 flex flex-col lg:flex-row'>
           <div className='md:max-w-2/4 px-12 space-y-6'>
                      {/* Dynamically rendering Blog component with post data */}
                      <Image src={post.image} alt={post.title} width={400} height={330 } className="object-cover w-full h-[400px]"/>
                        <div className="flex gap-2 text-sm md:text-base items-center">
                                  <IoCalendarNumberOutline size={20} className="text-[#FF9F0D]" />
                                  <span>{post.date}</span>
                                  &#47;
                                  <TiMessages size={20} className="text-[#FF9F0D]" />
                                  <span>3</span>
                                  &#47;
                                  <PiUserCirclePlus size={20} className="text-[#FF9F0D]" />
                                  <span>Admin</span>
                                </div>
                      <h2 className="font-bold text-lg md:text-xl">{post.title}</h2>
                      <p className="text-sm md:text-base text-justify">{post.description}</p>
                       {/* second div */}
                                              <div className='md:max-w-[840px] mx-8 bg-[#FF9F0D] md:mt-8  mb-8 text-[#ffffff] h-[176px] top-[1431px] left-[300px]'>
                                        <div className='flex gap-4 p-6 md:mt-[6rem] mt-[10rem]'>
                                            <PiQuotes size={ 98} />
                      <p className='font-helvetica font-bold text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                                        </div>
                                        </div>           
                                        <p className='text-[#000000] font-[400] font-inter px-8 text-justify text-[16px] mt-8 mb-8'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                    </p>
                                    {/* third div */}
                                    <div className='flex flex-col md:flex-row md:max-w-[872px] gap-6'>
                                        {/* leftside div */}
                                        <div className='md:w-1/2 w-full '>
                                            <p className='w-full lg:hidden block p-4  text-justify px-8'>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /><br />
                                                </p> <span className='w-full p-4 block text-justify px-8'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                                               </span>
                                            
                                        </div>
                                        {/* image div */}
                                        <div className='md:w-1/2 w-full'>
                                            <Image src={post.image} alt="food" width={ 424} height={366 }  className="object-cover px-8 mt-8"/> 
                                        </div>
                                    </div>
                                    <p className='text-[#000000] font-[400] px-8 text-justify font-inter text-[16px] mt-8 mb-8'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/> <br />
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.     </p>
                          <Rightside/>    
                      
          </div>
                      <div className='md:max-w-2/3 mb-8'>
            <Leftside/>
           </div>
           </div>
          </div>
          </div>
  );
};

export default BlogDetails;