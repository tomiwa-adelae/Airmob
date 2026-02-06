import React from "react";
import { Hero } from "./_components/Hero";
import { NewsGrid } from "./_components/NewsGrid";
import { NewsSubscription } from "./_components/NewsSubscription";

const page = () => {
  return (
    <div>
      <Hero />
      <NewsGrid />
      <NewsSubscription />
    </div>
  );
};

export default page;
