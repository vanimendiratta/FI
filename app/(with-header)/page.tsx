import Bestseller from "@/components/bestseller";
import Sportaccesories from "@/components/sportaccesories";
import Download from "@/components/download";
import Membership from '@/components/membership';
import Bmi from '@/components/bmicalc';
import Create from '@/components/create';
import Blog from '@/components/blog'
import  Testimony from '@/components/testimony';
import Create2 from '@/components/create2';
import Herosection from "@/components/herosection";

export default function Home() {

  return( <main>
    <Herosection/>
    <Bestseller/>
  <Sportaccesories /> 
   <Download />
  <Membership />
  <Bmi />
  <Testimony/>
  <Create /> 
   <Blog/>
  <Create2/>
 
  
  </main>
  )
}
