import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return <div className="mx-auto w-full px-3 md:w-11/12 md:px-0">{children}</div>;
}
