import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen mt-22">{children}</main>
      <Footer />
    </>
  );
}
