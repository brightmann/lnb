import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    ...props.components
  }, {Callout} = _components;
  if (!Callout) _missingMdxReference("Callout", true);
  return _jsxs(_Fragment, {
    children: [_jsx(Callout, {
      type: "warning",
      children: "Hello I am a callout"
    }), "\n", _jsx(_components.h1, {
      id: "hello-world",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#hello-world",
        children: "Hello World"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Welcome to my blog ", _jsx(_components.code, {
        children: "inline code"
      })]
    })]
  });
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
