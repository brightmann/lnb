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
      children: ["The ", _jsx(_components.strong, {
        children: "Minimum Size Subarray Sum"
      }), " problem is one of the classic \"sliding window\" questions in algorithm design. It asks us to find the smallest subarray whose sum is greater than or equal to a given target."]
    }), "\n", _jsxs(_components.p, {
      children: ["This problem is deceptively simple, but solving it efficiently requires a clever use of the ", _jsx(_components.strong, {
        children: "two-pointer sliding window"
      }), " technique."]
    }), "\n", _jsx(_components.h2, {
      id: "problem-statement",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-statement",
        children: "Problem Statement"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Given an array of positive integers ", _jsx(_components.code, {
        children: "nums"
      }), " and a target integer ", _jsx(_components.code, {
        children: "target"
      }), ", return the minimal length of a subarray whose sum is greater than or equal to ", _jsx(_components.code, {
        children: "target"
      }), ". If no such subarray exists, return ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example:"
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
                color: "#B392F0"
              },
              children: "Input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": (target "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 7"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "), (nums "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Output"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [4,3] has the minimal length"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "naïve-approach-brute-force",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#naïve-approach-brute-force",
        children: "Naïve Approach: Brute Force"
      })
    }), "\n", _jsx(_components.p, {
      children: "The straightforward approach would be to:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Check all subarrays"
      }), "\n", _jsx(_components.li, {
        children: "Compute their sums"
      }), "\n", _jsx(_components.li, {
        children: "Track the shortest valid one"
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["But this costs ", _jsx(_components.strong, {
        children: "O(n²)"
      }), " time complexity, which is too slow for large inputs."]
    }), "\n", _jsx(_components.h2, {
      id: "optimized-approach-sliding-window",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#optimized-approach-sliding-window",
        children: "Optimized Approach: Sliding Window"
      })
    }), "\n", _jsx(_components.p, {
      children: "The key insight that makes sliding window possible:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["The array contains ", _jsx(_components.strong, {
          children: "only positive integers"
        })]
      }), "\n", _jsx(_components.li, {
        children: "This means if you add more numbers, the sum increases. If you remove numbers, the sum decreases"
      }), "\n", _jsx(_components.li, {
        children: "That makes it possible to use a moving \"window\" instead of recalculating from scratch"
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "algorithm-explanation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#algorithm-explanation",
        children: "Algorithm Explanation"
      })
    }), "\n", _jsx(_components.p, {
      children: "We maintain two pointers:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "right"
        }), " → expands the window by including new numbers"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "left"
        }), " → shrinks the window from the left once the sum reaches or exceeds ", _jsx(_components.code, {
          children: "target"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Steps:"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Start with an empty window (", _jsx(_components.code, {
          children: "left = 0, right = 0, sum = 0"
        }), ")"]
      }), "\n", _jsxs(_components.li, {
        children: ["Expand ", _jsx(_components.code, {
          children: "right"
        }), " until ", _jsx(_components.code, {
          children: "sum >= target"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["Then shrink from the left (", _jsx(_components.code, {
          children: "left++"
        }), ") as much as possible while keeping ", _jsx(_components.code, {
          children: "sum >= target"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Update ", _jsx(_components.code, {
              children: "minLen"
            }), " at each shrink"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["Continue until ", _jsx(_components.code, {
          children: "right"
        }), " reaches the end"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "code-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#code-implementation",
        children: "Code Implementation"
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
              children: " minSubArrayLen"
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
              children: "target"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "nums"
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
              children: " left "
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
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    sum "
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
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    minLen "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " Infinity"
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
              children: " right "
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
              children: "; right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; right"
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
                color: "#E1E4E8"
              },
              children: "    sum "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums[right];"
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
              children: "    while"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (sum "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " target) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      minLen "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
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
              children: "(minLen, right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " left "
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
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      sum "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums[left];"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      left"
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
              children: " minLen "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " Infinity"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ?"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " :"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " minLen;"
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
      id: "walkthrough-example",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#walkthrough-example",
        children: "Walkthrough Example"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Input:"
      }), " ", _jsx(_components.code, {
        children: "target = 7, nums = [2,3,1,2,4,3]"
      })]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Expand until sum ≥ 7"
          }), " → ", _jsx(_components.code, {
            children: "[2,3,1,2]"
          }), ", sum = 8"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "minLen = 4"
          }), "\n", _jsxs(_components.li, {
            children: ["Shrink → remove 2 → ", _jsx(_components.code, {
              children: "[3,1,2]"
            }), ", sum = 6 (< 7)"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Expand"
          }), " → ", _jsx(_components.code, {
            children: "[3,1,2,4]"
          }), ", sum = 10"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "minLen = 4 → 4"
          }), "\n", _jsxs(_components.li, {
            children: ["Shrink → ", _jsx(_components.code, {
              children: "[1,2,4]"
            }), " sum = 7 → minLen = 3"]
          }), "\n", _jsxs(_components.li, {
            children: ["Shrink → ", _jsx(_components.code, {
              children: "[2,4]"
            }), " sum = 6 (< 7)"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Expand"
          }), " → ", _jsx(_components.code, {
            children: "[2,4,3]"
          }), ", sum = 9"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["minLen = 3 → 2 (", _jsx(_components.code, {
              children: "[4,3]"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Answer = 2"
      })
    }), "\n", _jsx(_components.h2, {
      id: "time-and-space-complexity",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#time-and-space-complexity",
        children: "Time and Space Complexity"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Time Complexity:"
        }), " O(n) - Each element is visited at most twice (once by right pointer, once by left pointer)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) - Only using constant extra space"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "key-takeaways",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-takeaways",
        children: "Key Takeaways"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Sliding window works because the array contains positive integers only"
        })
      }), "\n", _jsxs(_components.li, {
        children: ["Two pointers let us expand and shrink efficiently in ", _jsx(_components.strong, {
          children: "O(n)"
        }), " time"]
      }), "\n", _jsx(_components.li, {
        children: "If negatives were allowed, this approach would break (we'd need prefix sums or other methods)"
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["✅ ", _jsx(_components.strong, {
        children: "Lesson:"
      }), " Always check if \"sliding window\" is possible by looking for ", _jsx(_components.strong, {
        children: "monotonic properties"
      }), " (e.g., sum increases with window size here)."]
    }), "\n", _jsx(_components.h2, {
      id: "when-to-use-sliding-window",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#when-to-use-sliding-window",
        children: "When to Use Sliding Window"
      })
    }), "\n", _jsx(_components.p, {
      children: "The sliding window technique is applicable when:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Problem involves contiguous subarrays/substrings"
        })
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "There's a monotonic relationship"
        }), " (like sum increases with size)"]
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "You need to optimize from O(n²) to O(n)"
        })
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Common patterns include:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Maximum/minimum subarray with certain property"
      }), "\n", _jsx(_components.li, {
        children: "Longest substring with at most K distinct characters"
      }), "\n", _jsx(_components.li, {
        children: "Fixed-size window problems"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This problem perfectly demonstrates how understanding the underlying properties of your data (positive integers → monotonic sums) can lead to elegant algorithmic optimizations."
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
