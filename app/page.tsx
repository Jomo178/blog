import MainNavbar from "@/components/main-nav";
import MobileNavbar from "@/components/mobile-nav";

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            {/* <MainNavbar /> */}
            <MobileNavbar />
          </div>
        </header>
      </div>
    </>
  );
}
