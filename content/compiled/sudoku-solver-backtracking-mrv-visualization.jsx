import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
    children: [_jsxs(_components.p, {
      children: ["Solving Sudoku combines the elegance of backtracking algorithms with constraint satisfaction problem (CSP) techniques. While a basic backtracking approach works, adding the ", _jsx(_components.strong, {
        children: "Minimum Remaining Values (MRV) heuristic"
      }), " transforms it from a brute-force solution into an intelligent, efficient solver."]
    }), "\n", _jsx(_components.p, {
      children: "In this guide, we'll implement a complete Sudoku solver in JavaScript and explore how optimization heuristics can dramatically improve performance."
    }), "\n", _jsx(_components.h2, {
      id: "problem-overview",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-overview",
        children: "Problem Overview"
      })
    }), "\n", _jsx(_components.p, {
      children: "We're solving a standard 9×9 Sudoku board where empty cells are represented by \".\". The goal is to fill the board so that each row, column, and 3×3 subgrid contains digits 1–9 exactly once."
    }), "\n", _jsxs(_components.p, {
      children: ["Sudoku always has exactly one valid solution in this problem setting, making it a perfect example of a ", _jsx(_components.strong, {
        children: "constraint satisfaction problem"
      }), "."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "core-algorithm-backtracking-search",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#core-algorithm-backtracking-search",
        children: "Core Algorithm: Backtracking Search"
      })
    }), "\n", _jsx(_components.p, {
      children: "The fundamental approach follows a systematic backtracking strategy:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Try filling digits"
        }), " in empty cells"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check constraints"
        }), " (row, column, box validity)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Backtrack"
        }), " when no valid option exists"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Repeat"
        }), " until the board is completely solved"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["This is similar to other backtracking problems you might have seen, like the ", _jsx(_components.a, {
        href: "/blog/two-pointers",
        children: "Two Pointers"
      }), " technique for array manipulation, but applied to constraint satisfaction."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "the-mrv-optimization",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-mrv-optimization",
        children: "The MRV Optimization"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "MRV (Minimum Remaining Values) heuristic"
      }), " is what transforms our solver from good to exceptional:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Standard approach"
        }), ": Scan cells sequentially (row by row)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "MRV approach"
        }), ": Always pick the cell with the fewest possible digits"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This focuses the search on the \"most constrained\" cells first, dramatically reducing the search tree branching factor."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Why MRV works:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Constrained cells are more likely to fail quickly if the path is wrong"
      }), "\n", _jsx(_components.li, {
        children: "Early failure detection prevents wasted exploration of invalid branches"
      }), "\n", _jsx(_components.li, {
        children: "The algorithm becomes much more efficient on \"hard\" puzzles"
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "javascript-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#javascript-implementation",
        children: "JavaScript Implementation"
      })
    }), "\n", _jsx(_components.p, {
      children: "Here's the complete implementation with MRV optimization:"
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
              children: " solveSudoku"
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
              children: "board"
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
              children: " rows"
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
              children: "({ length: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }, () "
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
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
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
              children: " cols"
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
              children: "({ length: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }, () "
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
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
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
              children: " boxes"
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
              children: "({ length: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }, () "
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
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
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
              children: " empties"
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
              children: " boxId"
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
              children: "r"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "c"
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
              children: "(r "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 3"
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
                color: "#79B8FF"
              },
              children: " 3"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " +"
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
              children: "(c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
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
              children: "  // Initialize constraint tracking"
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
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " r "
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
              children: "; r "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; r"
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
              children: " c "
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
              children: "; c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; c"
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
              children: " ch"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " board[r][c];"
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
              children: " (ch "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " '.'"
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
              children: "        empties."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "([r, c]);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      } "
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
              children: "        const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " d"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Number"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(ch);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        rows[r][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cols[c][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " boxes["
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "boxId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(r, c)][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " true"
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
              children: "      }"
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
              children: "k"
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
              children: " (k "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " empties."
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
              children: " true"
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
              children: "    // MRV: pick the cell with the fewest candidates"
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
              children: " minIdx "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " k, minCnt "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 10"
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
                color: "#E1E4E8"
              },
              children: " k; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " empties."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
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
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "r"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "c"
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
              children: " empties[i];"
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
              children: " cnt "
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
              children: "      for"
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
              children: " d "
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
              children: "; d "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; d"
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
              children: "        if"
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
              children: "rows[r][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cols[c][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "boxes["
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "boxId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(r, c)][d]) cnt"
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
              children: "      }"
            })
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
              children: " (cnt "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " minCnt) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        minCnt "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cnt;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        minIdx "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      }"
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
                color: "#6A737D"
              },
              children: "    // Swap the most constrained cell to current position"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    [empties[k], empties[minIdx]] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [empties[minIdx], empties[k]];"
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
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "r"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "c"
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
              children: " empties[k];"
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
              children: "    // Try each valid digit"
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
              children: " d "
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
              children: "; d "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; d"
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
              children: "      if"
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
              children: "rows[r][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cols[c][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "boxes["
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "boxId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(r, c)][d]) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        board[r][c] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " String"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(d);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        rows[r][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cols[c][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " boxes["
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "boxId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(r, c)][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " true"
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
              children: "        if"
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
              children: "(k "
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
              children: ")) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " true"
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
              children: "        // Backtrack"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        board[r][c] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " '.'"
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
              children: "        rows[r][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " cols[c][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " boxes["
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "boxId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(r, c)][d] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " false"
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
              children: "      }"
            })
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
              children: " false"
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
                color: "#B392F0"
              },
              children: "  dfs"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " board;"
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
      id: "key-implementation-details",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-implementation-details",
        children: "Key Implementation Details"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Constraint Tracking"
      }), ": We use boolean arrays to track which digits are already used in each row, column, and 3×3 box. This gives us O(1) constraint checking."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Box ID Calculation"
      }), ": ", _jsx(_components.code, {
        children: "Math.floor(r / 3) * 3 + Math.floor(c / 3)"
      }), " maps any cell position to its corresponding 3×3 box index."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "MRV Selection"
      }), ": For each recursive call, we find the empty cell with the minimum number of valid digits and solve it first."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "live-visualization-",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#live-visualization-",
        children: "Live Visualization 🎥"
      })
    }), "\n", _jsx(_components.p, {
      children: "Understanding backtracking algorithms becomes much clearer when you can see them in action. I've created an interactive visualization that shows:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Real-time backtracking"
          }), ": Watch cells being filled and unfilled as the algorithm explores different paths"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "MRV heuristic in action"
          }), ": See how the algorithm intelligently picks the most constrained cells first"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Final solution"
          }), ": The complete board once all constraints are satisfied"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "GitHub Repository"
          }), ": ", _jsx(_components.a, {
            href: "https://github.com/liuyuelintop/sudoku-visualizer",
            children: "sudoku-visualizer"
          })]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Live Demo"
          }), ": ", _jsx(_components.a, {
            href: "https://sudoku-visualizer-three.vercel.app/",
            children: "Sudoku Visualizer"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "The visualization makes it clear why MRV is so effective—you'll see the algorithm immediately attack the hardest cells, pruning invalid branches early."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "performance-impact-of-mrv",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#performance-impact-of-mrv",
        children: "Performance Impact of MRV"
      })
    }), "\n", _jsx(_components.p, {
      children: "The difference between naive backtracking and MRV-optimized backtracking is dramatic:"
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Without MRV"
      }), ": The algorithm may branch widely, testing many unnecessary paths across \"easy\" cells while leaving difficult constraints for later."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "With MRV"
      }), ": It always attacks the hardest cells first, causing invalid paths to fail quickly and reducing the overall search space."]
    }), "\n", _jsxs(_components.p, {
      children: ["This optimization can transform a solver that takes seconds on hard puzzles into one that solves them in milliseconds. The technique is particularly powerful when combined with other algorithmic approaches you might recognize from problems like ", _jsx(_components.a, {
        href: "/blog/sliding-window-minimum-subarray-sum",
        children: "sliding window optimization"
      }), "."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "extensions-and-advanced-techniques",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#extensions-and-advanced-techniques",
        children: "Extensions and Advanced Techniques"
      })
    }), "\n", _jsx(_components.p, {
      children: "Once you've mastered the basic MRV approach, consider these advanced optimizations:"
    }), "\n", _jsx(_components.h3, {
      id: "bitmasking",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#bitmasking",
        children: "Bitmasking"
      })
    }), "\n", _jsx(_components.p, {
      children: "Replace boolean arrays with bitmasks for faster constraint checks:"
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
              children: "// Instead of: if (!rows[r][d] && !cols[c][d] && !boxes[boxId][d])"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use: if ((rows[r] | cols[c] | boxes[boxId]) & (1 << d)) === 0)"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "constraint-propagation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#constraint-propagation",
        children: "Constraint Propagation"
      })
    }), "\n", _jsx(_components.p, {
      children: "When a cell has only one possible value, fill it immediately and propagate the constraints. This reduces the search space before backtracking even begins."
    }), "\n", _jsx(_components.h3, {
      id: "hybrid-solving",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#hybrid-solving",
        children: "Hybrid Solving"
      })
    }), "\n", _jsx(_components.p, {
      children: "Combine human-style solving heuristics (like naked singles, hidden singles) with backtracking for even faster performance on typical puzzles."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: "Conclusion"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["This Sudoku solver demonstrates how intelligent heuristics can transform algorithmic performance. The MRV optimization shows that ", _jsx(_components.strong, {
        children: "how"
      }), " you explore a search space is often more important than ", _jsx(_components.strong, {
        children: "what"
      }), " you're searching for."]
    }), "\n", _jsx(_components.p, {
      children: "The combination of:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Clean JavaScript implementation"
      }), "\n", _jsx(_components.li, {
        children: "Efficient constraint tracking"
      }), "\n", _jsx(_components.li, {
        children: "MRV heuristic optimization"
      }), "\n", _jsx(_components.li, {
        children: "Interactive visualization for learning"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "...makes this not just an effective solver, but a perfect tool for understanding backtracking algorithms in action."
    }), "\n", _jsx(_components.p, {
      children: "Whether you're preparing for coding interviews or simply want to understand constraint satisfaction problems better, this approach provides both theoretical insight and practical implementation skills."
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
