import { ArrowUpRight } from "lucide-react";
import Heading from "./layout/Heading";
import Projects from "./Projects";
import ProjectLines from "./ProjectLines";
import type { Project } from "../types/Project.types";
import Link from "next/link";
import { projects } from "../data/projects";

function toProjectCard(p: (typeof projects)[number]): Project {
  return {
    slug: p.slug,
    heading: p.heading,
    subheading: p.subheading,
    image: p.image,
  };
}

export default function ProjectsSection() {
  const [row1, row2] = (() => {
    const four = projects.slice(0, 4).map(toProjectCard);
    return [four.slice(0, 2), four.slice(2, 4)] as const;
  })();

  return (
    <div>
      <Heading name="Projects" />

      {/* Description */}
      <div className="w-full border-b border-[#FD3DB5]">
        <div className="innerContainer h-fit py-4 flex items-center justify-start px-4 font1 tracking-tighter text2 text-sm">
          <h3>
            A collection of projects I’ve worked on and contributed to.
          </h3>
        </div>
      </div>

      <ProjectLines />

      {/* Desktop - Row 1 */}
      <div className="hidden sm:block w-full border-b border-[#FD3DB5] h-fit">
        <Projects projectData={row1} />
      </div>

      {/* Mobile - Row 1 */}
      <div className="sm:hidden">
        <div className="w-full border-b border-[#FD3DB5] h-fit">
          <Projects projectData={[row1[0]]} />
        </div>

        <ProjectLines />

        <div className="w-full border-b border-[#FD3DB5] h-fit">
          <Projects projectData={[row1[1]]} />
        </div>
      </div>

      <ProjectLines />

      {/* Desktop - Row 2 */}
      <div className="hidden sm:block w-full border-b border-[#FD3DB5] h-fit">
        <Projects projectData={row2} />
      </div>

      {/* Mobile - Row 2 */}
      <div className="sm:hidden">
        <div className="w-full border-b border-[#FD3DB5] h-fit">
          <Projects projectData={[row2[0]]} />
        </div>

        <ProjectLines />

        <div className="w-full border-b border-[#FD3DB5] h-fit">
          <Projects projectData={[row2[1]]} />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-b border-[#FD3DB5]">
        <div className="innerContainer h-5 flex items-center justify-end px-4 py-3">
          <h5 className="text-sm text1 font2 tracking-tighter underline flex items-center gap-1 hover:!text-zinc-700 transition ease-in">
            <Link href="https://github.com/maiharsh?tab=repositories">
              More Projects on Github
            </Link>
            <ArrowUpRight size={14} />
          </h5>
        </div>
      </div>
    </div>
  );
}