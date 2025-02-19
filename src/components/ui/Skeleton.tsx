import React from "react";

import { cn } from "@/lib/utils";

interface SkeletonPropTypes {
  className?: string;
}

const Skeleton: React.FC<SkeletonPropTypes> = (props) => {
  const { className } = props;
  return (
    <div className={cn("h-6 animate-pulse bg-gray-300", className)} />
  );
};

export default Skeleton;
