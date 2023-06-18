import Footer from "@/components/frontend/navigation/footer";
import Toolbar from "@/components/frontend/navigation/toolbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Toolbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
