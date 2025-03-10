import React from "react";
import Image, { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import Text from "../ui/Text";
import { NewsData } from "@/lib/newsData";

import rightbtn from "@/public/images/news/CaretRight.svg";
import news1 from "@/public/images/news/news1display.png";
import AudioPlayerComponent from "./audio-player";

interface NewsPageProps {
  params: { newsId: string };
}

// Render bold text before colon
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

// Shuffle function for random resources
// (Import and interfaces remain unchanged)

interface NewsItem {
  id: string | number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  videoUrl: string;
  thumbnail: StaticImageData;
}

interface NewsPageProps {
  params: { newsId: string };
}

// Shuffle function with correct typing
const shuffleArray = (array: NewsItem[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const NewsSinglePage: React.FC<NewsPageProps> = ({ params }) => {
  const news = NewsData.find((item) => String(item.id) === params.newsId);
  if (!news) return notFound();

  // Filter and shuffle related resources
  const relatedResources = shuffleArray(
    NewsData.filter((item) => item.id !== news.id)
  ).slice(0, 7);

  return (
    <div className="w-full h-full px-5 mt-[76px] mb-[236px]">
      <div className="flex justify-center items-center">
        <div className="max-w-[1236px] w-full">
          {/* Hero Section remains unchanged */}
          <div className="relative">
            <Image
              src={news1}
              alt={news.title}
              className="rounded-[40px] mob:w-full mob:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#000]/90 to-[#000]/30 rounded-[40px]" />
            <div className="absolute inset-0 flex items-center justify-center mob:px-5">
              <div className="max-w-[876px]">
                <button className="p-[10px] mr-[15px] border border-gold rounded-[12px] text-white">
                  Podcast
                </button>
                <button className="p-[10px] border border-gold rounded-[12px] text-white">
                  Operations
                </button>
                <Text as="h2" className="mt-[19px] mb-[19px]">
                  {news.title}
                </Text>
                <Text>OCT-10-2024</Text>
              </div>
            </div>
          </div>

          {/* Breadcrumb remains unchanged */}
          <div className="mt-[103px] flex gap-[22px] items-center">
            <Text className="text-gold">MOJO News</Text>
            <Image src={rightbtn} alt="arrow" />
            <Text>{news.title}</Text>
          </div>

          {/* Podcast Section */}
          <AudioPlayerComponent news={news} />

          {/* Content & Related Resources */}
          <div className="mt-[90px] flex gap-[20px] mob:flex-col">
            <div className="mt-[90px] flex justify-center gap-[20px] mob:flex-col">
              <div>
                <div className="mb-8">
                  {renderDescription(news.description1)}
                </div>
                <div className="mb-8">
                  {renderDescription(news.description2)}
                </div>
                <div>{renderDescription(news.description3)}</div>
              </div>

              <div className="w-full max-w-[332px] mob:max-w-full">
                <Text className="text-[32px] text-gold font-semibold mb-[33px]">
                  Related Resources
                </Text>

                {relatedResources.map((item) => (
                  <div key={item.id}>
                    <Link href={`/news/${item.id}`}>
                      <Text className="mb-[15px] cursor-pointer hover:text-gold transition-colors">
                        {item.title}
                      </Text>
                    </Link>
                    <div className="w-full border-[0.5px] border-gold mb-[30px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSinglePage;
