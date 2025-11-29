import Link from "next/link";
import clsx from "clsx";
import {
  BsInstagram,
  BsTikTok,
  BsWhatsapp,
  BsTelegram,
  BsYoutube,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Instagram",
    href: "https://instagram.com/",
    icon: BsInstagram,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/",
    icon: BsTikTok,
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/971521179533",
    icon: BsWhatsapp,
  },
  {
    title: "Telegram",
    href: "https://t.me/",
    icon: BsTelegram,
  },
  {
    title: "YouTube",
    href: "https://youtube.com/",
    icon: BsYoutube,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
            target="_blank"
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
