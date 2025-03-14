import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";
import IconReddit from "@/assets/icons/IconReddit.svg";
import IconHackerNews from "@/assets/icons/IconHackerNews.svg";
import IconPayPal from "@/assets/icons/IconPayPal.svg";
import IconCashapp from "@/assets/icons/IconCashapp.svg";

import { SITE } from "@/config";

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/twhite96",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "Reddit",
    href: "https://reddit.com",
    linkTitle: `${SITE.title} on Reddit`,
    icon: IconReddit,
  },
  {
    name: "Hacker News",
    href: "https://news.ycombinator.com/user?id=trw55",
    linkTitle: `${SITE.title} on Hacker News`,
    icon: IconHackerNews,
  },
  {
    name: "Mastodon",
    href: "https://hachyderm.io/@tiff",
    linkTitle: `${SITE.title} Mastodon`,
    icon: IconMastodon,
  },
  {
    name: "CashApp",
    href: "https://cash.app/$tiffanywhitedev",
    linkTitle: `${SITE.title} on CashApp`,
    icon: IconCashapp,
  },
  {
    name: "PayPal",
    href: "https://www.paypal.me/tiffsysadmin",
    linkTitle: `${SITE.title} on PayPal`,
    icon: IconPayPal,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
  {
    name: "Bluesky",
    href: `https://bsky.app/intent/compose?{text}`,
    linkTitle: `Share this post on Bluesky`,
    icon: IconBluesky,
  },
] as const;
