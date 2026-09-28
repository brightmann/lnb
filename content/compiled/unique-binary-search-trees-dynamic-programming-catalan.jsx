import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msubsup: "msubsup",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["In the world of algorithms, some problems seem daunting at first glance, but once you discover their underlying pattern, their solutions are remarkably elegant. Today, we're going to take a deep dive into one such classic problem: ", _jsx(_components.strong, {
        children: "Given an integer n, how many structurally unique Binary Search Trees (BSTs) can you form using nodes from 1 to n?"
      })]
    }), "\n", _jsx(_components.p, {
      children: "This is not only problem #96 on LeetCode but also a fantastic exercise for understanding recursion, divide-and-conquer, and the power of Dynamic Programming. Let's follow a systematic approach and unravel this mystery step by step."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Building DP intuition?"
        }), " This problem demonstrates the same clean state definition and boundary handling patterns you'll find in classic DP problems like the ", _jsx(_components.a, {
          href: "/blog/knapsack-problem-complete-guide",
          children: "0-1 Knapsack"
        }), ". Both problems teach you to think systematically about subproblem structure."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "understanding-the-problem-from-5-shapes-to-a-general-rule",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#understanding-the-problem-from-5-shapes-to-a-general-rule",
        children: "Understanding the Problem: From 5 Shapes to a General Rule"
      })
    }), "\n", _jsx(_components.p, {
      children: "First, let's be clear on what a Binary Search Tree (BST) is. For any given node in the tree, all values in its left subtree are smaller than the node's value, and all values in its right subtree are larger."
    }), "\n", _jsxs(_components.p, {
      children: ["Let's start with a concrete example. If ", _jsx(_components.code, {
        children: "n = 3"
      }), ", we have the nodes ", (1, 2, 3), ". How many unique BSTs can we build? The answer is 5, and they look like this:"]
    }), "\n", _jsxs(_components.p, {
      children: ["Counting them manually works for small ", _jsx(_components.code, {
        children: "n"
      }), ", but this approach quickly becomes impractical. We need to find a more general and efficient method."]
    }), "\n", _jsx(_components.h2, {
      id: "the-core-insight-uncovering-subproblem-structure-from-n3",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-core-insight-uncovering-subproblem-structure-from-n3",
        children: "The Core Insight: Uncovering Subproblem Structure from n=3"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The key to solving most tree-based problems is to ", _jsx(_components.strong, {
        children: "focus on the root node"
      }), ". Let's apply this to our ", _jsx(_components.code, {
        children: "n=3"
      }), " example and meticulously analyze what happens when we pick each possible node as the root."]
    }), "\n", _jsx(_components.h3, {
      id: "case-1-the-root-is-1",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#case-1-the-root-is-1",
        children: ["Case 1: The root is ", _jsx(_components.code, {
          children: "1"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Left Subtree:"
        }), " Must contain all nodes smaller than 1. There are none, so the left subtree has ", _jsx(_components.strong, {
          children: "0 nodes"
        }), " (it's an empty tree)."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Right Subtree:"
        }), " Must contain all nodes larger than 1, which are ", (2, 3), ". The right subtree has ", _jsx(_components.strong, {
          children: "2 nodes"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["The problem is now reduced to: \"How many unique BSTs can be formed from the set ", (2, 3), "?\" The number of structures you can form with ", (2, 3), " is ", _jsx(_components.strong, {
          children: "exactly the same"
        }), " as the number of structures you can form with ", (1, 2), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Therefore, when the root is 1, the total count is: ", _jsx(_components.code, {
          children: "(ways to form a BST with 0 nodes) × (ways to form a BST with 2 nodes)"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "case-2-the-root-is-2",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#case-2-the-root-is-2",
        children: ["Case 2: The root is ", _jsx(_components.code, {
          children: "2"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Left Subtree:"
        }), " Must contain nodes smaller than 2, which is ", 1, ". The left subtree has ", _jsx(_components.strong, {
          children: "1 node"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Right Subtree:"
        }), " Must contain nodes larger than 2, which is ", 3, ". The right subtree has ", _jsx(_components.strong, {
          children: "1 node"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "The problem is now reduced to two subproblems of size 1."
      }), "\n", _jsxs(_components.li, {
        children: ["Therefore, when the root is 2, the total count is: ", _jsx(_components.code, {
          children: "(ways to form a BST with 1 node) × (ways to form a BST with 1 node)"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "case-3-the-root-is-3",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#case-3-the-root-is-3",
        children: ["Case 3: The root is ", _jsx(_components.code, {
          children: "3"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Left Subtree:"
        }), " Must contain nodes smaller than 3, which are ", (1, 2), ". The left subtree has ", _jsx(_components.strong, {
          children: "2 nodes"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Right Subtree:"
        }), " Must contain nodes larger than 3. There are none, so the right subtree has ", _jsx(_components.strong, {
          children: "0 nodes"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "The problem is now a subproblem of size 2 and a subproblem of size 0."
      }), "\n", _jsxs(_components.li, {
        children: ["Therefore, when the root is 3, the total count is: ", _jsx(_components.code, {
          children: "(ways to form a BST with 2 nodes) × (ways to form a BST with 0 nodes)"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This detailed breakdown reveals two critical conclusions:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Decomposability:"
        }), " The problem for ", _jsx(_components.code, {
          children: "n"
        }), " nodes can be broken down into smaller subproblems by choosing different root nodes."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Structure is Independent of Values:"
        }), " This is the most important insight. ", _jsxs(_components.strong, {
          children: ["The number of unique BST structures that can be formed depends only on the ", _jsx(_components.em, {
            children: "quantity"
          }), " of nodes, not their specific values."]
        }), " The problem for ", _jsx(_components.code, {
          children: "n=3"
        }), " was successfully reduced to subproblems for ", _jsx(_components.code, {
          children: "n=0"
        }), ", ", _jsx(_components.code, {
          children: "n=1"
        }), ", and ", _jsx(_components.code, {
          children: "n=2"
        }), "."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This discovery paves the way for a Dynamic Programming solution."
    }), "\n", _jsx(_components.h2, {
      id: "the-dynamic-programming-five-step-method",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-dynamic-programming-five-step-method",
        children: "The Dynamic Programming Five-Step Method"
      })
    }), "\n", _jsx(_components.p, {
      children: "Now, the solution is within reach. Let's formalize our logic using the classic five-step DP approach."
    }), "\n", _jsx(_components.h3, {
      id: "1-dp-array-definition",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-dp-array-definition",
        children: "1. DP Array Definition"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "dp[i]"
      }), " = The total number of unique BSTs that can be formed with ", _jsx(_components.code, {
        children: "i"
      }), " nodes."]
    }), "\n", _jsxs(_components.p, {
      children: ["Our final goal is to find ", _jsx(_components.code, {
        children: "dp[n]"
      }), "."]
    }), "\n", _jsx(_components.h3, {
      id: "2-recurrence-relation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-recurrence-relation",
        children: "2. Recurrence Relation"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The value of ", _jsx(_components.code, {
        children: "dp[i]"
      }), " is the sum of all possibilities, considering each node ", _jsx(_components.code, {
        children: "j"
      }), " (from 1 to ", _jsx(_components.code, {
        children: "i"
      }), ") as the root."]
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mo, {
                    children: "∑"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "j"
                    }), _jsx(_components.mo, {
                      children: "="
                    }), _jsx(_components.mn, {
                      children: "1"
                    })]
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                }), _jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "j"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsx(_components.mn, {
                  children: "1"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  children: "×"
                }), _jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsx(_components.mi, {
                  children: "j"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "dp[i] = \\sum_{j=1}^{i} dp[j-1] \\times dp[i-j]"
              })]
            })
          })
        }), _jsxs(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [_jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "="
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1.4004em",
                verticalAlign: "-0.4358em"
              }
            }), _jsxs(_components.span, {
              className: "mop",
              children: [_jsx(_components.span, {
                className: "mop op-symbol small-op",
                style: {
                  position: "relative",
                  top: "0em"
                },
                children: "∑"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9646em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4003em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            }), _jsx(_components.span, {
                              className: "mrel mtight",
                              children: "="
                            }), _jsx(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.2029em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.4358em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0572em"
              },
              children: "j"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "1"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "×"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0572em"
              },
              children: "j"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "j-1"
        }), ": Represents the number of nodes in the left subtree when ", _jsx(_components.code, {
          children: "j"
        }), " is the root."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "i-j"
        }), ": Represents the number of nodes in the right subtree when ", _jsx(_components.code, {
          children: "j"
        }), " is the root."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "3-dp-array-initialization",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-dp-array-initialization",
        children: "3. DP Array Initialization"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "dp[0] = 1"
          })
        }), "\n", _jsxs(_components.p, {
          children: ["This is the cornerstone of the algorithm. ", _jsx(_components.code, {
            children: "dp[0]"
          }), " represents the number of BSTs you can form with zero nodes. There is exactly one way to do this: the empty tree. This is crucial because if ", _jsx(_components.code, {
            children: "dp[0]"
          }), " were 0, any term in our recurrence relation multiplied by it would become zero, leading to an incorrect result."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: ["The rest of the array can be initialized to ", _jsx(_components.code, {
            children: "0"
          }), " to serve as a starting point for our summation."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "4-traversal-order",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-traversal-order",
        children: "4. Traversal Order"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The formula shows that to calculate ", _jsx(_components.code, {
        children: "dp[i]"
      }), ", we need all preceding ", _jsx(_components.code, {
        children: "dp"
      }), " values (", _jsx(_components.code, {
        children: "dp[0]"
      }), " through ", _jsx(_components.code, {
        children: "dp[i-1]"
      }), "). Therefore, our traversal order must be from small to large."]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["The outer loop iterates ", _jsx(_components.code, {
          children: "i"
        }), " from 1 to ", _jsx(_components.code, {
          children: "n"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["The inner loop iterates ", _jsx(_components.code, {
          children: "j"
        }), " from 1 to ", _jsx(_components.code, {
          children: "i"
        }), ", simulating the choice of each possible root node."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "javascript-code-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#javascript-code-implementation",
        children: "JavaScript Code Implementation"
      })
    }), "\n", _jsx(_components.p, {
      children: "Here is the complete JavaScript code that implements this logic."
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
              children: " n"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: " The number of nodes."
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
              children: " The number of structurally unique BST's."
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
              children: " numTrees"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // dp[i] will store the number of unique BSTs that can be formed with i nodes."
            })
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
              children: " dp"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: "(n "
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
              children: "0"
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
              children: "    // Initialization: There is one way to form a BST with 0 nodes (the empty tree)."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    dp["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Iterate from 1 to n to calculate dp[i] for each i."
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
              children: " i "
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
              children: "; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " n; i"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // To calculate dp[i], we consider each number j (from 1 to i) as the root."
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
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i; j"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            // The recurrence relation:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            // Left subtree will have j-1 nodes."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            // Right subtree will have i-j nodes."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            // The number of unique BSTs is the product of the possibilities for the left and right subtrees."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            // We sum this up for all possible roots j."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            dp[i] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dp[j "
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
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dp[i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " j];"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // The final answer is the number of BSTs for n nodes."
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
              children: " dp[n];"
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
              children: "// Example Usage:"
            })
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
              children: "`For n=3, there are ${"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "numTrees"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "} unique BSTs.`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Output: 5"
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
              children: "`For n=1, there is ${"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "numTrees"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "} unique BST.`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");   "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Output: 1"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "complexity-analysis",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#complexity-analysis",
        children: "Complexity Analysis"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Time Complexity: O(n²)"
        }), ". This comes from the two nested loops, where both the outer and inner loops are dependent on ", _jsx(_components.code, {
          children: "n"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Space Complexity: O(n)"
        }), ". We use a DP array of size ", _jsx(_components.code, {
          children: "n+1"
        }), " to store the intermediate results."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "conclusion-and-further-reading",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion-and-further-reading",
        children: "Conclusion and Further Reading"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Through this exploration, we've seen how a complex combinatorial problem can be elegantly solved by identifying its recursive substructure. By carefully analyzing the ", _jsx(_components.code, {
        children: "n=3"
      }), " case, we found the key insight that led directly to our dynamic programming solution."]
    }), "\n", _jsxs(_components.p, {
      children: ["The sequence of numbers generated by this problem (", _jsx(_components.code, {
        children: "1, 1, 2, 5, 14, ..."
      }), ") is known in mathematics as the ", _jsx(_components.strong, {
        children: "Catalan Numbers"
      }), ". They appear in many other counting problems, such as finding the number of valid parenthesis combinations or the number of ways to triangulate a convex polygon."]
    }), "\n", _jsx(_components.p, {
      children: "If you enjoyed this tree-based algorithmic approach, you might also find these related posts interesting:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/blog/binary-tree-cameras-greedy-dfs",
          children: "Placing Cameras in a Binary Tree — A Complete Guide"
        }), " - Another sophisticated tree algorithm using greedy strategies"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/blog/design-linked-list-straightforward-to-elegant",
          children: "Design Linked List: From Straightforward to Elegant"
        }), " - Learn recursive design patterns in data structures"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Hopefully, this detailed walkthrough has helped you understand the profound thinking behind this solution. Remember, when faced with a complex tree or combinatorial problem, try to fix one element (like the root) and analyze the structure of the resulting subproblems—it's often the key to finding a breakthrough."
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
