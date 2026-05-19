const stack = [
  "typescript",
  "javascript",
  "java",
  "react",
  "nextjs",
  "nodejs",
  "express",
  "tailwindcss",
  "redux",
  "mysql",
  "pg",
  "mongodb",
  "redis",
  "shadcn-ui",
  "postman",
  "cursor",
  'cloudflare-workers',
  "hono",
];

const needsBg = ["nextjs", "express", "cursor", "shadcn-ui"];

export default function StackBox() {
  return (
    <div className="innerContainer p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-6 place-items-center">
        {stack.map((tech) => (
          <div key={tech} className="relative group">
            {/* Icon */}
            <div
              className={`
                size-11 flex items-center justify-center rounded-xl
                ${needsBg.includes(tech) ? "dark:bg-white" : ""}
              `}
            >
              <img
                src={`/techstack/${tech}.svg`}
                className="size-10 rounded-md"
                alt={tech}
              />
            </div>

            {/* Tooltip */}
            <div
              className="
  absolute -top-10 left-1/2 -translate-x-1/2
  opacity-0 group-hover:opacity-100
  transition-all duration-200
  pointer-events-none
"
            >
              <div className="tooltip text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md">
                {tech}
              </div>

              <div className="tooltip-arrow w-2 h-2 rotate-45 absolute left-1/2 -translate-x-1/2 top-full -mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
