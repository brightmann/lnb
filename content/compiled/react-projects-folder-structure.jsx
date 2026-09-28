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
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Callout} = _components;
  if (!Callout) _missingMdxReference("Callout", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "It's recommended to structure code by feature or functionality, and to modularize components."
    }), "\n", _jsx(_components.h2, {
      id: "level-1-grouping-by-file-types",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#level-1-grouping-by-file-types",
        children: "Level 1: Grouping by File TYpes"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "bash",
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
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " src/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " assets/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " api/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " configs/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " components/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " SignUpForm.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " Employees.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " PaymentForm.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " Button.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hooks/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " usePayment.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useUpdateEmployee.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useEmployees.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useAuth.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " lib/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " services/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " states/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " utils/"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Project Size: Small to Medium"
      }), "\n", _jsx(_components.li, {
        children: "Advantages: Simple & straightforward"
      }), "\n", _jsxs(_components.li, {
        children: ["Disadvantages:", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Will inflate quickly and become hard to maintain"
          }), "\n", _jsx(_components.li, {
            children: "No separation of business concerns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(Callout, {
      type: "danger",
      children: _jsx(_components.p, {
        children: "Let's say you have a lot of code revolving around payment. One day the whole business changes or is no longer needed, how easy is it to replace or remove it? With this folder structure, you'll have to go through every folder and the files inside it to make the necessary changes. And if the project keeps growing larger, it'll soon grow into a maintenance hell that will only get worse over time."
      })
    }), "\n", _jsx(_components.h2, {
      id: "level-2-grouping-by-file-types-and-features",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#level-2-grouping-by-file-types-and-features",
        children: "Level 2: Grouping by \"File Types\" and Features"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "bash",
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
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " src/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " assets/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " api/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " configs/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " components/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " auth/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " SignUpForm.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " payment/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " PaymentForm.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " common/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " Button.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " employees/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " EmployeeList.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " EmployeeSummary.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hooks/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " auth/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useAuth.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " payment/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " usePayment.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " employees/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useEmployees.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useUpdateEmployee.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " lib/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " services/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " states/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " utils/"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Project Size: Medium to Large"
      }), "\n", _jsxs(_components.li, {
        children: ["Advantages:", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Simple & straightforward"
          }), "\n", _jsx(_components.li, {
            children: "Stuff are grouped by features"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsx(_components.li, {
        children: "Disadvantages: Logic related to a feature is still spread across multiple folder types"
      }), "\n"]
    }), "\n", _jsx(Callout, {
      type: "safe",
      children: _jsxs(_components.p, {
        children: ["Now let's come back to the problem statement where the payment module needs to be modified or removed. With this structure, it's a lot easier to do that now.\nThe ", _jsx("span", {
          className: "font-semibold",
          children: "\"Level 2\""
        }), " folder structure is the one that I'd recommend if you don't know what to choose."]
      })
    }), "\n", _jsx(_components.h2, {
      id: "level-3-grouping-by-featuresmodules",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#level-3-grouping-by-featuresmodules",
        children: "Level 3: Grouping by Features/Modules"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "bash",
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
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " src/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " assets/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " modules/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " core/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " components/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " design-system/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " Button.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hooks/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " lib/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " utils/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " payment/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " components/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " PaymentForm.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hooks/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " usePayment.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " lib/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " services/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " states/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " utils/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " auth/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " components/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " SignUpForm.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hooks/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useAuth.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " lib/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " services/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " states/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " utils/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " employees/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " components/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " EmployeeList.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " EmployeeSummary.tsx"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " hooks/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useEmployees.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " useUpdateEmployee.ts"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " services/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " states/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "       └──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " utils/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " ..."
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Project Size: Large and Complex"
      }), "\n", _jsxs(_components.li, {
        children: ["Advantages:", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Stuff are clearly grouped by features/modules"
          }), "\n", _jsx(_components.li, {
            children: "Features/Modules are clear representations of objects in the real world"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsx(_components.li, {
        children: "Disadvantages:\nYou'll have to be well-aware of the business logic to make the right grouping decisions"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "give-consistent-meanings-to-folder-names",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#give-consistent-meanings-to-folder-names",
        children: "Give Consistent Meanings to Folder Names"
      })
    }), "\n", _jsx(_components.p, {
      children: "Regardless of the structure level, certain folder names should carry specific meanings. What a folder name means may vary based on your preferences or the project's conventions."
    }), "\n", _jsx(_components.p, {
      children: "Here's what I usually think about folder names:"
    }), "\n", _jsx(_components.h3, {
      id: "ui-components",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#ui-components",
        children: "UI Components"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "components"
        }), ": React components - the main UI building blocks."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "design-system"
        }), ": Fundamental UI elements and patterns based on the design system."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "icons"
        }), ": SVG icons that are meant to be used inline."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "react-specific",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#react-specific",
        children: "React Specific"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "hooks"
        }), ": Custom React hooks for shared logic."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "hocs"
        }), ": React Higher-order Components."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "contexts/providers"
        }), ": Contains React Contexts and Providers."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "utilities--external-integrations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#utilities--external-integrations",
        children: "Utilities & External Integrations"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "utils"
        }), ": Utilities for universal logic that is not related to business logic or any technologies, e.g. string manipulations, mathematic calculations, etc."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "lib"
        }), ": Utilities that are related to certain technologies, e.g. DOM manipulations, HTML-related logic, localStorage, IndexedDB, etc."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "plugins"
        }), ": Third-party plugins (e.g. i18n, Sentry, etc.)"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "business-logic",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#business-logic",
        children: "Business Logic"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "services"
        }), ": Encapsulates main business & application logic."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "helpers"
        }), ": Provides business-specific utilities."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "styles",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#styles",
        children: "Styles"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "styles"
      }), ": Contains (global) CSS or CSS-in-JS styles."]
    }), "\n", _jsx(_components.h3, {
      id: "typescript-and-configurations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#typescript-and-configurations",
        children: "TypeScript and Configurations"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "types"
        }), ": For general TypeScript types, enums and interfaces."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "configs"
        }), ": Configs for the application (e.g. environment variables)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "constants"
        }), ": Constant, unchanged values (e.g. ", _jsx(_components.code, {
          children: "export const MINUTES_PER_HOUR = 60"
        }), ")."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "server-communication",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#server-communication",
        children: "Server Communication"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "api"
        }), ": For logic that communicates with the server(s)."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "graphql"
        }), ": GraphQL-specific code."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "state-management",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#state-management",
        children: "State Management"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "states/store"
        }), ": Global state management logic (Zustand, Valtio, Jotai, etc.)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "reducers, store, actions, selectors"
        }), ": Redux-specific logic"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "routing",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#routing",
        children: "Routing"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "routes/router"
        }), ": Defining routes (if you're using React Router or the like)."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "pages"
        }), ": Defining entry-point components for pages."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "testing",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#testing",
        children: "Testing"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "tests"
      }), ": Unit tests and other kinds of tests for your code."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Credit"
      }), ": ", _jsx(_components.a, {
        href: "https://dev.to/itswillt/folder-structures-in-react-projects-3dp8",
        children: "Will T. : Folder Structures in React Projects"
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
