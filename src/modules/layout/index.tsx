import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {title ||
            "Give Aid: Empowering Giving - Donate to Fundraisers & Organizations"}
        </title>
        <meta
          name="description"
          content="Discover a seamless way to support numerous charitable causes with Give Aid. Explore and give Sadaqah to a wide array of trusted organizations and fundraisers, simplifying the process of making a meaningful difference in the Ummah"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="overflow-x-hidden relative">
          <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
