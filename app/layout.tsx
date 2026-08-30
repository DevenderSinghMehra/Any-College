import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/src/components/NavBar/NavBar";
import { StoreProvider } from "@/src/store/StoreProvider";

export const metadata: Metadata = {
  title: "Any College",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <NavBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
