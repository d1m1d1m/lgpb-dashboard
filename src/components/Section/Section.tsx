import { FC, PropsWithChildren } from "react";

type SectionProps = {
	className?: string;
};

const Section: FC<PropsWithChildren<SectionProps>> = ({
	children,
	className,
}) => {
	return <section className={className}>{children}</section>;
};

export default Section;
