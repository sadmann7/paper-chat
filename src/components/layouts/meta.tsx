import Head from "next/head"

type MetaProps = {
  title?: string
  description?: string
  image?: string
  keywords?: string
}

const Meta = ({
  title = "ChatWithPDF",
  description = "Chat with your PDF in real time.",
  image = "https://paperchat.vercel.app/api/og?title=ChatWithPDF&description=Chat%20with%20your%20PDF%20in%20real%20time.",
  keywords = "Chat, PDF, Docs, Real-time, Real-time Chat, Chat PDF, ChatWithPDF, Chat with PDF, Chat with data",
}: MetaProps) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
