import React from "react";

import NewsSinglePage from "@/components/news-display";

type Params = Promise<{ newsId: string }>;
const NewsDisplay = async ({ params }: { params: Params }) => {
  const { newsId } = await params;
  return <NewsSinglePage params={{ newsId }} />;
};

export default NewsDisplay;
