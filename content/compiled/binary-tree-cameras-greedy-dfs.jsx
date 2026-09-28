import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
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
    children: [_jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-cameras/",
        children: "LeetCode 968: Binary Tree Cameras"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Each camera covers ", _jsx(_components.strong, {
          children: "its parent, itself, and immediate children"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Goal: cover every node with the ", _jsx(_components.strong, {
          children: "fewest cameras possible"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "core-challenges",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#core-challenges",
        children: "Core Challenges"
      })
    }), "\n", _jsx(_components.p, {
      children: "When solving this problem, two difficulties stand out:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Optimal placement strategy"
          }), _jsx(_components.br, {}), "\n", "Cameras are most effective ", _jsx(_components.em, {
            children: "above"
          }), " leaves (at their parents), since one camera can cover multiple leaves and itself."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Information flow upward"
          }), _jsx(_components.br, {}), "\n", "To decide whether a parent needs a camera, each child must report its state. Without a systematic state system, the logic becomes messy."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["The insight: model this as a ", _jsx(_components.strong, {
        children: "bottom-up state machine"
      }), "."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "state-representation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#state-representation",
        children: "State Representation"
      })
    }), "\n", _jsx(_components.p, {
      children: "Every node returns one of three states:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "UNCOVERED (0)"
        }), ": This node is not covered by any camera."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "HAS_CAMERA (1)"
        }), ": We place a camera at this node."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "COVERED (2)"
        }), ": This node is covered by one of its children’s cameras."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["Why only these three?", _jsx(_components.br, {}), "\n", "Because they represent the ", _jsx(_components.strong, {
        children: "minimal complete set of information"
      }), " a parent needs:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "“My child is UNCOVERED → I must act.”"
      }), "\n", _jsx(_components.li, {
        children: "“My child has a camera → I’m already safe.”"
      }), "\n", _jsx(_components.li, {
        children: "“My child is COVERED → I might still need coverage.”"
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "interview-friendly-implementation-concise",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#interview-friendly-implementation-concise",
        children: "Interview-Friendly Implementation (Concise)"
      })
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * States:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * 0 = UNCOVERED"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * 1 = HAS_CAMERA"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * 2 = COVERED"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " */"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " minCameraCover"
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
              children: "root"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cameras "
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
              children: "  function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "node"
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "node) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// null nodes are COVERED by default"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " left"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(node.left);"
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
              children: " right"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(node.right);"
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
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
              children: "      cameras"
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
                color: "#F97583"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// place camera here"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
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
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// covered by child’s camera"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    }"
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
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";   "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// uncovered"
            })]
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
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(root) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") cameras"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// root fix-up"
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
                color: "#E1E4E8"
              },
              children: " cameras;"
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
    }), "\n", _jsx(_components.p, {
      children: "Why this works in interviews:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Short, elegant, and correct."
      }), "\n", _jsx(_components.li, {
        children: "Shows understanding of recursion and state machines."
      }), "\n", _jsx(_components.li, {
        children: "Easy to explain line-by-line."
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "educational-implementation-verbose--clear",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#educational-implementation-verbose--clear",
        children: "Educational Implementation (Verbose & Clear)"
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
          children: [_jsxs(_components.span, {
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
              children: " State"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: "  UNCOVERED: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
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
              children: "  HAS_CAMERA: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
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
              children: "  COVERED: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
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
              children: " minCameraCover"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "root"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cameras "
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
              children: "  function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "node"
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "node) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "COVERED"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " left"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(node.left);"
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
              children: " right"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(node.right);"
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UNCOVERED"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UNCOVERED"
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
              children: "      cameras"
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
                color: "#F97583"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "HAS_CAMERA"
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
              children: "    }"
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "HAS_CAMERA"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "HAS_CAMERA"
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
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "COVERED"
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
              children: "    }"
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
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UNCOVERED"
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
              children: "  }"
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
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dfs"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(root) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " State."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UNCOVERED"
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
              children: "    cameras"
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
              children: " cameras;"
            })]
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
    }), "\n", _jsx(_components.h2, {
      id: "step-by-step-examples",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-by-step-examples",
        children: "Step-by-Step Examples"
      })
    }), "\n", _jsx(_components.p, {
      children: "We’ll trace each rule with small tree diagrams.\nNotation:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "U = UNCOVERED (0)"
      }), "\n", _jsx(_components.li, {
        children: "C = HAS_CAMERA (1)"
      }), "\n", _jsx(_components.li, {
        children: "V = COVERED (2)"
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "1-leaf-node--uncovered",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-leaf-node--uncovered",
        children: "1. Leaf Node → Uncovered"
      })
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "   L\n  / \\\nnull null\n"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "L"
        }), "'s ", _jsx(_components.code, {
          children: "null"
        }), " children return ", _jsx(_components.code, {
          children: "V"
        }), ". ", _jsx(_components.code, {
          children: "L"
        }), " sees ", _jsx(_components.code, {
          children: "(V, V)"
        }), " → returns ", _jsx(_components.code, {
          children: "U"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "b-any-child-uncovered--place-camera-here-rule-1--the-cameras-return-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#b-any-child-uncovered--place-camera-here-rule-1--the-cameras-return-1",
        children: "B) “Any child UNCOVERED → place camera here” (Rule 1 / the cameras++; return 1)"
      })
    }), "\n", _jsx(_components.p, {
      children: "Parent with an uncovered leaf"
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "   P\n  /\n L (leaf)\n"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "L"
        }), " (leaf) returns ", _jsx(_components.code, {
          children: "U"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "P"
        }), " sees ", _jsx(_components.code, {
          children: "U"
        }), " from a child → places a camera, returns ", _jsx(_components.code, {
          children: "C"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "c-any-child-has_camera--current-is-covered-rule-2--the-return-2",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#c-any-child-has_camera--current-is-covered-rule-2--the-return-2",
        children: "C) “Any child HAS_CAMERA → current is COVERED” (Rule 2 / the return 2)"
      })
    }), "\n", _jsx(_components.p, {
      children: "Three-node chain"
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "   G\n   |\n   P\n   |\n   L (leaf)\n"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "L"
        }), " (leaf) returns ", _jsx(_components.code, {
          children: "U"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "P"
        }), " sees ", _jsx(_components.code, {
          children: "U"
        }), " from child ", _jsx(_components.code, {
          children: "L"
        }), " → places camera, returns ", _jsx(_components.code, {
          children: "C"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "G"
        }), " sees ", _jsx(_components.code, {
          children: "C"
        }), " from child ", _jsx(_components.code, {
          children: "P"
        }), " → returns ", _jsx(_components.code, {
          children: "V"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "d-root-fix-up--root-ends-uncovered-even-when-both-subtrees-are-covered",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#d-root-fix-up--root-ends-uncovered-even-when-both-subtrees-are-covered",
        children: "D) Root fix-up — root ends UNCOVERED even when both subtrees are COVERED"
      })
    }), "\n", _jsx(_components.p, {
      children: "Non-trivial example"
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "          A (root)\n         /       \\\n        B         E\n       /           \\\n      C             F\n     /               \\\n    D                 G\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "Post-order trace:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dfs(D)"
        }), " & ", _jsx(_components.code, {
          children: "dfs(G)"
        }), " (leaves) → return ", _jsx(_components.code, {
          children: "U"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dfs(C)"
        }), " & ", _jsx(_components.code, {
          children: "dfs(F)"
        }), " see ", _jsx(_components.code, {
          children: "U"
        }), " → place cameras, return ", _jsx(_components.code, {
          children: "C"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dfs(B)"
        }), " & ", _jsx(_components.code, {
          children: "dfs(E)"
        }), " see ", _jsx(_components.code, {
          children: "C"
        }), " → return ", _jsx(_components.code, {
          children: "V"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dfs(A)"
        }), " sees ", _jsx(_components.code, {
          children: "(V, V)"
        }), " → returns ", _jsx(_components.code, {
          children: "U"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "complexity",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#complexity",
        children: "Complexity"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Time: O(n) — each node visited once"
      }), "\n", _jsx(_components.li, {
        children: "Space: O(h) — recursion stack (tree height)"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "key-takeaways",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-takeaways",
        children: "key Takeaways"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Use 3 states: uncovered, has camera, covered. Nothing more is needed."
      }), "\n", _jsx(_components.li, {
        children: "Treat null as covered → simplifies leaf logic."
      }), "\n", _jsx(_components.li, {
        children: "Place cameras only when a child is uncovered."
      }), "\n", _jsx(_components.li, {
        children: "Always apply the root fix-up to handle edge cases."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Interview tip: If asked “Why three states?” → answer that they form the minimal information set for parents to make optimal decisions."
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
