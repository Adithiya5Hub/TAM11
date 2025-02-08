import Members from "@/app/Components/Team/Members";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import Spotlight from "@/app/Components/Team/Spotlight"

export default function MembersPage() {
  return (<div>
    <Navbar />
    <Spotlight />
    
    <Members />
    <Footer />
  </div>);
}
