import useBillBoard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {
  const { data } = useBillBoard();

  console.log(useBillBoard());

  return (
    <div className="relative h-[56.25vw]">
      <video
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}></video>
    </div>
  );
};

export default Billboard;
