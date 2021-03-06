import Raven from 'raven-js';

const sentry_key = 'c31ec560955211e6b9aa002590f38982';
const sentry_app = 'reduxtagram';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
