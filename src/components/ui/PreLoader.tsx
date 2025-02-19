import React from "react";

import Spinner from "./Spinner";

const PreLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Spinner />
    </div>
  );
};

export default PreLoader;
