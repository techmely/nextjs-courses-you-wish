export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="workspace-layout">
      <h1>Workspace Layout</h1>
      {children}
    </div>
  );
}
