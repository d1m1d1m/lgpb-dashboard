import { FC, PropsWithChildren } from "react";

type SectionProps = {
    className?: string
};

const Section: FC<PropsWithChildren<SectionProps>> = ({children, className}) => {
    return(
        <section className={`w-full h-full px-12 py-10 ${className}`}>
            {children}
        </section>
    );
};

export default Section;