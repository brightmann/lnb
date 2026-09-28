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
    children: [_jsxs(_components.p, {
      children: ["Linked lists are fundamental to algorithm practice, yet JavaScript lacks a built-in ", _jsx(_components.code, {
        children: "ListNode"
      }), ". On LeetCode and in interviews, developers create their own implementations. In 2025, you have a choice: object-oriented ", _jsx(_components.code, {
        children: "class"
      }), " style or functional factory style. This guide clarifies ", _jsx(_components.code, {
        children: "constructor"
      }), " and ", _jsx(_components.code, {
        children: "this"
      }), ", compares four approaches, and shows when to use each."]
    }), "\n", _jsx(_components.h2, {
      id: "tldr",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#tldr",
        children: "TL;DR"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "constructor"
        }), " runs when you call ", _jsx(_components.code, {
          children: "new"
        }), ". Inside, ", _jsx(_components.code, {
          children: "this"
        }), " points to the new object instance"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Class"
        }), " and ", _jsx(_components.strong, {
          children: "function constructor"
        }), " both use ", _jsx(_components.code, {
          children: "new"
        }), " + ", _jsx(_components.code, {
          children: "this"
        }), ". Class is the modern syntax"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Factory"
        }), " and ", _jsx(_components.strong, {
          children: "typed factory"
        }), " return plain objects without ", _jsx(_components.code, {
          children: "new"
        }), "/", _jsx(_components.code, {
          children: "this"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["Use ", _jsx(_components.strong, {
          children: "class"
        }), " for algorithms/interviews. Use ", _jsx(_components.strong, {
          children: "factory (typed if possible)"
        }), " in production"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "understanding-new-constructor-and-this",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#understanding-new-constructor-and-this",
        children: ["Understanding ", _jsx(_components.code, {
          children: "new"
        }), ", ", _jsx(_components.code, {
          children: "constructor"
        }), ", and ", _jsx(_components.code, {
          children: "this"
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["When you call ", _jsx(_components.code, {
        children: "new ListNode(5)"
      }), ":"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "A new empty object is created"
      }), "\n", _jsxs(_components.li, {
        children: ["Its prototype is set to ", _jsx(_components.code, {
          children: "ListNode.prototype"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["The constructor executes with ", _jsx(_components.code, {
          children: "this"
        }), " bound to that object"]
      }), "\n", _jsx(_components.li, {
        children: "Unless another object is returned, the new object becomes the result"
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsxs(_components.strong, {
        children: [_jsx(_components.code, {
          children: "this"
        }), " is the new instance"]
      }), ", and properties like ", _jsx(_components.code, {
        children: "this.val"
      }), " and ", _jsx(_components.code, {
        children: "this.next"
      }), " are created at that moment."]
    }), "\n", _jsx(_components.h2, {
      id: "four-implementation-approaches",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#four-implementation-approaches",
        children: "Four Implementation Approaches"
      })
    }), "\n", _jsx(_components.h3, {
      id: "1-class-modern-oop",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-class-modern-oop",
        children: "1. Class (Modern OOP)"
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
              children: "class"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
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
              children: "  constructor"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
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
                color: "#79B8FF"
              },
              children: "    this"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "    this"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " next;"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Best for:"
      }), " algorithms and interviews. Clean, modern, widely recognized."]
    }), "\n", _jsx(_components.h3, {
      id: "2-function-constructor-legacy",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-function-constructor-legacy",
        children: "2. Function Constructor (Legacy)"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
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
                color: "#79B8FF"
              },
              children: "  this"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "  this"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " next;"
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
        children: "Best for:"
      }), " backward compatibility with pre-ES6 code. Rare in new projects."]
    }), "\n", _jsx(_components.h3, {
      id: "3-factory-function-functional",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-factory-function-functional",
        children: "3. Factory Function (Functional)"
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
        children: _jsx(_components.code, {
          "data-language": "js",
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
                color: "#B392F0"
              },
              children: " createListNode"
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
              children: "val"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
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
              children: " ({ val, next });"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Best for:"
      }), " React/FP codebases. Simple, no ", _jsx(_components.code, {
        children: "new"
      }), " or ", _jsx(_components.code, {
        children: "this"
      }), "."]
    }), "\n", _jsx(_components.h3, {
      id: "4-typescript-factory-typed-fp",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-typescript-factory-typed-fp",
        children: "4. TypeScript Factory (Typed FP)"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "ts",
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
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
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
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " };"
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
                color: "#B392F0"
              },
              children: " createListNode"
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
              children: "  val"
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
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "  next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
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
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ val, next });"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Best for:"
      }), " professional React/TS apps. Type-safe, ergonomic, functional."]
    }), "\n", _jsx(_components.h2, {
      id: "decision-matrix",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#decision-matrix",
        children: "Decision Matrix"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["| Scenario | Choose | Why |\n|----------|--------|-----|\n| LeetCode/interviews | Class | Matches expected template |\n| Legacy pre-ES6 code | Function constructor | Backward compatibility |\n| Modern JS apps | Factory | Plain data, no ", _jsx(_components.code, {
        children: "new"
      }), " complexity |\n| React/TypeScript apps | TypeScript factory | Type safety + functional style |"]
    }), "\n", _jsx(_components.h2, {
      id: "essential-utilities",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#essential-utilities",
        children: "Essential Utilities"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Most algorithms only need ", _jsx(_components.code, {
        children: "{ val, next }"
      }), ". You can mix and match styles if you keep that shape."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Build from array:"
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
                color: "#B392F0"
              },
              children: " fromArray"
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
              children: "arr"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dummy "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createListNode"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dummy;"
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " x"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " of"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " arr) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(x);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr.next;"
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
              children: " dummy.next;"
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
      children: _jsx(_components.strong, {
        children: "Convert to array:"
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
                color: "#B392F0"
              },
              children: " toArray"
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
              children: "head"
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
              children: " node "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head; node; node "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " node.next) {"
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
              children: "(node.val);"
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
              children: " result;"
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
    }), "\n", _jsx(_components.h2, {
      id: "common-algorithms",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#common-algorithms",
        children: "Common Algorithms"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["These work with any implementation style since they only use ", _jsx(_components.code, {
        children: ".val"
      }), " and ", _jsx(_components.code, {
        children: ".next"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Reverse a linked list:"
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
                color: "#B392F0"
              },
              children: " reverseList"
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
              children: "head"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " prev "
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
              children: " curr "
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
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
              children: " (curr) {"
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
              children: " next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " prev;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    prev "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " next;"
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
              children: "  "
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
              children: " prev;"
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
      children: _jsx(_components.strong, {
        children: "Merge two sorted lists:"
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
                color: "#B392F0"
              },
              children: " mergeTwoLists"
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
              children: "l1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "l2"
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
              children: " dummy"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { val: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", next: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " };"
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
              children: " tail "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dummy;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
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
              children: " (l1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l2) {"
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
              children: " (l1.val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l2.val) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      tail.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l1;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      l1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l1.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
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
              children: "      tail.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l2;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      l2 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l2.next;"
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
                color: "#E1E4E8"
              },
              children: "    tail "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " tail.next;"
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
              children: "  "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  tail.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l1 "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " l2;"
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
              children: " dummy.next;"
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
    }), "\n", _jsx(_components.h2, {
      id: "best-practices--pitfalls",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#best-practices--pitfalls",
        children: "Best Practices & Pitfalls"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["✅ ", _jsx(_components.strong, {
          children: "Always provide defaults:"
        }), " Use ", _jsx(_components.code, {
          children: "next = null"
        }), " parameter defaults"]
      }), "\n", _jsxs(_components.li, {
        children: ["✅ ", _jsxs(_components.strong, {
          children: ["Remember ", _jsx(_components.code, {
            children: "new"
          }), ":"]
        }), " Forgetting ", _jsx(_components.code, {
          children: "new"
        }), " with classes causes runtime errors"]
      }), "\n", _jsxs(_components.li, {
        children: ["✅ ", _jsx(_components.strong, {
          children: "Keep shape consistent:"
        }), " Maintain ", _jsx(_components.code, {
          children: "{ val, next }"
        }), " structure for performance"]
      }), "\n", _jsxs(_components.li, {
        children: ["✅ ", _jsx(_components.strong, {
          children: "Prefer iteration:"
        }), " Avoid recursion to prevent call stack overflow"]
      }), "\n", _jsxs(_components.li, {
        children: ["✅ ", _jsx(_components.strong, {
          children: "Consider immutability:"
        }), " In production FP code, treat nodes as immutable"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "reference-implementations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#reference-implementations",
        children: "Reference Implementations"
      })
    }), "\n", _jsx(_components.h3, {
      id: "class-based-utilities",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#class-based-utilities",
        children: "Class-Based Utilities"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fromArrayClass"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "arr"
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
              children: " dummy "
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
              children: " ListNode"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dummy;"
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " x"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " of"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " arr) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr.next "
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
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(x);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr.next;"
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
              children: " dummy.next;"
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
              children: " toArrayClass"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr "
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
              children: " (curr) {"
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
              children: "(curr.val);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    curr "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " curr.next;"
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
              children: " result;"
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
    }), "\n", _jsx(_components.h3, {
      id: "typescript-generic-helpers",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#typescript-generic-helpers",
        children: "TypeScript Generic Helpers"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "ts",
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
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
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
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "next"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " };"
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
              children: " fromArrayGeneric"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "arr"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[])"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " =>"
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
              children: "arr."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
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
              children: " head"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: " tail"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: "  "
            })
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " val"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " of"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " arr) {"
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
              children: " node"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
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
              children: " { val, next: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " };"
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
              children: "head) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      head "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " tail "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " node;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
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
              children: "      tail"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " node;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      tail "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " node;"
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
              children: "  "
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
              children: " head;"
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " toArrayGeneric"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "head"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " ListNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "> "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
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
              children: " T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[] "
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
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " T"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
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
              children: " node "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head; node; node "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " node.next) {"
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
              children: "(node.val);"
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
              children: " result;"
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
      id: "append-helper",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#append-helper",
        children: "Append Helper"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " append"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "val"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "createNode"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " createListNode) {"
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
              children: "head) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(val);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
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
              children: " current "
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
              children: " (current.next) current "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " current.next;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  current.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createNode"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(val);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
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
              children: " head;"
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
      id: "summary",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#summary",
        children: "Summary"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Algorithms/interviews:"
        }), " Use class-based ListNode"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Modern JS/React:"
        }), " Use factory functions"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Professional TypeScript apps:"
        }), " Use typed factories"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Key insight:"
      }), " The implementation style doesn't matter as long as nodes have the shape ", _jsx(_components.code, {
        children: "{ val, next }"
      }), ". Choose what fits your context and team preferences."]
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
