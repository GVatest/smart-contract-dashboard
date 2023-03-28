import { toast } from 'wc-toast';

export const error = (msg?: string) => {
  msg = msg ? msg : '';
  toast.error(msg);
};

export const success = (msg?: string) => {
  msg = msg ? msg : '';
  toast.success(msg);
};
