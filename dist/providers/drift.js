"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const domain = 'https://js.driftt.com';

/* eslint-disable */
const loadScript = () => {
  if (window.drift) return false;
  !function () {
    const t = window.driftt = window.drift = window.driftt || [];

    if (!t.init) {
      if (t.invoked) {
        return void (window.console && console.error && console.error('Drift snippet included twice.'));
      } //eslint-disable-next-line  @typescript-eslint/no-extra-semi


      ;
      t.invoked = !0, t.methods = ['identify', 'config', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on'], t.factory = function (e) {
        return function () {
          const n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }, t.methods.forEach(function (e) {
        t[e] = t.factory(e);
      }), t.load = function (t) {
        var _i$parentNode;

        const e = 3e5,
              n = Math.ceil(new Date() / e) * e,
              o = document.createElement('script');
        o.type = 'text/javascript', o.async = !0, o.crossOrigin = 'anonymous', o.src = 'https://js.driftt.com/include/' + n + '/' + t + '.js';
        const i = document.getElementsByTagName('script')[0];
        (_i$parentNode = i.parentNode) === null || _i$parentNode === void 0 ? void 0 : _i$parentNode.insertBefore(o, i);
      };
    }
  }();
  return true;
};
/* eslint-enable */


const load = ({
  providerKey,
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}) => {
  const loaded = loadScript(); // Continue as long as drift hasn’t already been initialised.

  if (loaded) {
    beforeInit();
    window.drift.load(providerKey);
    window.drift.SNIPPET_VERSION = '0.3.1';
    window.drift.on('ready', () => {
      setState('complete');
      onReady();
    });
  }

  return loaded;
};

const open = () => window.drift.on('ready', api => api.showWelcomeMessage());

var _default = {
  domain,
  load,
  open
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlcnMvZHJpZnQudHMiXSwibmFtZXMiOlsiZG9tYWluIiwibG9hZFNjcmlwdCIsIndpbmRvdyIsImRyaWZ0IiwidCIsImRyaWZ0dCIsImluaXQiLCJpbnZva2VkIiwiY29uc29sZSIsImVycm9yIiwibWV0aG9kcyIsImZhY3RvcnkiLCJlIiwibiIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwidW5zaGlmdCIsInB1c2giLCJmb3JFYWNoIiwibG9hZCIsIk1hdGgiLCJjZWlsIiwiRGF0ZSIsIm8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJjcm9zc09yaWdpbiIsInNyYyIsImkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJwcm92aWRlcktleSIsInNldFN0YXRlIiwiYmVmb3JlSW5pdCIsInVuZGVmaW5lZCIsIm9uUmVhZHkiLCJsb2FkZWQiLCJTTklQUEVUX1ZFUlNJT04iLCJvbiIsIm9wZW4iLCJhcGkiLCJzaG93V2VsY29tZU1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRyx1QkFBZjs7QUFXQTtBQUNBLE1BQU1DLFVBQVUsR0FBRyxNQUFlO0FBQ2hDLE1BQUlDLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQixPQUFPLEtBQVA7QUFFbEIsR0FBRSxZQUFXO0FBQ1gsVUFBTUMsQ0FBQyxHQUFJRixNQUFNLENBQUNHLE1BQVAsR0FBZ0JILE1BQU0sQ0FBQ0MsS0FBUCxHQUFlRCxNQUFNLENBQUNHLE1BQVAsSUFBaUIsRUFBM0Q7O0FBQ0EsUUFBSSxDQUFDRCxDQUFDLENBQUNFLElBQVAsRUFBYTtBQUNYLFVBQUlGLENBQUMsQ0FBQ0csT0FBTixFQUFlO0FBQ2IsZUFBTyxNQUNMTCxNQUFNLENBQUNNLE9BQVAsSUFDQUEsT0FBTyxDQUFDQyxLQURSLElBRUFELE9BQU8sQ0FB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aEIsRUFBMEJFLEdBQUQsSUFDdkJBLEdBQUcsQ0FBQ0Msa0JBQUosRUFERixDQURGOztlQUtlO0FBQ2IvQyxFQUFBQSxNQURhO0FBRWJzQixFQUFBQSxJQUZhO0FBR2J1QixFQUFBQTtBQUhhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBkb21haW4gPSAnaHR0cHM6Ly9qcy5kcmlmdHQuY29tJ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBkcmlmdDogYW55XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGRyaWZ0dDogYW55XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmNvbnN0IGxvYWRTY3JpcHQgPSAoKTogYm9vbGVhbiA9PiB7XG4gIGlmICh3aW5kb3cuZHJpZnQpIHJldHVybiBmYWxzZVxuXG4gICEoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdCA9ICh3aW5kb3cuZHJpZnR0ID0gd2luZG93LmRyaWZ0ID0gd2luZG93LmRyaWZ0dCB8fCBbXSlcbiAgICBpZiAoIXQuaW5pdCkge1xuICAgICAgaWYgKHQuaW52b2tlZCkge1xuICAgICAgICByZXR1cm4gdm9pZCAoXG4gICAgICAgICAgd2luZG93LmNvbnNvbGUgJiZcbiAgICAgICAgICBjb25zb2xlLmVycm9yICYmXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJpZnQgc25pcHBldCBpbmNsdWRlZCB0d2ljZS4nKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4dHJhLXNlbWlcbiAgICAgIDsodC5pbnZva2VkID0gITApLFxuICAgICAgICAodC5tZXRob2RzID0gW1xuICAgICAgICAgICdpZGVudGlmeScsXG4gICAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICAgJ3RyYWNrJyxcbiAgICAgICAgICAncmVzZXQnLFxuICAgICAgICAgICdkZWJ1ZycsXG4gICAgICAgICAgJ3Nob3cnLFxuICAgICAgICAgICdwaW5nJyxcbiAgICAgICAgICAncGFnZScsXG4gICAgICAgICAgJ2hpZGUnLFxuICAgICAgICAgICdvZmYnLFxuICAgICAgICAgICdvbidcbiAgICAgICAgXSksXG4gICAgICAgICh0LmZhY3RvcnkgPSBmdW5jdGlvbihlOiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgICAgcmV0dXJuIG4udW5zaGlmdChlKSwgdC5wdXNoKG4pLCB0XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdC5tZXRob2RzLmZvckVhY2goZnVuY3Rpb24oZTogYW55KSB7XG4gICAgICAgICAgdFtlXSA9IHQuZmFjdG9yeShlKVxuICAgICAgICB9KSxcbiAgICAgICAgKHQubG9hZCA9IGZ1bmN0aW9uKHQ6IGFueSkge1xuICAgICAgICAgIGNvbnN0IGUgPSAzZTUsXG4gICAgICAgICAgICBuID0gTWF0aC5jZWlsKChuZXcgRGF0ZSgpIGFzIGFueSkgLyBlKSAqIGUsXG4gICAgICAgICAgICBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgICAgICA7KG8udHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnKSxcbiAgICAgICAgICAgIChvLmFzeW5jID0gITApLFxuICAgICAgICAgICAgKG8uY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJyksXG4gICAgICAgICAgICAoby5zcmMgPSAnaHR0cHM6Ly9qcy5kcmlmdHQuY29tL2luY2x1ZGUvJyArIG4gKyAnLycgKyB0ICsgJy5qcycpXG4gICAgICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXVxuICAgICAgICAgIGkucGFyZW50Tm9kZT8uaW5zZXJ0QmVmb3JlKG8sIGkpXG4gICAgICAgIH0pXG4gICAgfVxuICB9KSgpXG5cbiAgcmV0dXJuIHRydWVcbn1cbi8qIGVzbGludC1lbmFibGUgKi9cblxuY29uc3QgbG9hZCA9ICh7XG4gIHByb3ZpZGVyS2V5LFxuICBzZXRTdGF0ZSxcbiAgYmVmb3JlSW5pdCA9ICgpID0+IHVuZGVmaW5lZCxcbiAgb25SZWFkeSA9ICgpID0+IHVuZGVmaW5lZFxufToge1xuICBwcm92aWRlcktleTogc3RyaW5nXG4gIHNldFN0YXRlOiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGJlZm9yZUluaXQ/OiAoKSA9PiB2b2lkXG4gIG9uUmVhZHk/OiAoKSA9PiB2b2lkXG59KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGxvYWRlZCA9IGxvYWRTY3JpcHQoKVxuXG4gIC8vIENvbnRpbnVlIGFzIGxvbmcgYXMgZHJpZnQgaGFzbuKAmXQgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkLlxuICBpZiAobG9hZGVkKSB7XG4gICAgYmVmb3JlSW5pdCgpXG4gICAgd2luZG93LmRyaWZ0LmxvYWQocHJvdmlkZXJLZXkpXG4gICAgd2luZG93LmRyaWZ0LlNOSVBQRVRfVkVSU0lPTiA9ICcwLjMuMSdcbiAgICB3aW5kb3cuZHJpZnQub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgc2V0U3RhdGUoJ2NvbXBsZXRlJylcbiAgICAgIG9uUmVhZHkoKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbG9hZGVkXG59XG5cbmNvbnN0IG9wZW4gPSAoKTogdm9pZCA9PlxuICB3aW5kb3cuZHJpZnQub24oJ3JlYWR5JywgKGFwaTogeyBzaG93V2VsY29tZU1lc3NhZ2U6ICgpID0+IHZvaWQgfSkgPT5cbiAgICBhcGkuc2hvd1dlbGNvbWVNZXNzYWdlKClcbiAgKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRvbWFpbixcbiAgbG9hZCxcbiAgb3BlblxufVxuIl19