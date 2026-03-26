// SectionLabel.tsx — the green uppercase heading used at the top of every section
// e.g. "SKILLS", "PROJECTS", "ABOUT ME"
// Usage: <SectionLabel>Skills</SectionLabel>
//        <SectionLabel subtitle="Technologies I work with">Skills</SectionLabel>

type SectionLabelProps = {
  children:  React.ReactNode;
  subtitle?: string;           // Optional smaller text below the label
};

export default function SectionLabel({ children, subtitle }: SectionLabelProps) {
  return (
    <div className="mb-10">
      {/* The green uppercase label */}
      <h2 className="font-akshar text-2xl md:text-3xl font-semibold uppercase tracking-wider text-brand-green-light">
        {children}
      </h2>

      {/* Optional subtitle below */}
      {subtitle && (
        <p className="mt-1 text-sm text-brand-gray">
          {subtitle}
        </p>
      )}
    </div>
  );
}
