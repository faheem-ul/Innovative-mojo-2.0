import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import Text from "../ui/Text";

import { NewsData } from "@/lib/newsData";

import rightbtn from "@/public/images/news/CaretRight.svg";
import playbtn from "@/public/images/news/PlayCircle.png";
import audioplayer from "@/public/images/news/Frame.png";
import news1 from "@/public/images/news/news1display.png";
interface NewsPageProps {
  params: { newsId: string };
}

// Pre-generate static paths based on the news id
export async function generateStaticParams() {
  return NewsData.map((newsItem) => ({
    newsId: String(newsItem.id),
  }));
}

// A helper function to render descriptions with bold text before the colon
const renderDescription = (description: string) => {
  const colonIndex = description.indexOf(":");
  if (colonIndex === -1) {
    return <Text>{description}</Text>;
  }

  const boldPart = description.substring(0, colonIndex + 1);
  const normalPart = description.substring(colonIndex + 1);

  return (
    <Text className="text-[18px]">
      <span className="font-bold">{boldPart}</span>
      <span>{normalPart}</span>
    </Text>
  );
};

const NewsSinglePage: React.FC<NewsPageProps> = ({ params }) => {
  // Find the news item by matching the id from params
  const news = NewsData.find((item) => String(item.id) === params.newsId);

  if (!news) {
    return notFound();
  }

  return (
    <div className="w-full h-full px-5 mt-[76px] mb-[236px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          {/* Hero Section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="relative"
          >
            {/* {news.test && ( */}
            <Image
              src={news1}
              alt={news.title}
              className="rounded-[40px] mob:w-full mob:h-[500px] object-cover"
            />
            {/* )} */}
            {/* Overlay div */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#000]/90 to-[#000]/30 rounded-[40px]"></div>
            <div className="absolute inset-0 flex justify-center items-center mob:px-5">
              <div className="w-full max-w-[876px] ">
                <button className="p-[10px] mr-[15px] bg-transparent border border-gold rounded-[12px] text-white font-poppins text-[16px]">
                  Podcast
                </button>
                <button className="p-[10px] bg-transparent border border-gold rounded-[12px] text-white font-poppins text-[16px]">
                  Operations
                </button>{" "}
                <Text as="h2" className="mt-[19px] mb-[19px]">
                  {news.title}
                </Text>
                <Text>OCT-10-2024</Text>
              </div>
            </div>
          </div>
          {/* Hero Section */}
          <div className="mt-[103px] flex gap-[22px]">
            <Text className="text-gold text-[18px]">MOJO News</Text>
            <Image src={rightbtn} alt="image" />
            <Text className="text-[18px]">{news.title}</Text>
          </div>

          {/* Podcast Section */}
          <div className="w-full rounded-[40px] border border-gold mt-[90px] py-[45px] flex justify-center items-center h-full">
            <div className="w-full max-w-[1038px] flex justify-between flex-wrap px-5 navsize:justify-center navsize:gap-[30px]">
              <Image
                src={news.thumbnail}
                alt="image"
                className="w-full max-w-[300px]"
              />
              <div className="flex gap-[24px]">
                <Image
                  src={playbtn}
                  className="w-[40px] h-[40px]"
                  alt="playbtn"
                />
                <div className="mb-[27px]">
                  <Text as="h3" className="w-full max-w-[594px]">
                    {news.title}
                  </Text>
                  <Text className="text-[18px] mb-[44px]">10:57</Text>
                  <Image
                    src={audioplayer}
                    alt="audio player"
                    className="w-full max-w-[589px]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Podcast Section */}

          {/* Theory Section */}
          <div className="mt-[90px] flex justify-center gap-[20px] mob:flex-col">
            <div className="">
              <div>
                <div className="mb-8">
                  {renderDescription(news.description1)}
                </div>
                <div className="mb-8">
                  {renderDescription(news.description2)}
                </div>
                <div className="mb-0">
                  {renderDescription(news.description3)}
                </div>
              </div>
            </div>
            <div className="w-full max-w-[332px] mob:max-w-full">
              <Text className="text-[32px] text-gold font-semibold mb-[33px]">
                Related Resources
              </Text>
              <Text className="mb-[15px]">
                The Future of Digital Advertising
              </Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
              <Text className="mb-[15px]">
                The Fundamentals of Scriptwriting for Web Videos
              </Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
              <Text className="mb-[15px]">
                Maximizing ROI with Effective Content Strategies
              </Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
              <Text className="mb-[15px]">Tech and the Environment</Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
              <Text className="mb-[15px]">
                Effective Content Strategies for Small Businesses
              </Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
              <Text className="mb-[15px]">
                Concept Development in Videography
              </Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
              <Text className="mb-[15px]">
                Creating Engaging Video Content for SEO
              </Text>
              <div className="w-full border-[0.5px] border-gold mb-[30px]" />
            </div>
          </div>
          {/* Theory Section */}
        </div>
      </div>
    </div>
  );
};

export default NewsSinglePage;
