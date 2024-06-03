import React from "react";
import { Skeleton } from "./ui/skeleton";

const DetailSke = () => {
  return (
    <div className="md:grid md:grid-cols-2 items-center nd:h-full md:gap-5 gap-0 flex flex-col justify-center h-[91dvh]">
      <div className="col-span-1 w-full h-full flex flex-col items-center justify-center">
        <Skeleton className="md:h-[500px] h-[300px] w-full" />
      </div>
      <div className="w-full col-span-1 overflow-auto ">
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[250px]" />
          <div className="flex gap-1">
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <Skeleton className="h-4 w-[100px]" />
        </div>
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
};

export default DetailSke;
