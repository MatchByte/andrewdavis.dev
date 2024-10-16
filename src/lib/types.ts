import type { HTMLAttributes } from 'astro/types';

export enum SocialLinkId {
  GitHub = 'GitHub',
  Email = 'EMAIL',
  LinkedIn = 'LINKED_IN',
  Twitter = 'TWITTER',
}

export interface SocialLink {
  readonly id: SocialLinkId;
  readonly url: string;
  readonly name: string;
  readonly alt: string;
  readonly image: ImageMetadata;
}

export enum WorkEntryId {
  DMWDirect = 'DMW_DIRECT',
}

export interface WorkEntry {
  readonly id: WorkEntryId;
  readonly name: string;
  readonly role: string;
  readonly startMonth: string;
  readonly endMonth: string | null;
  readonly endYear: string | null;
  readonly image: ImageMetadata;
  readonly alt: string;
  readonly url?: string;
}

export enum ProjectId {
  ProjectOne = 'PROJECT_ONE',
  ProjectTwo = 'PROJECT_TWO',
  ProjectThree = 'PROJECT_THREE',
  ProjectFour = 'PROJECT_FOUR',
}

export interface Project {
  readonly id: ProjectId;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  // preview of project LP
  readonly screenshot: ImageMetadata;
  // avatar theme for project
  readonly avatar?: ImageMetadata;
  readonly alt: string;
}

export interface FlexProps extends HTMLAttributes<'div'> {
  readonly gap: number | { mobile: number; desktop: number };
  readonly wrap?: boolean;
  readonly align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  readonly justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'stretch'
    | 'evenly';
  readonly flex?: string | number | boolean;
}