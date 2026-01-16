import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
