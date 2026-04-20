import NavHeader from "@/components/blocks/nav-header";

function Navbar() {
  return (
    <header className="pointer-events-none flex items-center justify-center px-3 pt-4 sm:px-6 sm:pt-5 md:pt-6">
      <div className="pointer-events-auto">
        <NavHeader />
      </div>
    </header>
  );
}

export { Navbar };
