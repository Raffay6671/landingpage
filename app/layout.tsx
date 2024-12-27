import "./globals.css";

export const metadata = {
  title: "Bike Bliss | Ride with Passion",
  description: "Premium selection of bikes for the best riding experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#14121F] text-white">{children}</body>
    </html>
  );
}
