import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
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
      id: "implementing-drag-and-drop-file-upload-in-react",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementing-drag-and-drop-file-upload-in-react",
        children: "Implementing Drag-and-Drop File Upload in React"
      })
    }), "\n", _jsx(_components.h3, {
      id: "using-libraries",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#using-libraries",
        children: "Using Libraries"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "react-dropzone"
          })
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Lightweight and easy-to-use for file drag-and-drop."
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsxs(_components.p, {
              children: ["Installation: ", _jsx(_components.code, {
                children: "npm install react-dropzone"
              }), "."]
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Usage:"
            }), "\n", _jsx(_components.figure, {
              "data-rehype-pretty-code-figure": "",
              children: _jsx(_components.pre, {
                style: {
                  backgroundColor: "#24292e",
                  color: "#e1e4e8"
                },
                tabIndex: "0",
                "data-language": "jsx",
                "data-theme": "github-dark",
                children: _jsxs(_components.code, {
                  "data-language": "jsx",
                  "data-theme": "github-dark",
                  style: {
                    display: "grid"
                  },
                  children: [_jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " React, { useCallback } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react\""
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
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " { useDropzone } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react-dropzone\""
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
                        color: "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " Dropzone"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ({ "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "onDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " }) "
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
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: " onDropCallback"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " useCallback"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(onDrop, [onDrop]);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " { "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "getRootProps"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "getInputProps"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "isDragActive"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " useDropzone"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "({"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "    onDrop: onDropCallback,"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "  });"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
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
                        color: "#E1E4E8"
                      },
                      children: " {"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "..."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "getRootProps"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "()} "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "className"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"dropzone\""
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
                      children: "input"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " {"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "..."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "getInputProps"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "()} />"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "      {isDragActive "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "        <"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#85E89D"
                      },
                      children: "p"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ">Drop the files here ...</"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#85E89D"
                      },
                      children: "p"
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
                      children: "      ) "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "        <"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#85E89D"
                      },
                      children: "p"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ">Drag 'n' drop some files here, or click to select files</"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#85E89D"
                      },
                      children: "p"
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
                      children: "      )}"
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
                      children: "div"
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
                      children: "  );"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "};"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "export"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " default"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " Dropzone;"
                    })]
                  })]
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "react-dnd"
          })
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "More versatile for complex drag-and-drop interactions."
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsxs(_components.p, {
              children: ["Installation: ", _jsx(_components.code, {
                children: "npm install react-dnd react-dnd-html5-backend"
              }), "."]
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Usage:"
            }), "\n", _jsx(_components.figure, {
              "data-rehype-pretty-code-figure": "",
              children: _jsx(_components.pre, {
                style: {
                  backgroundColor: "#24292e",
                  color: "#e1e4e8"
                },
                tabIndex: "0",
                "data-language": "jsx",
                "data-theme": "github-dark",
                children: _jsxs(_components.code, {
                  "data-language": "jsx",
                  "data-theme": "github-dark",
                  style: {
                    display: "grid"
                  },
                  children: [_jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " React "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react\""
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
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " { useDrop } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react-dnd\""
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
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " { HTML5Backend } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react-dnd-html5-backend\""
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
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " { DndProvider } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react-dnd\""
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
                        color: "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " FileDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ({ "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "onDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " }) "
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
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " [{ "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "isOver"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " }, "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "drop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " useDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "({"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "    accept: "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"file\""
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "    drop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ": ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "item"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "monitor"
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
                        color: "#F97583"
                      },
                      children: "      if"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " (monitor) {"
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
                      children: " files"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " monitor."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "getItem"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "().files;"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "        onDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(files);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "      }"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "    },"
                    })
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "    collect"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ": ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "monitor"
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
                      children: " ({"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "      isOver: monitor."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "isOver"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(),"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "    }),"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "  });"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
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
                      children: " ref"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{drop} "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "className"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "`dropzone ${"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "isOver"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ?"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"hover\""
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " :"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"\"}`"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "}>"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "      Drop files here"
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
                      children: "div"
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
                      children: "  );"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "};"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " App"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " () "
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
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " handleDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "files"
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
                      children: "(files);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "  };"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
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
                        color: "#79B8FF"
                      },
                      children: "DndProvider"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " backend"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{HTML5Backend}>"
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
                        color: "#79B8FF"
                      },
                      children: "FileDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " onDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{handleDrop} />"
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
                        color: "#79B8FF"
                      },
                      children: "DndProvider"
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
                      children: "  );"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "};"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "export"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " default"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " App;"
                    })]
                  })]
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "custom-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#custom-implementation",
        children: "Custom Implementation"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Create a Basic Component"
          })
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Handle file drag-and-drop events in a React component."
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Example:"
            }), "\n", _jsx(_components.figure, {
              "data-rehype-pretty-code-figure": "",
              children: _jsx(_components.pre, {
                style: {
                  backgroundColor: "#24292e",
                  color: "#e1e4e8"
                },
                tabIndex: "0",
                "data-language": "tsx",
                "data-theme": "github-dark",
                children: _jsxs(_components.code, {
                  "data-language": "tsx",
                  "data-theme": "github-dark",
                  style: {
                    display: "grid"
                  },
                  children: [_jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " React, { useState, useCallback } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react\""
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
                        color: "#F97583"
                      },
                      children: "interface"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " DropzoneProps"
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
                        color: "#B392F0"
                      },
                      children: "  onFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "files"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " File"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "[]) "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: " void"
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
                      children: "}"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " Dropzone"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " React"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "FC"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "DropzoneProps"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "> "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ({ "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "onFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " }) "
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
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ["
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "highlight"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "setHighlight"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " useState"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "false"
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
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " handleDragOver"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "event"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " React"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "DragEvent"
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
                      children: "    event."
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
                        color: "#B392F0"
                      },
                      children: "    setHighlight"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "true"
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
                      children: "  };"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " handleDragLeave"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " () "
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
                        color: "#B392F0"
                      },
                      children: "    setHighlight"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "false"
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
                      children: "  };"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " handleDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "event"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " React"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "DragEvent"
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
                      children: "    event."
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
                        color: "#F97583"
                      },
                      children: "    const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: " files"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " Array."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(event.dataTransfer.files);"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "    onFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(files);"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "    setHighlight"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "false"
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
                      children: "  };"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " handleFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "    event"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " React"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "ChangeEvent"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "HTMLInputElement"
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
                      children: "  ) "
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
                        color: "#F97583"
                      },
                      children: "    const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: " files"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " Array."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(event.target.files "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "||"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " []);"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "    onFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(files);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "  };"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
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
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "      className"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "`dropzone ${"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "highlight"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ?"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"highlight\""
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " :"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"\"}`"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "}"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "      onDragOver"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{handleDragOver}"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "      onDragLeave"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{handleDragLeave}"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "      onDrop"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{handleDrop}"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "    >"
                    })
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
                      children: "input"
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "        type"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"file\""
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "        multiple"
                    })
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "        className"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"file-input\""
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "        onChange"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{handleFilesAdded}"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "      />"
                    })
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
                      children: "p"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ">Drag & drop files here, or click to select files</"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#85E89D"
                      },
                      children: "p"
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
                      children: "div"
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
                      children: "  );"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "};"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "export"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " default"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " Dropzone;"
                    })]
                  })]
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Use the Custom Component"
          })
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Integrate the custom component into your project."
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Example:"
            }), "\n", _jsx(_components.figure, {
              "data-rehype-pretty-code-figure": "",
              children: _jsx(_components.pre, {
                style: {
                  backgroundColor: "#24292e",
                  color: "#e1e4e8"
                },
                tabIndex: "0",
                "data-language": "tsx",
                "data-theme": "github-dark",
                children: _jsxs(_components.code, {
                  "data-language": "tsx",
                  "data-theme": "github-dark",
                  style: {
                    display: "grid"
                  },
                  children: [_jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " React, { useState } "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"react\""
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
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " Dropzone "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: " \"./Dropzone\""
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
                        color: "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " FileUpload"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " React"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "FC"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " () "
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
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ["
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "files"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "setFiles"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " useState"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "File"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "[]>([]);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " handleFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "newFiles"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " File"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "[]) "
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
                        color: "#B392F0"
                      },
                      children: "    setFiles"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "prevFiles"
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
                      children: " ["
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "..."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "prevFiles, "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "..."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "newFiles]);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "  };"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " ("
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
                        color: "#79B8FF"
                      },
                      children: "Dropzone"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " onFilesAdded"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{handleFilesAdded} />"
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
                      children: "ul"
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
                      children: "        {files."
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "map"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "file"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#FFAB70"
                      },
                      children: "index"
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
                      children: " ("
                    })]
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "          <"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#85E89D"
                      },
                      children: "li"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " key"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "{index}>{file.name}</"
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
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "        ))}"
                    })
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "      </"
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
                      children: "div"
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
                      children: "  );"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "};"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
                  }), "\n", _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: "export"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " default"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " FileUpload;"
                    })]
                  })]
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "By using either a library or a custom implementation, you can efficiently add drag-and-drop file upload functionality to your React project."
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
