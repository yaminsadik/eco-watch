interface SectionTitleProps {
  title: string;
  classes?: string;
}

export default function SectionTitle({ title, classes = "" }: SectionTitleProps): JSX.Element {
  return <h1 className={`text-[30px] font-bold uppercase md:text-[40px] ${classes}`}>{title}</h1>;
}
