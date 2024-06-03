import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeProduct = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Skeleton className="h-[150px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default SkeProduct;
