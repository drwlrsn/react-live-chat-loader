import React, { useState } from 'react';
import useChat from "../../hooks/useChat";

const Icon = () => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "32",
  height: "30",
  viewBox: "0 0 39 37",
  className: "conversations-visitor-open-icon"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
  id: "conversations-visitor-open-icon-path-10.8870447034539481",
  d: "M31.4824242 24.6256121L31.4824242 0.501369697 0.476266667 0.501369697 0.476266667 24.6256121z"
})), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(-1432 -977) translate(1415.723 959.455)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(17 17)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(6.333 .075)"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#ffffff",
  d: "M30.594 4.773c-.314-1.943-1.486-3.113-3.374-3.38C27.174 1.382 22.576.5 15.36.5c-7.214 0-11.812.882-11.843.889-1.477.21-2.507.967-3.042 2.192a83.103 83.103 0 019.312-.503c6.994 0 11.647.804 12.33.93 3.079.462 5.22 2.598 5.738 5.728.224 1.02.932 4.606.932 8.887 0 2.292-.206 4.395-.428 6.002 1.22-.516 1.988-1.55 2.23-3.044.008-.037.893-3.814.893-8.415 0-4.6-.885-8.377-.89-8.394"
})), /*#__PURE__*/React.createElement("g", {
  fill: "#ffffff",
  transform: "translate(0 5.832)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M31.354 4.473c-.314-1.944-1.487-3.114-3.374-3.382-.046-.01-4.644-.89-11.859-.89-7.214 0-11.813.88-11.843.888-1.903.27-3.075 1.44-3.384 3.363C.884 4.489 0 8.266 0 12.867c0 4.6.884 8.377.889 8.393.314 1.944 1.486 3.114 3.374 3.382.037.007 3.02.578 7.933.801l2.928 5.072a1.151 1.151 0 001.994 0l2.929-5.071c4.913-.224 7.893-.794 7.918-.8 1.902-.27 3.075-1.44 3.384-3.363.01-.037.893-3.814.893-8.414 0-4.601-.884-8.378-.888-8.394"
}))))));

const HubSpot = ({
  backgroundColor,
  loader: Loader
}) => {
  const [state, loadChat] = useChat({
    loadWhenIdle: false
  });
  const [isLoading, setIsLoading] = useState(false);

  if (state === 'complete') {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 1051,
      // 1 more than the actual widget
      paddingBottom: '16px',
      position: 'fixed',
      bottom: 0,
      paddingLeft: '0px',
      paddingRight: '16px',
      left: 'inherit',
      right: '0px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex !important',
      paddingLeft: '24px !important',
      paddingTop: '20px !important',
      float: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'baseline',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsLoading(true);
      loadChat({
        open: true
      });
    },
    "aria-label": "Open live chat",
    "aria-haspopup": "false",
    style: {
      fontWeight: 400,
      fontSize: '14px',
      color: 'rgb(51, 71, 91)',
      backgroundColor: backgroundColor || 'rgb(66, 91, 118)',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.2) 0px 2px 24px',
      border: 'medium none',
      transition: 'box-shadow 150ms ease-in-out 0s',
      position: 'relative',
      borderRadius: '50%',
      height: '60px',
      width: '60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      width: '32px',
      height: '30px',
      lineHeight: 1
    }
  }, isLoading && Loader ? Loader : /*#__PURE__*/React.createElement(Icon, null))))));
};

export default HubSpot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0h1YlNwb3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDaGF0IiwiSWNvbiIsIkh1YlNwb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2FkZXIiLCJMb2FkZXIiLCJzdGF0ZSIsImxvYWRDaGF0IiwibG9hZFdoZW5JZGxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiekluZGV4IiwicGFkZGluZ0JvdHRvbSIsInBvc2l0aW9uIiwiYm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwicGFkZGluZ1RvcCIsImZsb2F0IiwiYWxpZ25JdGVtcyIsImxpbmVIZWlnaHQiLCJvcGVuIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0b3AiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsSUFFRUMsUUFGRixRQUdPLE9BSFA7QUFJQSxPQUFPQyxPQUFQOztBQUNBLE1BQU1DLElBQUksR0FBRyxtQkFDWDtBQUNFLEVBQUEsS0FBSyxFQUFDLDRCQURSO0FBRUUsRUFBQSxVQUFVLEVBQUMsOEJBRmI7QUFHRSxFQUFBLEtBQUssRUFBQyxJQUhSO0FBSUUsRUFBQSxNQUFNLEVBQUMsSUFKVDtBQUtFLEVBQUEsT0FBTyxFQUFDLFdBTFY7QUFNRSxFQUFBLFNBQVMsRUFBQztBQU5aLGdCQVFFLCtDQUNFO0FBQ0UsRUFBQSxFQUFFLEVBQUMsMERBREw7QUFFRSxFQUFBLENBQUMsRUFBQztBQUZKLEVBREYsQ0FSRixlQWNFO0FBQUcsRUFBQSxJQUFJLEVBQUMsTUFBUjtBQUFlLEVBQUEsUUFBUSxFQUFDLFNBQXhCO0FBQWtDLEVBQUEsTUFBTSxFQUFDLE1BQXpDO0FBQWdELEVB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TUxjLE1BQUFBLEtBQUssRUFBRSxNQU5GO0FBT0xELE1BQUFBLE1BQU0sRUFBRSxNQVBIO0FBUUxULE1BQUFBLFVBQVUsRUFBRTtBQVJQO0FBRFQsS0FZR2QsU0FBUyxJQUFJSixNQUFiLEdBQXNCQSxNQUF0QixnQkFBK0Isb0JBQUMsSUFBRCxPQVpsQyxDQXRCRixDQVJGLENBUkYsQ0FaRixDQURGO0FBc0VELENBbEZEOztBQW9GQSxlQUFlSCxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIFJlYWN0RWxlbWVudCxcbiAgdXNlU3RhdGVcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlQ2hhdCBmcm9tICcuLi8uLi9ob29rcy91c2VDaGF0J1xuY29uc3QgSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICB3aWR0aD1cIjMyXCJcbiAgICBoZWlnaHQ9XCIzMFwiXG4gICAgdmlld0JveD1cIjAgMCAzOSAzN1wiXG4gICAgY2xhc3NOYW1lPVwiY29udmVyc2F0aW9ucy12aXNpdG9yLW9wZW4taWNvblwiXG4gID5cbiAgICA8ZGVmcz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGlkPVwiY29udmVyc2F0aW9ucy12aXNpdG9yLW9wZW4taWNvbi1wYXRoLTEwLjg4NzA0NDcwMzQ1Mzk0ODFcIlxuICAgICAgICBkPVwiTTMxLjQ4MjQyNDIgMjQuNjI1NjEyMUwzMS40ODI0MjQyIDAuNTAxMzY5Njk3IDAuNDc2MjY2NjY3IDAuNTAxMzY5Njk3IDAuNDc2MjY2NjY3IDI0LjYyNTYxMjF6XCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9kZWZzPlxuICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNDMyIC05NzcpIHRyYW5zbGF0ZSgxNDE1LjcyMyA5NTkuNDU1KVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTcgMTcpXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYuMzMzIC4wNzUpXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgIGQ9XCJNMzAuNTk0IDQuNzczYy0uMzE0LTEuOTQzLTEuNDg2LTMuMTEzLTMuMzc0LTMuMzhDMjcuMTc0IDEuMzgyIDIyLjU3Ni41IDE1LjM2LjVjLTcuMjE0IDAtMTEuODEyLjg4Mi0xMS44NDMuODg5LTEuNDc3LjIxLTIuNTA3Ljk2Ny0zLjA0MiAyLjE5MmE4My4xMDMgODMuMTAzIDAgMDE5LjMxMi0uNTAzYzYuOTk0IDAgMTEuNjQ3LjgwNCAxMi4zMy45MyAzLjA3OS40NjIgNS4yMiAyLjU5OCA1LjczOCA1LjcyOC4yMjQgMS4wMi45MzIgNC42MDYuOTMyIDguODg3IDAgMi4yOTItLjIwNiA0LjM5NS0uNDI4IDYuMDAyIDEuMjItLjUxNiAxLjk4OC0xLjU1IDIuMjMtMy4wNDQuMDA4LS4wMzcuODkzLTMuODE0Ljg5My04LjQxNSAwLTQuNi0uODg1LTguMzc3LS44OS04LjM5NFwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBmaWxsPVwiI2ZmZmZmZlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDUuODMyKVwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zMS4zNTQgNC40NzNjLS4zMTQtMS45NDQtMS40ODctMy4xMTQtMy4zNzQtMy4zODItLjA0Ni0uMDEtNC42NDQtLjg5LTExLjg1OS0uODktNy4yMTQgMC0xMS44MTMuODgtMTEuODQzLjg4OC0xLjkwMy4yNy0zLjA3NSAxLjQ0LTMuMzg0IDMuMzYzQy44ODQgNC40ODkgMCA4LjI2NiAwIDEyLjg2N2MwIDQuNi44ODQgOC4zNzcuODg5IDguMzkzLjMxNCAxLjk0NCAxLjQ4NiAzLjExNCAzLjM3NCAzLjM4Mi4wMzcuMDA3IDMuMDIuNTc4IDcuOTMzLjgwMWwyLjkyOCA1LjA3MmExLjE1MSAxLjE1MSAwIDAwMS45OTQgMGwyLjkyOS01LjA3MWM0LjkxMy0uMjI0IDcuODkzLS43OTQgNy45MTgtLjggMS45MDItLjI3IDMuMDc1LTEuNDQgMy4zODQtMy4zNjMuMDEtLjAzNy44OTMtMy44MTQuODkzLTguNDE0IDAtNC42MDEtLjg4NC04LjM3OC0uODg4LTguMzk0XCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IEh1YlNwb3QgPSAoe1xuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIGxvYWRlcjogTG9hZGVyXG59OiB7XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZ1xuICBsb2FkZXI/OiBSZWFjdEVsZW1lbnRcbn0pOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBbc3RhdGUsIGxvYWRDaGF0XSA9IHVzZUNoYXQoeyBsb2FkV2hlbklkbGU6IGZhbHNlIH0pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgaWYgKHN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDogMTA1MSwgLy8gMSBtb3JlIHRoYW4gdGhlIGFjdHVhbCB3aWRnZXRcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzBweCcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzE2cHgnLFxuICAgICAgICBsZWZ0OiAnaW5oZXJpdCcsXG4gICAgICAgIHJpZ2h0OiAnMHB4J1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4ICFpbXBvcnRhbnQnLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMjRweCAhaW1wb3J0YW50JyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiAnMjBweCAhaW1wb3J0YW50JyxcbiAgICAgICAgICBmbG9hdDogJ3JpZ2h0J1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICBsb2FkQ2hhdCh7IG9wZW46IHRydWUgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gbGl2ZSBjaGF0XCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJmYWxzZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiKDUxLCA3MSwgOTEpJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IgfHwgJ3JnYig2NiwgOTEsIDExOCknLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgJ3JnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggMjRweCcsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ21lZGl1bSBub25lJyxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMTUwbXMgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAnNjBweCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMnB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgTG9hZGVyID8gTG9hZGVyIDogPEljb24gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSHViU3BvdFxuIl19