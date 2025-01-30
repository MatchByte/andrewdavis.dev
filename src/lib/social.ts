import emailIcon from "../images/home/social/email.svg";
import xIcon from "../images/home/social/x.svg";
import githubIcon from "../images/home/social/github.svg";
import linkedinIcon from "../images/home/social/linkedin.svg";
import { type SocialLink, SocialLinkId } from "./types";

export const SOCIAL_LINKS: Record<SocialLinkId, SocialLink> = {
  [SocialLinkId.Email]: {
    name: "Email",
    id: SocialLinkId.Email,
    url: "mailto:dynamicdebug@gmail.com",
    alt: "Send Me and Email",
    image: emailIcon,
  },
  [SocialLinkId.LinkedIn]: {
    name: "LinkedIn",
    id: SocialLinkId.LinkedIn,
    url: "https://www.linkedin.com/in/andrew-t-davis/",
    alt: "View my LinkedIn",
    image: linkedinIcon,
  },
  [SocialLinkId.GitHub]: {
    name: "GitHub",
    id: SocialLinkId.GitHub,
    url: "https://github.com/matchbyte",
    alt: "View my GitHub Profile",
    image: githubIcon,
  },
  [SocialLinkId.Twitter]: {
    name: "Twitter",
    id: SocialLinkId.Twitter,
    url: "https://x.com/booleanvalue1",
    alt: "View my Twitter Profile",
    image: xIcon,
  },
} as const;
