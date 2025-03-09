export const SITE = {
  website: "https://tiff.engineer/", // replace this with your deployed domain
  author: "tiff w",
  profile: "https://about.tiff.engineer/",
  desc: "A software blog by someone named tiff.",
  title: "tiff on software",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;
