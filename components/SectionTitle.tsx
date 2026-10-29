export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mx-auto mt-3 max-w-xl text-muted">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand to-brand-2" />
    </div>
  );
}
