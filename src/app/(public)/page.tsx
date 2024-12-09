

import Header from '@/components/home-components/HomeHeader';
import HomeHero from '@/components/home-components/HomeHero';
import HomeAbout from '@/components/home-components/HomeAbout';
import FoodCategory from '@/components/home-components/FoodCategory';
import BlogPosts from '@/components/home-components/BlogPosts';
import MeetOurChef from '@/components/home-components/MeetOurChefs';
import Testemonials from '@/components/home-components/Testemonials';
import ResturantActiveProcess from '@/components/home-components/ResturantActiveProcess';
import FromOurMenu from '@/components/home-components/FromOurMenu';
import Experience from '@/components/home-components/Experience';


const Home = () => {
  return (
    <main>
      <Header/>
      <HomeHero/>
      <HomeAbout/>
      <FoodCategory/>
      <Experience/>
      <FromOurMenu/>
      <MeetOurChef/>
      <Testemonials/>
      <ResturantActiveProcess/>
      <BlogPosts/>
     
    </main>
  )
}

export default Home;