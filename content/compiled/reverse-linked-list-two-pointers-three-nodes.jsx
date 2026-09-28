import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Reversing a linked list looks simple—", _jsx(_components.em, {
        children: "just flip the arrows"
      }), "—but the trick is to do it without losing the rest of the list. The reliable pattern is:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Use ", _jsx(_components.strong, {
          children: "two pointers"
        }), ": ", _jsx(_components.code, {
          children: "prev"
        }), " (already reversed part) and ", _jsx(_components.code, {
          children: "cur"
        }), " (node being processed)"]
      }), "\n", _jsxs(_components.li, {
        children: ["Each step involves ", _jsx(_components.strong, {
          children: "three nodes"
        }), ": ", _jsx(_components.code, {
          children: "prev"
        }), ", ", _jsx(_components.code, {
          children: "cur"
        }), ", and ", _jsx(_components.code, {
          children: "cur.next"
        }), " (saved as ", _jsx(_components.code, {
          children: "next"
        }), ")"]
      }), "\n", _jsxs(_components.li, {
        children: ["Flip ", _jsx(_components.strong, {
          children: "one edge per step"
        }), ": ", _jsx(_components.code, {
          children: "cur.next = prev"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This small, local operation gradually inverts the entire list."
    }), "\n", _jsxs(_components.p, {
      children: ["If you're working with linked lists in JavaScript, check out our guide on ", _jsx(_components.a, {
        href: "/blog/javascript-linkedlist-classes-vs-factories",
        children: "JavaScript LinkedList Implementation: Classes vs Factories"
      }), " to understand different node construction approaches."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "iterative-solution-clean--idiomatic",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#iterative-solution-clean--idiomatic",
        children: "Iterative Solution (Clean & Idiomatic)"
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
              children: "/**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " * Reverse a singly linked list (iterative)."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " *"
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
              children: " {ListNode}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " head"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - The head of the original linked list"
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
              children: "@return"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " {ListNode}"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - The new head of the reversed linked list"
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
              children: "var"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
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
              children: " cur.next; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// save the rest"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    cur.next "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " prev; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// flip the arrow"
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
              children: " cur; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// move prev forward"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    cur "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " next; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// move cur forward"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " prev; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// new head"
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
      id: "why-this-works-quick-intuition",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#why-this-works-quick-intuition",
        children: "Why This Works (Quick Intuition)"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Loop invariant:"
        }), " Before each iteration, ", _jsx(_components.code, {
          children: "prev"
        }), " is the head of the already-reversed prefix; ", _jsx(_components.code, {
          children: "cur"
        }), " is the head of the remaining suffix."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Maintenance:"
        }), " ", _jsx(_components.code, {
          children: "cur.next = prev"
        }), " flips one edge while keeping the list connected via ", _jsx(_components.code, {
          children: "next"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Termination:"
        }), " When ", _jsx(_components.code, {
          children: "cur === null"
        }), ", everything has been flipped; ", _jsx(_components.code, {
          children: "prev"
        }), " is the new head."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["This pattern is fundamental to many linked list operations. For more complex cases like removing specific elements, see our guide on ", _jsx(_components.a, {
        href: "/blog/remove-linked-list-elements",
        children: "Remove Linked List Elements - Mastering the Dummy Head Pattern"
      }), "."]
    }), "\n", _jsx(_components.h3, {
      id: "complexity",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#complexity",
        children: "Complexity"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Time:"
        }), " O(n) — each node processed once"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Space:"
        }), " O(1) — constant extra pointers"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "about-the-optional-early-return",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#about-the-optional-early-return",
        children: "About the \"Optional\" Early Return"
      })
    }), "\n", _jsx(_components.p, {
      children: "You'll often see an extra guard:"
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
              children: "// Optional early return for readability (redundant for correctness):"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// if (!head || !head.next) return head;"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "What it does:"
        }), " Immediately returns for empty lists ", _jsx(_components.code, {
          children: "[]"
        }), " and single-node lists ", _jsx(_components.code, {
          children: "[x]"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Why it's optional:"
        }), " The main loop already handles these naturally:", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "head === null"
            }), " ⇒ loop never runs ⇒ returns ", _jsx(_components.code, {
              children: "prev (null)"
            }), "."]
          }), "\n", _jsx(_components.li, {
            children: "single node ⇒ one iteration ⇒ returns that node."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Why keep it anyway:"
        }), " Some developers prefer the explicit guard for ", _jsx(_components.strong, {
          children: "readability"
        }), " (\"trivial cases: return early\"). It avoids entering the loop when the answer is obvious, though the performance impact is negligible."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["If you prefer to show both styles, you can present two versions labeled ", _jsx(_components.strong, {
        children: "\"with early return (readability)\""
      }), " and ", _jsx(_components.strong, {
        children: "\"minimal version (no early return)\""
      }), ". Otherwise, keep the clean version above and include the commented line with this explanation."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "common-pitfall-and-how-this-code-avoids-it",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#common-pitfall-and-how-this-code-avoids-it",
        children: "Common Pitfall (and How This Code Avoids It)"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Losing the list:"
        }), " Reassigning ", _jsx(_components.code, {
          children: "cur.next"
        }), " before saving ", _jsx(_components.code, {
          children: "cur.next"
        }), " causes the rest of the list to be lost.", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["We prevent this by ", _jsxs(_components.strong, {
              children: ["saving ", _jsx(_components.code, {
                children: "next = cur.next"
              }), " first"]
            }), ", then flipping the edge."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["This is a common mistake in linked list manipulation. For more patterns that help avoid such issues, explore our ", _jsx(_components.a, {
        href: "/blog/design-linked-list-straightforward-to-elegant",
        children: "Design Linked List: From Straightforward to Elegant"
      }), " guide."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "takeaway",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#takeaway",
        children: "Takeaway"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Two pointers, three nodes, one edge"
        }), " is the reusable pattern behind reversing sub-lists and k-group reversals."]
      }), "\n", _jsx(_components.li, {
        children: "Keep the implementation minimal; add the optional early return only if it helps your personal readability or aligns with your style guide."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This technique forms the foundation for more advanced linked list algorithms and is essential knowledge for technical interviews and algorithm practice."
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
