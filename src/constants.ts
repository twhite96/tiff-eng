import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";
import IconHackerNews from "@/assets/icons/IconHackerNews.svg";
import IconCodeberg from "@/assets/icons/IconCodeberg.svg";
import IconForgejo from "@/assets/icons/IconForgejo.svg";
import IconLobsters from "@/assets/icons/IconsLobsters.svg";
import Path from "@/assets/icons/Path.svg";

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
    name: "Forgejo",
    href: "https://git.tifflabs.cfd",
    linkTitle: `${SITE.title} Forgejo`,
    icon: IconForgejo,
  },
  {
    name: "Codeberg",
    href: "https://codeberg.org/tiff",
    linkTitle: `${SITE.title} on Codeberg`,
    icon: IconCodeberg,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "Hacker News",
    href: "https://news.ycombinator.com/user?id=trw55",
    linkTitle: `${SITE.title} on Hacker News`,
    icon: IconHackerNews,
  },
  {
    name: "Lobsters",
    href: "https://lobste.rs/~tiff",
    linkTitle: `${SITE.title} on Lobsters`,
    icon: IconLobsters,
  },
  {
    name: "Mastodon",
    href: "https://hachyderm.io/@tiff",
    linkTitle: `${SITE.title} Mastodon`,
    icon: IconMastodon,
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
