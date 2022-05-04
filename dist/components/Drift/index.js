"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useChat = _interopRequireDefault(require("../../hooks/useChat"));

var _useWindowWidth = _interopRequireDefault(require("../../hooks/useWindowWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  container: {
    WebkitFontSmoothing: 'antialiased',
    fontSize: 16,
    display: 'flex',
    alignItems: 'flex-end',
    padding: '.75rem',
    flexDirection: 'column'
  },
  button: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fill: '#fff',
    cursor: 'pointer',
    height: 52,
    width: 52,
    borderRadius: '.3125rem',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.4)',
    overflow: 'hidden',
    outline: 'none',
    border: 'none'
  },
  iconWrapper: {
    fill: 'inherit',
    stroke: 'inherit',
    width: '100%',
    padding: 0,
    lineHeight: 0
  }
};

const Drift = ({
  color = '#0176ff',
  icon = 'A'
}) => {
  const [state, loadChat] = (0, _useChat.default)({
    loadWhenIdle: true
  });
  const windowWidth = (0, _useWindowWidth.default)();
  const [positionStyles, setPositionStyles] = (0, _react.useState)({
    zIndex: 2147483648,
    position: 'fixed',
    display: 'block',
    height: '60px !important',
    width: '76px !important'
  });
  (0, _react.useEffect)(() => {
    setPositionStyles(state => _objectSpread(_objectSpread({}, state), {}, {
      bottom: windowWidth < 768 ? 0 : '24px',
      right: windowWidth < 768 ? 0 : '24px'
    }));
  }, [windowWidth]);

  if (state === 'complete') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: positionStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    "aria-label": "Load Chat",
    "aria-busy": "true",
    "aria-live": "polite",
    onClick: () => loadChat({
      open: true
    }),
    onMouseEnter: () => loadChat({
      open: false
    }),
    style: _objectSpread({
      backgroundColor: color
    }, styles.button)
  }, /*#__PURE__*/_react.default.createElement("i", {
    style: _objectSpread(_objectSpread({}, styles.iconWrapper), {}, {
      opacity: state === 'initial' ? 1 : 0.75
    })
  }, icon === 'A' ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    focusable: "false",
    "aria-hidden": "true",
    style: {
      display: state === 'initial' ? 'initial' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z",
    fill: "rgb(255, 255, 255)",
    fillRule: "evenodd"
  })) : icon === 'B' ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "25",
    height: "23",
    viewBox: "0 0 25 23",
    focusable: "false",
    "aria-hidden": "true",
    style: {
      display: state === 'initial' ? 'initial' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 0 0 .482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z",
    fill: "rgb(255, 255, 255)",
    fillRule: "evenodd"
  })) : icon === 'C' ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    focusable: "false",
    "aria-hidden": "true",
    style: {
      display: state === 'initial' ? 'initial' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.814 12.25h-1.362v3.063a1.02 1.02 0 0 1-1.744.72L15.92 12.25H11.92c-.94 0-1.703-.785-1.703-1.75V1.75c0-.965.764-1.75 1.703-1.75h10.896c.938 0 1.702.785 1.702 1.75v8.75c0 .965-.764 1.75-1.702 1.75zm-.34-10.208H12.257v8.166h4.086a1.032 1.032 0 0 1 .723.3l2.342 2.34v-1.62c0-.562.456-1.02 1.02-1.02h2.043V2.042zM8.17 10.208h-6.13v8.167h2.044c.564 0 1.022.457 1.022 1.02v1.62l2.34-2.34a1.022 1.022 0 0 1 .724-.3h4.086V14.29a1.02 1.02 0 0 1 2.043 0v4.377c0 .965-.763 1.75-1.702 1.75H8.595L4.808 24.2a1.022 1.022 0 0 1-1.743-.72v-3.063H1.702c-.938 0-1.702-.785-1.702-1.75v-8.75c0-.965.764-1.75 1.702-1.75h6.47a1.022 1.022 0 0 1 0 2.04z",
    fill: "rgb(255, 255, 255)",
    fillRule: "evenodd"
  })) : icon === 'D' ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    focusable: "false",
    "aria-hidden": "true",
    style: {
      display: state === 'initial' ? 'initial' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M23.295 24.412a.987.987 0 0 1-1.123-.43L19.9 20.358H9.527c-1.392 0-2.523-1.153-2.523-2.57V16.3c0-.563.448-1.02 1-1.02.553 0 1 .457 1 1.02v1.485c0 .295.235.533.523.533h10.92c.036 0 .067.018.103.022a.96.96 0 0 1 .527.224.984.984 0 0 1 .14.15c.023.026.054.043.073.075l.725 1.154V9.7a.528.528 0 0 0-.523-.532h-1.48c-.55 0-1-.457-1-1.02 0-.56.45-1.018 1-1.018h1.48c1.392 0 2.524 1.152 2.524 2.57V23.433c0 .452-.293.85-.72.978zM14.49 13.226H4.116L1.844 16.85a.997.997 0 0 1-1.124.43 1.017 1.017 0 0 1-.72-.978V2.57C0 1.152 1.132 0 2.523 0H14.49c1.39 0 2.52 1.152 2.52 2.57v8.085c0 1.418-1.13 2.57-2.52 2.57zm.52-10.656a.528.528 0 0 0-.52-.532H2.522c-.288 0-.522.24-.522.532v10.242l.726-1.153c.02-.032.05-.05.07-.076a.897.897 0 0 1 .296-.256.92.92 0 0 1 .372-.118c.037-.004.068-.022.104-.022h10.92c.288 0 .522-.238.522-.533V2.57z",
    fill: "rgb(255, 255, 255)",
    fillRule: "evenodd"
  })) : null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    focusable: "false",
    "aria-hidden": "true",
    style: {
      display: state === 'initial' ? 'none' : 'initial'
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.726 15.402c.365.366.365.96 0 1.324-.178.178-.416.274-.663.274-.246 0-.484-.096-.663-.274L8.323 9.648h.353L1.6 16.726c-.177.178-.416.274-.663.274-.246 0-.484-.096-.663-.274-.365-.365-.365-.958 0-1.324L7.35 8.324v.35L.275 1.6C-.09 1.233-.09.64.274.274c.367-.365.96-.365 1.326 0l7.076 7.078h-.353L15.4.274c.366-.365.96-.365 1.326 0 .365.366.365.958 0 1.324L9.65 8.675v-.35l7.076 7.077z",
    fill: "rgb(255, 255, 255)",
    fillRule: "evenodd"
  }))))));
};

var _default = Drift;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RyaWZ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjb250YWluZXIiLCJXZWJraXRGb250U21vb3RoaW5nIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJmbGV4RGlyZWN0aW9uIiwiYnV0dG9uIiwidGV4dEFsaWduIiwianVzdGlmeUNvbnRlbnQiLCJmaWxsIiwiY3Vyc29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJvdmVyZmxvdyIsIm91dGxpbmUiLCJib3JkZXIiLCJpY29uV3JhcHBlciIsInN0cm9rZSIsImxpbmVIZWlnaHQiLCJEcmlmdCIsImNvbG9yIiwiaWNvbiIsInN0YXRlIiwibG9hZENoYXQiLCJsb2FkV2hlbklkbGUiLCJ3aW5kb3dXaWR0aCIsInBvc2l0aW9uU3R5bGVzIiwic2V0UG9zaXRpb25TdHlsZXMiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0Iiwib3BlbiIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxNQUlMLEdBQUc7QUFDRkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLG1CQUFtQixFQUFFLGFBRFo7QUFFVEMsSUFBQUEsUUFBUSxFQUFFLEVBRkQ7QUFHVEMsSUFBQUEsT0FBTyxFQUFFLE1BSEE7QUFJVEMsSUFBQUEsVUFBVSxFQUFFLFVBSkg7QUFLVEMsSUFBQUEsT0FBTyxFQUFFLFFBTEE7QUFNVEMsSUFBQUEsYUFBYSxFQUFFO0FBTk4sR0FEVDtBQVNGQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFLFFBREw7QUFFTkwsSUFBQUEsT0FBTyxFQUFFLE1BRkg7QUFHTk0sSUFBQUEsY0FBYyxFQUFFLFFBSFY7QUFJTkwsSUFBQUEs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SFY7QUFJRSxJQUFBLFNBQVMsRUFBQyxPQUpaO0FBS0UsbUJBQVksTUFMZDtBQU1FLElBQUEsS0FBSyxFQUFFO0FBQ0xyQixNQUFBQSxPQUFPLEVBQUVzQixLQUFLLEtBQUssU0FBVixHQUFzQixTQUF0QixHQUFrQztBQUR0QztBQU5ULGtCQVVFO0FBQ0UsSUFBQSxDQUFDLEVBQUMsd3pCQURKO0FBRUUsSUFBQSxJQUFJLEVBQUMsb0JBRlA7QUFHRSxJQUFBLFFBQVEsRUFBQztBQUhYLElBVkYsQ0FERSxHQWlCQSxJQTFFTixlQTRFRTtBQUNFLElBQUEsS0FBSyxFQUFDLElBRFI7QUFFRSxJQUFBLE1BQU0sRUFBQyxJQUZUO0FBR0UsSUFBQSxPQUFPLEVBQUMsV0FIVjtBQUlFLElBQUEsU0FBUyxFQUFDLE9BSlo7QUFLRSxtQkFBWSxNQUxkO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFDTHRCLE1BQUFBLE9BQU8sRUFBRXNCLEtBQUssS0FBSyxTQUFWLEdBQXNCLE1BQXRCLEdBQStCO0FBRG5DO0FBTlQsa0JBVUU7QUFDRSxJQUFBLENBQUMsRUFBQyxvWUFESjtBQUVFLElBQUEsSUFBSSxFQUFDLG9CQUZQO0FBR0UsSUFBQSxRQUFRLEVBQUM7QUFIWCxJQVZGLENBNUVGLENBWkYsQ0FERixDQURGLENBREY7QUFnSEQsQ0ExSUQ7O2VBNEllSCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZUNoYXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ2hhdCdcbmltcG9ydCB1c2VXaW5kb3dXaWR0aCBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dXaWR0aCdcblxuY29uc3Qgc3R5bGVzOiB7XG4gIGNvbnRhaW5lcjogQ1NTUHJvcGVydGllc1xuICBidXR0b246IENTU1Byb3BlcnRpZXNcbiAgaWNvbldyYXBwZXI6IENTU1Byb3BlcnRpZXNcbn0gPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgIHBhZGRpbmc6ICcuNzVyZW0nLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmaWxsOiAnI2ZmZicsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiA1MixcbiAgICB3aWR0aDogNTIsXG4gICAgYm9yZGVyUmFkaXVzOiAnLjMxMjVyZW0nLFxuICAgIGJveFNoYWRvdzogJzAgMnB4IDZweCAwIHJnYmEoMCwwLDAsLjQpJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnXG4gIH0sXG4gIGljb25XcmFwcGVyOiB7XG4gICAgZmlsbDogJ2luaGVyaXQnLFxuICAgIHN0cm9rZTogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogMCxcbiAgICBsaW5lSGVpZ2h0OiAwXG4gIH1cbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29sb3I/OiBzdHJpbmdcbiAgaWNvbj86ICdBJyB8ICdCJyB8ICdDJyB8ICdEJ1xufVxuXG5jb25zdCBEcmlmdCA9ICh7XG4gIGNvbG9yID0gJyMwMTc2ZmYnLFxuICBpY29uID0gJ0EnXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgbG9hZENoYXRdID0gdXNlQ2hhdCh7IGxvYWRXaGVuSWRsZTogdHJ1ZSB9KVxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpbmRvd1dpZHRoKClcbiAgY29uc3QgW3Bvc2l0aW9uU3R5bGVzLCBzZXRQb3NpdGlvblN0eWxlc10gPSB1c2VTdGF0ZTxDU1NQcm9wZXJ0aWVzPih7XG4gICAgekluZGV4OiAyMTQ3NDgzNjQ4LFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgaGVpZ2h0OiAnNjBweCAhaW1wb3J0YW50JyxcbiAgICB3aWR0aDogJzc2cHggIWltcG9ydGFudCdcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uU3R5bGVzKHN0YXRlID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGJvdHRvbTogd2luZG93V2lkdGggPCA3NjggPyAwIDogJzI0cHgnLFxuICAgICAgcmlnaHQ6IHdpbmRvd1dpZHRoIDwgNzY4ID8gMCA6ICcyNHB4J1xuICAgIH0pKVxuICB9LCBbd2luZG93V2lkdGhdKVxuXG4gIGlmIChzdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3Bvc2l0aW9uU3R5bGVzfT5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkxvYWQgQ2hhdFwiXG4gICAgICAgICAgYXJpYS1idXN5PVwidHJ1ZVwiXG4gICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2FkQ2hhdCh7IG9wZW46IHRydWUgfSl9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBsb2FkQ2hhdCh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgLi4uc3R5bGVzLmJ1dHRvblxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLmljb25XcmFwcGVyLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBzdGF0ZSA9PT0gJ2luaXRpYWwnID8gMSA6IDAuNzVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ljb24gPT09ICdBJyA/IChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGUgPT09ICdpbml0aWFsJyA/ICdpbml0aWFsJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk00LjU4MyAxNC44OTRsLTMuMjU2IDMuNzhjLS43LjgxMy0xLjI2LjU5OC0xLjI1LS40NmExMDY4OS40MTMgMTA2ODkuNDEzIDAgMCAxIC4wMzUtNC43NzVWNC44MTZhMy44OSAzLjg5IDAgMCAxIDMuODgtMy44OWgxMi4wNjRhMy44ODUgMy44ODUgMCAwIDEgMy44ODIgMy44OXY2LjE4NWEzLjg5IDMuODkgMCAwIDEtMy44ODIgMy44OUg0LjU4M3pcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cInJnYigyNTUsIDI1NSwgMjU1KVwiXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKSA6IGljb24gPT09ICdCJyA/IChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDIzXCJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGUgPT09ICdpbml0aWFsJyA/ICdpbml0aWFsJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk0yNC41MTYgOS45NTNDMjQuNTE2IDQuNDUzIDE5LjA0IDAgMTIuMjU4IDAgNS40NzYgMCAwIDQuNDUyIDAgOS45NTNjMCAzLjMxOCAxLjk4NiA2LjI0IDUuMDUgOC4wNTMtLjM0IDIuNTUyLTEuODE1IDQuMDU1LTEuODQ0IDQuMDg0LS4xNC4xNC0uMTcuMzY4LS4xMTMuNTY3YS41MjQuNTI0IDAgMCAwIC40ODIuMzEyYzIuOTUgMCA1LjMzNS0xLjkzIDYuNjEyLTMuMjA2LjY1Mi4wODYgMS4zNjIuMTQyIDIuMDcuMTQyIDYuNzgzIDAgMTIuMjYtNC40NTIgMTIuMjYtOS45NTN6XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICkgOiBpY29uID09PSAnQycgPyAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlID09PSAnaW5pdGlhbCcgPyAnaW5pdGlhbCcgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMjIuODE0IDEyLjI1aC0xLjM2MnYzLjA2M2ExLjAyIDEuMDIgMCAwIDEtMS43NDQuNzJMMTUuOTIgMTIuMjVIMTEuOTJjLS45NCAwLTEuNzAzLS43ODUtMS43MDMtMS43NVYxLjc1YzAtLjk2NS43NjQtMS43NSAxLjcwMy0xLjc1aDEwLjg5NmMuOTM4IDAgMS43MDIuNzg1IDEuNzAyIDEuNzV2OC43NWMwIC45NjUtLjc2NCAxLjc1LTEuNzAyIDEuNzV6bS0uMzQtMTAuMjA4SDEyLjI1N3Y4LjE2Nmg0LjA4NmExLjAzMiAxLjAzMiAwIDAgMSAuNzIzLjNsMi4zNDIgMi4zNHYtMS42MmMwLS41NjIuNDU2LTEuMDIgMS4wMi0xLjAyaDIuMDQzVjIuMDQyek04LjE3IDEwLjIwOGgtNi4xM3Y4LjE2N2gyLjA0NGMuNTY0IDAgMS4wMjIuNDU3IDEuMDIyIDEuMDJ2MS42MmwyLjM0LTIuMzRhMS4wMjIgMS4wMjIgMCAwIDEgLjcyNC0uM2g0LjA4NlYxNC4yOWExLjAyIDEuMDIgMCAwIDEgMi4wNDMgMHY0LjM3N2MwIC45NjUtLjc2MyAxLjc1LTEuNzAyIDEuNzVIOC41OTVMNC44MDggMjQuMmExLjAyMiAxLjAyMiAwIDAgMS0xLjc0My0uNzJ2LTMuMDYzSDEuNzAyYy0uOTM4IDAtMS43MDItLjc4NS0xLjcwMi0xLjc1di04Ljc1YzAtLjk2NS43NjQtMS43NSAxLjcwMi0xLjc1aDYuNDdhMS4wMjIgMS4wMjIgMCAwIDEgMCAyLjA0elwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwicmdiKDI1NSwgMjU1LCAyNTUpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogaWNvbiA9PT0gJ0QnID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZSA9PT0gJ2luaXRpYWwnID8gJ2luaXRpYWwnIDogJ25vbmUnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTIzLjI5NSAyNC40MTJhLjk4Ny45ODcgMCAwIDEtMS4xMjMtLjQzTDE5LjkgMjAuMzU4SDkuNTI3Yy0xLjM5MiAwLTIuNTIzLTEuMTUzLTIuNTIzLTIuNTdWMTYuM2MwLS41NjMuNDQ4LTEuMDIgMS0xLjAyLjU1MyAwIDEgLjQ1NyAxIDEuMDJ2MS40ODVjMCAuMjk1LjIzNS41MzMuNTIzLjUzM2gxMC45MmMuMDM2IDAgLjA2Ny4wMTguMTAzLjAyMmEuOTYuOTYgMCAwIDEgLjUyNy4yMjQuOTg0Ljk4NCAwIDAgMSAuMTQuMTVjLjAyMy4wMjYuMDU0LjA0My4wNzMuMDc1bC43MjUgMS4xNTRWOS43YS41MjguNTI4IDAgMCAwLS41MjMtLjUzMmgtMS40OGMtLjU1IDAtMS0uNDU3LTEtMS4wMiAwLS41Ni40NS0xLjAxOCAxLTEuMDE4aDEuNDhjMS4zOTIgMCAyLjUyNCAxLjE1MiAyLjUyNCAyLjU3VjIzLjQzM2MwIC40NTItLjI5My44NS0uNzIuOTc4ek0xNC40OSAxMy4yMjZINC4xMTZMMS44NDQgMTYuODVhLjk5Ny45OTcgMCAwIDEtMS4xMjQuNDMgMS4wMTcgMS4wMTcgMCAwIDEtLjcyLS45NzhWMi41N0MwIDEuMTUyIDEuMTMyIDAgMi41MjMgMEgxNC40OWMxLjM5IDAgMi41MiAxLjE1MiAyLjUyIDIuNTd2OC4wODVjMCAxLjQxOC0xLjEzIDIuNTctMi41MiAyLjU3em0uNTItMTAuNjU2YS41MjguNTI4IDAgMCAwLS41Mi0uNTMySDIuNTIyYy0uMjg4IDAtLjUyMi4yNC0uNTIyLjUzMnYxMC4yNDJsLjcyNi0xLjE1M2MuMDItLjAzMi4wNS0uMDUuMDctLjA3NmEuODk3Ljg5NyAwIDAgMSAuMjk2LS4yNTYuOTIuOTIgMCAwIDEgLjM3Mi0uMTE4Yy4wMzctLjAwNC4wNjgtLjAyMi4xMDQtLjAyMmgxMC45MmMuMjg4IDAgLjUyMi0uMjM4LjUyMi0uNTMzVjIuNTd6XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxN1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTcgMTdcIlxuICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGUgPT09ICdpbml0aWFsJyA/ICdub25lJyA6ICdpbml0aWFsJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNzI2IDE1LjQwMmMuMzY1LjM2Ni4zNjUuOTYgMCAxLjMyNC0uMTc4LjE3OC0uNDE2LjI3NC0uNjYzLjI3NC0uMjQ2IDAtLjQ4NC0uMDk2LS42NjMtLjI3NEw4LjMyMyA5LjY0OGguMzUzTDEuNiAxNi43MjZjLS4xNzcuMTc4LS40MTYuMjc0LS42NjMuMjc0LS4yNDYgMC0uNDg0LS4wOTYtLjY2My0uMjc0LS4zNjUtLjM2NS0uMzY1LS45NTggMC0xLjMyNEw3LjM1IDguMzI0di4zNUwuMjc1IDEuNkMtLjA5IDEuMjMzLS4wOS42NC4yNzQuMjc0Yy4zNjctLjM2NS45Ni0uMzY1IDEuMzI2IDBsNy4wNzYgNy4wNzhoLS4zNTNMMTUuNC4yNzRjLjM2Ni0uMzY1Ljk2LS4zNjUgMS4zMjYgMCAuMzY1LjM2Ni4zNjUuOTU4IDAgMS4zMjRMOS42NSA4LjY3NXYtLjM1bDcuMDc2IDcuMDc3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYigyNTUsIDI1NSwgMjU1KVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmlmdFxuIl19