import { compose } from 'shared/utils';
import { withStore } from './withStore';
import { withTheme } from './withTheme';

export const withProviders = compose(withStore, withTheme);
