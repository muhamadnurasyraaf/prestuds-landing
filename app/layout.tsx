import type { Metadata } from "next";
import "./globals.css";
import "./local-fonts.css";

export const metadata: Metadata = {
  title: { default: "Prestuds — Your semester, sorted", template: "%s | Prestuds" },
  description: "Plan classes, track deadlines, keep study materials close, and move through your semester with less stress.",
  metadataBase: new URL("https://prestuds.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
