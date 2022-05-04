"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _waitForLoad = _interopRequireDefault(require("../utils/waitForLoad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const domain = 'https://connect.facebook.net';

/* eslint-disable */
const loadScript = locale => {
  if (window.FB) return false;

  (function loadFacebookSDK(d, s, id) {
    // fetch customerchat.js
    const fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    }

    const js = d.createElement(s);
    js.id = id;
    js.src = `${domain}/${locale}/sdk/xfbml.customerchat.js`;

    if (fjs) {
      var _fjs$parentNode;

      (_fjs$parentNode = fjs.parentNode) === null || _fjs$parentNode === void 0 ? void 0 : _fjs$parentNode.insertBefore(js, fjs);
    } else {
      d.body.appendChild(js);
    }
  })(window.document, 'script', 'facebook-jssdk');

  return true;
};
/* eslint-enable */


const load = ({
  appID,
  locale = 'en_US',
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}) => {
  const loaded = loadScript(locale); // Continue as long as messenger hasn’t already been initialised.

  if (loaded) {
    beforeInit();

    window.fbAsyncInit = function () {
      window.FB.init(Object.assign({
        cookie: true,
        xfbml: true,
        version: 'v6.0'
      }, appID ? {
        appId: appID
      } : {}));
      window.FB.Event.subscribe('customerchat.load', () => // Allow messenger to complete loading before removing fake widget
      setTimeout(() => {
        setState('complete');
        onReady();
      }, 3000));
    };
  }

  return loaded;
};

const open = () => {
  (0, _waitForLoad.default)(() => {
    var _window$FB, _window$FB$CustomerCh;

    return !!((_window$FB = window.FB) !== null && _window$FB !== void 0 && (_window$FB$CustomerCh = _window$FB.CustomerChat) !== null && _window$FB$CustomerCh !== void 0 && _window$FB$CustomerCh.show);
  }, // messenger is slow to show once it has loaded
  () => setTimeout(() => window.FB.CustomerChat.show(true), 2000));
};

var _default = {
  domain,
  load,
  open
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlcnMvbWVzc2VuZ2VyLnRzIl0sIm5hbWVzIjpbImRvbWFpbiIsImxvYWRTY3JpcHQiLCJsb2NhbGUiLCJ3aW5kb3ciLCJGQiIsImxvYWRGYWNlYm9va1NESyIsImQiLCJzIiwiaWQiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRCeUlkIiwianMiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwibG9hZCIsImFwcElEIiwic2V0U3RhdGUiLCJiZWZvcmVJbml0IiwidW5kZWZpbmVkIiwib25SZWFkeSIsImxvYWRlZCIsImZiQXN5bmNJbml0IiwiaW5pdCIsIk9iamVjdCIsImFzc2lnbiIsImNvb2tpZSIsInhmYm1sIiwidmVyc2lvbiIsImFwcElkIiwiRXZlbnQiLCJzdWJzY3JpYmUiLCJzZXRUaW1lb3V0Iiwib3BlbiIsIkN1c3RvbWVyQ2hhdCIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRyw4QkFBZjs7QUFVQTtBQUNBLE1BQU1DLFVBQVUsR0FBSUMsTUFBRCxJQUE2QjtBQUM5QyxNQUFJQyxNQUFNLENBQUNDLEVBQVgsRUFBZSxPQUFPLEtBQVA7O0FBQ2QsR0FBQyxTQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QkMsQ0FBNUIsRUFBK0JDLEVBQS9CLEVBQW1DO0FBQ25DO0FBQ0EsVUFBTUMsR0FBRyxHQUFHSCxDQUFDLENBQUNJLG9CQUFGLENBQXVCSCxDQUF2QixFQUEwQixDQUExQixDQUFaOztBQUNBLFFBQUlELENBQUMsQ0FBQ0ssY0FBRixDQUFpQkgsRUFBakIsQ0FBSixFQUEwQjtBQUN4QjtBQUNEOztBQUNELFVBQU1JLEVBQUUsR0FBR04sQ0FBQyxDQUFDTyxhQUFGLENBQWdCTixDQUFoQixDQUFYO0FBQ0FLLElBQUFBLEVBQUUsQ0FBQ0osRUFBSCxHQUFRQSxFQUFSO0FBQ0FJLElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxHQUFVLEdBQUVkLE1BQU8sSUFBR0UsTUFBTyw0QkFBN0I7O0FBQ0EsUUFBSU8sR0FBSixFQUFTO0FBQUE7O0FBQ1AseUJBQUFBLEdBQUcsQ0FBQ00sVUFBSixvRUFBZ0JDLFlBQWhCLENBQTZCSixFQUE3QixFQUFpQ0gsR0FBakM7QUFDRCxLQUZELE1BRU87QUFDTEgsTUFBQUEsQ0FBQyxDQUFDVyxJQUFGLENBQU9DLFdBQVAsQ0FBbUJOLEVBQW5CO0FBQ0Q7QUFDRixHQWRBLEVBY0VULE1BQU0sQ0FBQ2dCLFFBZFQsRUFjbUIsUUFkbkIsRUFjNkIsZ0JBZDdCOztBQWVELFNBQU8sSUFBUDtBQUNELENBbEJEO0FBbUJBOzs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUNaQyxFQUFBQSxLQURZO0FBRVpuQixFQUFBQSxNQUFNLEdBQUcsT0FGRztBQUdab0IsRUFBQUEsUUFIWTtBQUlaQyxFQUFBQSxVQUFVLEdBQUcsTUFBTUMsU0FKUDtBQUtaQyxFQUFBQSxPQUFPLEdBQUcsTUFBTUQ7QUFMSixDQUFELEtBWUU7QUFDYixRQUFNRSxNQUFNLEdBQUd6QixVQUFVLENBQUNDLE1BQUQsQ0FBekIsQ0FEYSxDQUViOztBQUNBLE1BQUl3QixNQUFKLEVBQVk7QUFDVkgsSUFBQUEsVUFBVTs7QUFDVnBCLElBQUFBLE1BQU0sQ0FBQ3dCLFdBQVAsR0FBcUIsWUFBVztBQUM5QnhCLE1BQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVd0IsSUFBVixDQUNFQyxNQUFNLENBQUNDLE1BQVAsQ0FDRTtBQUNFQyxRQUFBQSxNQUFNLEVBQUUsSUFEVjtBQUVFQyxRQUFBQSxLQUFLLEVBQUUsSUFGVDtBQUdFQyxRQUFBQSxPQUFPLEVBQUU7QUFIWCxPQURGLEVBTUVaLEtBQUssR0FBRztBQUFFYSxRQUFBQSxLQUFLLEVBQUViO0FBQVQsT0FBSCxHQUFzQixFQU43QixDQURGO0FBVUFsQixNQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVStCLEtBQVYsQ0FBZ0JDLFNBQWhCLENBQTBCLG1CQUExQixFQUErQyxNQUM3QztBQUNBQyxNQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNmZixRQUFBQSxRQUFRLENBQUMsVUFBRCxDQUFSO0FBQ0FHLFFBQUFBLE9BQU87QUFDUixPQUhTLEVBR1AsSUFITyxDQUZaO0FBT0QsS0FsQkQ7QUFtQkQ7O0FBRUQsU0FBT0MsTUFBUDtBQUNELENBdkNEOztBQXlDQSxNQUFNWSxJQUFJLEdBQUcsTUFBWTtBQUN2Qiw0QkFDRTtBQUFBOztBQUFBLFdBQU0sQ0FBQyxnQkFBQ25DLE1BQU0sQ0FBQ0MsRUFBUixnRUFBQyxXQUFXbUMsWUFBWixrREFBQyxzQkFBeUJDLElBQTFCLENBQVA7QUFBQSxHQURGLEVBRUU7QUFDQSxRQUFNSCxVQUFVLENBQUMsTUFBTWxDLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVbUMsWUFBVixDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBUCxFQUEwQyxJQUExQyxDQUhsQjtBQUtELENBTkQ7O2VBUWU7QUFDYnhDLEVBQUFBLE1BRGE7QUFFYm9CLEVBQUFBLElBRmE7QUFHYmtCLEVBQUFBO0FBSGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgd2FpdEZvckxvYWQgZnJvbSAnLi4vdXRpbHMvd2FpdEZvckxvYWQnXG5cbmNvbnN0IGRvbWFpbiA9ICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBGQjogYW55XG4gICAgZmJBc3luY0luaXQ6ICgpID0+IHZvaWRcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3QgbG9hZFNjcmlwdCA9IChsb2NhbGU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAod2luZG93LkZCKSByZXR1cm4gZmFsc2VcbiAgOyhmdW5jdGlvbiBsb2FkRmFjZWJvb2tTREsoZCwgcywgaWQpIHtcbiAgICAvLyBmZXRjaCBjdXN0b21lcmNoYXQuanNcbiAgICBjb25zdCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdXG4gICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QganMgPSBkLmNyZWF0ZUVsZW1lbnQocykgYXMgYW55XG4gICAganMuaWQgPSBpZFxuICAgIGpzLnNyYyA9IGAke2RvbWFpbn0vJHtsb2NhbGV9L3Nkay94ZmJtbC5jdXN0b21lcmNoYXQuanNgXG4gICAgaWYgKGZqcykge1xuICAgICAgZmpzLnBhcmVudE5vZGU/Lmluc2VydEJlZm9yZShqcywgZmpzKVxuICAgIH0gZWxzZSB7XG4gICAgICBkLmJvZHkuYXBwZW5kQ2hpbGQoanMpXG4gICAgfVxuICB9KSh3aW5kb3cuZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKVxuICByZXR1cm4gdHJ1ZVxufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5jb25zdCBsb2FkID0gKHtcbiAgYXBwSUQsXG4gIGxvY2FsZSA9ICdlbl9VUycsXG4gIHNldFN0YXRlLFxuICBiZWZvcmVJbml0ID0gKCkgPT4gdW5kZWZpbmVkLFxuICBvblJlYWR5ID0gKCkgPT4gdW5kZWZpbmVkXG59OiB7XG4gIGFwcElEPzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBzZXRTdGF0ZTogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBiZWZvcmVJbml0PzogKCkgPT4gdm9pZFxuICBvblJlYWR5PzogKCkgPT4gdm9pZFxufSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBsb2FkZWQgPSBsb2FkU2NyaXB0KGxvY2FsZSlcbiAgLy8gQ29udGludWUgYXMgbG9uZyBhcyBtZXNzZW5nZXIgaGFzbuKAmXQgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkLlxuICBpZiAobG9hZGVkKSB7XG4gICAgYmVmb3JlSW5pdCgpXG4gICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRkIuaW5pdChcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb29raWU6IHRydWUsXG4gICAgICAgICAgICB4ZmJtbDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246ICd2Ni4wJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXBwSUQgPyB7IGFwcElkOiBhcHBJRCB9IDoge31cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgd2luZG93LkZCLkV2ZW50LnN1YnNjcmliZSgnY3VzdG9tZXJjaGF0LmxvYWQnLCAoKSA9PlxuICAgICAgICAvLyBBbGxvdyBtZXNzZW5nZXIgdG8gY29tcGxldGUgbG9hZGluZyBiZWZvcmUgcmVtb3ZpbmcgZmFrZSB3aWRnZXRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhdGUoJ2NvbXBsZXRlJylcbiAgICAgICAgICBvblJlYWR5KClcbiAgICAgICAgfSwgMzAwMClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9hZGVkXG59XG5cbmNvbnN0IG9wZW4gPSAoKTogdm9pZCA9PiB7XG4gIHdhaXRGb3JMb2FkKFxuICAgICgpID0+ICEhd2luZG93LkZCPy5DdXN0b21lckNoYXQ/LnNob3csXG4gICAgLy8gbWVzc2VuZ2VyIGlzIHNsb3cgdG8gc2hvdyBvbmNlIGl0IGhhcyBsb2FkZWRcbiAgICAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5GQi5DdXN0b21lckNoYXQuc2hvdyh0cnVlKSwgMjAwMClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRvbWFpbixcbiAgbG9hZCxcbiAgb3BlblxufVxuIl19