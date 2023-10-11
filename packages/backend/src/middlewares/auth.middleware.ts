import passport from '../config/passport';

export const authenticate = (strategy: string) =>
  passport.authenticate(strategy, { session: false });
