import emailIcon from '../images/home/social/email.svg';
import githubIcon from '../images/home/social/github.svg';
import linkedinIcon from '../images/home/social/linkedin.svg';
import {SocialLinkId, type SocialLink} from './types';

export const SOCIAL_LINKS: Record<SocialLinkId, SocialLink> = {
  [SocialLinkId.Email]: {
    name: 'Email',
    id: SocialLinkId.Email,
    url: 'mailto:dynamicdebug@gmail.com',
    alt: 'Send Me and Email',
    image: emailIcon,
  },
  [SocialLinkId.LinkedIn]: {
    name: 'LinkedIn',
    id: SocialLinkId.LinkedIn,
    url: '',
    alt: 'View my LinkedIn',
    image: linkedinIcon,
  },
  [SocialLinkId.GitHub]: {
    name: 'GitHub',
    id: SocialLinkId.GitHub,
    url: 'https://github.com/matchbyte',
    alt: 'View my GitHub Profile',
    image: githubIcon,
  },
} as const;
