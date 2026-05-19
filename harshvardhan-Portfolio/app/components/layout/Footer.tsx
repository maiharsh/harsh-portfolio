import RotatingText from "../ui/RotatingText";

export default function Footer() {
  const texts1 = [
    "Seeking the right opportunity. Let's talk.",
    "Open to work and excited to contribute.",
    "Ready to build, learn, and grow with a great team.",
  ];

  const texts2 = [
    "Always",
    "learning,",
    "creating,",
    "experimenting,",
    "and building",
    "something",
    "new.",
  ];

  return (
    <footer className="w-full h-[30vh] border-b">
      <div className="innerContainer h-full flex flex-col md:flex-row justify-between md:items-end p-4 py-8 md:pt-4">

        {/* rotating texts — top on mobile, right-bottom on desktop */}
        <div className="flex flex-col items-center md:items-end justify-between md:h-full w-full md:w-1/2 md:pt-4 md:order-2">
          <RotatingText texts={texts1} align="center" />
          <div className="hidden md:block">
            <RotatingText texts={texts2} />
          </div>
        </div>

        {/* footer links — bottom on mobile, left-bottom on desktop */}
        <div className="flex flex-col items-center md:items-start md:order-1">
          <a href="https://github.com/maiharsh" className="text-xl font2 text2 underline hover:!text-zinc-700 transition">Harshvardhan</a>
          <a href="https://github.com/maiharsh" target="_blank" rel="noopener noreferrer" className="hover:!text-zinc-700 transition text-sm font1 tracking-tight text2">Github</a>
          <a href="https://www.linkedin.com/in/harshvardhan-reddy-392257373/" target="_blank" rel="noopener noreferrer" className="hover:!text-zinc-700 transition text-sm font1 tracking-tight text2">Linkedin</a>
          <a href="tel:+91-9398303655" className="text-sm font1 tracking-tight text2 hover:!text-zinc-700 transition">+91-9398303655</a>
        </div>

      </div>
    </footer>
  );
}