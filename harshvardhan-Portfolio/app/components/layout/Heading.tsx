type HeadingProps = {
    name: string;
}

export default function Heading({ name } : HeadingProps) {
  return (
    <div className="w-full h-fit border-b">
      <div className="innerContainer px-4">
        <h1 className="text1 font2 text-3xl">{name}</h1>
      </div>
    </div>
  );
}
