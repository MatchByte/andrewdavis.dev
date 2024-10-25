import {SocialLinkId, type SocialLink} from './types';

export const SOCIAL_LINKS: Record<SocialLinkId, SocialLink> = {
  [SocialLinkId.Email]: {
    name: 'Email',
    id: SocialLinkId.Email,
    alt: 'Send Me and Email',
  },
};
