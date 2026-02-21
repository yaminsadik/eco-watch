interface SectionTitleProps {
  title: string;
  classes?: string;
}

export default function SectionTitle({ title, classes = "" }: SectionTitleProps): JSX.Element {
  return (
    <div className={`flex flex-col items-center ${classes}`}>
      <h1 className="text-[26px] font-bold uppercase sm:text-[32px] md:text-[38px] lg:text-[42px]">
        {title}
      </h1>
      <div className="mt-3 h-1 w-12 rounded-full bg-green-500 sm:w-16" />
    </div>
  );
}
