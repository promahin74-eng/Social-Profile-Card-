import { isFirebaseConfigured } from './firebase';

export const authProviders = ['Google', 'Email', 'Anonymous guest mode'];

export function getAuthStatus() {
  return isFirebaseConfigured ? 'configured' : 'needs-env';
}
