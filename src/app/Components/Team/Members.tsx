"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AnimatedTestimonials } from "@/app/Components/ui/animated-testimonials";
import { color } from 'framer-motion';

export default function AnimatedTestimonialsDemo() {
  const Executives = [
    {
      quote:
        "Chief leads and oversees key strategies, making high-level decisions that align with the TAM’s goals. He guides team members and ensures smooth operations while fostering strong organizational culture. His focus is on shaping long-term vision and ensuring overall success. His role is crucial in driving efficiency and supporting leadership across departments.",
      name: "Tagore Monish",
      designation: "CHIEF",
      src: "https://i.ibb.co/4TWv2Hv/Monish.jpg",
    },
    {
      quote:
        "The Vice Chief ensures smooth day-to-day operations while driving the implementation of key targets. She takes charge during critical moments, leading with precision and fostering team cohesion. By maintaining clear communication and aligning efforts with TAM’s vision, the Vice Chief strengthens collaboration and motivates teams to excel. ",
      name: "Sania",
      designation: "Vice Chief",
      src: "https://i.ibb.co/zH2tG52/Sania-TAM.jpg",
    },
    {
      quote:
        "Chief Advisor provides expert guidance and strategic counsel to senior leadership. He offer insights on key decisions, helping to shape long-term strategies and solve complex challenges. His role is to leverage experience and knowledge, ensuring TAM stays on track and adapts to changing landscapes.",
      name: "Pranav Raj",
      designation: "CHIEF ADVISOR",
      src: "https://i.ibb.co/2ZT7sRb/Pranav-Raj.jpg",
    },
    {
      quote:
        "Financial Advisor provides expert advice on managing financial resources, investments, and budgeting. He help guide decision-making by analyzing financial data and assessing risks. His role is crucial in helping the TAM and make informed financial choices to achieve growth and stability.",
      name: "Aashrith Sarma",
      designation: "FINANCIAL ADVISOR",
      src: "https://i.ibb.co/9V0bzsf/Aashrith.jpg",
    },
    
  ];
  const Events = [
    {
      quote:
        "Events Head is the creative mastermind behind an event. He plays a key role in coordinating with higher authorities to secure necessary permissions and approvals for events. From innovative themes to attention-grabbing details, he ensures that every element is thoughtfully crafted",
      name: "S. Adithiya",
      designation: "EVENTS HEAD",
      src: "https://i.ibb.co/q0TKSVK/Adithiya.jpg",
    },
    {
      quote:
        "Event members are a dynamic team responsible for bringing an organization’s events to life. They work collaboratively to handle various aspects. By actively engaging with higher authorities, event members help secure the necessary approvals, ensuring the event runs smoothly and meet the goals",
      name: "Aabhash Sinha",
      designation: "EVENTS MEMBER",
      src: "https://i.ibb.co/bQf3fJW/Aabhash.jpg",
    },
    {
      quote:
        "Event members are a dynamic team responsible for bringing an organization’s events to life. They work collaboratively to handle various aspects. By actively engaging with higher authorities, event members help secure the necessary approvals, ensuring the event runs smoothly and meet the goals",
      name: "Darshini",
      designation: "EVENTS MEMBER",
      src: "https://i.ibb.co/DYrxtrf/DSCF1919.jpg",
    },
    {
      quote:
        "Event members are a dynamic team responsible for bringing an organization’s events to life. They work collaboratively to handle various aspects. By actively engaging with higher authorities, event members help secure the necessary approvals, ensuring the event runs smoothly and meet the goals",
      name: "Vaishnavi",
      designation: "EVENTS MEMBER",
      src: "https://i.ibb.co/vJjrxdD/Vaishnavi.jpg",
    },
    {
      quote:
        "Event members are a dynamic team responsible for bringing an organization’s events to life. They work collaboratively to handle various aspects. By actively engaging with higher authorities, event members help secure the necessary approvals, ensuring the event runs smoothly and meet the goals",
      name: "Nikita",
      designation: "EVENTS MEMBER",
      src: "https://i.ibb.co/df1v7Xt/Nikita.jpg",
    },
  ];
  const Technical = [
    {
      quote:
        "Technical Head is the driving force behind its tech vision and execution. He lead innovation, ensuring that the technical team delivers cutting-edge solutions that support business goals. With a focus on both game of action and hands-on expertise, he bridge the gap between technology and management to create lasting impact.",
      name: "Aditya Maddila",
      designation: "TECHNICAL HEAD",
      src: "https://i.ibb.co/T4pD2Xh/Aditya.jpg",
    },
    {
      quote:
        "Technical members ace in various technologies and play a decisive role in building, maintaining, and optimizing systems, tools, and solutions. They collaborate with their heads to solve complex problems, implement new technologies, and ensure smooth technical operations. ",
      name: "Vineet Pandey",
      designation: "TECHNICAL MEMBER",
      src: "https://i.ibb.co/7pHj27V/Vineet.jpg",
    },
    {
      quote:
        "Technical members ace in various technologies and play a decisive role in building, maintaining, and optimizing systems, tools, and solutions. They collaborate with their heads to solve complex problems, implement new technologies, and ensure smooth technical operations. ",
      name: "Koushik",
      designation: "TECHNICAL MEMBER",
      src: "https://i.ibb.co/4PG0041/Koushik.jpg",
    },
    {
      quote:
        "Technical members ace in various technologies and play a decisive role in building, maintaining, and optimizing systems, tools, and solutions. They collaborate with their heads to solve complex problems, implement new technologies, and ensure smooth technical operations. ",
      name: "Srihari",
      designation: "TECHNICAL MEMBER",
      src: "https://i.ibb.co/j5Fqpbv/Srihari.jpg",
    },
    {
      quote:
        "Technical members ace in various technologies and play a decisive role in building, maintaining, and optimizing systems, tools, and solutions. They collaborate with their heads to solve complex problems, implement new technologies, and ensure smooth technical operations. ",
      name: "Somiya",
      designation: "TECHNICAL MEMBER",
      src: "https://i.ibb.co/nMf2rq3/Somiya.jpg",
    },
  ];
  const Marketing = [
    {
      quote:
        "Marketing Head is responsible for defining and executing the marketing plan. She lead a team in developing campaigns, building awareness, and driving student engagement. With a focus on market trends, she ensure that marketing efforts align with essential objectives to boost growth.",
      name: "Rolla Ankita",
      designation: "MARKETING HEAD",
      src: "https://i.ibb.co/HHKKcGM/Ankita.jpg",
    },
    {
      quote:
        "Marketing members are creative who contribute to developing and executing marketing campaigns. They work across various channels—such as digital, social media and content,—to promote events and engage with the students. Their collaborative efforts help build awareness, attract students, and support overall marketing goals.",
      name: "Richitha",
      designation: "MARKETING MEMBER",
      src: "https://i.ibb.co/JFX4pMx/DSCF1927.jpg",
    },
    {
      quote:
        "Marketing members are creative who contribute to developing and executing marketing campaigns. They work across various channels—such as digital, social media and content,—to promote events and engage with the students. Their collaborative efforts help build awareness, attract students, and support overall marketing goals.",
      name: "Hrishikesh Rathore",
      designation: "MARKETING MEMBER",
      src: "https://i.ibb.co/nBDDzLj/Rathore.jpg",
    },
    {
      quote:
      "Marketing members are creative who contribute to developing and executing marketing campaigns. They work across various channels—such as digital, social media and content,—to promote events and engage with the students. Their collaborative efforts help build awareness, attract students, and support overall marketing goals.",
      name: "Dharani Reddy",
      designation: "MARKETING MEMBER",
      src: "https://i.ibb.co/qMPQBb5/Dharani.jpg",
    },
    {
      quote:
      "Marketing members are creative who contribute to developing and executing marketing campaigns. They work across various channels—such as digital, social media and content,—to promote events and engage with the students. Their collaborative efforts help build awareness, attract students, and support overall marketing goals.",
      name: "Ana Grace",
      designation: "MARKETING MEMBER",
      src: "https://i.ibb.co/m57Yv05/Grace.jpg",
    },
  ];
  const PRSales = [
    {
      quote:
        "PR and Sales Head is responsible for shaping and driving public relations and sales strategies. He ensures positive media coverage and building strong relationships. On the sales front, he leads the team in developing and executing strategies to drive revenue. He also secures and manages sponsorships for events and initiatives.",
      name: "Suraj Ratan",
      designation: "PR & SALES HEAD",
      src: "https://i.ibb.co/SmLtfp1/Suraj.jpg",
    },
    {
      quote:
        "They identify potential sponsors, negotiate partnerships, and ensure that sponsorships align with TAM’s values and goals. They plan publicity campaigns and respond to inquiries. They also make sure to drive sales.",
      name: "Pranav Boyana",
      designation: "PR & SALES MEMBER",
      src: "https://i.ibb.co/mShN3N6/Boyana.jpg",
    },
    {
      quote:
      "They identify potential sponsors, negotiate partnerships, and ensure that sponsorships align with TAM’s values and goals. They plan publicity campaigns and respond to inquiries. They also make sure to drive sales.",
      name: "Sravan",
      designation: "PR & SALES MEMBER",
      src: "https://i.ibb.co/vxhZrn5/Sravan.jpg",
    },
    {
      quote:
      "They identify potential sponsors, negotiate partnerships, and ensure that sponsorships align with TAM’s values and goals. They plan publicity campaigns and respond to inquiries. They also make sure to drive sales.",
      name: "Saideep",
      designation: "PR & SALES MEMBER",
      src: "https://i.ibb.co/ZKBmFDy/SaiDeep.jpg",
    },
    {
      quote:
      "They identify potential sponsors, negotiate partnerships, and ensure that sponsorships align with TAM’s values and goals. They plan publicity campaigns and respond to inquiries. They also make sure to drive sales.",
      name: "Daksh",
      designation: "PR & SALES MEMBER",
      src: "https://i.ibb.co/dfqvrBt/Daksh.jpg",
    },
  ];
  const StageCrew = [
    {
      quote:
        "Stage Crew Head is responsible for overseeing all aspects of stage production and ensuring the smooth execution of live events. She works closely with event planners, directors, and technical teams to ensure that the stage is ready and functional according to the event's requirements. Her leadership ensures that all stage-related elements are executed with precision and professionalism, contributing to the overall success of the event.",
      name: "Veda Reddy",
      designation: "STAGE CREW HEAD",
      src: "https://i.ibb.co/WvRgzLr/Veda-Reddy.jpg",
    },
    {
      quote:
        "They manage a team of stagehands and technical crew, coordinating the setup, operation, and breakdown of stage equipment, lighting, sound, and props. They also troubleshoot any technical issues, ensuring everything runs seamlessly during the performance or event.",
      name: "Sanketh Reddy",
      designation: "STAGE CREW MEMBER",
      src: "https://i.ibb.co/CwWNzqD/Sanketh.jpg",
    },
    {
      quote:
      "They manage a team of stagehands and technical crew, coordinating the setup, operation, and breakdown of stage equipment, lighting, sound, and props. They also troubleshoot any technical issues, ensuring everything runs seamlessly during the performance or event.",
      name: "Jaswitha Reddy",
      designation: "STAGE CREW MEMBER",
      src: "https://i.ibb.co/HnYs3X1/Jaswitha.jpg",
    },
    
  ];
  const Media = [
    {
      quote:
        "Media Head is responsible for overseeing all media-related activities, including the creation of visual content such as VFX, photography, and editing, to enhance the brand presence.He lead the media team in developing creative concepts and producing high-quality visuals. His leadership drives impactful media campaigns that boost brand visibility and engagement.",
      name: "Rishik Naidu",
      designation: "MEDIA HEAD",
      src: "https://i.ibb.co/vx6z5nJ/Rishik.jpg",
    },
    {
      quote:
        " Media members work closely with other departments to align visuals with messaging and marketing strategies. The Media members ensure that all visual elements—from promotional videos to event coverage—are professionally executed, edited, and optimized for various platforms.",
      name: "Sai Kiran",
      designation: "MEDIA MEMBER",
      src: "https://i.ibb.co/r04m3YD/Sai-Kiran.jpg",
    },
    {
      quote:
      " Media members work closely with other departments to align visuals with messaging and marketing strategies. The Media members ensure that all visual elements—from promotional videos to event coverage—are professionally executed, edited, and optimized for various platforms.",
      name: "Deekshith",
      designation: "MEDIA MEMBER",
      src: "https://i.ibb.co/XjNtGpb/Deekshith.jpg",
    },
    {
      quote:
      " Media members work closely with other departments to align visuals with messaging and marketing strategies. The Media members ensure that all visual elements—from promotional videos to event coverage—are professionally executed, edited, and optimized for various platforms.",
      name: "Sai Vardhan",
      designation: "MEDIA MEMBER",
      src: "https://i.ibb.co/KmdnJRR/Sai-Vardhan.jpg",
    },
    {
      quote:
      " Media members work closely with other departments to align visuals with messaging and marketing strategies. The Media members ensure that all visual elements—from promotional videos to event coverage—are professionally executed, edited, and optimized for various platforms.",
      name: "Mahesh",
      designation: "MEDIA MEMBER",
      src: "https://i.ibb.co/1vJMy82/Mahesh.jpg",
    },
  ];
  const Theaters = [
    {
      quote:
        "Theatres Head is responsible for adding energy, entertainment, and dramatic flair to an organization's events, transforming them into memorable experiences. She oversees the creative direction of theatrical elements, the Theatres Head ensures the event captivates the audience, leaving a lasting impact. Her ability to infuse creativity and theatrical expertise elevates events, making them both entertaining and visually stunning.",
      name: "R. Pavithra",
      designation: "THEATERS HEAD",
      src: "https://i.ibb.co/jy1d9tw/Pavithra.jpg",
    },
    {
      quote:
        " They collaborate with performers, directors, and other team members to enhance the overall event experience. Theatre members contribute their skills in acting, stage management, set design, and technical operation to create dynamic and engaging performances that captivate audiences. Their creativity and dedication help inject energy.",
      name: "Sipra Maharana",
      designation: "THEATERS MEMBER",
      src: "https://i.ibb.co/Msdb41P/Sipra.jpg",
    },
    {
      quote:
      " They collaborate with performers, directors, and other team members to enhance the overall event experience. Theatre members contribute their skills in acting, stage management, set design, and technical operation to create dynamic and engaging performances that captivate audiences. Their creativity and dedication help inject energy.",
      name: "Rajat Sharma",
      designation: "THEATERS MEMBER",
      src: "https://i.ibb.co/Tk3CTRC/Rajat.jpg",
    },
    
  ];
  
  return(
    <>
    <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Executives</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Executives.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Events</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Events.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Technical</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Technical.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Marketing</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Marketing.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>PR and Sales</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {PRSales.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">

      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Stage Crew</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {StageCrew.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Media</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Media.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
      <div className="max-w-screen-lg pb-[20vh] mx-auto">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center" style={{ fontFamily: 'Striger, sans-serif' }}>Theaters</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Theaters.map((member, index) => (
          <SwiperSlide key={index}>
            <AnimatedTestimonials testimonials={[member]} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </>
  ) ;
}








