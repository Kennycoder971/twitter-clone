import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className=" col-span-7 lg:col-span-5 border-x">
      <div className="flex justify-between items-center">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out active:scale-125 mr-5 mt-5  hover:rotate-180" />
      </div>

      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;
