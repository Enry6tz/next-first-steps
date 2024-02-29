import { Navbar } from "@/components";

export default function LayoutPages({ children}: { children: React.ReactNode;}) {
  return (
    <div>
        <Navbar />
    {children}
    </div>
  );
}