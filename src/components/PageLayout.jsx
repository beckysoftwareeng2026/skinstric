function PageLayout({ children, className = "" }) {
  return (
    <main
      className={`min-h-screen overflow-hidden bg-[#f4f4f2] text-black animate-fade-slide-up ${className}`}
    >
      {children}
    </main>
  );
}

export default PageLayout;
