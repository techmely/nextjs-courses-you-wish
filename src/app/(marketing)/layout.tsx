export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-layout">
      <h1>Marketing Layout</h1>
      {children}
    </div>
  );
}
