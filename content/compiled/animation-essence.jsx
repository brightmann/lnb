import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
    children: [_jsx(_components.h2, {
      id: "the-essence-of-animation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-essence-of-animation",
        children: "The Essence of Animation"
      })
    }), "\n", _jsx(_components.h3, {
      id: "1-overview-of-animation-essence",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-overview-of-animation-essence",
        children: "1. Overview of Animation Essence"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Animation is the process of changing a value over time."
      }), " The core components of this process include:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Change Rate (Change Speed)"
        }), ": How fast the value changes over a given period."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Elapsed Time"
        }), ": The amount of time that has passed since the start of the animation."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Easing Function"
        }), ": A function that defines the rate of change over time, which can be linear (constant speed) or non-linear (e.g., accelerating, decelerating)."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "2-generic-animation-functions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-generic-animation-functions",
        children: "2. Generic Animation Functions"
      })
    }), "\n", _jsx(_components.h4, {
      id: "version-1-basic-linear-animation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#version-1-basic-linear-animation",
        children: "Version 1: Basic Linear Animation"
      })
    }), "\n", _jsx(_components.p, {
      children: "This version uses a simple linear interpolation without any easing function."
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
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " animateLinear"
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
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "duration"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "callback"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " speed"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (to "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Uniform linear change rate"
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
              children: " startTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Date."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "now"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: " _run"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " elapsedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Date."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "now"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startTime;"
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
              children: " (elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(to); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Ensure the final value is exactly 'to'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      cancelAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(rid);"
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
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " speed "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " elapsedTime;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    callback"
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
                color: "#B392F0"
              },
              children: "    requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run);"
            })]
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " rid"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run);"
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
        children: "Explanation"
      }), ":"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Change Rate"
        }), ": Calculated as ", _jsx(_components.code, {
          children: "(to - from) / duration"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Elapsed Time"
        }), ": ", _jsx(_components.code, {
          children: "Date.now() - startTime"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Current Value"
        }), ": Calculated using a linear interpolation formula ", _jsx(_components.code, {
          children: "from + speed * elapsedTime"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "version-2-enhanced-animation-with-easing",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#version-2-enhanced-animation-with-easing",
        children: "Version 2: Enhanced Animation with Easing"
      })
    }), "\n", _jsx(_components.p, {
      children: "This version introduces an easing function for more flexible animations."
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
              children: " * Generic animate function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {Object}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Options for the animation"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.from"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Starting value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.to"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Ending value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.duration"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Duration of the animation in milliseconds"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {Function}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.callback"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Function to be called with the current animated value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {Function}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [options.easing"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "linear]"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Easing function to control the animation pace"
            })]
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " animate"
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
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "duration"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "easing"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " linear }) "
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
              children: " startTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " performance."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "now"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use performance.now() for more accurate timing"
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
              children: "  /**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "   * Animation loop function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "   * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " now"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Current time provided by requestAnimationFrame"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "   */"
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
                color: "#B392F0"
              },
              children: " _run"
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
              children: "now"
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
              children: " elapsedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " now "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startTime; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Time elapsed since the start of the animation"
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
              children: " (elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(to); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Ensure the final value is exactly 'to'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      cancelAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(rid); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Stop the animation loop"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " normalizedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Normalized time (0 to 1)"
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
              children: " easedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " easing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(normalizedTime); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Apply easing function"
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
              children: " currentValue"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (to "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " easedTime; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Calculate current value based on easing"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(currentValue); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Update the animation state"
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
              children: "    rid "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Continue the animation loop"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " rid "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Start the animation loop"
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
              children: "/**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * Default linear easing function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Normalized time (0 to 1)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@returns"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Eased time"
            })]
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " linear"
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
              children: "t"
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
              children: " t;"
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
              children: "// Usage example"
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
              children: " box"
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
              children: "\".box\""
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
                color: "#B392F0"
              },
              children: "animate"
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
              children: "  from: "
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
              children: "  to: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "300"
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
              children: "  duration: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2000"
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
              children: "  callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
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
              children: "    box.style.left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"px\""
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
              children: "  },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  easing: linear, "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Optional: can be replaced with any other easing function"
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
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Explanation"
      }), ":"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Normalized Time"
        }), ": Represents the progress of the animation as a value between 0 and 1 (", _jsx(_components.code, {
          children: "elapsedTime / duration"
        }), ")."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Eased Time"
        }), ": The result of applying an easing function to the normalized time."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Current Value"
        }), ": Calculated as ", _jsx(_components.code, {
          children: "from + (to - from) * easedTime"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "3-normalized-time-vs-eased-time",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-normalized-time-vs-eased-time",
        children: "3. Normalized Time vs Eased Time"
      })
    }), "\n", _jsx(_components.h4, {
      id: "normalized-time",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#normalized-time",
        children: "Normalized Time"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Normalized time represents the progress of the animation as a value between 0 and 1."
      }), "\n", _jsx(_components.li, {
        children: "It is calculated as the ratio of elapsed time to the total duration of the animation."
      }), "\n", _jsx(_components.li, {
        children: "This value increases linearly from 0 at the start of the animation to 1 at the end of the animation."
      }), "\n"]
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
        children: _jsx(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
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
              children: " normalizedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration;"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "eased-time",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#eased-time",
        children: "Eased Time"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Eased time is the result of applying an easing function to the normalized time."
      }), "\n", _jsx(_components.li, {
        children: "Easing functions modify the rate of change of the animation to create effects like acceleration, deceleration, and bounce."
      }), "\n", _jsx(_components.li, {
        children: "The easing function takes normalized time as input and outputs a new value that determines the actual progress of the animation."
      }), "\n"]
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
        children: _jsx(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
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
              children: " easedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " easing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(normalizedTime);"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "calculation-of-the-current-animated-value",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#calculation-of-the-current-animated-value",
        children: "Calculation of the Current Animated Value"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The expression ", _jsx(_components.code, {
        children: "(to - from) * easedTime"
      }), " calculates the current value of the animated property based on the eased time."]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "(to - from)"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Represents the total change in the value that we want to animate over the duration of the animation."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "easedTime"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Represents the current progress of the animation after applying the easing function, adjusting how fast or slow the animation appears at different points in time."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Combining Them"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Multiplying ", _jsx(_components.code, {
              children: "(to - from)"
            }), " by ", _jsx(_components.code, {
              children: "easedTime"
            }), " gives the current change in the value according to the eased progress."]
          }), "\n", _jsxs(_components.li, {
            children: ["Adding ", _jsx(_components.code, {
              children: "from"
            }), " to this result gives the current value of the animated property."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "example",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example",
        children: "Example"
      })
    }), "\n", _jsx(_components.p, {
      children: "Let's illustrate with an example:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "from"
        }), ": ", _jsx(_components.code, {
          children: "100"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "to"
        }), ": ", _jsx(_components.code, {
          children: "200"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "duration"
        }), ": ", _jsx(_components.code, {
          children: "2000ms"
        }), " (2 seconds)"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["If the easing function is linear, ", _jsx(_components.code, {
        children: "easedTime"
      }), " is the same as ", _jsx(_components.code, {
        children: "normalizedTime"
      }), "."]
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
              children: "// Easing function (linear)"
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
                color: "#B392F0"
              },
              children: " linear"
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
              children: "t"
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
              children: " t;"
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
              children: "// Bounce easing function"
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
                color: "#B392F0"
              },
              children: " bounceEaseOut"
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
              children: "t"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " n1"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 7.5625"
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
                color: "#79B8FF"
              },
              children: "    d1"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2.75"
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
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " d1) {"
            })]
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
              children: " n1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "else"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " d1) {"
            })]
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
              children: " n1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1.5"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " d1) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0.75"
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
              children: "  } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "else"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2.5"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " d1) {"
            })]
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
              children: " n1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2.25"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " d1) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0.9375"
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
              children: "  } "
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
                color: "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " n1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2.625"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " d1) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0.984375"
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
              children: "// Animation function"
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
                color: "#B392F0"
              },
              children: " animate"
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
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "duration"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "easing"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " linear }) "
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
              children: " startTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " performance."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "now"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: " _run"
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
              children: "now"
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
              children: " elapsedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " now "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startTime;"
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
              children: " (elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(to); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Ensure the final value is exactly 'to'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      cancelAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(rid); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Stop the animation loop"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " normalizedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 0 to 1"
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
              children: " easedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " easing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(normalizedTime); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Apply easing function"
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
              children: " currentValue"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (to "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " easedTime; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Calculate current value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(currentValue); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Update the animation state"
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
              children: "    rid "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Continue the animation loop"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " rid "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Start the animation loop"
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
              children: "// Usage example"
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
              children: " box"
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
              children: "\".box\""
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
                color: "#B392F0"
              },
              children: "animate"
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
              children: "  from: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "100"
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
              children: "  to: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "200"
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
              children: "  duration: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2000"
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
              children: "  callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
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
              children: "    box.style.left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"px\""
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
              children: "  },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  easing: linear, "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Optional: can be replaced with any other easing function"
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
    }), "\n", _jsx(_components.p, {
      children: "By understanding the concepts of normalized time and eased time, and how they affect the calculation of the current animated value, we can create flexible and powerful animations that transition smoothly between values with different pacing and effects."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h3, {
      id: "explanation-of-the-_run-function",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#explanation-of-the-_run-function",
        children: ["Explanation of the ", _jsx(_components.code, {
          children: "_run"
        }), " Function"]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In JavaScript, ", _jsx(_components.code, {
        children: "requestAnimationFrame"
      }), " automatically passes a ", _jsx(_components.code, {
        children: "DOMHighResTimeStamp"
      }), " as an argument to the callback function. This timestamp represents the time at which the callback function is triggered, typically used to calculate the progress of the animation."]
    }), "\n", _jsxs(_components.p, {
      children: ["Specifically, the callback function of ", _jsx(_components.code, {
        children: "requestAnimationFrame"
      }), " receives one parameter, which is the current timestamp. Therefore, in the ", _jsx(_components.code, {
        children: "_run"
      }), " function, the ", _jsx(_components.code, {
        children: "now"
      }), " parameter is passed by ", _jsx(_components.code, {
        children: "requestAnimationFrame"
      }), " and does not need to be explicitly declared."]
    }), "\n", _jsx(_components.h3, {
      id: "detailed-explanation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#detailed-explanation",
        children: "Detailed Explanation"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "requestAnimationFrame"
          })
        }), ": This function calls the specified callback before the next repaint and passes a ", _jsx(_components.code, {
          children: "DOMHighResTimeStamp"
        }), " representing the current time."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Timestamp Usage"
        }), ": This timestamp can be used to calculate the progress of the animation, ensuring smooth animation effects."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "example-code",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-code",
        children: "Example Code"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Below is a complete example demonstrating how to use ", _jsx(_components.code, {
        children: "requestAnimationFrame"
      }), " and the timestamp to achieve animation:"]
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
              children: " * Generic animate function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {Object}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Options for the animation"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.from"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Starting value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.to"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Ending value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.duration"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Duration of the animation in milliseconds"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {Function}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " options.callback"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Function to be called with the current animated value"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {Function}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [options.easing"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "linear]"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Easing function to control the animation pace"
            })]
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " animate"
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
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "duration"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "easing"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " linear }) "
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
              children: " startTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " performance."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "now"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use performance.now() for more accurate timing"
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
              children: "  /**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "   * Animation loop function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "   * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " now"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Current time provided by requestAnimationFrame"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "   */"
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
                color: "#B392F0"
              },
              children: " _run"
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
              children: "now"
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
              children: " elapsedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " now "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startTime; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Time elapsed since the start of the animation"
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
              children: " (elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(to); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Ensure the final value is exactly 'to'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      cancelAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(rid); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Stop the animation loop"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " normalizedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " elapsedTime "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " duration; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Normalized time (0 to 1)"
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
              children: " easedTime"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " easing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(normalizedTime); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Apply easing function"
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
              children: " currentValue"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (to "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " from) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " easedTime; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Calculate current value based on easing"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(currentValue); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Update the animation state"
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
              children: "    rid "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Continue the animation loop"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " rid "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " requestAnimationFrame"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(_run); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Start the animation loop"
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
              children: "/**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * Default linear easing function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@param"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " t"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Normalized time (0 to 1)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "@returns"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - Eased time"
            })]
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " linear"
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
              children: "t"
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
              children: " t;"
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
              children: "// Usage example"
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
              children: " box"
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
              children: "\".box\""
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
                color: "#B392F0"
              },
              children: "animate"
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
              children: "  from: "
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
              children: "  to: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "300"
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
              children: "  duration: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2000"
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
              children: "  callback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
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
              children: "    box.style.left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"px\""
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
              children: "  },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  easing: linear, "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Optional: can be replaced with any other easing function"
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
    }), "\n", _jsx(_components.h3, {
      id: "explanation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#explanation",
        children: "Explanation"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "requestAnimationFrame"
          })
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "requestAnimationFrame"
            }), " calls the specified callback before the next repaint and passes a ", _jsx(_components.code, {
              children: "DOMHighResTimeStamp"
            }), " as a parameter."]
          }), "\n", _jsx(_components.li, {
            children: "This timestamp is used to calculate animation progress to ensure smooth animation."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "_run"
          }), " function"]
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "now"
            }), " parameter in the ", _jsx(_components.code, {
              children: "_run"
            }), " function is the timestamp automatically passed by ", _jsx(_components.code, {
              children: "requestAnimationFrame"
            }), "."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "elapsedTime"
            }), " is the time difference since the animation started, used to calculate the current progress of the animation."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "normalizedTime"
            }), " is a value between 0 and 1, representing the percentage progress of the animation."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "easedTime"
            }), " is the time after applying the easing function, used to smooth the animation."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "currentValue"
            }), " is the current animation value calculated based on the eased time."]
          }), "\n", _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "callback"
            }), " function updates the animation properties, such as the element's style."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This way, each frame of the animation is calculated and updated based on the current time, ensuring smooth animation effects."
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
