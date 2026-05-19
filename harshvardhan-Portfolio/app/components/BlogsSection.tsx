import ProjectLines from "./ProjectLines";

export default function BlogsSection() {
  return (
    <div className="w-full border-b">
      <div className="innerContainer">
        <ProjectLines />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-2 h-[38vh] sm:border-r hover-bg2 transition ease-in">
            <div className="h-full flex flex-col">
              <div className="h-[72%] w-full bg3 border rounded-xl relative overflow-hidden flex items-center justify-center">
                <p className="text2 font2 text-center px-4">
                  Blog posts coming soon.
                </p>
              </div>
              <div className="h-[28%] flex flex-col items-start justify-center px-2 leading-none">
                <h2 className="text-xl font2 text1">
                  Writing about engineering, projects, and lessons learned.
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 h-[38vh] sm:border-l hover-bg2 transition ease-in">
            <div className="h-full flex flex-col">
              <div className="h-[72%] text2 w-full bg3 border rounded-xl relative flex items-center justify-center">
                Harshvardhan
              </div>
              <div className="h-[28%] flex flex-col items-start justify-center px-2 leading-none">
                <h2 className="text-xl font2 text1">
                  &quot;Before the words, there is the thinking.&quot;
                </h2>
                <h3 className="text2 tracking-tighter text-sm">
                  I am still in the beautiful middle of that.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
