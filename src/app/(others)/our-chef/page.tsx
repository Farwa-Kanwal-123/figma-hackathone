// import React from 'react'
// import Hero from "@/components/OthersHero";
// import Chef from "@/components/ourChefPage/Chef";

// const OurChef = () => {
//   return (
//     <div>
//         <Hero heading="Our Chef"/>
//         <Chef/>
//     </div>
//   )
// }

// export default OurChef;


// fetch sanity data



// import React from 'react'
// import Hero from "@/components/OthersHero";
// import {client} from '@/sanity/lib/client'
// import Image from 'next/image'

// interface IChef{
//   _id:string,
//   name:string,
//   position:string,
//   image_url:'url'
// }

// const getChef = async () =>{
//   const chefs = await client.fetch(
//     `
//     *[_type=="chef"]{
//     _id,
//     name,
//     position,
//     "image_url":image.asset->url
// }[]
//   `
//   )
//   return chefs;
// }

// const OurChef = async () => {
//   const chefs = await getChef();
//   console.log(chefs)

//   return (
//     <div>
//         <Hero heading="Our Chef"/>
//         {/* <Grid/> */}
//          <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]'>
//      {
//       chefs.map((chef:IChef)=>{
//         return(
//           <div className='w-full lg:w-[250px] h-[430px]'key={chef._id} >
//           <div className='w-full h-[365px] flex justify-center items-center'>
//           <Image 
//             src={chef.image_url} 
//             alt={chef.name} 
//             width={300}
//             height={300}
  
//             className="w-full h-full object-cover" 
//           />
//           </div>
//           <div className='flex flex-col items-center w-full h-[65px]'>
//            <h2 className='font-[700] text-[20px]'>{chef.name}</h2>
//            <p>{chef.position}</p>
//           </div>
//       </div>
//        )
//       })
//      }
//    </div>
//     </div>
//   )
// }

// export default OurChef;







// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";

// interface Chef {
//   _id: string;
//   name: string;
//   position: string;
//   experience: number;
//   specialty: string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// export default function ChefPage() {
//   const [chefs, setChefs] = useState<Chef[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchChefs = async () => {
//       const query = `
//       *[_type == "chef"]{
//         _id,
//         name,
//         position,
//         experience,
//         specialty,
//         "imageUrl": image.asset->url,
//         description,
//         available
//       }
//       `;
//       try {
//         const data: Chef[] = await client.fetch(query);
//         setChefs(data);
//       } catch (error) {
//         console.error("Error fetching chefs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChefs();
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold mb-8">Our Chefs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {chefs.map((chef) => (
//             <div
//               key={chef._id}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <div className="relative w-full h-48">
//                 <Image
//                   src={chef.imageUrl || "/placeholder.svg"}
//                   alt={chef.name}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold">{chef.name}</h2>
//                 <p className="text-sm text-gray-600">{chef.position}</p>
//                 <p className="mt-2 text-gray-700">{chef.specialty}</p>
//                 <p className="mt-2 text-sm text-gray-500">
//                   {chef.experience} years of experience
//                 </p>
//                 <p className="mt-4 text-sm text-gray-800">
//                   {chef.description}
//                 </p>
//                 <p
//                   className={`mt-4 text-sm font-bold ${
//                     chef.available ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {chef.available ? "Available" : "Not Available"}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }












"use client";

import React from "react";
import Hero from "@/components/OthersHero";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link'

// Define the interface for Chef data
interface IChef {
  _id: string;
  name: string;
  position: string;
  image_url: string;
}

// Fetch chefs dynamically from Sanity
const getChefs = async (): Promise<IChef[]> => {
  const query = `
    *[_type == "chef"] {
      _id,
      name,
      position,
      "image_url": image.asset->url
    }
  `;
  const chefs = await client.fetch(query);
  return chefs;
};

const OurChef = async () => {
  const chefs = await getChefs();

  return (
    <div>
      {/* Render the Hero Section */}
      <Hero heading="Our Chefs" />

      {/* Render the Chef Grid */}
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]">
        {chefs.map((chef: IChef) => (
          <div
            className="w-full lg:w-[260px] h-[450px] shadow-lg rounded-lg overflow-hidden"
            key={chef._id}
          >
            {/* Chef Image */}
            <div className="w-full h-[360px] flex justify-center items-center">
              <Image
                src={chef.image_url}
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chef Info */}
            <div className="flex flex-col items-center w-full bg-gray-50 p-2">
              <h2 className="font-bold text-lg">{chef.name}</h2>
              <p className="text-sm text-gray-600">{chef.position}</p>
              <Link href={`/our-chef/${chef._id}`}><button className="text-[#FF9F0D] inline-block font-semibold">View Details <FaArrowRight className="inline-block text-sm"/></button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
