import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
      children: ["The most important concept in this problem is understanding how to use a ", _jsx(_components.em, {
        children: "dummy head node"
      }), ". It is a powerful technique for linked list problems, because it simplifies edge cases and unifies the logic."]
    }), "\n", _jsx(_components.h2, {
      id: "problem-statement",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-statement",
        children: "Problem Statement"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Given the head of a singly linked list and an integer ", _jsx(_components.code, {
        children: "val"
      }), ", remove all the nodes of the linked list that have ", _jsx(_components.code, {
        children: "val"
      }), " equal to the given value, and return the new head."]
    }), "\n", _jsx(_components.h2, {
      id: "approach-1-without-dummy-head-straightforward-but-more-complex",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#approach-1-without-dummy-head-straightforward-but-more-complex",
        children: "Approach 1: Without Dummy Head (Straightforward but More Complex)"
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " removeElements"
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
              children: ") {"
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
              children: " (head "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " &&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head.val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    head "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head.next;"
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur "
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
              children: " (cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " &&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
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
                color: "#E1E4E8"
              },
              children: "    cur.next.val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (cur.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next.next) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next);"
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
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "thought-process",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#thought-process",
        children: "Thought Process"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Start by removing leading nodes that match the target value."
      }), "\n", _jsxs(_components.li, {
        children: ["Then traverse the list with a pointer ", _jsx(_components.code, {
          children: "cur"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["At each step, check ", _jsx(_components.code, {
          children: "cur.next"
        }), ". If it matches the value, skip it; otherwise, advance."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "characteristics",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#characteristics",
        children: "Characteristics"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Correct and intuitive, but ", _jsx(_components.strong, {
          children: "requires separate handling for the head node(s)"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Slightly less elegant because of the special-case loop at the beginning."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "approach-2-with-dummy-head-cleaner-and-uniform",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#approach-2-with-dummy-head-cleaner-and-uniform",
        children: "Approach 2: With Dummy Head (Cleaner and Uniform)"
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " removeElements"
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
              children: " dummyHead "
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
              children: ", head);"
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
              children: " cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dummyHead;"
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
              children: " (cur.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
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
                color: "#E1E4E8"
              },
              children: "    cur.next.val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (cur.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next.next) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next);"
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
              children: " dummyHead.next;"
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
      id: "thought-process-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#thought-process-1",
        children: "Thought Process"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Create a dummy head pointing to the original ", _jsx(_components.code, {
          children: "head"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Use a pointer ", _jsx(_components.code, {
          children: "cur"
        }), " starting from the dummy head."]
      }), "\n", _jsxs(_components.li, {
        children: ["Always check ", _jsx(_components.code, {
          children: "cur.next"
        }), ": if it matches, skip it; if not, move forward."]
      }), "\n", _jsxs(_components.li, {
        children: ["Finally, return ", _jsx(_components.code, {
          children: "dummyHead.next"
        }), " as the new head."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "characteristics-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#characteristics-1",
        children: "Characteristics"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "No special treatment for the head node."
      }), "\n", _jsx(_components.li, {
        children: "Unified logic for head, middle, and tail."
      }), "\n", _jsxs(_components.li, {
        children: ["This pattern is widely considered the ", _jsx(_components.em, {
          children: "canonical solution"
        }), " for linked list deletion problems."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "my-mistaken-attempt",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#my-mistaken-attempt",
        children: "My Mistaken Attempt"
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " removeElements"
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
              children: " dummyHead "
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
              children: ", head);"
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
              children: " cur "
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
              children: " (cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
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
                color: "#E1E4E8"
              },
              children: "    cur.val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (dummyHead.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cur.next);"
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
              children: " dummyHead.next;"
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
      id: "what-i-was-thinking",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#what-i-was-thinking",
        children: "What I Was Thinking"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["I believed that since ", _jsx(_components.code, {
          children: "dummyHead"
        }), " already connects to ", _jsx(_components.code, {
          children: "head"
        }), ", I could always handle deletions by simply reassigning ", _jsx(_components.code, {
          children: "dummyHead.next"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["I therefore set ", _jsx(_components.code, {
          children: "cur = head"
        }), " and attempted to modify ", _jsx(_components.code, {
          children: "dummyHead.next"
        }), " whenever a match was found."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "why-this-was-wrong",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#why-this-was-wrong",
        children: "Why This Was Wrong"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Lost the predecessor:"
        }), " ", _jsx(_components.code, {
          children: "dummyHead"
        }), " can only help when deleting the actual head. For middle nodes, you must reconnect from their immediate predecessor."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Infinite loop risk:"
        }), " In the delete branch, ", _jsx(_components.code, {
          children: "cur"
        }), " did not advance, so the loop could get stuck."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Over-reliance on dummyHead:"
        }), " I misunderstood its role. A dummy node does not \"delete everything for you\"; it just provides a consistent starting point."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "reflection",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#reflection",
        children: "Reflection"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["My error came from a ", _jsx(_components.strong, {
          children: "misconception about dummy head usage"
        }), ". I thought it could act as a universal pointer for all deletions, when in reality, it only ensures we have a safe and consistent starting node."]
      }), "\n", _jsxs(_components.li, {
        children: ["The correction was simple but fundamental: move the traversal pointer to start at ", _jsx(_components.code, {
          children: "dummyHead"
        }), ", always check ", _jsx(_components.code, {
          children: "cur.next"
        }), ", and advance correctly."]
      }), "\n", _jsx(_components.li, {
        children: "Once I applied this, the logic became uniform and robust, handling head, middle, and tail cases seamlessly."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "key-takeaways",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-takeaways",
        children: "Key Takeaways"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Without dummy head:"
        }), " The solution works but requires special handling of the head node."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "With dummy head:"
        }), " The solution is more elegant, with a unified approach that removes all edge cases."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Personal lesson:"
        }), " A dummy head is not magic. It is a ", _jsx(_components.em, {
          children: "tool"
        }), " that simplifies pointer management — but only if you maintain the correct predecessor during traversal."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Best practice:"
        }), " In linked list problems involving insertion or deletion, ", _jsx(_components.strong, {
          children: "always consider introducing a dummy head"
        }), ". It makes the code cleaner and reduces the chance of subtle bugs."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["For a deeper understanding of the dummy head pattern and how it applies to many other algorithmic problems, check out ", _jsx(_components.a, {
        href: "/blog/dummy-head-design-pattern",
        children: "The Dummy Head Design Pattern: Beyond Linked Lists"
      }), "."]
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
