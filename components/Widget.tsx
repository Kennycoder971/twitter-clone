import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widget() {
  return (
    <aside className="px-2 mt-2 col-span-2 hidden lg:inline">
      <div className="mt-2 flex items-center space-x-2 bg-gray-100 p-3 mb-3 rounded-full">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter "
          className="bg-transparent outline-none flex-1"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="MajidOukacha"
        options={{ height: 1000 }}
      />
    </aside>
  );
}
export default Widget;
