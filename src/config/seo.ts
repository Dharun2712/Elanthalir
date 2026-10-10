import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.fullName,
      locale: "ta_IN",
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const defaultMetadata: Metadata = createMetadata({
  title: `${siteConfig.fullName} | மகளிர் கடன் வழிகாட்டுதல் | கரூர்`,
  description: `${siteConfig.description} மகளிர் கடன் கரூர், பெண்களுக்கான கடன் திட்டங்கள், சுயஉதவிக் குழு கடன்.`,
});
