import Image from "next/image";
import Header from "./_components/Header";
import { SubHeader } from "./_components/SubHeader";
import Templates from "./_components/Templates";
import CopyRight from "./_components/CopyRight";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-[2px] py-[14px] bg-[#f4f3f4] flex flex-row gap-[24px]">
      {/* contact */}
      <div className="flex flex-col gap-[24px] flex-1">
        {/* header */}
        <div className="flex flex-col gap-[10px] ">
          <Header />
          <SubHeader />
        </div>
        <Templates />
        <CopyRight />
      </div>
      {/* sidebar */}
      <Sidebar />
    </div>
  );
}
