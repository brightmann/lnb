import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    children: [_jsx(_components.p, {
      children: "Have you ever been stumped by a bug where changing one element in a 2D array mysteriously changes an entire column? This often happens when tackling dynamic programming (DP) or matrix problems in JavaScript. As I discovered while working on the \"Unique Paths II\" LeetCode problem, a deep understanding of JavaScript's core concepts of mutability, assignment, and array initialization is not just academic—it's essential for writing correct and robust code."
    }), "\n", _jsx(_components.p, {
      children: "This guide will walk you through that same chain of exploration:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "The Fundamentals:"
        }), " Mutable vs. Immutable, Assignment vs. Mutation, and ", _jsx(_components.code, {
          children: "let"
        }), " vs. ", _jsx(_components.code, {
          children: "const"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "The Pitfall:"
        }), " The subtle but dangerous behavior of ", _jsx(_components.code, {
          children: "Array.fill()"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "The Solution:"
        }), " The correct patterns for safe array initialization."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "The Application:"
        }), " A real-world case study with a DP problem."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "part-1-the-fundamentals---why-these-bugs-happen",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#part-1-the-fundamentals---why-these-bugs-happen",
        children: "Part 1: The Fundamentals - Why These Bugs Happen"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Before we look at the ", _jsx(_components.code, {
        children: "Array.fill()"
      }), " pitfall, we need to understand three core JavaScript concepts."]
    }), "\n", _jsx(_components.h3, {
      id: "mutable-vs-immutable-values",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#mutable-vs-immutable-values",
        children: "Mutable vs. Immutable Values"
      })
    }), "\n", _jsx(_components.p, {
      children: "In JavaScript, data types are divided into two categories:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Immutable (Primitives):"
        }), " Their value cannot be changed after creation. If you want to \"change\" them, you create a new value.", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "string"
            }), ", ", _jsx(_components.code, {
              children: "number"
            }), ", ", _jsx(_components.code, {
              children: "boolean"
            }), ", ", _jsx(_components.code, {
              children: "null"
            }), ", ", _jsx(_components.code, {
              children: "undefined"
            }), ", ", _jsx(_components.code, {
              children: "symbol"
            }), ", ", _jsx(_components.code, {
              children: "bigint"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mutable (Objects):"
        }), " Their contents can be changed after creation.", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "object"
            }), ", ", _jsx(_components.code, {
              children: "array"
            }), ", ", _jsx(_components.code, {
              children: "function"
            }), ", ", _jsx(_components.code, {
              children: "Set"
            }), ", ", _jsx(_components.code, {
              children: "Map"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "This is the root of our problem: arrays are mutable."
    }), "\n", _jsx(_components.h3, {
      id: "assignment-vs-mutation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#assignment-vs-mutation",
        children: "Assignment vs. Mutation"
      })
    }), "\n", _jsx(_components.p, {
      children: "This is the most critical distinction:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: ["Assignment (", _jsx(_components.code, {
            children: "="
          }), "):"]
        }), " Makes a variable point to a ", _jsx(_components.em, {
          children: "new"
        }), " value or reference.", "\n", _jsx(_components.figure, {
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
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " arr "
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
                  children: "arr "
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
                  children: "6"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "]; "
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: "// ASSIGNMENT: arr now points to a completely new array."
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mutation:"
        }), " Changes the ", _jsx(_components.em, {
          children: "internal state"
        }), " of the object or array that a variable points to.", "\n", _jsx(_components.figure, {
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
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " arr "
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
                  children: "arr["
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
                  children: " 99"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "; "
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: "// MUTATION: The original array is modified. It's now [99, 2, 3]."
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "const-does-not-mean-immutable",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#const-does-not-mean-immutable",
        children: [_jsx(_components.code, {
          children: "const"
        }), " Does Not Mean Immutable"]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["A common misconception is that ", _jsx(_components.code, {
        children: "const"
      }), " makes a value immutable. ", _jsx(_components.strong, {
        children: "It does not."
      }), " ", _jsx(_components.code, {
        children: "const"
      }), " only creates an immutable ", _jsx(_components.em, {
        children: "binding"
      }), ". It prevents you from re-assigning the variable, but it does nothing to prevent mutation of the value it points to."]
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
                color: "#79B8FF"
              },
              children: " arr"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// This is a MUTATION, and it is perfectly fine."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "arr["
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
              children: " 99"
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
              children: "(arr); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [99, 2, 3]"
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
              children: "// This is an ASSIGNMENT, and it will throw a TypeError."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// arr = [4, 5, 6]; // TypeError: Assignment to constant variable."
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "part-2-the-pitfall---arrayfill-with-mutable-types",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#part-2-the-pitfall---arrayfill-with-mutable-types",
        children: ["Part 2: The Pitfall - ", _jsx(_components.code, {
          children: "Array.fill()"
        }), " with Mutable Types"]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Now we can understand the main pitfall. When you use ", _jsx(_components.code, {
        children: "Array.fill()"
      }), " with a mutable type like an array or object, it fills every slot with a reference to the ", _jsx(_components.strong, {
        children: "exact same instance"
      }), "."]
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
              children: "// All rows share the SAME inner array reference"
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
              children: " badGrid"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: "3"
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
                color: "#B392F0"
              },
              children: "Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
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
              children: "));"
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
              children: "// Let's mutate what we think is just the first row"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "badGrid["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "]["
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
              children: "(badGrid);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [[1, 0, 0],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//  [1, 0, 0],  <-- Wrong!"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//  [1, 0, 0]] <-- Wrong!"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Because every row points to the same underlying array, a change to one is a change to all. The same applies to objects:"
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
                color: "#79B8FF"
              },
              children: " wrong"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: "3"
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
              children: "({ a: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "wrong["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "].a "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 42"
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
              children: "(wrong);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [{a: 42}, {a: 42}, {a: 42}] <-- all changed!"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "part-3-the-solution---correct-initialization-patterns",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#part-3-the-solution---correct-initialization-patterns",
        children: "Part 3: The Solution - Correct Initialization Patterns"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["To correctly initialize a 2D array, you must create a ", _jsx(_components.strong, {
        children: "fresh, new"
      }), " inner array for each row. The best way to do this is with a factory function inside ", _jsx(_components.code, {
        children: "Array.from"
      }), " or ", _jsx(_components.code, {
        children: ".map()"
      }), "."]
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
              children: "// ✅ Using Array.from"
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
              children: " grid1"
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
              children: "3"
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
              children: "3"
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
              children: "));"
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
              children: "// ✅ Using .fill().map()"
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
              children: " grid2"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
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
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ."
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
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ."
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
              children: "3"
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
              children: "));"
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
              children: "grid1["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "]["
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
              children: "(grid1);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [[1, 0, 0],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//  [0, 0, 0],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//  [0, 0, 0]] <-- Correct!"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "quick-checklist",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#quick-checklist",
        children: "Quick Checklist"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "2D arrays / objects:"
        }), " Don’t ", _jsx(_components.code, {
          children: "fill(inner)"
        }), " with a pre-built object/array."]
      }), "\n", _jsxs(_components.li, {
        children: ["Use a ", _jsx(_components.strong, {
          children: "factory callback"
        }), ": ", _jsx(_components.code, {
          children: "Array.from({ length }, () => fresh())"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "1D arrays with primitives:"
        }), " Safe to use ", _jsx(_components.code, {
          children: ".fill"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["When deriving new rows: ", _jsx(_components.strong, {
          children: "copy"
        }), ", don’t alias."]
      }), "\n", _jsxs(_components.li, {
        children: ["Consider ", _jsx(_components.strong, {
          children: "typed arrays"
        }), " for numeric-heavy DP."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "part-4-practical-applications",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#part-4-practical-applications",
        children: "Part 4: Practical Applications"
      })
    }), "\n", _jsx(_components.p, {
      children: "The importance of correct array initialization becomes crystal clear when tackling matrix-based algorithm problems."
    }), "\n", _jsx(_components.h3, {
      id: "case-study-1-leetcode-unique-paths-ii",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#case-study-1-leetcode-unique-paths-ii",
        children: "Case Study 1: LeetCode \"Unique Paths II\""
      })
    }), "\n", _jsx(_components.p, {
      children: "In this problem, we need a DP table to store the number of paths to each cell. A common mistake is to initialize it incorrectly."
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "The Goal:"
      }), " Create an ", _jsx(_components.code, {
        children: "m x n"
      }), " grid initialized to ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The Wrong Way:"
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
              children: "// This will cause bugs when we update the DP table."
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
              children: " dp"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(m)."
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
                color: "#B392F0"
              },
              children: "Array"
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
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The Right Way:"
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
              children: "({ length: m }, () "
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
                color: "#6A737D"
              },
              children: "// or"
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
              children: " dp"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(m)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ."
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
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ."
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
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With the ", _jsx(_components.code, {
        children: "dp"
      }), " table correctly initialized, the rest of the algorithm can safely mutate specific cells like ", _jsx(_components.code, {
        children: "dp[i][j]"
      }), " without causing side effects."]
    }), "\n", _jsx(_components.h3, {
      id: "case-study-2-leetcode-59-spiral-matrix-ii",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#case-study-2-leetcode-59-spiral-matrix-ii",
        children: "Case Study 2: LeetCode \"59. Spiral Matrix II\""
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Another classic problem is generating an ", _jsx(_components.code, {
        children: "n x n"
      }), " matrix filled with numbers from ", _jsx(_components.code, {
        children: "1"
      }), " to ", _jsx(_components.code, {
        children: "n^2"
      }), " in a spiral order."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "The Goal:"
      }), " Create an ", _jsx(_components.code, {
        children: "n x n"
      }), " matrix and fill it spirally."]
    }), "\n", _jsx(_components.p, {
      children: "Once again, the very first step is to create the container for our matrix. A mistake here would be fatal to the algorithm."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The Right Way (and the only way that works):"
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// We need a grid of independent rows to write to."
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
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "With the matrix correctly initialized, we can apply an elegant algorithm that uses four pointers to trace the boundaries of the spiral. Here is an optimized solution:"
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Optimized Solution:"
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
              children: " {number[][]}"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " res"
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
              children: " colStart "
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
              children: "    rowStart "
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
              children: " ring "
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
              children: " center "
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
              children: " (ring"
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
              children: " rowStart,"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " colStart;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // top: left to right (stop before the last column)"
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
              children: " (; j "
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
              children: " offset; j"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[i][j] "
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
                color: "#6A737D"
              },
              children: "    // right: top to bottom (stop before the last row)"
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
              children: " (; i "
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
              children: " offset; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[i][j] "
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
                color: "#6A737D"
              },
              children: "    // bottom: right to left (stop before the first column)"
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
              children: " (; j "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " colStart; j"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[i][j] "
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
                color: "#6A737D"
              },
              children: "    // left: bottom to top (stop before the first row)"
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
              children: " (; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " rowStart; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") res[i][j] "
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Move the boundaries inward"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    rowStart"
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
              children: "    colStart"
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
              children: ") res[center][center] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num;"
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
    }), "\n", _jsx(_components.p, {
      children: "This approach is robust and avoids the need for special-casing for odd-sized matrices, demonstrating how a clean algorithm builds upon a correctly initialized data structure."
    }), "\n", _jsx(_components.h2, {
      id: "part-5-test-your-knowledge",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#part-5-test-your-knowledge",
        children: "Part 5: Test Your Knowledge"
      })
    }), "\n", _jsx(_components.p, {
      children: "Let's check your understanding with a few questions."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Q1:"
        }), " Does ", _jsx(_components.code, {
          children: "const arr = [1, 2, 3]; arr[0] = 99;"
        }), " work? Why?\n", _jsx(_components.strong, {
          children: "A:"
        }), " Yes. ", _jsx(_components.code, {
          children: "const"
        }), " prevents re-assignment of the ", _jsx(_components.code, {
          children: "arr"
        }), " variable, but the array itself is mutable, so its contents can be changed."]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Q2:"
        }), " What is the key difference between ", _jsx(_components.code, {
          children: "Array(3).fill(Array(3).fill(0))"
        }), " and ", _jsx(_components.code, {
          children: "Array(3).fill().map(() => Array(3).fill(0))"
        }), "?\n", _jsx(_components.strong, {
          children: "A:"
        }), " The first fills all rows with a reference to the ", _jsx(_components.em, {
          children: "same"
        }), " array. The second uses ", _jsx(_components.code, {
          children: ".map"
        }), " to create a ", _jsx(_components.em, {
          children: "new, independent"
        }), " array for each row."]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Q3:"
        }), " What’s the difference between assignment and mutation in JavaScript?\n", _jsx(_components.strong, {
          children: "A:"
        }), " Assignment (", _jsx(_components.code, {
          children: "="
        }), ") changes which value or reference a variable points to. Mutation changes the internal contents of a referenced object or array."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: "Conclusion"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Understanding the distinction between mutable and immutable types, and between assignment and mutation, is fundamental to writing correct JavaScript. The ", _jsx(_components.code, {
        children: "Array.fill()"
      }), " pitfall is a classic example of how these concepts have practical consequences in everyday coding, especially in algorithms. By internalizing these rules and using the correct initialization patterns, you’ll avoid subtle bugs and write cleaner, safer, and more professional code."]
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
