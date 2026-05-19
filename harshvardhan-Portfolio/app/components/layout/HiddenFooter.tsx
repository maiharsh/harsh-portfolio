import RotatingText from "../ui/RotatingText";

export default function HiddenFooter() {
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
    <div className="md:hidden">
      <div className="innerContainer flex items-center justify-center py-4">
        <RotatingText texts={texts2} align="center" />
      </div>
    </div>
  );
}
