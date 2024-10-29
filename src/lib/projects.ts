import {ProjectId, type Project} from './types';

export const PROJECT_LIST: Record<ProjectId, Project> = {
  [ProjectId.ProjectOne]: {
    alt: 'Project One',
    description: 'Placeholder for project one',
    name: 'Project One',
    url: '#',
    id: ProjectId.ProjectOne,
  },
  [ProjectId.ProjectTwo]: {
    alt: 'Project One',
    description: 'Placeholder for project one',
    name: 'Project One',
    url: '#',
    id: ProjectId.ProjectTwo,
  },
  [ProjectId.ProjectThree]: {
    alt: 'Project One',
    description: 'Placeholder for project one',
    name: 'Project One',
    url: '#',
    id: ProjectId.ProjectThree,
  },
  [ProjectId.ProjectFour]: {
    alt: 'Project One',
    description: 'Placeholder for project one',
    name: 'Project One',
    url: '#',
    id: ProjectId.ProjectFour,
  },
} as const;
