function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import * as Providers from "../providers";
import { LiveChatLoaderContext } from "../context";
export const LiveChatLoaderProvider = (_ref) => {
  let {
    provider,
    children,
    idlePeriod = 5000,
    baseUrl
  } = _ref,
      props = _objectWithoutProperties(_ref, ["provider", "children", "idlePeriod", "baseUrl"]);

  const [state, setState] = useState('initial');

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

  return /*#__PURE__*/React.createElement(LiveChatLoaderContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement("link", {
    href: baseUrl || chatProvider.domain,
    rel: "preconnect",
    crossOrigin: ""
  }), children);
};
export default LiveChatLoaderProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpdmVDaGF0TG9hZGVyUHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm92aWRlcnMiLCJMaXZlQ2hhdExvYWRlckNvbnRleHQiLCJMaXZlQ2hhdExvYWRlclByb3ZpZGVyIiwicHJvdmlkZXIiLCJjaGlsZHJlbiIsImlkbGVQZXJpb2QiLCJiYXNlVXJsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwidmFsdWUiLCJjaGF0UHJvdmlkZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJkb21haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU8sS0FBS0MsU0FBWjtBQUVBLFNBQVNDLHFCQUFUO0FBYUEsT0FBTyxNQUFNQyxzQkFBc0IsR0FBRyxVQU1TO0FBQUEsTUFOUjtBQUNyQ0MsSUFBQUEsUUFEcUM7QUFFckNDLElBQUFBLFFBRnFDO0FBR3JDQyxJQUFBQSxVQUFVLEdBQUcsSUFId0I7QUFJckNDLElBQUFBO0FBSnFDLEdBTVE7QUFBQSxNQUQxQ0MsS0FDMEM7O0FBQzdDLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CVixRQUFRLENBQVEsU0FBUixDQUFsQzs7QUFDQSxRQUFNVyxLQUFLO0FBQ1RQLElBQUFBLFFBRFM7QUFFVEUsSUFBQUEsVUFGUztBQUdURyxJQUFBQSxLQUhTO0FBSVRDLElBQUFBLFFBSlM7QUFLVEgsSUFBQUE7QUFMUyxLQU1OQyxLQU5NLENBQVg7O0FBU0EsUUFBTUksWUFBWSxHQUFHWCxTQUFTLENBQUNHLFFBQUQsQ0FBOUI7O0FBRUEsTUFBSSxDQUFDUSxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUNHLHFEQUFvRFYsUUFBUyxFQURoRTtBQUdBLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFLG9CQUFDLHFCQUFELENBQXVCLFFBQXZCO0FBQWdDLElBQUEsS0FBSyxFQUFFTztBQUF2QyxrQkFDRTtBQUNFLElBQUEsSUFBSSxFQUFFSixPQUFPLElBQUlLLFlBQVksQ0FBQ0csTUFEaEM7QUFFRSxJQUFBLEdBQUcsRUFBQyxZQUZOO0FBR0UsSUFBQSxXQUFXLEVBQUM7QUFIZCxJQURGLEVBTUdWLFFBTkgsQ0FERjtBQVVELENBckNNO0FBdUNQLGVBQWVGLHNCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBQcm92aWRlcnMgZnJvbSAnLi4vcHJvdmlkZXJzJ1xuaW1wb3J0IHsgU3RhdGUsIFByb3ZpZGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBMaXZlQ2hhdExvYWRlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0J1xuXG5pbnRlcmZhY2UgTGl2ZUNoYXRMb2FkZXJQcm9wcyB7XG4gIHByb3ZpZGVyOiBQcm92aWRlclxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRcbiAgaWRsZVBlcmlvZD86IG51bWJlclxuICBwcm92aWRlcktleTogc3RyaW5nXG4gIGFwcElEPzogc3RyaW5nXG4gIGJhc2VVcmw/OiBzdHJpbmdcbiAgYmVmb3JlSW5pdD86ICgpID0+IHZvaWRcbiAgb25SZWFkeT86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVDaGF0TG9hZGVyUHJvdmlkZXIgPSAoe1xuICBwcm92aWRlcixcbiAgY2hpbGRyZW4sXG4gIGlkbGVQZXJpb2QgPSA1MDAwLFxuICBiYXNlVXJsLFxuICAuLi5wcm9wc1xufTogTGl2ZUNoYXRMb2FkZXJQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KCdpbml0aWFsJylcbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgcHJvdmlkZXIsXG4gICAgaWRsZVBlcmlvZCxcbiAgICBzdGF0ZSxcbiAgICBzZXRTdGF0ZSxcbiAgICBiYXNlVXJsLFxuICAgIC4uLnByb3BzXG4gIH1cblxuICBjb25zdCBjaGF0UHJvdmlkZXIgPSBQcm92aWRlcnNbcHJvdmlkZXJdXG5cbiAgaWYgKCFjaGF0UHJvdmlkZXIpIHtcbiAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBVbmtub3duIHByb3ZpZGVyIGdpdmVuIHRvIHJlYWN0LWxpdmUtY2hhdC1sb2FkZXI6ICR7cHJvdmlkZXJ9YFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGl2ZUNoYXRMb2FkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPXtiYXNlVXJsIHx8IGNoYXRQcm92aWRlci5kb21haW59XG4gICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICBjcm9zc09yaWdpbj1cIlwiXG4gICAgICAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGl2ZUNoYXRMb2FkZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpdmVDaGF0TG9hZGVyUHJvdmlkZXJcbiJdfQ==