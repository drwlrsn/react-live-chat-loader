import waitForLoad from "../utils/waitForLoad";
export const domain = 'js.hs-scripts.com';

const loadScript = hsId => {
  // Detect the provider is already loaded and return early
  console.debug({
    loadScript: window.HubSpotConversations
  });

  if (window.HubSpotConversations) {
    return false;
  }

  (function loadHubSpotSDK(d, s, id) {
    // fetch customerchat.js
    const fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    } //eslint-disable-next-line @typescript-eslint/no-explicit-any


    const js = d.createElement(s);
    js.id = id;
    js.src = `https://${domain}/${hsId}.js`;
    js.type = 'text/javascript';
    js.async = 1;
    js.defer = 1;

    if (fjs) {
      var _fjs$parentNode;

      (_fjs$parentNode = fjs.parentNode) === null || _fjs$parentNode === void 0 ? void 0 : _fjs$parentNode.insertBefore(js, fjs);
    } else {
      d.body.appendChild(js);
    }
  })(window.document, 'script', 'hs-script-loader');

  return true;
};

const load = ({
  providerKey,
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}) => {
  window.hsConversationsOnReady = [() => {
    window.HubSpotConversations.widget.load();
    console.debug({
      hsConversationsOnReady: 'ready',
      widgetStatus: window.HubSpotConversations.widget.status()
    });
  }];
  const loaded = loadScript(providerKey);

  if (loaded) {
    beforeInit();
    waitForLoad(() => {
      var _window$HubSpotConver;

      console.debug({
        waitForLoad: {
          HubSpotConversations: window.HubSpotConversations,
          widget: (_window$HubSpotConver = window.HubSpotConversations) === null || _window$HubSpotConver === void 0 ? void 0 : _window$HubSpotConver.widget
        }
      });
      return Boolean(window.HubSpotConversations && window.HubSpotConversations.widget && window.HubSpotConversations.widget.status().loaded);
    }, // Allow intercom to complete loading before removing fake widget
    () => {
      console.debug({
        loadComplete: window.HubSpotConversations,
        widgetStatus: window.HubSpotConversations.widget.status()
      });
      window.HubSpotConversations.widget.open();
      setState('complete');
      onReady();
      console.debug({
        widgetStatusAfterTimeout: window.HubSpotConversations.widget.status()
      });
    });
  }

  return loaded;
};

const open = () => {
  console.debug({
    open: 'called'
  });
  window.HubSpotConversations && window.HubSpotConversations.widget && !window.HubSpotConversations.widget.status().loaded && window.HubSpotConversations.widget.load();
  return window.HubSpotConversations && window.HubSpotConversations.widget && window.HubSpotConversations.widget.open();
}; // Open provider


const close = () => window.HubSpotConversations.widget.close(); // Close provider


export default {
  load,
  open,
  close,
  domain
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlcnMvaHViU3BvdC50cyJdLCJuYW1lcyI6WyJ3YWl0Rm9yTG9hZCIsImRvbWFpbiIsImxvYWRTY3JpcHQiLCJoc0lkIiwiY29uc29sZSIsImRlYnVnIiwid2luZG93IiwiSHViU3BvdENvbnZlcnNhdGlvbnMiLCJsb2FkSHViU3BvdFNESyIsImQiLCJzIiwiaWQiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRCeUlkIiwianMiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwidHlwZSIsImFzeW5jIiwiZGVmZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9jdW1lbnQiLCJsb2FkIiwicHJvdmlkZXJLZXkiLCJzZXRTdGF0ZSIsImJlZm9yZUluaXQiLCJ1bmRlZmluZWQiLCJvblJlYWR5IiwiaHNDb252ZXJzYXRpb25zT25SZWFkeSIsIndpZGdldCIsIndpZGdldFN0YXR1cyIsInN0YXR1cyIsImxvYWRlZCIsIkJvb2xlYW4iLCJsb2FkQ29tcGxldGUiLCJvcGVuIiwid2lkZ2V0U3RhdHVzQWZ0ZXJUaW1lb3V0IiwiY2xvc2UiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLFdBQVA7QUFFQSxPQUFPLE1BQU1DLE1BQU0sR0FBRyxtQkFBZjs7QUFZUCxNQUFNQyxVQUFVLEdBQUlDLElBQUQsSUFBa0I7QUFDbkM7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWM7QUFBRUgsSUFBQUEsVUFBVSxFQUFFSSxNQUFNLENBQUNDO0FBQXJCLEdBQWQ7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDQyxvQkFBWCxFQUFpQztBQUMvQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxHQUFDLFNBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCQyxDQUEzQixFQUE4QkMsRUFBOUIsRUFBa0M7QUFDakM7QUFDQSxVQUFNQyxHQUFHLEdBQUdILENBQUMsQ0FBQ0ksb0JBQUYsQ0FBdUJI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UUFBQUEsd0JBQXdCLEVBQUVsQyxNQUFNLENBQUNDLG9CQUFQLENBQTRCMEIsTUFBNUIsQ0FBbUNFLE1BQW5DO0FBRGQsT0FBZDtBQUdELEtBMUJRLENBQVg7QUE0QkQ7O0FBQ0QsU0FBT0MsTUFBUDtBQUNELENBdEREOztBQXdEQSxNQUFNRyxJQUFJLEdBQUcsTUFBZTtBQUMxQm5DLEVBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjO0FBQUVrQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFkO0FBQ0FqQyxFQUFBQSxNQUFNLENBQUNDLG9CQUFQLElBQ0VELE1BQU0sQ0FBQ0Msb0JBQVAsQ0FBNEIwQixNQUQ5QixJQUVFLENBQUMzQixNQUFNLENBQUNDLG9CQUFQLENBQTRCMEIsTUFBNUIsQ0FBbUNFLE1BQW5DLEdBQTRDQyxNQUYvQyxJQUdFOUIsTUFBTSxDQUFDQyxvQkFBUCxDQUE0QjBCLE1BQTVCLENBQW1DUCxJQUFuQyxFQUhGO0FBS0EsU0FDRXBCLE1BQU0sQ0FBQ0Msb0JBQVAsSUFDQUQsTUFBTSxDQUFDQyxvQkFBUCxDQUE0QjBCLE1BRDVCLElBRUEzQixNQUFNLENBQUNDLG9CQUFQLENBQTRCMEIsTUFBNUIsQ0FBbUNNLElBQW5DLEVBSEY7QUFLRCxDQVpELEMsQ0FZRTs7O0FBQ0YsTUFBTUUsS0FBSyxHQUFHLE1BQWVuQyxNQUFNLENBQUNDLG9CQUFQLENBQTRCMEIsTUFBNUIsQ0FBbUNRLEtBQW5DLEVBQTdCLEMsQ0FBd0U7OztBQUV4RSxlQUFlO0FBQ2JmLEVBQUFBLElBRGE7QUFFYmEsRUFBQUEsSUFGYTtBQUdiRSxFQUFBQSxLQUhhO0FBSWJ4QyxFQUFBQTtBQUphLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHdhaXRGb3JMb2FkIGZyb20gJy4uL3V0aWxzL3dhaXRGb3JMb2FkJ1xuXG5leHBvcnQgY29uc3QgZG9tYWluID0gJ2pzLmhzLXNjcmlwdHMuY29tJ1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgSHViU3BvdENvbnZlcnNhdGlvbnM6IGFueVxuICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBoc0NvbnZlcnNhdGlvbnNTZXR0aW5nczogYW55XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGhzQ29udmVyc2F0aW9uc09uUmVhZHk6IGFueVxuICB9XG59XG5cbmNvbnN0IGxvYWRTY3JpcHQgPSAoaHNJZDogc3RyaW5nKSA9PiB7XG4gIC8vIERldGVjdCB0aGUgcHJvdmlkZXIgaXMgYWxyZWFkeSBsb2FkZWQgYW5kIHJldHVybiBlYXJseVxuICBjb25zb2xlLmRlYnVnKHsgbG9hZFNjcmlwdDogd2luZG93Lkh1YlNwb3RDb252ZXJzYXRpb25zIH0pXG4gIGlmICh3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAoZnVuY3Rpb24gbG9hZEh1YlNwb3RTREsoZCwgcywgaWQpIHtcbiAgICAvLyBmZXRjaCBjdXN0b21lcmNoYXQuanNcbiAgICBjb25zdCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdXG4gICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IGpzID0gZC5jcmVhdGVFbGVtZW50KHMpIGFzIGFueVxuICAgIGpzLmlkID0gaWRcbiAgICBqcy5zcmMgPSBgaHR0cHM6Ly8ke2RvbWFpbn0vJHtoc0lkfS5qc2BcbiAgICBqcy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBqcy5hc3luYyA9IDFcbiAgICBqcy5kZWZlciA9IDFcbiAgICBpZiAoZmpzKSB7XG4gICAgICBmanMucGFyZW50Tm9kZT8uaW5zZXJ0QmVmb3JlKGpzLCBmanMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGQuYm9keS5hcHBlbmRDaGlsZChqcylcbiAgICB9XG4gIH0pKHdpbmRvdy5kb2N1bWVudCwgJ3NjcmlwdCcsICdocy1zY3JpcHQtbG9hZGVyJylcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBsb2FkID0gKHtcbiAgcHJvdmlkZXJLZXksXG4gIHNldFN0YXRlLFxuICBiZWZvcmVJbml0ID0gKCkgPT4gdW5kZWZpbmVkLFxuICBvblJlYWR5ID0gKCkgPT4gdW5kZWZpbmVkLFxufToge1xuICBwcm92aWRlcktleTogc3RyaW5nXG4gIHNldFN0YXRlOiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGJlZm9yZUluaXQ/OiAoKSA9PiB2b2lkXG4gIG9uUmVhZHk/OiAoKSA9PiB2b2lkXG59KTogYm9vbGVhbiA9PiB7XG4gIHdpbmRvdy5oc0NvbnZlcnNhdGlvbnNPblJlYWR5ID0gW1xuICAgICgpID0+IHtcbiAgICAgIHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucy53aWRnZXQubG9hZCgpXG4gICAgICBjb25zb2xlLmRlYnVnKHtcbiAgICAgICAgaHNDb252ZXJzYXRpb25zT25SZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgd2lkZ2V0U3RhdHVzOiB3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMud2lkZ2V0LnN0YXR1cygpXG4gICAgICB9KVxuICAgIH1cbiAgXVxuICBjb25zdCBsb2FkZWQgPSBsb2FkU2NyaXB0KHByb3ZpZGVyS2V5KVxuICBpZiAobG9hZGVkKSB7XG4gICAgYmVmb3JlSW5pdCgpXG5cbiAgICB3YWl0Rm9yTG9hZChcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1Zyh7XG4gICAgICAgICAgd2FpdEZvckxvYWQ6IHtcbiAgICAgICAgICAgIEh1YlNwb3RDb252ZXJzYXRpb25zOiB3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMsXG4gICAgICAgICAgICB3aWRnZXQ6IHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucz8ud2lkZ2V0XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgICB3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMgJiZcbiAgICAgICAgICAgIHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucy53aWRnZXQgJiZcbiAgICAgICAgICAgIHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucy53aWRnZXQuc3RhdHVzKCkubG9hZGVkXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICAvLyBBbGxvdyBpbnRlcmNvbSB0byBjb21wbGV0ZSBsb2FkaW5nIGJlZm9yZSByZW1vdmluZyBmYWtlIHdpZGdldFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKHtcbiAgICAgICAgICBsb2FkQ29tcGxldGU6IHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucyxcbiAgICAgICAgICB3aWRnZXRTdGF0dXM6IHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucy53aWRnZXQuc3RhdHVzKClcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93Lkh1YlNwb3RDb252ZXJzYXRpb25zLndpZGdldC5vcGVuKClcbiAgICAgICAgc2V0U3RhdGUoJ2NvbXBsZXRlJylcbiAgICAgICAgb25SZWFkeSgpXG4gICAgICAgIGNvbnNvbGUuZGVidWcoe1xuICAgICAgICAgIHdpZGdldFN0YXR1c0FmdGVyVGltZW91dDogd2luZG93Lkh1YlNwb3RDb252ZXJzYXRpb25zLndpZGdldC5zdGF0dXMoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIClcbiAgfVxuICByZXR1cm4gbG9hZGVkXG59XG5cbmNvbnN0IG9wZW4gPSAoKTogdW5rbm93biA9PiB7XG4gIGNvbnNvbGUuZGVidWcoeyBvcGVuOiAnY2FsbGVkJyB9KVxuICB3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMgJiZcbiAgICB3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMud2lkZ2V0ICYmXG4gICAgIXdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucy53aWRnZXQuc3RhdHVzKCkubG9hZGVkICYmXG4gICAgd2luZG93Lkh1YlNwb3RDb252ZXJzYXRpb25zLndpZGdldC5sb2FkKClcblxuICByZXR1cm4gKFxuICAgIHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucyAmJlxuICAgIHdpbmRvdy5IdWJTcG90Q29udmVyc2F0aW9ucy53aWRnZXQgJiZcbiAgICB3aW5kb3cuSHViU3BvdENvbnZlcnNhdGlvbnMud2lkZ2V0Lm9wZW4oKVxuICApXG59IC8vIE9wZW4gcHJvdmlkZXJcbmNvbnN0IGNsb3NlID0gKCk6IHVua25vd24gPT4gd2luZG93Lkh1YlNwb3RDb252ZXJzYXRpb25zLndpZGdldC5jbG9zZSgpIC8vIENsb3NlIHByb3ZpZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZCxcbiAgb3BlbixcbiAgY2xvc2UsXG4gIGRvbWFpblxufVxuIl19