import Footer from "@/components/footer"
import Header from "@/components/header"
import Head from "next/head"

export default function Layout({ children, MetaDesc, metaKeyword, metaTitle }) {
    return (
        <div>
            <Head>
                <title>Learn NextJs - {metaTitle || "Page" }</title>
                <meta name="description" content={MetaDesc || "Portfolio Website"} />
                <meta name="keyword" content={metaKeyword} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}