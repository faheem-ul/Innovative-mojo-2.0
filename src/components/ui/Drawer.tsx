import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import Text from "./Text";
import Button from "./Button";
import { cn } from "@/lib/utils";

import crossSvg from "@/public/images/new-dashboard/Close.svg";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  drawerTitle?: string;
  mt?: string;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  className,
  children,
  drawerTitle,
  mt,
}) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed right-0 top-0 z-50 h-full w-full bg-black opacity-70"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Desktop Drawer */}
      <div
        className={twMerge(
          `no-scrollbar fixed right-0 top-0 z-[999] hidden h-full w-[710px] transform overflow-scroll bg-[#F2F2F2] transition-transform duration-500 ease-in-out md:block ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`,
          className,
        )}
      >
        {/* Drawer Close Button */}
        <Button
          variant="gray"
          className="absolute mt-10 flex justify-start border-none py-0"
          onClick={onClose}
        >
          <Image src={crossSvg} alt="closeIcon" />
        </Button>
        {/* </div> */}

        {/* Drawer content */}
        <div
          className={cn(
            "mx-auto flex h-full max-w-[450px] flex-col items-center justify-center pt-[30px] mob:h-auto",
            mt,
          )}
        >
          <div className="w-full pb-4 text-left mob:px-[25px]">
            <Text className="font-helvetica text-[42px] font-medium uppercase leading-[35px] text-primary mob:text-[38px] mob:leading-[31px]">
              {drawerTitle}
            </Text>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
