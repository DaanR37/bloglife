import Footer from "./components/Footer";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://bloglife-daan-roelofs-projects.vercel.app/"),
  title: "BlogLife | Create and share your own blogs",
  description: "Blog post website for creating and posting personal blog posts",
  authors: {
    name: "Daan Roelofs",
    url: "https://bloglife-daan-roelofs-projects.vercel.app/",
  },
  applicationName: "BlogLife",
  // keywords: ['Next.js', 'React', 'JavaScript', 'Css', 'front-end', 'developer'],
  openGraph: {
    title: "BlogLife | Create and share your own blogs",
    description:
      "Blog post website for creating and posting personal blog posts",
    url: "https://bloglife-daan-roelofs-projects.vercel.app/",
    siteName: "BlogLife",
    type: "website",
    images: [
      {
        // url: "/opengraph-image.png",
        url:
          "https://bloglife-daan-roelofs-projects.vercel.app/opengraph-image.png",
        width: 450,
        height: 450,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogLife | Create and share your own blogs",
    description:
      "Blog post website for creating and posting personal blog posts",
    images: [
      "https://bloglife-daan-roelofs-projects.vercel.app/opengraph-image.png",
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-backGround`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
