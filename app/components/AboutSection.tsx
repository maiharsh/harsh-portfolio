import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <div className="innerContainer h-full px-4 text-[15px]">
        <div className="flex flex-col gap-4 font1 tracking-tighter py-4 text1">
          <ul className="list-disc pl-5 flex flex-col gap-4 md:gap-2 marker:text-zinc-300">
            <li>
            Second-year full-stack developer who enjoys building things for the
              web with strong attention to small details.
            </li>
            <li>
              Experienced with{" "}
              <span className="font-medium">
                Next.js, React, Express, Node.js, MongoDB ,TypeScript{" "}
              </span>
              and modern full-stack technologies, focused on creating
              high-quality, user-centric web applications.
            </li>

            <li>
              Passionate about exploring new technologies and turning ideas into
              reality through polished personal projects.
            </li>

            <li>
              <span className="font-medium text-yellow-400">Highlights</span>
              

              <ul className="list-disc pl-6 mt-2 flex flex-col gap-2 marker:text-zinc-300">
                <li>
                   SWEeyam Hackathon —{" "}
                  <span className="font-medium underline">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://github.com/maiharsh/Business-Analysis-Agent"
                      }
                      className="text1"
                    >
                      Business Analysis Agent
                    </Link>
                  </span>{" "}
                  (36hr Hackathon)
                </li>
                <li>
                  Solved{" "}
                  <span className="font-medium underline">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://leetcode.com/u/harshvardhan018/"}
                      className="text1"
                    >
                      200+ DSA problems
                    </Link>
                  </span>{" "}
                  (and counting, because it&apos;s fun)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
