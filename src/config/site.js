export function constructMetadata({
  title = "Nexa Commerce",
  description = "Nexa Commerce is a performance-driven e-commerce ecosystem based in Dubai, building and scaling digital brands through structured systems and precise execution.",
  image = "/nexa-og.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://nexacommerce.vercel.app/"),
    themeColor: "#000",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
