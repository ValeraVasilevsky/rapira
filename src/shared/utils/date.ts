import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const prepareDate = (date: Date): string => {
  return format(new Date(date), 'd MMM', { locale: ru });
};
