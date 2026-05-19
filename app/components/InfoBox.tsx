import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Mars,
  FileText,
} from "lucide-react";
import IconBox from "./ui/IconBox";
import CopyButton from "./ui/CopyButton";
import TimeClock from "./ui/Clock";

export default function InfoBox() {
  return (
    <>
      <div className="innerContainer min-h-[25vh] p-4 py-6 font1 tracking-tighter grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2 group">
            <IconBox>
              <Mail className="size-3.5" />
            </IconBox>
            <a
              href="mailto:harshvardhan1813@gmail.com?subject=Let's connect&body=Hi Harshvardhan,"
              className="hover:underline"
            >
              harshvardhan1813@gmail.com
            </a>
            <CopyButton text="harshvardhan1813@gmail.com" />
          </div>

          <div className="flex items-center gap-2 group">
            <IconBox>
              <Phone className="size-3.5" />
            </IconBox>
            <a href="tel:+91-9398303655" className="hover:underline">
              +91-9398303655
            </a>
            <CopyButton text="+91-9398303655" />
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <MapPin className="size-3.5" />
            </IconBox>
            <a
              href="https://maps.app.goo.gl/crvYA9anvmkCzwGb7"
              className="hover:underline"
            >
              Guntur, India
            </a>
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <Clock className="size-3.5" />
            </IconBox>
            <div className="hover:underline">
              <TimeClock />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center md:items-start mt-4 md:mt-0">
          <div className="flex items-center gap-2 relative">
            <IconBox>
              <FileText className="size-3.5" />
            </IconBox>
            {/* <a href="/Rhythmdoshi.pdf" download className="hover:underline"> */}
            <a href="https://drive.google.com/file/d/1v2K06l9s2GhwCTsx6BLrzpaIRZtiJ7vW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Resume
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IconBox>
              <Mars className="size-3.5" />
            </IconBox>
            <h2>He/him</h2>
          </div>
     
        </div>
      </div>
    </>
  );
}
