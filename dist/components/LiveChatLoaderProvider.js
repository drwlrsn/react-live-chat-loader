"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LiveChatLoaderProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var Providers = _interopRequireWildcard(require("../providers"));

var _context = require("../context");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const LiveChatLoaderProvider = (_ref) => {
  let {
    provider,
    children,
    idlePeriod = 5000,
    baseUrl
  } = _ref,
      props = _objectWithoutProperties(_ref, ["provider", "children", "idlePeriod", "baseUrl"]);

  const [state, setState] = (0, _react.useState)('initial');

  const value = _objectSpread({
    provider,
    idlePeriod,
    state,
    setState,
    baseUrl
  }, props);

  const chatProvider = Providers[provider];

  if (!chatProvider) {
    //eslint-disable-next-line no-console
    console.error(`Unknown provider given to react-live-chat-loader: ${provider}`);
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_context.LiveChatLoaderContext.Provider, {
    value: value
  }, /*#__PURE__*/_react.default.createElement("link", {
    href: baseUrl || chatProvider.domain,
    rel: "preconnect",
    crossOrigin: ""
  }), children);
};

exports.LiveChatLoaderProvider = LiveChatLoaderProvider;
var _default = LiveChatLoaderProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpdmVDaGF0TG9hZGVyUHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbIkxpdmVDaGF0TG9hZGVyUHJvdmlkZXIiLCJwcm92aWRlciIsImNoaWxkcmVuIiwiaWRsZVBlcmlvZCIsImJhc2VVcmwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ2YWx1ZSIsImNoYXRQcm92aWRlciIsIlByb3ZpZGVycyIsImNvbnNvbGUiLCJlcnJvciIsImRvbWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sTUFBTUEsc0JBQXNCLEdBQUcsVUFNUztBQUFBLE1BTlI7QUFDckNDLElBQUFBLFFBRHFDO0FBRXJDQyxJQUFBQSxRQUZxQztBQUdyQ0MsSUFBQUEsVUFBVSxHQUFHLElBSHdCO0FBSXJDQyxJQUFBQTtBQUpxQyxHQU1RO0FBQUEsTUFEMUNDLEtBQzBDOztBQUM3QyxRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixJQUFvQixxQkFBZ0IsU0FBaEIsQ0FBMUI7O0FBQ0EsUUFBTUMsS0FBSztBQUNUUCxJQUFBQSxRQURTO0FBRVRFLElBQUFBLFVBRlM7QUFHVEcsSUFBQUEsS0FIUztBQUlUQyxJQUFBQSxRQUpTO0FBS1RILElBQUFBO0FBTFMsS0FNTkMsS0FOTSxDQUFYOztBQVNBLFFBQU1JLFlBQVksR0FBR0MsU0FBUyxDQUFDVCxRQUFELENBQTlCOztBQUVBLE1BQUksQ0FBQ1EsWUFBTCxFQUFtQjtBQUNqQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FDRyxxREFBb0RYLFFBQVMsRUFEaEU7QUFHQSxXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFDRSw2QkFBQyw4QkFBRCxDQUF1QixRQUF2QjtBQUFnQyxJQUFBLEtBQUssRUFBRU87QUFBdkMsa0JBQ0U7QUFDRSxJQUFBLElBQUksRUFBRUosT0FBTyxJQUFJSyxZQUFZLENBQUNJLE1BRGhDO0FBRUUsSUFBQSxHQUFHLEVBQUMsWUFGTjtBQUdFLElBQUEsV0FBVyxFQUFDO0FBSGQsSUFERixFQU1HWCxRQU5ILENBREY7QUFVRCxDQXJDTTs7O2VBdUNRRixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUHJvdmlkZXJzIGZyb20gJy4uL3Byb3ZpZGVycydcbmltcG9ydCB7IFN0YXRlLCBQcm92aWRlciB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgTGl2ZUNoYXRMb2FkZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCdcblxuaW50ZXJmYWNlIExpdmVDaGF0TG9hZGVyUHJvcHMge1xuICBwcm92aWRlcjogUHJvdmlkZXJcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50XG4gIGlkbGVQZXJpb2Q/OiBudW1iZXJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZ1xuICBhcHBJRD86IHN0cmluZ1xuICBiYXNlVXJsPzogc3RyaW5nXG4gIGJlZm9yZUluaXQ/OiAoKSA9PiB2b2lkXG4gIG9uUmVhZHk/OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlQ2hhdExvYWRlclByb3ZpZGVyID0gKHtcbiAgcHJvdmlkZXIsXG4gIGNoaWxkcmVuLFxuICBpZGxlUGVyaW9kID0gNTAwMCxcbiAgYmFzZVVybCxcbiAgLi4ucHJvcHNcbn06IExpdmVDaGF0TG9hZGVyUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPignaW5pdGlhbCcpXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIHByb3ZpZGVyLFxuICAgIGlkbGVQZXJpb2QsXG4gICAgc3RhdGUsXG4gICAgc2V0U3RhdGUsXG4gICAgYmFzZVVybCxcbiAgICAuLi5wcm9wc1xuICB9XG5cbiAgY29uc3QgY2hhdFByb3ZpZGVyID0gUHJvdmlkZXJzW3Byb3ZpZGVyXVxuXG4gIGlmICghY2hhdFByb3ZpZGVyKSB7XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgVW5rbm93biBwcm92aWRlciBnaXZlbiB0byByZWFjdC1saXZlLWNoYXQtbG9hZGVyOiAke3Byb3ZpZGVyfWBcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpdmVDaGF0TG9hZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj17YmFzZVVybCB8fCBjaGF0UHJvdmlkZXIuZG9tYWlufVxuICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpdmVDaGF0TG9hZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXZlQ2hhdExvYWRlclByb3ZpZGVyXG4iXX0=