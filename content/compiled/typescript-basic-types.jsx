import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "understanding-typescript-basic-types",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#understanding-typescript-basic-types",
        children: "Understanding TypeScript Basic Types"
      })
    }), "\n", _jsx(_components.p, {
      children: "TypeScript enhances JavaScript by adding static type-checking, which helps catch errors before runtime. This document covers the fundamentals of TypeScript's basic types and their benefits."
    }), "\n", _jsx(_components.h3, {
      id: "static-type-checking",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#static-type-checking",
        children: "Static Type-Checking"
      })
    }), "\n", _jsx(_components.p, {
      children: "TypeScript provides a static type system that helps predict the behavior of code before execution. By adding type annotations, developers can catch errors early in the development process."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " message"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " string"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"Hello World!\""
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
              children: "message"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Error: 'message' is not a function"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "non-exception-failures",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#non-exception-failures",
        children: "Non-Exception Failures"
      })
    }), "\n", _jsx(_components.p, {
      children: "JavaScript allows certain operations without throwing exceptions, like accessing undefined properties. TypeScript flags these operations, preventing potential runtime errors."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " user"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { name: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Alice\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", age: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "30"
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
              children: "(user.location); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Error: Property 'location' does not exist"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "types-for-tooling",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#types-for-tooling",
        children: "Types for Tooling"
      })
    }), "\n", _jsx(_components.p, {
      children: "TypeScript improves development tooling by providing autocompletion, error messages, and quick fixes. This integration makes coding more efficient and reduces bugs."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " express "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"express\""
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " app"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " express"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "app."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "get"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"/\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "req"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "res"
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
              children: "  res."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "send"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Hello, TypeScript!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "});"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "app."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "listen"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3000"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "the-typescript-compiler-tsc",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-typescript-compiler-tsc",
        children: ["The TypeScript Compiler (", _jsx(_components.code, {
          children: "tsc"
        }), ")"]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["TypeScript uses a compiler to transform TypeScript code into JavaScript. The ", _jsx(_components.code, {
        children: "tsc"
      }), " command checks for type errors and compiles ", _jsx(_components.code, {
        children: ".ts"
      }), " files to ", _jsx(_components.code, {
        children: ".js"
      }), "."]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "sh",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "sh",
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
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -g"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " typescript"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "tsc"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hello.ts"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "explicit-types",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#explicit-types",
        children: "Explicit Types"
      })
    }), "\n", _jsx(_components.p, {
      children: "Explicit type annotations define the expected types for variables and function parameters, helping to avoid type-related errors."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " greet"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "person"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " string"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "date"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Date"
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
              children: "  console."
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
              children: "`Hello ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "person"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}, today is ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "date"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "toDateString"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "()"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "greet"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Alice\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Date"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "());"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "downleveling",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#downleveling",
        children: "Downleveling"
      })
    }), "\n", _jsx(_components.p, {
      children: "TypeScript can compile code to older versions of JavaScript, ensuring compatibility with different environments."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: "// TypeScript"
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
              children: " greet"
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
              children: "name"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " string"
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
                color: "#9ECBFF"
              },
              children: " `Hello, ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "name"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
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
              children: "// Compiled JavaScript (ES5)"
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
              children: " greet"
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
              children: "name"
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
                color: "#9ECBFF"
              },
              children: " \"Hello, \""
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " +"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " name;"
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
      id: "strictness",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#strictness",
        children: "Strictness"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["TypeScript's strict mode enables thorough type-checking, reducing potential bugs by enforcing stricter rules. Key flags include ", _jsx(_components.code, {
        children: "noImplicitAny"
      }), " and ", _jsx(_components.code, {
        children: "strictNullChecks"
      }), "."]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: "// Enable strict mode in tsconfig.json"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "  \"compilerOptions\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "    \"strict\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
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
    }), "\n", _jsx(_components.h3, {
      id: "noimplicitany",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#noimplicitany",
        children: _jsx(_components.code, {
          children: "noImplicitAny"
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "noImplicitAny"
      }), " flag prevents variables from having an implicit ", _jsx(_components.code, {
        children: "any"
      }), " type, encouraging explicit type definitions."]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " any"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// No error"
            })]
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
              children: " value; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Error with `noImplicitAny`"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "strictnullchecks",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#strictnullchecks",
        children: _jsx(_components.code, {
          children: "strictNullChecks"
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "strictNullChecks"
      }), " flag ensures that ", _jsx(_components.code, {
        children: "null"
      }), " and ", _jsx(_components.code, {
        children: "undefined"
      }), " are handled explicitly, preventing common runtime errors."]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " string"
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
              children: "value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"Hello\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// No error"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "behavioral-analysis-of-javascript-values",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#behavioral-analysis-of-javascript-values",
        children: "Behavioral Analysis of JavaScript Values"
      })
    }), "\n", _jsx(_components.p, {
      children: "Each JavaScript value has specific behaviors observed through various operations. For example:"
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
                color: "#79B8FF"
              },
              children: " message"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"Hello World!\""
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
              children: "// Accessing and calling toLowerCase on message"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "message."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "toLowerCase"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// \"hello world!\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Trying to call message directly"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "message"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// TypeError: message is not a function"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "When running code, JavaScript identifies the value's type to decide what operations are valid. TypeScript's static type system helps predict these behaviors before runtime, preventing errors and enhancing code reliability."
    }), "\n", _jsx(_components.p, {
      children: "By understanding and utilizing TypeScript's basic types and compiler features, developers can write safer and more maintainable code."
    }), "\n", _jsx(_components.h3, {
      id: "references",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#references",
        children: "References"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["For more details, visit the ", _jsx(_components.a, {
        href: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html",
        children: "TypeScript Handbook on Basic Types"
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
