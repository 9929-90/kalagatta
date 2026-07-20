import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, lead, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="section-head">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}
