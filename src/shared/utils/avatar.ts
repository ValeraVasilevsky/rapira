import { faker } from '@faker-js/faker';

export const generateAvatar = (): string => faker.image.avatar();
