import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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
    children: [_jsx(_components.h3, {
      id: "table-of-contents",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#table-of-contents",
        children: "Table of Contents"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#motivation-analysis-and-learning-objectives",
          children: "Motivation Analysis and Learning Objectives"
        })
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#best-practice-method-react-crud-form",
          children: "Best Practice Method: React CRUD Form"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "#design-approach",
              children: "Design Approach"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "#code-implementation",
              children: "Code Implementation"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "#reason-for-using-react-hook-form-and-its-usage",
              children: "Reason for Using react-hook-form and Its Usage"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "#implementing-form-management-without-react-hook-form",
              children: "Implementing Form Management Without react-hook-form"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "#design-and-development-approach-for-time-limited-tasks",
              children: "Design and Development Approach for Time-Limited Tasks"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#introduction-to-axios-and-reasons-for-use",
          children: "Introduction to Axios and Reasons for Use"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#comparison-between-fetch-and-react-query",
          children: "Comparison Between Fetch and React Query"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#cross-origin-issue-resolution",
          children: "Cross-Origin Issue Resolution"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#implementing-crud-form-with-fetch-api",
          children: "Implementing CRUD Form with Fetch API"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#summary",
          children: "Summary"
        })
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "motivation-analysis-and-learning-objectives",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#motivation-analysis-and-learning-objectives",
        children: "Motivation Analysis and Learning Objectives"
      })
    }), "\n", _jsx(_components.h3, {
      id: "motivation-analysis",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#motivation-analysis",
        children: "Motivation Analysis"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Interview Preparation"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Objective: To master common technical interview questions (such as CRUD forms in React) through repeated practice and best practice learning, ensuring efficient and confident performance during actual interviews."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Tool Selection and Optimization"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Objective: To choose and optimize technical tools (such as between fetch and react-query), and learn new tools (like Axios) to enhance the technical stack."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "learning-objectives",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#learning-objectives",
        children: "Learning Objectives"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Master CRUD Form Implementation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "To repeatedly practice implementing CRUD forms in React, becoming proficient and able to demonstrate skills to interviewers."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Enhance Tool Usage Skills"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "To understand and master the use of Axios as a replacement for fetch, and combine it with react-query to improve development efficiency and code maintainability."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Optimize Code Practices"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "To focus on best practices and optimization strategies in code writing, aiming to create simpler, more efficient, and maintainable code."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "best-practice-method-react-crud-form",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#best-practice-method-react-crud-form",
        children: "Best Practice Method: React CRUD Form"
      })
    }), "\n", _jsx(_components.h3, {
      id: "design-approach",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#design-approach",
        children: "Design Approach"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Project Initialization"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Create a new React application (using Create React App or Vite)."
          }), "\n", _jsx(_components.li, {
            children: "Install necessary dependencies (react-query, axios, react-hook-form, etc.)."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "File Structure"
          }), ":"]
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
              children: [_jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "src/"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "  components/"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "    Form.js"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "    ItemList.js"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "  api/"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "    items.js"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "  App.js"
                })
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "API Layer"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Create an API module (using axios) to handle communication with the backend."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "State Management"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Use React Query for data fetching and caching management."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Form Management"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Use react-hook-form to manage form state and validation."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "code-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#code-implementation",
        children: "Code Implementation"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Project Initialization"
          }), ":"]
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
                  children: "npx"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " create-react-app"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " crud-form"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " crud-form"
                })]
              }), "\n", _jsxs(_components.span, {
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
                    color: "#9ECBFF"
                  },
                  children: " axios"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " react-query"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " react-hook-form"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "API Module"
          }), " (", _jsx(_components.code, {
            children: "src/api/items.js"
          }), "):"]
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
                  children: " axios "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"axios\""
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
                  children: " apiClient"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " axios."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "create"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "({"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  baseURL: "
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"https://api.example.com\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ","
                })]
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "});"
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
                  children: "export"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " getItems"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " async"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " () "
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " response"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " apiClient."
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
                  children: "\"/items\""
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
                  children: " response.data;"
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
                  children: " const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " createItem"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " async"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "item"
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " response"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " apiClient."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "post"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"/items\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", item);"
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
                  children: " response.data;"
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
                  children: " const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " updateItem"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " async"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "id"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "item"
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " response"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " apiClient."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "put"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "`/items/${"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "id"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "}`"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", item);"
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
                  children: " response.data;"
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
                  children: " const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " deleteItem"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " async"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "id"
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
                    color: "#F97583"
                  },
                  children: "  await"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " apiClient."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "delete"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "`/items/${"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "id"
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
                  children: "};"
                })
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "React Query Setup"
          }), " (", _jsx(_components.code, {
            children: "src/App.js"
          }), "):"]
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
                  children: " React "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { QueryClient, QueryClientProvider } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react-query\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " Form "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"./components/Form\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " ItemList "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"./components/ItemList\""
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
                  children: " queryClient"
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
                  children: " QueryClient"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "();"
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
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " App"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "() {"
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
                  children: " ("
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "QueryClientProvider"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " client"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "{queryClient}>"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " className"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"App\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "        <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "h1"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">CRUD Form</"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "h1"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "        <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "Form"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " />"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "        <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "ItemList"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " />"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      </"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    </"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "QueryClientProvider"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
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
                  children: " default"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " App;"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Form Component"
          }), " (", _jsx(_components.code, {
            children: "src/components/Form.js"
          }), ")"]
        }), "\n", _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "#reason-for-using-react-hook-form-and-its-usage",
            children: "Reason for Using react-hook-form and Its Usage"
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
                  children: " React "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { useForm } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react-hook-form\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { useMutation, useQueryClient } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react-query\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { createItem } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"../api/items\""
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
                    color: "#B392F0"
                  },
                  children: " Form"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " () "
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "register"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "handleSubmit"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "reset"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " useForm"
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " queryClient"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " useQueryClient"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "();"
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
                    color: "#79B8FF"
                  },
                  children: " mutation"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " useMutation"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(createItem, {"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "    onSuccess"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": () "
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
                  children: "      queryClient."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "invalidateQueries"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"items\""
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
                    color: "#B392F0"
                  },
                  children: "      reset"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "();"
                })]
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    },"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  });"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " onSubmit"
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
                  children: "data"
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
                  children: "    mutation."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "mutate"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(data);"
                })]
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  };"
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
                  children: " ("
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "form"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " onSubmit"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "handleSubmit"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(onSubmit)}>"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "input"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " {"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "..."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "register"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"name\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ")} "
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "placeholder"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"Name\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " />"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "input"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " {"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "..."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "register"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"description\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ")} "
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "placeholder"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"Description\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " />"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " type"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"submit\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">Create</"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    </"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "form"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
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
                  children: "};"
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
                  children: "export"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " default"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " Form;"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "List Component"
          }), " (", _jsx(_components.code, {
            children: "src/components/ItemList.js"
          }), "):"]
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
                  children: " React "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { useQuery, useMutation, useQueryClient } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"react-query\""
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
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { getItems, deleteItem } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"../api/items\""
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
                    color: "#B392F0"
                  },
                  children: " ItemList"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " () "
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " queryClient"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " useQueryClient"
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
                    color: "#F97583"
                  },
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "data"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "items"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "isLoading"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " } "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " useQuery"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"items\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", getItems);"
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
                    color: "#79B8FF"
                  },
                  children: " mutation"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " useMutation"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(deleteItem, {"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "    onSuccess"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": () "
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
                  children: "      queryClient."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "invalidateQueries"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"items\""
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
                  children: "    },"
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  });"
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
                  children: " (isLoading) {"
                })]
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
                  children: " <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">Loading...</"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">;"
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
                  children: " ("
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "ul"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      {items."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "item"
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
                  children: " ("
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "        <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "li"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " key"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "{item.id}>"
                })]
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "          {item.name} - {item.description}"
                })
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "          <"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: " onClick"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "{() "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "=>"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " mutation."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "mutate"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(item.id)}>Delete</"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "        </"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "li"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "      ))}"
                })
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "    </"
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "ul"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ">"
                })]
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
                  children: "};"
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
                  children: "export"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " default"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " ItemList;"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "reason-for-using-react-hook-form-and-its-usage",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#reason-for-using-react-hook-form-and-its-usage",
        children: "Reason for Using react-hook-form and Its Usage"
      })
    }), "\n", _jsx(_components.h5, {
      id: "reason-for-using",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#reason-for-using",
        children: "Reason for Using"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Simplified Form Management"
        }), ": ", _jsx(_components.code, {
          children: "react-hook-form"
        }), " provides a simple and efficient way to manage form state, validation, and submission. It reduces boilerplate code and improves development efficiency."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Performance Optimization"
        }), ": ", _jsx(_components.code, {
          children: "react-hook-form"
        }), " uses uncontrolled components and local state to manage form state, which is more performant than using controlled components."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Rich Features"
        }), ": It offers built-in validation, error handling, and custom validation rules, simplifying the development of complex forms."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "implementing-form-management-without-react-hook-form",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementing-form-management-without-react-hook-form",
        children: "Implementing Form Management Without react-hook-form"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["If you cannot use ", _jsx(_components.code, {
        children: "react-hook-form"
      }), " during an interview, you can use controlled components to manage form state. Here is an example:"]
    }), "\n", _jsx(_components.h5, {
      id: "form-component",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#form-component",
        children: "Form Component"
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
              children: " React, { useState } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"react\""
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { createItem } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"../api/items\""
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
                color: "#B392F0"
              },
              children: " Form"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "onItemCreated"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) "
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "formData"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setFormData"
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
                color: "#B392F0"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ name: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", description: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"\""
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "errors"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setErrors"
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
                color: "#B392F0"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({});"
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
              children: " handleChange"
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
              children: "e"
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
                color: "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "name"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "value"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " e.target;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    setFormData"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "prevData"
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
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "prevData, [name]: value }));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  };"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " handleSubmit"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "e"
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
              children: "    e."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "preventDefault"
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
              children: "validateForm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      try"
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
              children: " newItem"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createItem"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(formData);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        onItemCreated"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(newItem);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        setFormData"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ name: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", description: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"\""
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
              children: "      } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (error) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
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
              children: "  };"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " validateForm"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
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
                color: "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " errors"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {};"
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
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "formData.name) errors.name "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"Name is required\""
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
              children: "    setErrors"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(errors);"
            })]
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
              children: " Object."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "keys"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(errors)."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ==="
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  };"
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
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "form"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " onSubmit"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleSubmit}>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        name"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"name\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{formData.name}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        onChange"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleChange}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        placeholder"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Name\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      />"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      {errors.name "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">{errors.name}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        name"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"description\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{formData.description}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        onChange"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleChange}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        placeholder"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Description\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      />"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"submit\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Submit</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "form"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
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
              children: "};"
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Form;"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "summary",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#summary",
        children: "Summary"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Using react-hook-form"
        }), ": Simplifies form management, provides built-in validation, and optimizes form state management performance."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Without react-hook-form"
        }), ": Use controlled components to manually manage form state and validation. Although the code is more verbose, it can still achieve the same functionality."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "By practicing both methods, you will be able to handle various form management requirements flexibly in interviews."
    }), "\n", _jsx(_components.h4, {
      id: "design-and-development-approach-for-time-limited-tasks",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#design-and-development-approach-for-time-limited-tasks",
        children: "Design and Development Approach for Time-Limited Tasks"
      })
    }), "\n", _jsx(_components.p, {
      children: "When you have only 30 minutes to 1 hour to complete a form, it's crucial to follow a structured design and development approach focusing on essential features."
    }), "\n", _jsx(_components.h5, {
      id: "design-and-development-approach",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#design-and-development-approach",
        children: "Design and Development Approach"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Define Requirements"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Clearly understand the CRUD form's requirements (Create, Read, Update, Delete)."
          }), "\n", _jsx(_components.li, {
            children: "Determine the must-have features and what can be simplified."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Project Initialization"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Quickly set up the React project and install necessary dependencies (axios or fetch, react-hook-form, react-query)."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Set Up Basic Structure"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Set up the API layer for backend communication."
          }), "\n", _jsx(_components.li, {
            children: "Build the basic structure for form and list components."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Implement Core Features"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Implement data fetching and display (list)."
          }), "\n", _jsx(_components.li, {
            children: "Implement data creation (form submission)."
          }), "\n", _jsx(_components.li, {
            children: "Implement data update and deletion (list actions)."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Basic Validation and Error Handling"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Implement basic form validation (frontend)."
          }), "\n", _jsx(_components.li, {
            children: "Implement basic error handling (display error messages)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h5, {
      id: "key-focus-areas",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-focus-areas",
        children: "Key Focus Areas"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Core Features"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Data Fetching"
            }), ": Use react-query or fetch to implement data fetching and display."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Data Creation"
            }), ": Use react-hook-form or controlled components to implement form submission."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Data Update and Deletion"
            }), ": Add update and delete actions in the list."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Simplified Parts"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Form Validation"
            }), ": Basic frontend validation (e.g., required fields)."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Error Handling"
            }), ": Simple error message display, without complex logic."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h5, {
      id: "essential-implementations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#essential-implementations",
        children: "Essential Implementations"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Project Initialization"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Set up the React project and install dependencies quickly."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "API Layer"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Set up basic CRUD operations (GET, POST, PUT, DELETE)."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Core Feature Implementation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Data fetching, display, creation, update, and deletion."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Basic Form Validation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Implement simple frontend validation, such as required fields."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Error Handling"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Display simple error messages on the interface."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h5, {
      id: "optional-or-simplified-implementations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#optional-or-simplified-implementations",
        children: "Optional or Simplified Implementations"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Complex Form Validation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Complex validation logic can be omitted, focusing on required field validation."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Backend Validation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Backend validation can be simplified or omitted in favor of frontend validation."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Advanced Error Handling"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Complex error handling and user-friendly error messages can be simplified to basic error display."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "introduction-to-axios-and-reasons-for-use",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#introduction-to-axios-and-reasons-for-use",
        children: "Introduction to Axios and Reasons for Use"
      })
    }), "\n", _jsx(_components.h3, {
      id: "what-is-axios",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#what-is-axios",
        children: "What is Axios?"
      })
    }), "\n", _jsx(_components.p, {
      children: "Axios is a promise-based HTTP client that works both in the browser and in Node.js."
    }), "\n", _jsx(_components.h3, {
      id: "why-use-axios",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#why-use-axios",
        children: "Why Use Axios?"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Simplified API"
        }), ": Provides simple and easy-to-use HTTP request methods."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Automatic JSON Data Conversion"
        }), ": Automatically handles JSON data conversion for requests and responses."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request and Response Interceptors"
        }), ": Supports interceptors to process requests before they are sent and responses before they are handled."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request Cancellation"
        }), ": Supports request cancellation, providing better control over asynchronous operations."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Better Error Handling"
        }), ": Provides detailed error information and handling mechanisms."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Node.js Support"
        }), ": Suitable for both browser and Node.js environments."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "basic-usage-of-axios",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#basic-usage-of-axios",
        children: "Basic Usage of Axios"
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
              children: " axios "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"axios\""
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
              children: "// Create an axios instance"
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
              children: " apiClient"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " axios."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "create"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  baseURL: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"https://api.example.com\""
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
              children: "  timeout: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1000"
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
              children: "  headers: { "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Content-Type\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"application/json\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " },"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "});"
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
              children: "// Send a GET request"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "apiClient"
            })
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
              children: "\"/items\""
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
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "response"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(response.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  })"
            })
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
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "error"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
              children: "// Send a POST request"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "apiClient"
            })
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
              children: "post"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"/items\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", { name: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"New Item\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", description: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Item description\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " })"
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
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "response"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(response.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  })"
            })
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
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "error"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
              children: "// Send a PUT request"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "apiClient"
            })
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
              children: "put"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"/items/1\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", { name: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Updated Item\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", description: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Updated description\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " })"
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
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "response"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(response.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  })"
            })
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
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "error"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
              children: "// Send a DELETE request"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "apiClient"
            })
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
              children: "delete"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"/items/1\""
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
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "response"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(response.data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  })"
            })
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
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "error"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "comparison-between-fetch-and-react-query",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#comparison-between-fetch-and-react-query",
        children: "Comparison Between Fetch and React Query"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Fetch"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Advantages: Native and simple, easy to get started with."
          }), "\n", _jsx(_components.li, {
            children: "Disadvantages: Requires manual handling of state, caching, and error handling, leading to verbose and complex code."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "React Query"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Advantages: Provides out-of-the-box state management, caching, and synchronization mechanisms, simplifying data fetching and management."
          }), "\n", _jsx(_components.li, {
            children: "Disadvantages: Higher learning curve, but powerful and suitable for medium to large applications."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "cross-origin-issue-resolution",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#cross-origin-issue-resolution",
        children: "Cross-Origin Issue Resolution"
      })
    }), "\n", _jsx(_components.h3, {
      id: "do-we-need-to-consider-cross-origin-issues-when-building-crud-forms-with-axios-during-interviews",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#do-we-need-to-consider-cross-origin-issues-when-building-crud-forms-with-axios-during-interviews",
        children: "Do We Need to Consider Cross-Origin Issues When Building CRUD Forms with Axios During Interviews?"
      })
    }), "\n", _jsx(_components.p, {
      children: "Yes, cross-origin issues (CORS, Cross-Origin Resource Sharing) need to be considered. When you send requests to a different domain in the browser, the browser checks whether such cross-origin requests are allowed. This issue usually needs to be resolved on the server side."
    }), "\n", _jsx(_components.h3, {
      id: "how-to-resolve-cross-origin-issues",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#how-to-resolve-cross-origin-issues",
        children: "How to Resolve Cross-Origin Issues?"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Server-Side CORS Configuration"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Configure CORS headers on the server to allow access from specific domains."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Using Proxy"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["In the development environment, you can use a proxy server to solve cross-origin issues. For example, in Create React App, you can add a ", _jsx(_components.code, {
              children: "proxy"
            }), " field in ", _jsx(_components.code, {
              children: "package.json"
            }), ".", "\n", _jsx(_components.figure, {
              "data-rehype-pretty-code-figure": "",
              children: _jsx(_components.pre, {
                style: {
                  backgroundColor: "#24292e",
                  color: "#e1e4e8"
                },
                tabIndex: "0",
                "data-language": "json",
                "data-theme": "github-dark",
                children: _jsx(_components.code, {
                  "data-language": "json",
                  "data-theme": "github-dark",
                  style: {
                    display: "grid"
                  },
                  children: _jsxs(_components.span, {
                    "data-line": "",
                    children: [_jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"proxy\""
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"http://localhost:5000\""
                    })]
                  })
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "JSONP"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Suitable for GET requests only. JSONP is a method of loading data via ", _jsx(_components.code, {
              children: "<script>"
            }), " tags, but it is not suitable for POST, PUT, DELETE requests."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "CORS Middleware"
          }), " (for Node.js/Express backend):"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["\n", _jsxs(_components.p, {
              children: ["Use ", _jsx(_components.code, {
                children: "cors"
              }), " middleware to allow cross-origin requests."]
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
                      children: " express"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " require"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"express\""
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
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: " cors"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: " require"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"cors\""
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
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
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
                      children: "use"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "cors"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "());"
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
                      children: "\"/items\""
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
                      children: "json"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "([{ id: "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", name: "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"Item 1\""
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: " }]);"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "});"
                    })
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: " "
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
                      children: "5000"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", () "
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
                      children: "\"Server running on port 5000\""
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
                  })]
                })
              })
            }), "\n", _jsxs(_components.p, {
              children: ["In the above configuration, ", _jsx(_components.code, {
                children: "app.use(cors())"
              }), " allows requests from all sources by default. If you want to allow only specific sources, you can configure it as follows:"]
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
                      children: " corsOptions"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#F97583"
                      },
                      children: " ="
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
                      children: "  origin: "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#9ECBFF"
                      },
                      children: "\"http://localhost:3000\""
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        color: "#6A737D"
                      },
                      children: "// 允许来自此 URL 的请求"
                    })]
                  }), "\n", _jsx(_components.span, {
                    "data-line": "",
                    children: _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "};"
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
                      children: "use"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        color: "#B392F0"
                      },
                      children: "cors"
                    }), _jsx(_components.span, {
                      style: {
                        color: "#E1E4E8"
                      },
                      children: "(corsOptions));"
                    })]
                  })]
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "frontend-code",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#frontend-code",
        children: "Frontend Code"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["No special configuration is needed on the frontend. Just ensure that the ", _jsx(_components.code, {
        children: "BASE_URL"
      }), " points to the correct backend server address."]
    }), "\n", _jsxs(_components.p, {
      children: ["Assuming your backend is running at ", _jsx(_components.code, {
        children: "http://localhost:5000"
      }), ", the frontend ", _jsx(_components.code, {
        children: "BASE_URL"
      }), " should be set as:"]
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
        children: _jsx(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
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
              children: " API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"http://localhost:5000\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Then, the frontend API module can use this ", _jsx(_components.code, {
        children: "BASE_URL"
      }), ":"]
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
              children: " API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"http://localhost:5000\""
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getItems"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/items`"
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
              children: "  if"
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
              children: "response.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    throw"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Network response was not ok\""
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
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: "// Other CRUD operation functions follow the same pattern"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "implementing-crud-form-with-fetch-api",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementing-crud-form-with-fetch-api",
        children: "Implementing CRUD Form with Fetch API"
      })
    }), "\n", _jsx(_components.p, {
      children: "If Axios cannot be used, the same functionality can be implemented with the native Fetch API. Below is the corresponding code implementation:"
    }), "\n", _jsx(_components.h3, {
      id: "project-initialization",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#project-initialization",
        children: "Project Initialization"
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
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " create-react-app"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " crud-form"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " crud-form"
            })]
          }), "\n", _jsxs(_components.span, {
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
                color: "#9ECBFF"
              },
              children: " react-hook-form"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "api-module",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#api-module",
        children: "API Module"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "src/api/items.js"
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"http://localhost:5000\""
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getItems"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/items`"
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
              children: "  if"
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
              children: "response.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    throw"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Network response was not ok\""
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
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createItem"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "item"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/items`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    method: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"POST\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    headers: {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "      \"Content-Type\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"application/json\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    body: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "JSON"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "stringify"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(item),"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
              children: "response.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    throw"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Network response was not ok\""
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
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " updateItem"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "item"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/items/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    method: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"PUT\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    headers: {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "      \"Content-Type\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"application/json\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    body: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "JSON"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "stringify"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(item),"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
              children: "response.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    throw"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Network response was not ok\""
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
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " deleteItem"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "id"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "API_BASE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/items/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    method: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"DELETE\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
              children: "response.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    throw"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Network response was not ok\""
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
              children: "  }"
            })
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
      id: "form-component-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#form-component-1",
        children: "Form Component"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "src/components/Form.js"
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
              children: " React "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"react\""
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useForm } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"react-hook-form\""
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { createItem } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"../api/items\""
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
                color: "#B392F0"
              },
              children: " Form"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "onItemCreated"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) "
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "register"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "handleSubmit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "reset"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " useForm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: " onSubmit"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "data"
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
                color: "#F97583"
              },
              children: "    try"
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
              children: "      const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " newItem"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " createItem"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(data);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      onItemCreated"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(newItem);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      reset"
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
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (error) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
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
              children: "  };"
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
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "form"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " onSubmit"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "handleSubmit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(onSubmit)}>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "register"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"name\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")} "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "placeholder"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Name\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "register"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"description\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")} "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "placeholder"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Description\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"submit\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Create</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "form"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
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
              children: "};"
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Form;"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "list-component",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#list-component",
        children: "List Component"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "src/components/ItemList.js"
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
              children: " React, { useEffect, useState } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"react\""
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { getItems, deleteItem } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"../api/items\""
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
                color: "#B392F0"
              },
              children: " ItemList"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "items"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setItems"
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
                color: "#B392F0"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "([]);"
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
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "isLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setIsLoading"
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
                color: "#B392F0"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "  useEffect"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetchItems"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
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
                color: "#F97583"
              },
              children: "      try"
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
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getItems"
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
                color: "#B392F0"
              },
              children: "        setItems"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(data);"
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
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (error) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
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
              children: "finally"
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
                color: "#B392F0"
              },
              children: "        setIsLoading"
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
              children: ");"
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
              children: "    };"
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
              children: "    fetchItems"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }, []);"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " handleDelete"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "id"
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
                color: "#F97583"
              },
              children: "    try"
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
              children: "      await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " deleteItem"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(id);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      setItems"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "prevItems"
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
              children: " prevItems."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "filter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "item"
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
              children: " item.id "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " id));"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (error) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"There was an error!\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
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
              children: "  };"
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
              children: " (isLoading) {"
            })]
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Loading...</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">;"
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
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "ul"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      {items."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "map"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "item"
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
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " key"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{item.id}>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          {item.name} - {item.description}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " handleDelete"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(item.id)}>Delete</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      ))}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "ul"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
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
              children: "};"
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ItemList;"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "summary-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#summary-1",
        children: "Summary"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cross-Origin Issues"
        }), ": Consider cross-origin issues during interviews. These can be solved by configuring CORS on the server or using a proxy."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Using Fetch API"
        }), ": If Axios cannot be used, the same CRUD functionality can be implemented using the native Fetch API."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "With these insights and sample codes, you can confidently handle cross-origin issues in interviews and choose the right tools for implementing CRUD functionalities. Continuous practice and code optimization will enable you to showcase your professional skills and best practices during interviews."
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
