import Link from "next/link";
import Image from "next/image";
import ProjectLines from "./ProjectLines";

export default function BlogsSection() {
  return (
    <div className="w-full border-b">
      <div className="innerContainer">
        <ProjectLines />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-2 h-[38vh] sm:border-r hover-bg2 transition ease-in cursor-pointer">
            <Link
              href={`https://medium.com/@rhythmdoshi04/heres-how-i-run-multiple-backends-24x7-for-free-from-my-own-machine-cc70aca2c96e`}
              className="h-full"
              target="_blank" rel="noopener noreferrer"
            >
              <div className="h-[72%] w-full bg3 border rounded-xl relative overflow-hidden">
                <Image
                  src={"/blogs/b1.webp"}
                  alt="Project Banner"
                  fill
                  className="h-full w-full object-cover rounded-xl scale-120"
                />
              </div>
              <div className="h-[28%] flex flex-col items-start justify-center px-2 leading-none">
                <h2 className="text-xl font2 text1 hover:underline">
                  {
                    "Here's How I run multiple backends 24x7 for free from my own machine."
                  }
                </h2>
                <h3 className="flex items-center justify-center gap-2 pt-1">
                  {""}
                </h3>
              </div>
            </Link>
          </div>
          <div className="p-2 h-[38vh] sm:border-l hover-bg2 transition ease-in cursor-pointer">
            <Link
              href={`https://medium.com/@rhythmdoshi04/heres-how-i-run-multiple-backends-24x7-for-free-from-my-own-machine-cc70aca2c96e`}
              className="h-full"
            >
              <div className="h-[72%] text2 w-full bg3 border rounded-xl relative flex items-center justify-center">
                Rhythm Doshi
              </div>
              <div className="h-[28%] flex flex-col items-start justify-center px-2 leading-none">
                <h2 className="text-xl font2 text1 hover:underline">
                  &quot;Before the words, there is the thinking.&quot;
                </h2>
                <h3 className="text2 tracking-tighter text-sm hover:underline">
                  I am still in the beautiful middle of that.
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
        
    </div>
  );
}
