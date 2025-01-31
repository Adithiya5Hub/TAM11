"use client";

import Carousel from "@/app/Components/ui/Carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Podcasts",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "TalkShows",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Quizzes",
      button: "More Info",
      src: "https://media.istockphoto.com/id/1398690866/photo/the-inscription-quiz-on-wooden-blocks-other-blocks-with-question-marks-the-concept-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=pujYXirwDyUuGinui81iMrYfb5oIU6xZckQYFJUjaQc=",
    },
    {
      title: "Workshops",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8'>EVENTS</h1>

      <Carousel slides={slideData} />
     
    </div>
  );
}
