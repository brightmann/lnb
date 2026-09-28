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
      id: "explanation-of-in-place-algorithms-using-two-pointers-technique",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#explanation-of-in-place-algorithms-using-two-pointers-technique",
        children: "Explanation of In-Place Algorithms Using Two-Pointers Technique"
      })
    }), "\n", _jsx(_components.p, {
      children: "The two-pointers technique is an efficient algorithmic approach utilized to manipulate arrays in-place, minimizing the need for additional memory.\nThis method leverages two indices (pointers), typically starting from different positions in the array, to traverse and rearrange the elements based on certain conditions, without duplicating the array."
    }), "\n", _jsx(_components.h3, {
      id: "examples",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#examples",
        children: "Examples"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",
            children: "Removing Specific Elements"
          })
        })
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Objective"
        }), ": To remove all instances of a given value from an array without using extra space."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mechanism"
        }), ": Two pointers (", _jsx(_components.code, {
          children: "left"
        }), " and ", _jsx(_components.code, {
          children: "right"
        }), ") are used. The ", _jsx(_components.code, {
          children: "right"
        }), " pointer traverses the entire array, while the ", _jsx(_components.code, {
          children: "left"
        }), " pointer keeps track of the position where the next non-target value should be placed. If ", _jsx(_components.code, {
          children: "right"
        }), " points to a value not equal to the target, the value is moved to the position indicated by ", _jsx(_components.code, {
          children: "left"
        }), ", and ", _jsx(_components.code, {
          children: "left"
        }), " is incremented."]
      }), "\n"]
    }), "\n", _jsxs(_components.ol, {
      start: "2",
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "https://leetcode.com/problems/remove-element/description/",
            children: "Removing Duplicates from Sorted Array"
          })
        })
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Objective"
        }), ": To return the length of the array after removing all duplicates, modifying the original array to hold unique elements at the start."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mechanism"
        }), ": Similar to the first, but here both pointers start at the beginning of the array. The ", _jsx(_components.code, {
          children: "left"
        }), " pointer marks the end of the array of unique elements. As the ", _jsx(_components.code, {
          children: "right"
        }), " pointer encounters a new unique element, it is placed immediately after the last unique element found (", _jsx(_components.code, {
          children: "left"
        }), ")."]
      }), "\n"]
    }), "\n", _jsxs(_components.ol, {
      start: "3",
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: _jsx(_components.a, {
              href: "https://leetcode.com/problems/move-zeroes/description/",
              children: "Moving Zeroes"
            })
          })
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Objective"
            }), ": To move all zeroes in an array to its end while maintaining the order of non-zero elements."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Mechanism"
            }), ": This utilizes a similar approach where the ", _jsx(_components.code, {
              children: "left"
            }), " pointer tracks the position for the next non-zero element. Whenever a non-zero is identified by the ", _jsx(_components.code, {
              children: "right"
            }), " pointer, it is swapped with the element at ", _jsx(_components.code, {
              children: "left"
            }), " index."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Array Partitioning (Quick Sort)"
          })
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Tutorial"
            }), " : ", _jsx(_components.a, {
              href: "https://www.youtube.com/watch?v=MZaf_9IZCrc&lc=UgxdqSl7Q5pH0GMutxN4AaABAg",
              children: "Quicksort: Partitioning an array"
            })]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Objective"
            }), ": To partition an array around a pivot such that elements less than the pivot are on the left, and those greater are on the right."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Mechanism"
            }), ": Two pointers, ", _jsx(_components.code, {
              children: "i"
            }), " and ", _jsx(_components.code, {
              children: "j"
            }), ", are used where ", _jsx(_components.code, {
              children: "i"
            }), " starts just left of the section to be partitioned and moves right when a smaller-than-pivot element is found. The ", _jsx(_components.code, {
              children: "j"
            }), " pointer scans through the array, and when a less-than-pivot element is found, it is swapped with the position indicated by ", _jsx(_components.code, {
              children: "i"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "generic-mechanism-of-the-in-place-two-pointers-technique",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#generic-mechanism-of-the-in-place-two-pointers-technique",
        children: "Generic Mechanism of the In-Place Two-Pointers Technique"
      })
    }), "\n", _jsx(_components.h3, {
      id: "core-concept",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#core-concept",
        children: "Core Concept:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Two Pointers"
        }), ": One pointer (", _jsx(_components.code, {
          children: "left"
        }), ") is used to track the location where the next qualifying element should be placed or manipulated, while the other pointer (", _jsx(_components.code, {
          children: "right"
        }), ") iterates through the array to evaluate each element against a given condition."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "generic-function-design",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#generic-function-design",
        children: "Generic Function Design:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Array Modification"
        }), ": A function ", _jsx(_components.code, {
          children: "inPlaceTransform"
        }), " accepts the array, a condition (", _jsx(_components.code, {
          children: "shouldTransform"
        }), "), and an action (", _jsx(_components.code, {
          children: "performTransform"
        }), "). The condition determines if an element needs rearranging, and the action defines how the rearrangement is executed."]
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
              children: " * Function to modify elements of an array in-place based on a provided condition."
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
              children: " {Array}"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " arr"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - The array to be modified."
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
              children: " shouldTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - A callback function that determines if the element should be transformed."
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
              children: " performTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " - A callback function that defines how to transform the array elements."
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
              children: " {number}"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " The new length or state of the array after processing."
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " inPlaceTransform"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "shouldTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "performTransform"
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
              children: ";"
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
              children: " arr."
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
                color: "#B392F0"
              },
              children: "shouldTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(arr[right])) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      performTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(arr, left, right);"
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
              children: " left; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// This might be the length or a different measurement based on the use case."
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
              children: "// Sample transformation function to swap elements"
            })
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
              children: " swapElements"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "i"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "j"
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
              children: "  [arr[i], arr[j]] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [arr[j], arr[i]];"
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
              children: "// Example usage"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums "
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
              children: "0"
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
              children: "0"
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
              children: "12"
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
              children: "\"Before:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", nums);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "inPlaceTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums, ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "value"
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
              children: " value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", swapElements);"
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
              children: "\"After:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", nums);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// After: [ 1, 3, 12, 0, 0 ]"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "usage-scenario",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#usage-scenario",
        children: "Usage Scenario:"
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
              children: " { inPlaceTransform } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"./inPlaceTransform.js\""
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " swapElements"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "i"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "j"
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
              children: "  [arr[i], arr[j]] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [arr[j], arr[i]];"
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
              children: "// 1. Remove all occurrences of val from an array"
            })
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
              children: " removeElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "nums"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " inPlaceTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums, ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "value"
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
              children: " value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " val, swapElements);"
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
              children: "// 2. Remove duplicates from a sorted array"
            })
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
              children: " removeDuplicates"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " inPlaceTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    nums,"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "value"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "idx"
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
              children: " idx "
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
              children: " nums[idx "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " value,"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    swapElements"
            })
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 3. Move zeroes to the end of the array"
            })
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
              children: " moveZeroes"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " inPlaceTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums, ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "value"
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
              children: " value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", swapElements);"
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
              children: "// 4. Quick sort partition function"
            })
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
              children: " partition"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "left"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "right"
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
              children: " pivot"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " arr[right];"
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
              children: " pivotIndex "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    inPlaceTransform"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(arr, ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "value"
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
              children: " value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " pivot, swapElements) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
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
              children: "  swapElements"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(arr, pivotIndex "
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
              children: ", right); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Move the pivot to its correct position"
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
              children: " pivotIndex "
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Example usage of each function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums1 "
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
              children: "];"
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
              children: "\""
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Original Array:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ["
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "nums1]);"
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
              children: "\"Elements after removing 3:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "removeElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums1, "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "), nums1);"
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
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums2 "
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
              children: "];"
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
              children: "\""
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Original Array:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ["
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "nums2]);"
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
              children: "\"Array after duplicates removed:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "removeDuplicates"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums2), nums2);"
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
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums3 "
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
              children: "0"
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
              children: "0"
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
              children: "12"
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
              children: "\""
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Original Array:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ["
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "nums3]);"
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
              children: "\"Array after moving zeroes:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "moveZeroes"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums3), nums3);"
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
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " nums4 "
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
              children: "5"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "9"
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
              children: "6"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "5"
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
              children: "5"
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
              children: "\""
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Original Array:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ["
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "nums4]);"
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
              children: "\"New pivot index:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "partition"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(nums4, "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", nums4."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "), nums4);"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "common-operations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#common-operations",
        children: "Common Operations:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Element Filtering"
        }), ": Removing unwanted elements (e.g., specific values or duplicates)."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Element Reordering"
        }), ": Moving elements to specific parts of the array (e.g., moving zeros to the end)."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Partitioning"
        }), ": Segregating elements around a pivot for sorting or quick sort algorithms."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "advantages",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#advantages",
        children: "Advantages:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Space Efficiency"
        }), ": Operates directly on the input array, eliminating the need for additional space proportional to the input size."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Adaptability"
        }), ": Easily adaptable for different operations by changing the condition and action callbacks."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Performance"
        }), ": Offers efficient processing by minimizing memory usage and often reducing complexity compared to other methods that require additional data structures."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This technique is powerful for a range of problems where the array needs to be modified in place, providing a robust, reusable, and efficient tool in a developer's arsenal. The flexibility to define both the condition for rearrangement and the method of rearrangement ensures that the function can be tailored to fit a wide array of needs."
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
