import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1e68579"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/projects/Cinet/CINET_BBW/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b1e68579"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import App from "/src/App.jsx?t=1713882143114";
import Games from "/src/Games.jsx?t=1713882262944";
import pointshop from "/src/point-shop.jsx";
import profile from "/src/Profile.jsx";
import "/src/index.css";
import __vite__cjsImport9_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b1e68579"; const ReactDOM = __vite__cjsImport9_reactDom_client.__esModule ? __vite__cjsImport9_reactDom_client.default : __vite__cjsImport9_reactDom_client;
import { BrowserRouter, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?t=1713881388654&v=b1e68579";
export default function Main() {
  return /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 15,
      columnNumber: 42
    }, this) }, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 15,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/games", element: /* @__PURE__ */ jsxDEV(Games, {}, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 16,
      columnNumber: 47
    }, this) }, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/point-shop", element: /* @__PURE__ */ jsxDEV("pointshop", {}, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 17,
      columnNumber: 52
    }, this) }, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/profile", element: /* @__PURE__ */ jsxDEV("profile", {}, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 18,
      columnNumber: 49
    }, this) }, void 0, false, {
      fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
      lineNumber: 18,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Main;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(Main, {}, void 0, false, {
  fileName: "C:/projects/Cinet/CINET_BBW/src/main.jsx",
  lineNumber: 25,
  columnNumber: 13
}, this));
var _c;
$RefreshReg$(_c, "Main");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/projects/Cinet/CINET_BBW/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY3lDO0FBZHpDLE9BQU9BLG9CQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QixPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsZUFBZTtBQUN0QixPQUFPQyxhQUFhO0FBQ3BCLE9BQU87QUFFUCxPQUFPQyxjQUFjO0FBQ3JCLFNBQVNDLGVBQWVDLFFBQVFDLGFBQWE7QUFFN0Msd0JBQXdCQyxPQUFPO0FBQzNCLFNBQ0ksdUJBQUMsaUJBQ0csaUNBQUMsVUFDRztBQUFBLDJCQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsdUJBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUksS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrQztBQUFBLElBQ2xDLHVCQUFDLFNBQU0sTUFBSyxVQUFTLFNBQVMsdUJBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU0sS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5QztBQUFBLElBQ3pDLHVCQUFDLFNBQU0sTUFBSyxlQUFjLFNBQVMsdUJBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFVLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0Q7QUFBQSxJQUNsRCx1QkFBQyxTQUFNLE1BQUssWUFBVyxTQUFTLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFRLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkM7QUFBQSxPQUpqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0EsS0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0E7QUFFUjtBQUFDQyxLQVh1QkQ7QUFheEIsTUFBTUUsT0FBT04sU0FBU08sV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUM7QUFDaEVILEtBQUtJLE9BQU8sdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUssQ0FBRztBQUFFLElBQUFMO0FBQUFNLGFBQUFOLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkFwcCIsIkdhbWVzIiwicG9pbnRzaG9wIiwicHJvZmlsZSIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTWFpbiIsIl9jIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuaW1wb3J0IEdhbWVzIGZyb20gJy4vR2FtZXMuanN4J1xuaW1wb3J0IHBvaW50c2hvcCBmcm9tICcuL3BvaW50LXNob3AuanN4J1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlLmpzeCdcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5cbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxBcHAgLz59PjwvUm91dGU+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZ2FtZXNcIiBlbGVtZW50PXs8R2FtZXMgLz59PjwvUm91dGU+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9pbnQtc2hvcFwiIGVsZW1lbnQ9ezxwb2ludHNob3AgLz59PjwvUm91dGU+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGVsZW1lbnQ9ezxwcm9maWxlIC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICApO1xufVxuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnJvb3QucmVuZGVyKDxNYWluIC8+KTtcbiJdLCJmaWxlIjoiQzovcHJvamVjdHMvQ2luZXQvQ0lORVRfQkJXL3NyYy9tYWluLmpzeCJ9