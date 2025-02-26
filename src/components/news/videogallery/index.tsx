"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { useNavigate } from "react-router-dom";

import { NewsData } from "@/lib/newsData";
import Text from "@/components/ui/Text";

import forwardarrow from "@/public/images/news/ArrowRight.svg";
import backarrow from "@/public/images/news/ArrowLeft.svg";
// import playvideoicon from "../../../assets/Revenue-makers/gridicons_play.svg";

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState(""); // State for pagination
  const videosPerPage = 7; // Videos per page

  // Function to filter videos based on selected category
  const filteredVideos = NewsData.filter((news) => {
    const categoryMatch =
      selectedCategory === "All" || news.category === selectedCategory;
    const keywordMatch = news.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
    // console.log(categoryMatch)
    return categoryMatch && keywordMatch;
  });

  // console.log("filteredvidoes on videogallery page",filteredVideos)

  // Reset currentPage to 1 when a new search is made or category is changed
  useEffect(() => {
    setCurrentPage(1);
  }, [keyword, selectedCategory]);

  // Apply pagination after filtering
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  //   const navigate = useNavigate();

  //   // Function to paginate the videos
  //   const indexOfLastVideo = currentPage * videosPerPage;
  //   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  //   const currentVideos = filteredVideos.slice(
  //     indexOfFirstVideo,
  //     indexOfLastVideo
  //   );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  // Function to handle forward pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle backward pagination
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full h-full px-5 ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h2" className="mb-5">
            Explore <span className="text-gold">MOJO News</span>
          </Text>
          <div className="w-full flex flex-wrap navsize:gap-10 navsize:justify-center justify-between items-center mb-[70px]">
            {/* Keyword Search Input */}
            <input
              type="text"
              className="w-[400px] p-[10px] rounded-[8px] border border-gold bg-secondary text-white font-poppins"
              placeholder="Keyword Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} // Update keyword state on input change
            />

            {/* Select Dropdown for Category */}
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

          {/* Display Video Thumbnails */}
          <div className="grid grid-cols-2 gap-5 mob:gap-0 mob:space-y-6 mob:grid-cols-1">
            {/* First two rows (2 images per row) */}
            {currentVideos.slice(0, 4).map((video) => (
              <div
                key={video.id}
                className="relative z-10 transition-transform duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(235,193,92,0.1)] rounded-b-[33px] rounded-t-[35px] to-black opacity-0 hover:opacity-100 transition-opacity duration-700 flex justify-center items-end">
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
                  className="w-full h-full"
                />
              </div>
            ))}

            {/* Third row (1 image in first column, 2 images in second column) */}
            <div className="grid grid-cols-2 gap-5 col-span-2 mob:grid-cols-1">
              {/* First column (1 large image) */}
              <div className="col-span-1">
                {currentVideos[4] && (
                  <div className="relative z-10 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(235,193,92,0.1)] rounded-b-[33px] rounded-t-[35px] to-black opacity-0 hover:opacity-100 transition-opacity duration-700 flex justify-center items-end">
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
                      className="w-full h-[301px]"
                    />
                  </div>
                )}
              </div>

              {/* Second column (2 stacked images) */}
              <div className="gap-5 flex mob:flex-col">
                {currentVideos.slice(5, 7).map((video) => (
                  <div
                    key={video.id}
                    className="relative z-10 transition-transform duration-700"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(235,193,92,0.1)] rounded-b-[33px] rounded-t-[35px] to-black opacity-0 hover:opacity-100 transition-opacity duration-700 flex justify-center items-end">
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
                      className="w-full h-[301px] rounded-lg max-w-[300px] mob:max-w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-[58px] mb-[200px]">
            <Image
              src={backarrow}
              alt={forwardarrow}
              onClick={handlePreviousPage}
              className={currentPage === 1 ? "" : "pagination-btn"}
            />

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "text-gold  font-poppins text-[20px] mx-[10px]"
                    : "text-white font-poppins text-[20px] mx-[10px]"
                }
              >
                {index + 1}
              </button>
            ))}
            <Image
              src={forwardarrow}
              alt={forwardarrow}
              onClick={handleNextPage}
              className={currentPage === totalPages ? "" : "pagination-btn"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
