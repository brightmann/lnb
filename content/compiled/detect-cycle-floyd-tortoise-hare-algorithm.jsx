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
      children: "Detecting cycle existence and locating the cycle entry point in linked lists is a classic problem that showcases the elegance of Floyd's Tortoise & Hare algorithm. This two-phase approach demonstrates sophisticated pointer manipulation and mathematical insights."
    }), "\n", _jsx(_components.h2, {
      id: "problem-statement",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-statement",
        children: "Problem Statement"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Detect whether a cycle exists in a linked list. If so, return the node where the cycle begins; otherwise return ", _jsx(_components.code, {
        children: "null"
      }), "."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "compact-interview-solution",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#compact-interview-solution",
        children: "Compact Interview Solution"
      })
    }), "\n", _jsx(_components.p, {
      children: "Interview-ready, single function that handles both detection and entry finding:"
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " detectCycle"
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
              children: "head"
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
              children: "  if"
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
              children: "head "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "head.next) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
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
                color: "#F97583"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head;"
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
              children: " fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head;"
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
              children: "  // Phase 1: detect cycle (Floyd's Tortoise & Hare)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next.next;"
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
              children: " (slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "break"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// meeting point found"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // No cycle (loop ended because fast ran off the list)"
            })
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
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "fast.next) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // Phase 2: locate entry"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next;"
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
              children: " slow;"
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
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Why the Guard Works:"
      }), _jsx(_components.br, {}), "\n", "The Phase-1 loop can end for two reasons:"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "slow === fast"
        }), " → cycle exists → continue to Phase 2"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fast"
        }), " or ", _jsx(_components.code, {
          children: "fast.next"
        }), " is ", _jsx(_components.code, {
          children: "null"
        }), " → ", _jsx(_components.strong, {
          children: "no cycle"
        }), " → return ", _jsx(_components.code, {
          children: "null"
        })]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["That single ", _jsx(_components.code, {
        children: "if (!fast || !fast.next)"
      }), " check cleanly distinguishes between these two exit conditions."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "teaching-version-with-helper-functions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#teaching-version-with-helper-functions",
        children: "Teaching Version with Helper Functions"
      })
    }), "\n", _jsx(_components.p, {
      children: "For clarity in explanations and educational contexts:"
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
              children: " getMeetingPoint"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "head"
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
              children: " slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head, fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next.next;"
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
              children: " (slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow;  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// cycle detected"
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
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// no cycle"
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
              children: " detectCycle"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "head"
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
              children: "  if"
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
              children: "head "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "head.next) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " meeting"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getMeetingPoint"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(head);"
            })]
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
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "meeting) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Scenario A: no cycle"
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
              children: "  // Scenario B: cycle exists → find entry"
            })
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
              children: " slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head, fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " meeting;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "  while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next;"
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
              children: " slow;"
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
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Narrative Clarity:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Phase A"
        }), " returns either a meeting node or ", _jsx(_components.code, {
          children: "null"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Phase B"
        }), " starts only when Phase A proved a cycle exists"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This separation makes the algorithm's two distinct phases more explicit for teaching purposes."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "mathematical-intuition",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#mathematical-intuition",
        children: "Mathematical Intuition"
      })
    }), "\n", _jsx(_components.p, {
      children: "Let's define the key distances:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "x"
        }), " = distance from head to cycle entry"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "y"
        }), " = distance from entry to meeting point (measured forward along the cycle)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "L"
        }), " = cycle length"]
      }), "\n"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "head --(x)--> [entry] --(y)--> [meeting] --(L-y)--> back to [entry]\n"
      })
    }), "\n", _jsx(_components.h3, {
      id: "step-by-step-mathematical-proof",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-by-step-mathematical-proof",
        children: "Step-by-Step Mathematical Proof"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 1:"
      }), " When slow and fast meet, let ", _jsx(_components.code, {
        children: "t"
      }), " be the steps slow has taken:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Slow's total distance: ", _jsx(_components.code, {
          children: "t = x + y + k·L"
        }), " (where ", _jsx(_components.code, {
          children: "k"
        }), " = number of complete cycles slow made)"]
      }), "\n", _jsxs(_components.li, {
        children: ["Fast's total distance: ", _jsx(_components.code, {
          children: "2t"
        }), " (twice as many steps)"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 2:"
      }), " Since they meet at the same node, the difference in their steps (", _jsx(_components.code, {
        children: "t"
      }), ") must equal a whole number of cycle lengths:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "t = m·L  for some integer m\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "This is because on a circular track, when two runners meet, the faster one has completed exactly some number of extra full laps."
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 3:"
      }), " Equate the two expressions for ", _jsx(_components.code, {
        children: "t"
      }), ":"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "x + y + k·L = m·L\n⇒ x = (m - k)·L - y\n⇒ x = (m - k - 1)·L + (L - y)\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Key Insight:"
      }), " This shows that ", _jsx(_components.code, {
        children: "x"
      }), " equals ", _jsx(_components.code, {
        children: "(L - y)"
      }), " plus some whole number of full cycles."]
    }), "\n", _jsx(_components.h3, {
      id: "what-this-means-practically",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#what-this-means-practically",
        children: "What This Means Practically"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The distance from head to entry (", _jsx(_components.code, {
        children: "x"
      }), ") is the same as the distance from meeting point back to entry (", _jsx(_components.code, {
        children: "L - y"
      }), "), ", _jsx(_components.strong, {
        children: "up to full cycles"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["In modular arithmetic: ", _jsx(_components.code, {
        children: "x ≡ (L - y) (mod L)"
      })]
    }), "\n", _jsx(_components.h3, {
      id: "why-phase-2-works",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#why-phase-2-works",
        children: "Why Phase 2 Works"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Pointer A starts at head: needs ", _jsx(_components.code, {
          children: "x"
        }), " steps to reach entry"]
      }), "\n", _jsxs(_components.li, {
        children: ["Pointer B starts at meeting point: needs ", _jsx(_components.code, {
          children: "(L - y)"
        }), " steps to reach entry"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["Since ", _jsx(_components.code, {
        children: "x = (L - y) + q·L"
      }), " for some integer ", _jsx(_components.code, {
        children: "q"
      }), ", after exactly ", _jsx(_components.code, {
        children: "x"
      }), " steps:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Pointer A reaches the entry (by definition)"
      }), "\n", _jsxs(_components.li, {
        children: ["Pointer B moves ", _jsx(_components.code, {
          children: "x"
        }), " steps = ", _jsx(_components.code, {
          children: "(L - y)"
        }), " steps to entry + ", _jsx(_components.code, {
          children: "q"
        }), " full cycles around = ", _jsx(_components.strong, {
          children: "also at entry"
        })]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Memory Hook:"
      }), " ", _jsx(_components.em, {
        children: "The gap back to entry equals the distance from head to entry, up to full cycles."
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["This mathematical property connects to other ", _jsx(_components.a, {
        href: "/blog/two-pointers",
        children: "two-pointer techniques"
      }), " and demonstrates the power of relative positioning in algorithmic problem-solving."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "why-fast-moves-2x-speed",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#why-fast-moves-2x-speed",
        children: "Why Fast Moves 2x Speed?"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Any speed difference greater than slow (e.g., 3x) guarantees meeting in a finite cycle due to the relative speed being ", _jsx(_components.code, {
        children: "fast - slow"
      }), " on a closed loop. We choose ", _jsx(_components.strong, {
        children: "2x"
      }), " because:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Minimal gap:"
        }), " Smallest speed difference that guarantees progress"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Efficiency:"
        }), " Minimizes pointer hops per iteration"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Standard:"
        }), " Universally recognized and easy to reason about"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Critical:"
      }), " Phase 2 must use equal speed (1 step each) to preserve equal remaining distance to the entry point."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "algorithm-phases-and-invariants",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#algorithm-phases-and-invariants",
        children: "Algorithm Phases and Invariants"
      })
    }), "\n", _jsx(_components.h3, {
      id: "phase-1-detection",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#phase-1-detection",
        children: "Phase 1 (Detection)"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Invariant:"
      }), " While ", _jsx(_components.code, {
        children: "fast && fast.next"
      }), ", move slow by 1 and fast by 2", _jsx(_components.br, {}), "\n", _jsx(_components.strong, {
        children: "Outcomes:"
      }), " If they meet, cycle exists; if fast reaches ", _jsx(_components.code, {
        children: "null"
      }), ", no cycle"]
    }), "\n", _jsx(_components.h3, {
      id: "phase-2-entry-location",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#phase-2-entry-location",
        children: "Phase 2 (Entry Location)"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Invariant:"
      }), " After meeting, ", _jsx(_components.code, {
        children: "slow"
      }), " at head and ", _jsx(_components.code, {
        children: "fast"
      }), " at meeting point are equidistant from entry", _jsx(_components.br, {}), "\n", _jsx(_components.strong, {
        children: "Process:"
      }), " Moving both by 1 preserves this equality until they meet at the entry"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Complexity:"
      }), " Time O(n), Space O(1)"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "common-pitfall-and-solution",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#common-pitfall-and-solution",
        children: "Common Pitfall and Solution"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Pitfall:"
      }), " Using ", _jsx(_components.code, {
        children: "slow !== fast"
      }), " as the ", _jsx(_components.strong, {
        children: "loop condition"
      }), " when both start at ", _jsx(_components.code, {
        children: "head"
      })]
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
              children: "// WRONG: Loop never runs because slow === fast initially"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next.next;"
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
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Solution:"
      }), " Always check equality ", _jsx(_components.strong, {
        children: "inside"
      }), " the loop ", _jsx(_components.em, {
        children: "after"
      }), " advancing pointers:"]
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
              children: "// CORRECT: Advance first, then check"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " slow.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  fast "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast.next.next;"
            })]
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
              children: " (slow "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fast) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "break"
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
          })]
        })
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "connection-to-other-algorithms",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#connection-to-other-algorithms",
        children: "Connection to Other Algorithms"
      })
    }), "\n", _jsx(_components.p, {
      children: "This technique shares patterns with other linked list problems:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/blog/remove-nth-node-from-end-two-approaches",
          children: "Remove Nth Node from End"
        }), " - Uses offset positioning"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/blog/reverse-linked-list-two-pointers-three-nodes",
          children: "Reverse Linked List"
        }), " - Two-pointer manipulation"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/blog/dummy-head-design-pattern",
          children: "Dummy Head Design Pattern"
        }), " - Sentinel nodes for edge case elimination"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "key-takeaways",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-takeaways",
        children: "Key Takeaways"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Two-phase approach:"
        }), " Detection followed by entry location"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mathematical foundation:"
        }), " Distance relationships enable the algorithm"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Pointer choreography:"
        }), " Careful sequencing of pointer movements"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Edge case handling:"
        }), " Single guard condition handles all scenarios"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Universal pattern:"
        }), " Floyd's algorithm applies beyond linked lists to sequence analysis"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Floyd's Tortoise & Hare demonstrates how mathematical insights can lead to elegant algorithmic solutions, making it a cornerstone technique for cycle detection across various data structures and problem domains."
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
