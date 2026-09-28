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
    ...props.components
  }, {CollapsibleCodeBlock} = _components;
  if (!CollapsibleCodeBlock) _missingMdxReference("CollapsibleCodeBlock", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "detailed-explanation-of-the-native-js-code-snippet",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#detailed-explanation-of-the-native-js-code-snippet",
        children: "Detailed Explanation of the Native JS Code Snippet"
      })
    }), "\n", _jsx(CollapsibleCodeBlock, {
      hint: "Click to view demo.html",
      children: _jsx(_components.figure, {
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
                children: "script"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " src"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"./assets/run.js\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "></"
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
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  // 大文件上传分片"
              })
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
                children: " fileDom"
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
                children: "\"input\""
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
                children: "  const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " CHUNK_SIZE"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 5"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1024"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1024"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; "
              }), _jsx(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 5 MB"
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
                children: " MAX_WORKER"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " navigator.hardwareConcurrency "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "||"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 4"
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
                children: "  let"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " finished "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 0"
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
                  color: "#6A737D"
                },
                children: "  // const worker = new Worker(\"./assets/fileworker.js\", {"
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  //   type: \"module\","
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  // });"
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  fileDom."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "onchange"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " async"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " function"
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
                  color: "#F97583"
                },
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " file"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " e.target.files["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "];"
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
                children: " chunklength"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "ceil"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(file.size "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "/"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " CHUNK_SIZE"
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
                children: " count"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "ceil"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(chunklength "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "/"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " MAX_WORKER"
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
                children: " result"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " [];"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    for"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "let"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " MAX_WORKER"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; i"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "++"
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
                children: "      const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " worker"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " Worker"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"./assets/fileworker.js\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        type: "
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"module\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ","
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
                  color: "#F97583"
                },
                children: "      const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " startIndex"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " count;"
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
                children: " endIndex "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " startIndex "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " count;"
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
                children: " (endIndex "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunklength) {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        endIndex "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunklength;"
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      }"
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      worker."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "postMessage"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "([file, "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "CHUNK_SIZE"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", startIndex, endIndex]);"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      worker."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "onmessage"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " function"
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
                children: "        finished"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "++"
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
                children: "        worker."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "terminate"
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
                children: "        e.data."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "forEach"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "item"
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
                children: "          result[item.index] "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " item;"
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        });"
              })
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
                children: " (finished "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "==="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " MAX_WORKER"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") {"
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "          // 处理后续上传的任务"
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "          console."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(result);"
              })]
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
                children: "      };"
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    }"
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  };"
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
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"./md5.min.js\""
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
              children: "console."
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
              children: "\"my task is running\""
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
              children: "self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
              children: "file"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "CHUNK_SIZE"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "startIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "endIndex"
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
                color: "#E1E4E8"
              },
              children: " e.data;"
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
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [];"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startIndex; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " endIndex; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunk"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getChunk"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file, "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "CHUNK_SIZE"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", i);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    result."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(chunk);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(result);"
            })]
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getChunk"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "size"
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
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " Promise"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "reject"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " index "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " size;"
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
              children: " end"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " start "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " size;"
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
              children: " chunkFile"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " file."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(start, end);"
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
              children: " fr"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " FileReader"
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
              children: "    fr."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onload"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
                color: "#F97583"
              },
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " arrbuffer"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.target.result;"
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
              children: " hash"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " SparkMD5.ArrayBuffer."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "hash"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(arrbuffer);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      resolve"
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
              children: "        start,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        end,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        chunkFile,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        index,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        hash,"
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    };"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    fr."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "readAsArrayBuffer"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(chunkFile);"
            })]
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "code-implementation-idea",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#code-implementation-idea",
        children: "Code Implementation Idea"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "File Selection"
          }), "\nUsers select files via ", _jsx(_components.code, {
            children: "<input type=\"file\" />"
          }), "."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Chunk Size and Maximum Concurrency"
          }), "\nSet the chunk size to 5MB (", _jsx(_components.code, {
            children: "CHUNK_SIZE"
          }), ") and use ", _jsx(_components.code, {
            children: "navigator.hardwareConcurrency"
          }), " to get the system's hardware concurrency, with a default of 4 (", _jsx(_components.code, {
            children: "MAX_WORKER"
          }), ")."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "File Chunking and Task Distribution"
          }), "\nAfter selecting the file, calculate the total chunks (", _jsx(_components.code, {
            children: "chunklength"
          }), ") and the number of chunks each Worker needs to process (", _jsx(_components.code, {
            children: "count"
          }), ")."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Creating and Assigning Workers"
          }), "\nCreate multiple Worker instances, each processing a portion of the chunks."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Worker Processing Logic"
          }), "\nWorkers receive the file, chunk size, start, and end indices, read the corresponding chunks, and compute their hash values."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Result Collection and Processing"
          }), "\nThe main thread receives the results from Workers, collects all chunk information, and handles subsequent upload tasks once all Workers have completed their tasks."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "code-highlights",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#code-highlights",
        children: "Code Highlights"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Parallel Processing"
          }), "\nUsing Web Workers for parallel processing of file chunks, improving processing speed."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Dynamic Worker Creation"
          }), "\nDynamically create Workers based on the system's hardware concurrency to optimize performance."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "MD5 Hash Calculation"
          }), "\nCalculate the MD5 hash value for each chunk to ensure data integrity."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "learning-code-design",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#learning-code-design",
        children: "Learning Code Design"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Step-by-Step Understanding"
          }), "\nUnderstand the basic principles of file reading and chunking first, then learn how to create and use Web Workers for parallel processing."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Hands-On Practice"
          }), "\nTry to write a simplified version of the code yourself, then gradually add features."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Debugging and Optimization"
          }), "\nUse debugging tools to observe the code execution process, analyze performance bottlenecks, and optimize."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "disadvantages-of-native-js-code-for-large-file-uploads",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#disadvantages-of-native-js-code-for-large-file-uploads",
        children: "Disadvantages of Native JS Code for Large File Uploads"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Browser Compatibility"
          }), "\nWeb Workers and some modern APIs may not be compatible with older browsers."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Network Instability"
          }), "\nIf the network is interrupted, chunks need to be re-uploaded, which may increase upload time."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Memory Usage"
          }), "\nReading multiple chunks simultaneously may use a lot of memory, especially when handling large files."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "worker-api-summary",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#worker-api-summary",
        children: "Worker API Summary"
      })
    }), "\n", _jsx(_components.h3, {
      id: "application-scenarios",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#application-scenarios",
        children: "Application Scenarios"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "CPU-Intensive Tasks"
          }), "\nSuch as large file processing, image processing, complex calculations, etc."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Long-Running Tasks"
          }), "\nTo avoid blocking the main thread and improve user experience."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "example-code",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-code",
        children: "Example Code"
      })
    }), "\n", _jsx(_components.h4, {
      id: "example-1-simple-worker",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-1-simple-worker",
        children: "Example 1: Simple Worker"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "js",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// worker.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.data "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
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
              children: "  self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(result);"
            })]
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// main.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " worker"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Worker"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"worker.js\""
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
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "10"
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
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
              children: "  console."
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
              children: "\"Result:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", e.data); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Result: 20"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "example-2-processing-large-arrays",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-2-processing-large-arrays",
        children: "Example 2: Processing Large Arrays"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "js",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// worker.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.data;"
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
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " data."
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
              children: "item"
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
              children: " item "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
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
              children: "  self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(result);"
            })]
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// main.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " worker"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Worker"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"worker.js\""
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " largeArray"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1000000"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "fill"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
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
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(largeArray);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
              children: "  console."
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
              children: "\"Processed array:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", e.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "example-3-file-chunk-processing",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-3-file-chunk-processing",
        children: "Example 3: File Chunk Processing"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "js",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// worker.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "file"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "chunkSize"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "start"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "end"
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
                color: "#E1E4E8"
              },
              children: " e.data;"
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
              children: " chunks"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [];"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " start; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " end; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunk"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " file."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize, (i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    chunks."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(chunk);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(chunks);"
            })]
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// main.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " file"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Assume this is a File object from an input element"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunkSize"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1024"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1024"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 1 MB"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " worker"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Worker"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'worker.js'"
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
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "([file, chunkSize, "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ceil"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file.size "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize)]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "  console."
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
              children: "'File chunks:'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", e.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "implementing-large-file-upload-in-react",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementing-large-file-upload-in-react",
        children: "Implementing Large File Upload in React"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Chunk Upload"
          }), "\nSplit the file into chunks and upload them individually, with backend APIs handling chunk reception and merging."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Using Web Worker"
          }), "\nCreate Web Workers in React for file chunk processing and hash calculation."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Upload Progress"
          }), "\nImplement an upload progress bar to display the status of each chunk upload."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "example-code-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-code-1",
        children: "Example Code"
      })
    }), "\n", _jsx(CollapsibleCodeBlock, {
      children: _jsx(_components.figure, {
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
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " FileUpload"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "() {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "setUploadProgress"
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
                children: "0"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " handleFileChange"
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
                  color: "#F97583"
                },
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " file"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " e.target.files["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "];"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " chunkSize"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 5"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " _ "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1024"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " _ "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1024"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; "
              }), _jsx(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 5 MB"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " totalChunks"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "ceil"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(file.size "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "/"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize);"
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
                children: "    for"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "let"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " totalChunks; i"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "++"
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
                children: "      const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " chunk"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " file."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "slice"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize, (i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize);"
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
                children: " formData"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " FormData"
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
                children: "      formData."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "append"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"file\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", chunk);"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      formData."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "append"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"chunkIndex\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", i);"
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "      fetch"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"/upload\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        method: "
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"POST\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ","
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        body: formData,"
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      })."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "response"
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
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " (response.ok) {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "          setUploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "prev"
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
                children: " prev "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1"
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
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    }"
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
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
                children: "return"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
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
                children: "<"
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
                children: "input"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " type"
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
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " onChange"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{handleFileChange} />"
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
                children: "progress"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " value"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{uploadProgress} "
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "max"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"100\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " />"
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
                children: "); }"
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
      })
    }), "\n", _jsx(_components.h4, {
      id: "generic-component-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#generic-component-implementation",
        children: "Generic Component Implementation"
      })
    }), "\n", _jsx(CollapsibleCodeBlock, {
      children: _jsx(_components.figure, {
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
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " useFileUpload"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "url"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "chunkSize"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 5"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " _ "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1024"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " _ "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1024"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "setUploadProgress"
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
                children: "0"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " uploadFile"
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
                children: "file"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " totalChunks"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "ceil"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(file.size "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "/"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize);"
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
                children: "    for"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "let"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " totalChunks; i"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "++"
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
                children: "      const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " chunk"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " file."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "slice"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize, (i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize);"
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
                children: " formData"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " FormData"
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
                children: "      formData."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "append"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"file\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", chunk);"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      formData."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "append"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"chunkIndex\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", i);"
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "      fetch"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(url, {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        method: "
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"POST\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ","
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        body: formData,"
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      })."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "response"
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
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " (response.ok) {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "          setUploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "prev"
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
                children: " prev "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1"
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
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    }"
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
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
                children: "return"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " { uploadProgress, uploadFile };"
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
                children: "function"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " FileUpload"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "({ "
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "url"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " }) {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " { "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadFile"
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
                children: " useFileUpload"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(url);"
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
                children: " handleFileChange"
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
                  color: "#F97583"
                },
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " file"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " e.target.files["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "];"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "uploadFile"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(file);"
              })]
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
                children: "return"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
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
                children: "<"
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
                children: "input"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " type"
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
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " onChange"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{handleFileChange} />"
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
                children: "progress"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " value"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{uploadProgress} "
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "max"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"100\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " />"
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
                children: "); }"
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
      })
    }), "\n", _jsx(_components.h4, {
      id: "implementing-large-file-upload-in-typescript",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementing-large-file-upload-in-typescript",
        children: "Implementing Large File Upload in TypeScript"
      })
    }), "\n", _jsx(CollapsibleCodeBlock, {
      children: _jsx(_components.figure, {
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
                children: " UseFileUploadProps"
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
                  color: "#FFAB70"
                },
                children: "url"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
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
                  color: "#FFAB70"
                },
                children: "chunkSize"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " number"
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
                children: "interface"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " UseFileUploadReturn"
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
                  color: "#FFAB70"
                },
                children: "uploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " number"
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
                  color: "#B392F0"
                },
                children: "uploadFile"
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
                children: "file"
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
                children: ") "
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
                children: "function"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " useFileUpload"
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
                  color: "#FFAB70"
                },
                children: "url"
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
                  color: "#FFAB70"
                },
                children: "chunkSize"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 5"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " _ "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1024"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " _ "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1024"
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
                  color: "#E1E4E8"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " UseFileUploadProps"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " UseFileUploadReturn"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "setUploadProgress"
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
                  color: "#79B8FF"
                },
                children: "number"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">("
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " uploadFile"
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
                children: "file"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " totalChunks"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "ceil"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(file.size "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "/"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize);"
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
                children: "    for"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "let"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "; i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " totalChunks; i"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "++"
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
                children: "      const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " chunk"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " file."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "slice"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize, (i "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " chunkSize);"
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
                children: " formData"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " FormData"
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
                children: "      formData."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "append"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"file\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", chunk);"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      formData."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "append"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"chunkIndex\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", i."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "toString"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "());"
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "      fetch"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(url, {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        method: "
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"POST\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ","
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        body: formData,"
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "      })."
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "response"
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
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " (response.ok) {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "          setUploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "prev"
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
                children: " prev "
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1"
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
              children: _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    }"
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: " "
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
                children: "return"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " { uploadProgress, uploadFile };"
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
                children: "interface"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " FileUploadProps"
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
                  color: "#FFAB70"
                },
                children: "url"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
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
                  color: "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "FileUploadProps"
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
                children: "url"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " { "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadProgress"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "uploadFile"
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
                children: " useFileUpload"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "({ url });"
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
                children: " handleFileChange"
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
                children: "e"
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
                children: ">) "
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " file"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " e.target.files?.["
              }), _jsx(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "];"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "if"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " (file) {"
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "uploadFile"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(file);"
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
                children: "return"
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
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
                children: "<"
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
                children: "input"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " type"
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
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " onChange"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{handleFileChange} />"
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
                children: "progress"
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " value"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{uploadProgress} "
              }), _jsx(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "max"
              }), _jsx(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"100\""
              }), _jsx(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " />"
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
                children: "); };"
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
      })
    }), "\n", _jsx(_components.h3, {
      id: "learning-tasks-and-answers",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#learning-tasks-and-answers",
        children: "Learning Tasks and Answers"
      })
    }), "\n", _jsx(_components.h4, {
      id: "task-1-understanding-file-chunking",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#task-1-understanding-file-chunking",
        children: "Task 1: Understanding File Chunking"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Question"
      }), ": What is the basic principle of file chunking?\n", _jsx(_components.strong, {
        children: "Answer"
      }), ": File chunking is the process of splitting a large file into smaller pieces of fixed size to facilitate individual uploads, reducing single upload time and resource consumption."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Code Task"
      }), ": Write a function in JavaScript that takes a file and a chunk size as input and returns an array of file chunks.\n", _jsx(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "js",
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " chunkFile"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "chunkSize"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunks"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [];"
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
              children: " totalChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ceil"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file.size "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " totalChunks; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize;"
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
              children: " end"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file.size, start "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    chunks."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(start, end));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
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
              children: " chunks;"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Usage example:"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " file"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " File"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(["
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Hello, world!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "], "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"hello.txt\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", { type: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"text/plain\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunkSize"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 5"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 5 bytes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunks"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " chunkFile"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file, chunkSize);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(chunks); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Array of file chunks"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "task-2-creating-a-simple-web-worker",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#task-2-creating-a-simple-web-worker",
        children: "Task 2: Creating a Simple Web Worker"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Question"
      }), ": How do you create a simple Web Worker?\n", _jsx(_components.strong, {
        children: "Answer"
      }), ": You can create a Worker instance using ", _jsx(_components.code, {
        children: "new Worker('worker.js')"
      }), ", send data to the Worker using ", _jsx(_components.code, {
        children: "worker.postMessage(data)"
      }), ", and receive data from the Worker using ", _jsx(_components.code, {
        children: "worker.onmessage = function(e) {}"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Code Task"
      }), ": Write a simple Web Worker script that receives a number, doubles it, and sends it back. Also, write the main script to interact with this Worker.\n", _jsx(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "js",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// worker.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.data "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
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
              children: "  self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(result);"
            })]
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// main.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " worker"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Worker"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"worker.js\""
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
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "10"
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
              children: "worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
              children: "  console."
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
              children: "\"Result:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", e.data); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Result: 20"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "task-3-using-web-workers-in-react",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#task-3-using-web-workers-in-react",
        children: "Task 3: Using Web Workers in React"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Question"
      }), ": How do you use Web Workers in a React project?\n", _jsx(_components.strong, {
        children: "Answer"
      }), ": In a React component, create a Web Worker instance, pass data to the Worker for processing, and manage the results through state, updating the component UI."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Code Task"
      }), ": Write a React component that uses a Web Worker to double a number entered by the user and displays the result.\n", _jsx(_components.strong, {
        children: "Answer"
      }), ":"]
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
              children: " React, { useState, useEffect } "
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " DoubleNumber"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "() {"
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
              children: "number"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setNumber"
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
              children: "0"
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
              children: "result"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setResult"
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
              children: "null"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " worker;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "  useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
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
              children: "    worker "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Worker"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"worker.js\""
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
              children: "    worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
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
                color: "#B392F0"
              },
              children: "      setResult"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(e.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    };"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    return"
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
              children: " worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "terminate"
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
              children: "  }, []);"
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
              children: " handleChange"
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
                color: "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.target.value;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    setNumber"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(value);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    worker."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Number"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(value));"
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
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"number\""
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{number} "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onChange"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleChange} />"
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
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Result: {result}</"
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
              children: " DoubleNumber;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// worker.js"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onmessage"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.data "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
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
              children: "  self."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "postMessage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(result);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "task-4-implementing-file-chunk-upload",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#task-4-implementing-file-chunk-upload",
        children: "Task 4: Implementing File Chunk Upload"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Question"
      }), ": How do you implement file chunk upload?\n", _jsx(_components.strong, {
        children: "Answer"
      }), ": Split the file into fixed-size chunks, upload each chunk sequentially, and update the progress after each chunk is uploaded."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Code Task"
      }), ": Write a function in JavaScript that takes a file and chunk size as input, uploads each chunk to a mock endpoint, and logs the upload progress.\n", _jsx(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "js",
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " uploadFileInChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "chunkSize"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " totalChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ceil"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file.size "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " uploadedChunks "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
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
              children: "  for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " totalChunks; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize;"
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
              children: " end"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file.size, start "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " chunkSize);"
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
              children: " chunk"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " file."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(start, end);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Mock upload function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " uploadChunk"
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
              children: "chunk"
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
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " Promise"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "resolve"
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
                color: "#B392F0"
              },
              children: "        setTimeout"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
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
              children: "          resolve"
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
              children: "        }, "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "100"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Simulate network latency"
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    uploadChunk"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(chunk)."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
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
              children: "      uploadedChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "`Uploaded chunk ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "uploadedChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "totalChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Usage example:"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " file"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " File"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(["
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Hello, world!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "], "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"hello.txt\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", { type: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"text/plain\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " chunkSize"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 5"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 5 bytes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "uploadFileInChunks"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(file, chunkSize);"
            })]
          })]
        })
      })
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
