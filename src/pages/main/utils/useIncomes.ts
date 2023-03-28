import { useMemo } from 'react';
import { round } from 'shared/utils';

export type IncomesType = {
  annual: number;
  monthly: number;
  weekly: number;
  daily: number;
};

type useIncomesParams = {
  investment: number;
  APR: number;
  max: number;
  roundPlaces?: number;
};

export const useIncomes = ({
  investment,
  APR,
  max,
  roundPlaces = 2,
}: useIncomesParams) => {
  investment = investment > max ? max : investment;
  APR = APR / 100;

  return useMemo(() => {
    const incomes = {
      annual: investment * APR,
      monthly: (31 * APR * investment) / 365,
      weekly: (7 * APR * investment) / 365,
      daily: (APR * investment) / 365,
    };

    return Object.entries(incomes).reduce<IncomesType>(function (
      total,
      [key, value]
    ) {
      total[key as keyof IncomesType] = round(value, roundPlaces);
      return total;
    },
    {} as IncomesType);
  }, [investment]);
};
