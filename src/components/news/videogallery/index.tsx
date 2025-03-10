"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { NewsData } from "@/lib/newsData";
import Text from "@/components/ui/Text";

import forwardarrow from "@/public/images/news/ArrowRight.svg";
import backarrow from "@/public/images/news/ArrowLeft.svg";

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const videosPerPage = 7;

  const filteredVideos = NewsData.filter((news) => {
    const categoryMatch =
      selectedCategory === "All" || news.category === selectedCategory;
    const keywordMatch = news.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
    return categoryMatch && keywordMatch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [keyword, selectedCategory]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Inline style for the desired gradient background
  const gradientStyle = {
    background:
      "linear-gradient(180deg, rgba(235,193,92,0.1) 0%, #000000 100%)",
  };

  return (
    <div
      className="w-full h-full px-5"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h2" className="mb-5">
            Explore <span className="text-gold">MOJO News</span>
          </Text>
          <div className="w-full flex flex-wrap navsize:gap-10 navsize:justify-center justify-between items-center mb-[70px]">
            <input
              type="text"
              className="w-[400px] p-[10px] rounded-[8px] border border-gold bg-secondary text-white font-poppins"
              placeholder="Keyword Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="w-[400px] p-[10px] rounded-[8px] bg-secondary border border-white text-white font-poppins"
            >
              <option value="All">Categories: All</option>
              <option value="Revenue Generated">Revenue Generated</option>
              <option value="Revenue Operations">Revenue Operations</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-5 mob:gap-0 mob:space-y-6 mob:grid-cols-1">
            {currentVideos.slice(0, 4).map((video) => (
              <Link href={`/news/${video.id}`} key={video.id}>
                <div className="relative z-10 transition-transform duration-700">
                  <div
                    className="absolute inset-0 rounded-b-[33px] rounded-t-[35px] opacity-0 hover:opacity-100 transition-opacity duration-700 flex justify-center items-end"
                    style={gradientStyle}
                  >
                    <div className="w-full max-w-[498px]">
                      <Text className="text-white text-[25px] text-left font-semibold p-2 relative top-[-10px]">
                        {video.title}
                      </Text>
                      <Text className="w-full text-[16px] underline underline-offset-4 text-gold mb-[30px] flex justify-end">
                        Read more
                      </Text>
                    </div>
                  </div>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full rounded-b-[33px] rounded-t-[35px]"
                  />
                </div>
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-5 col-span-2 mob:grid-cols-1">
              <div className="col-span-1">
                {currentVideos[4] && (
                  <Link
                    href={`/news/${currentVideos[4].id}`}
                    key={currentVideos[4].id}
                  >
                    <div className="relative z-10 transition-transform duration-700">
                      <div
                        className="absolute inset-0 rounded-b-[33px] rounded-t-[35px] opacity-0 hover:opacity-100 transition-opacity duration-700 flex justify-center items-end"
                        style={gradientStyle}
                      >
                        <div className="w-full max-w-[498px]">
                          <Text className="text-white text-[25px] max-w-[492px] font-semibold p-2 relative top-[-10px]">
                            {currentVideos[4].title}
                          </Text>
                          <Text className="w-full text-[16px] max-w-[494px] underline underline-offset-4 text-gold mb-[30px] flex justify-end">
                            Read more
                          </Text>
                        </div>
                      </div>
                      <Image
                        src={currentVideos[4].thumbnail}
                        alt={currentVideos[4].title}
                        className="w-full h-[301px] rounded-b-[33px] rounded-t-[35px]"
                      />
                    </div>
                  </Link>
                )}
              </div>

              <div className="gap-5 flex mob:flex-col">
                {currentVideos.slice(5, 7).map((video) => (
                  <Link href={`/news/${video.id}`} key={video.id}>
                    <div className="relative z-10 transition-transform duration-700">
                      <div
                        className="absolute inset-0 rounded-b-[33px] rounded-t-[35px] opacity-0 hover:opacity-100 transition-opacity duration-700 flex justify-center items-end"
                        style={gradientStyle}
                      >
                        <div className="w-full max-w-[492px]">
                          <Text className="text-white text-[25px] max-w-[492px] font-semibold p-2 relative top-[-10px]">
                            {video.title}
                          </Text>
                          <Text className="w-full text-[16px] max-w-[494px] underline underline-offset-4 text-gold mb-[30px] flex justify-end">
                            Read more
                          </Text>
                        </div>
                      </div>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-[301px] rounded-b-[33px] rounded-t-[35px] max-w-[300px] mob:max-w-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[58px] mb-[200px]">
            <Image
              src={backarrow}
              alt="Previous Page"
              onClick={handlePreviousPage}
              className={currentPage === 1 ? "" : "pagination-btn"}
            />

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "text-gold font-poppins text-[20px] mx-[10px]"
                    : "text-white font-poppins text-[20px] mx-[10px]"
                }
              >
                {index + 1}
              </button>
            ))}
            <Image
              src={forwardarrow}
              alt="Next Page"
              onClick={handleNextPage}
              className={currentPage === totalPages ? "" : "pagination-btn"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
