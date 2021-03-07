import { LessThanOrEqual, MoreThanOrEqual, Between } from 'typeorm';
import { format } from 'date-fns';

export const MoreThanOrEqualDate = (date: Date) =>
  MoreThanOrEqual(format(date, 'yyyy-LL-dd 00:00:00'));

export const LessThanOrEqualDate = (date: Date) =>
  LessThanOrEqual(format(date, 'yyyy-LL-dd 00:00:00'));

export const BetweenDate = (start_date: Date, end_date: Date) =>
  Between(
    format(start_date, 'yyyy-LL-dd 00:00:00'),
    format(end_date, 'yyyy-LL-dd 00:00:00')
  );
