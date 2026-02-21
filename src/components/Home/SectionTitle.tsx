interface SectionTitleProps {
  title: string;
  classes?: string;
}

export default function SectionTitle({ title, classes = "" }: SectionTitleProps): JSX.Element {
  return (
    <h1 className={`text-[26px] font-bold uppercase sm:text-[32px] md:text-[38px] lg:text-[42px] ${classes}`}>
      {title}
    </h1>
  );
}
