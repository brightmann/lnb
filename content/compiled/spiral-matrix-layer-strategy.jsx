import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
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
      children: ["Generating a spiral matrix might look like magic when you first see the solution code. Rows and columns fill in perfect loops, numbers snake around the edges, and everything lines up neatly. But the brilliance of this problem is not in complex algorithms—it's in organizing the work ", _jsx(_components.strong, {
        children: "layer by layer"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["In this post, we'll break down the thought process behind the Spiral Matrix II problem, explain why concepts like ", _jsx(_components.em, {
        children: "loops"
      }), ", ", _jsx(_components.em, {
        children: "offsets"
      }), ", and ", _jsx(_components.em, {
        children: "rings"
      }), " exist, and walk through the solution step by step."]
    }), "\n", _jsx(_components.h2, {
      id: "problem-statement",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-statement",
        children: "Problem Statement"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["We're asked to generate an ", _jsx(_components.code, {
        children: "n × n"
      }), " matrix filled with numbers ", _jsx(_components.code, {
        children: "1"
      }), " to ", _jsx(_components.code, {
        children: "n²"
      }), " in spiral order."]
    }), "\n", _jsxs(_components.p, {
      children: ["For example, for ", _jsx(_components.code, {
        children: "n = 3"
      }), ", the result should be:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "[\n  [1, 2, 3],\n  [8, 9, 4],\n  [7, 6, 5]\n]\n"
      })
    }), "\n", _jsx(_components.h2, {
      id: "step-1-key-observations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-1-key-observations",
        children: "Step 1: Key Observations"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "1. The spiral pattern can be seen as concentric \"rings\" (or layers)"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "The outermost ring: top row, right column, bottom row, left column"
      }), "\n", _jsx(_components.li, {
        children: "Then, move inward and repeat"
      }), "\n", _jsx(_components.li, {
        children: "Stop when you reach the center"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["2. The number of rings depends on ", _jsx(_components.code, {
          children: "n"
        }), ":"]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Each ring consumes 2 rows and 2 columns"
      }), "\n", _jsxs(_components.li, {
        children: ["Therefore, there are ", _jsx(_components.code, {
          children: "Math.floor(n / 2)"
        }), " full rings"]
      }), "\n", _jsxs(_components.li, {
        children: ["If ", _jsx(_components.code, {
          children: "n"
        }), " is odd, there's one cell left in the center"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "step-2-variables-that-control-the-process",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-2-variables-that-control-the-process",
        children: "Step 2: Variables That Control the Process"
      })
    }), "\n", _jsx(_components.p, {
      children: "In an effective solution, these variables play critical roles:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "startRow"
          }), " / ", _jsx(_components.code, {
            children: "startCol"
          }), ":"]
        }), " Where the current ring begins"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "loopCount = Math.floor(n / 2)"
          }), ":"]
        }), " How many rings to draw"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "offset"
          }), ":"]
        }), " Ensures we shrink the boundary each time (so the next inner ring doesn't overwrite the previous one)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "count"
          }), ":"]
        }), " The number to fill in"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "👉 Think of it like peeling an onion. Each loop strips away one layer of the matrix."
    }), "\n", _jsx(_components.h2, {
      id: "step-3-one-ring-at-a-time",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-3-one-ring-at-a-time",
        children: "Step 3: One Ring at a Time"
      })
    }), "\n", _jsx(_components.p, {
      children: "Inside each loop, we fill four walls:"
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "1. Top row (left → right)"
      }), "\nFrom ", _jsx(_components.code, {
        children: "(startRow, startCol)"
      }), " to ", _jsx(_components.code, {
        children: "(startRow, n - offset)"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "2. Right column (top → bottom)"
      }), "\nFrom ", _jsx(_components.code, {
        children: "(startRow, n - offset)"
      }), " to ", _jsx(_components.code, {
        children: "(n - offset, n - offset)"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "3. Bottom row (right → left)"
      }), "\nFrom ", _jsx(_components.code, {
        children: "(n - offset, n - offset)"
      }), " to ", _jsx(_components.code, {
        children: "(n - offset, startCol)"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "4. Left column (bottom → top)"
      }), "\nFrom ", _jsx(_components.code, {
        children: "(n - offset, startCol)"
      }), " back up to ", _jsx(_components.code, {
        children: "(startRow, startCol)"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: "After finishing one ring:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Increment ", _jsx(_components.code, {
          children: "startRow"
        }), " and ", _jsx(_components.code, {
          children: "startCol"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["Increment ", _jsx(_components.code, {
          children: "offset"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "step-4-the-center-cell",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-4-the-center-cell",
        children: "Step 4: The Center Cell"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["When ", _jsx(_components.code, {
        children: "n"
      }), " is odd, we still have one untouched cell in the center. That's why we handle it separately:"]
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
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (n "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "%"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ==="
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
                color: "#E1E4E8"
              },
              children: "  res[mid][mid] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count;"
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
      id: "step-5-complete-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-5-complete-implementation",
        children: "Step 5: Complete Implementation"
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " generateMatrix"
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
              children: "n"
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
              children: " startRow "
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
              children: "    startCol "
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
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " loopCount "
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
              children: "floor"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(n "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
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
                color: "#F97583"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " mid "
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
              children: "floor"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(n "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
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
                color: "#F97583"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " offset "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
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
                color: "#F97583"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
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
                color: "#F97583"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res "
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
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(n)."
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
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "map"
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
              children: "(n)."
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
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
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
              children: " (loopCount"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
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
              children: "    let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " row "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startRow,"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      col "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startCol;"
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
              children: "    // Top row (left to right)"
            })
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
              children: " (; col "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " n "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " offset; col"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[row][col] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count"
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
              children: "    "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Right column (top to bottom)"
            })
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
              children: " (; row "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " n "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " offset; row"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[row][col] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count"
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
              children: "    "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Bottom row (right to left)"
            })
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
              children: " (; col "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startCol; col"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[row][col] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count"
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
              children: "    "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Left column (bottom to top)"
            })
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
              children: " (; row "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " startRow; row"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[row][col] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Move to the next ring"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    startRow"
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
              children: "    startCol"
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
              children: "    offset"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // Handle center cell for odd n"
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
              children: " (n "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "%"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[mid][mid] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count;"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res;"
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
      id: "step-6-why-this-strategy-works",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#step-6-why-this-strategy-works",
        children: "Step 6: Why This Strategy Works"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The genius of this approach is ", _jsx(_components.strong, {
        children: "regularity"
      }), ":"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Each ring follows the same 4 steps"
      }), "\n", _jsx(_components.li, {
        children: "The boundaries naturally shrink after each ring"
      }), "\n", _jsxs(_components.li, {
        children: ["Stopping conditions (", _jsx(_components.code, {
          children: "loopCount"
        }), " and odd-center check) guarantee correctness"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["You don't need to think about corner cases for different ", _jsx(_components.code, {
        children: "n"
      }), ". The pattern is consistent and scales elegantly."]
    }), "\n", _jsx(_components.h2, {
      id: "alternative-boundary-based-approach",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#alternative-boundary-based-approach",
        children: "Alternative: Boundary-Based Approach"
      })
    }), "\n", _jsx(_components.p, {
      children: "Here's another clean implementation using explicit boundaries:"
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " generateMatrix"
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
              children: "n"
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
              children: " matrix"
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
              children: "({ length: n }, () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(n)."
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
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
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
              children: " top "
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
              children: ", bottom "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " n "
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
                color: "#F97583"
              },
              children: "    let"
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
              children: ", right "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " n "
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
                color: "#F97583"
              },
              children: "    let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
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
              children: "    "
            })
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
              children: " (top "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " bottom "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right) {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // Fill top row from left to right"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "        for"
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
              children: " j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " left; j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right; j"
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
              children: "            matrix[top][j] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num"
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
              children: "        }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        top"
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
              children: "        "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // Fill right column from top to bottom"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "        for"
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
              children: " top; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " bottom; i"
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
              children: "            matrix[i][right] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num"
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
              children: "        }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        right"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
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
              children: "        "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // Fill bottom row from right to left (if row exists)"
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
              children: " (top "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " bottom) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "            for"
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
              children: " j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right; j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " left; j"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
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
              children: "                matrix[bottom][j] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num"
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
              children: "            }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            bottom"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
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
              children: "        }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // Fill left column from bottom to top (if column exists)"
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
              children: " (left "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " right) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "            for"
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
              children: " bottom; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " top; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
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
              children: "                matrix[i][left] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num"
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
              children: "            }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            left"
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
              children: "        }"
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
              children: "    "
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
              children: " matrix;"
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
        }), " O(n²) - We need to fill every cell in the n×n matrix"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Space Complexity:"
        }), " O(n²) - For the result matrix (excluding input)"]
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
          children: "Think of the spiral as concentric layers (rings)"
        })
      }), "\n", _jsx(_components.li, {
        children: "Each loop = one ring = four straight-line fills"
      }), "\n", _jsxs(_components.li, {
        children: ["Keep track of boundaries (", _jsx(_components.code, {
          children: "startRow"
        }), ", ", _jsx(_components.code, {
          children: "startCol"
        }), ", ", _jsx(_components.code, {
          children: "offset"
        }), ") or use explicit boundaries"]
      }), "\n", _jsxs(_components.li, {
        children: ["For odd ", _jsx(_components.code, {
          children: "n"
        }), ", handle the center cell separately"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Once you frame the problem as \"peel layers one by one,\" the code almost writes itself."
    }), "\n", _jsx(_components.h2, {
      id: "matrix-traversal-mindset",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#matrix-traversal-mindset",
        children: "Matrix Traversal Mindset"
      })
    }), "\n", _jsx(_components.p, {
      children: "👉 Next time you see a \"matrix traversal\" problem, ask yourself:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Can I decompose this into ", _jsx(_components.strong, {
          children: "layers"
        }), " or ", _jsx(_components.strong, {
          children: "boundaries"
        }), "?"]
      }), "\n", _jsx(_components.li, {
        children: "Can I repeat the same steps for each layer?"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "That mindset shift often transforms a confusing traversal problem into a clean and predictable solution."
    }), "\n", _jsx(_components.h2, {
      id: "common-mistakes-to-avoid",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#common-mistakes-to-avoid",
        children: "Common Mistakes to Avoid"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Array initialization:"
        }), " Make sure to create independent rows (avoid shared references)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Boundary conditions:"
        }), " Be careful with ", _jsx(_components.code, {
          children: "<="
        }), " vs ", _jsx(_components.code, {
          children: "<"
        }), " in your loops"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Center cell:"
        }), " Don't forget to handle the center for odd-sized matrices"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Off-by-one errors:"
        }), " Test with small examples like n=1, n=2, n=3"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This layer-by-layer strategy is not just elegant—it's also robust and easy to debug, making it perfect for coding interviews and real-world applications."
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
