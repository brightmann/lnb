import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "understanding-the-drag-and-drop-api",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#understanding-the-drag-and-drop-api",
        children: "Understanding the Drag and Drop API"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
        children: "Drag and Drop API"
      }), " provides a way to enable drag-and-drop functionality in web applications. This allows users to drag elements and drop them into designated areas, making for an interactive and user-friendly experience."]
    }), "\n", _jsx(_components.h3, {
      id: "key-concepts",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-concepts",
        children: "Key Concepts"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Draggable Elements"
        }), ": Elements that can be dragged."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Drop Targets"
        }), ": Areas where draggable elements can be dropped."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data Transfer"
        }), ": Mechanism to transfer data during drag operations."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Drag Events"
        }), ": Events triggered during the drag-and-drop process (e.g., ", _jsx(_components.code, {
          children: "dragstart"
        }), ", ", _jsx(_components.code, {
          children: "dragover"
        }), ", ", _jsx(_components.code, {
          children: "drop"
        }), ")."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "basic-drag-and-drop-example",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#basic-drag-and-drop-example",
        children: "Basic Drag and Drop Example"
      })
    }), "\n", _jsx(_components.p, {
      children: "This example demonstrates a simple drag-and-drop interaction between a draggable box and a drop area."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "html",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "// ..."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop-content\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Drop Area</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drag-box\""
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Drag Item</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dropContent"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "querySelector"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\".drop-content\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dragBox"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "querySelector"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\".drag-box\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    dragBox."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragstart\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Drag started\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    dragBox."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragend\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Drag ended\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragover\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Dragging over drop area\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Dropped in drop area\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "advanced-drag-and-drop-with-custom-data",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#advanced-drag-and-drop-with-custom-data",
        children: "Advanced Drag and Drop with Custom Data"
      })
    }), "\n", _jsx(_components.p, {
      children: "This example demonstrates setting custom data for the drag operation and handling the drop event to update the drop area with the dragged content."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "html",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  // ..."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop-content\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Drop Area</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drag-box\""
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Drag Item</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dropContent"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "querySelector"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\".drop-content\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dragBox"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "querySelector"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\".drag-box\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      dragBox."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragstart\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.dataTransfer."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setData"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"text/plain\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Custom drag text\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.dataTransfer."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setData"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"text/html\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"<p>Custom drag HTML</p>\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "        const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " img"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "createElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"img\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        img.src "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"./assets/image.jpg\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.dataTransfer."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setDragImage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(img, "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "50"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "50"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragover\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.dataTransfer.dropEffect "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"copy\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        dropContent.innerHTML "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.dataTransfer."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getData"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"text/html\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        dragBox."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "remove"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "html"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "practical-application-sortable-list",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#practical-application-sortable-list",
        children: "Practical Application: Sortable List"
      })
    }), "\n", _jsx(_components.p, {
      children: "In this practical example, we implement a sortable list where users can rearrange items by dragging and dropping."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "html",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<!"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "DOCTYPE"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " html"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "html"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " lang"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"en\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  //..."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "ul"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " id"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"sortableList\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Item 1</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Item 2</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Item 3</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Item 4</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " draggable"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"true\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Item 5</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "ul"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " sortableList"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getElementById"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"sortableList\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " draggingElement "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      sortableList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragstart\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.target.classList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "add"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragging\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        draggingElement "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.target;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      sortableList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragover\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.dataTransfer.dropEffect "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"move\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "        if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (e.target "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " draggingElement "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.target.tagName "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"LI\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "          const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " targetRect"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.target."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getBoundingClientRect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "          const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " mouseY"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.clientY "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " targetRect.top;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "          const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " targetHeight"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " targetRect.height;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "          if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (mouseY "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " targetHeight "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            sortableList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "insertBefore"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(draggingElement, e.target);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "else"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            sortableList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "insertBefore"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(draggingElement, e.target.nextSibling);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      sortableList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragend\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        e.target.classList."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "remove"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragging\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        draggingElement "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "html"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "extended-knowledge",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#extended-knowledge",
        children: "Extended Knowledge"
      })
    }), "\n", _jsx(_components.h4, {
      id: "drag-and-drop-events",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#drag-and-drop-events",
        children: "Drag and Drop Events"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "dragstart"
        }), ": Triggered when the drag operation starts."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "drag"
        }), ": Triggered periodically during the drag operation."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "dragend"
        }), ": Triggered when the drag operation ends."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "dragenter"
        }), ": Triggered when the dragged element enters a drop target."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "dragover"
        }), ": Triggered when the dragged element is over a drop target."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "dragleave"
        }), ": Triggered when the dragged element leaves a drop target."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "drop"
        }), ": Triggered when the dragged element is dropped on a drop target."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "handling-different-data-types",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#handling-different-data-types",
        children: "Handling Different Data Types"
      })
    }), "\n", _jsx(_components.p, {
      children: "The Drag and Drop API allows handling different data types, such as text, HTML, and custom formats. This enables complex interactions, like dragging files into the browser for upload."
    }), "\n", _jsx(_components.h3, {
      id: "practical-tips-and-extensions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#practical-tips-and-extensions",
        children: "Practical Tips and Extensions"
      })
    }), "\n", _jsx(_components.h4, {
      id: "adding-visual-feedback",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#adding-visual-feedback",
        children: "Adding Visual Feedback"
      })
    }), "\n", _jsx(_components.p, {
      children: "Providing visual feedback during drag-and-drop operations enhances the user experience. You can change the style of drop targets when a draggable element is over them."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragenter\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  dropContent.style.borderColor "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"green\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "});"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragleave\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  dropContent.style.borderColor "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"#000\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "preventing-default-behavior",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#preventing-default-behavior",
        children: "Preventing Default Behavior"
      })
    }), "\n", _jsx(_components.p, {
      children: "It's important to prevent the default behavior of drag-and-drop events to ensure that custom behavior is applied."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragover\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "());"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "());"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "preventing-default-behavior-in-drag-and-drop",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#preventing-default-behavior-in-drag-and-drop",
        children: "Preventing Default Behavior in Drag and Drop"
      })
    }), "\n", _jsx(_components.p, {
      children: "When implementing drag-and-drop functionality in web applications, it's crucial to prevent the default behavior of the browser's drag-and-drop events. This ensures that your custom behavior is applied correctly. Here’s an explanation of why this is important and what issues can arise if not done."
    }), "\n", _jsx(_components.h4, {
      id: "default-behavior-of-drag-and-drop-events",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#default-behavior-of-drag-and-drop-events",
        children: "Default Behavior of Drag and Drop Events"
      })
    }), "\n", _jsx(_components.p, {
      children: "By default, the browser's drag-and-drop functionality may not align with your desired behavior for the application. For instance:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["The default action for ", _jsx(_components.code, {
          children: "dragover"
        }), " is to prevent dropping. If the default behavior is not prevented, the ", _jsx(_components.code, {
          children: "drop"
        }), " event might not be triggered."]
      }), "\n", _jsxs(_components.li, {
        children: ["The default action for ", _jsx(_components.code, {
          children: "drop"
        }), " could involve opening the file (in case of files being dragged), navigating away from the current page, or some other unintended action."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "preventing-default-behavior-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#preventing-default-behavior-1",
        children: "Preventing Default Behavior"
      })
    }), "\n", _jsx(_components.p, {
      children: "By preventing the default behavior, you ensure that your application handles the events as intended. Here’s how it’s typically done:"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragover\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "());"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "());"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "explanation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#explanation",
        children: "Explanation"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Preventing ", _jsx(_components.code, {
              children: "dragover"
            }), " Default Behavior"]
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "dragover"
            }), " event must have its default behavior prevented to indicate that the drop target is valid. Without this, the ", _jsx(_components.code, {
              children: "drop"
            }), " event will not fire."]
          }), "\n", _jsxs(_components.li, {
            children: ["Preventing default behavior in ", _jsx(_components.code, {
              children: "dragover"
            }), " allows you to customize how the drop target reacts visually (e.g., highlighting the target area)."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Preventing ", _jsx(_components.code, {
              children: "drop"
            }), " Default Behavior"]
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "drop"
            }), " event's default behavior needs to be prevented to handle the dropped data as required by your application. This allows you to define custom behaviors, such as processing the dropped files or moving elements within a page."]
          }), "\n", _jsx(_components.li, {
            children: "Without preventing the default, the browser might try to open the file or link, causing unwanted navigation or actions."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "potential-issues-if-not-prevented",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#potential-issues-if-not-prevented",
        children: "Potential Issues if Not Prevented"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "No Drop Event"
        }), ": If ", _jsx(_components.code, {
          children: "e.preventDefault()"
        }), " is not called on ", _jsx(_components.code, {
          children: "dragover"
        }), ", the drop event will not fire, and users will be unable to drop elements as intended."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Unintended Browser Behavior"
        }), ": The browser might execute its default behavior, like opening files or links, leading to a poor user experience."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Navigation Away from Page"
        }), ": Dropping a file without preventing the default action might result in the browser attempting to open the file, causing the user to navigate away from your web application."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "practical-example",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#practical-example",
        children: "Practical Example"
      })
    }), "\n", _jsx(_components.p, {
      children: "Consider a scenario where users can drag files into a designated drop area to upload them. Preventing the default behavior ensures the files are handled by your JavaScript code instead of triggering the browser's default actions."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "html",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop-content\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Drop files here</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dropContent"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "querySelector"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\".drop-content\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"dragover\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "());"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  dropContent."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"drop\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(e.dataTransfer.files); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Handle the dropped files"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: "Conclusion"
      })
    }), "\n", _jsx(_components.p, {
      children: "Preventing the default behavior in drag-and-drop events is essential for implementing custom functionality. It ensures that the intended interactions and visual feedback occur, enhancing the user experience and preventing unwanted actions by the browser."
    }), "\n", _jsx(_components.h3, {
      id: "conclusion-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion-1",
        children: "Conclusion"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
        children: "Drag and Drop API"
      }), " provides a flexible and powerful way to add drag-and-drop functionality to web applications. By using event listeners and manipulating the DOM, developers can create interactive and dynamic user experiences."]
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
