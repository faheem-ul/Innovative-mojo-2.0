"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { storage2 } from "@/firebase";
import Text from "@/components/ui/Text";
import playbtn from "@/public/images/news/PlayCircle.png";

interface AudioPlayerProps {
  news: {
    videoUrl: string;
    thumbnail: string | StaticImageData;
    title: string;
  };
}

const AudioPlayerComponent: React.FC<AudioPlayerProps> = ({ news }) => {
  const [url, setUrl] = useState("");
  const [visible, setVisible] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const ref = storage2.child(`podcasts/${news.videoUrl}`);
        const audioUrl = await ref.getDownloadURL();
        setUrl(audioUrl);
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };
    fetchAudio();
  }, [news.videoUrl]);

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audioDuration = e.currentTarget.duration;
    const minutes = Math.floor(audioDuration / 60);
    const seconds = Math.floor(audioDuration % 60);
    setDuration(`${minutes}:${seconds.toString().padStart(2, "0")}`);
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  return (
    <div className="border border-gold rounded-[40px] py-[45px] mt-[90px] flex justify-center">
      <div className="max-w-[1038px] flex gap-6 flex-wrap justify-center px-5">
        <Image
          src={news.thumbnail}
          alt={news.title}
          className="w-[229px] h-[229px] rounded-[40px] object-cover"
        />
        <div className="flex gap-4">
          <Image
            src={playbtn}
            alt="Play"
            className="w-10 h-10 cursor-pointer"
            onClick={() => setVisible(!visible)}
          />
          <div className="w-full max-w-[594px]">
            <Text as="h3">{news.title}</Text>
            <Text className="text-[18px] mb-4">{duration}</Text>

            {visible && url && (
              <>
                <audio
                  ref={audioRef}
                  src={url}
                  onLoadedMetadata={handleLoadedMetadata}
                  style={{ display: "none" }}
                />
                <AudioPlayer
                  autoPlay={true}
                  src={url}
                  className="custom-audio-player"
                  onClickNext={handleForward}
                  onClickPrevious={handleBackward}
                  showSkipControls
                  showJumpControls={false}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerComponent;
