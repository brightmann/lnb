import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "practices-for-implementing-pagination-in-mern-projects",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#practices-for-implementing-pagination-in-mern-projects",
        children: "Practices for Implementing Pagination in MERN Projects"
      })
    }), "\n", _jsx(_components.p, {
      children: "Pagination is essential for managing large datasets in web applications. Implementing it efficiently ensures a better user experience and optimized performance. This document provides best practices for implementing pagination in MERN (MongoDB, Express, React, Node.js) projects, covering both frontend and backend aspects with practical examples."
    }), "\n", _jsx(_components.h3, {
      id: "frontend-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#frontend-implementation",
        children: "Frontend Implementation"
      })
    }), "\n", _jsx(_components.h4, {
      id: "component-structure",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#component-structure",
        children: "Component Structure"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Modular Design"
        }), ": Break down the pagination component into smaller sub-components for easier maintenance and reusability."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Forward Refs"
        }), ": Use ", _jsx(_components.code, {
          children: "React.forwardRef"
        }), " for components that need to pass refs to underlying DOM elements."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "accessibility",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#accessibility",
        children: "Accessibility"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ARIA Attributes"
        }), ": Include appropriate ARIA attributes (", _jsx(_components.code, {
          children: "aria-label"
        }), ", ", _jsx(_components.code, {
          children: "aria-current"
        }), ") to make pagination accessible to screen readers."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Focus States"
        }), ": Provide visible focus states for interactive elements to enhance accessibility."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "styling",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#styling",
        children: "Styling"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Utility-First CSS"
        }), ": Utilize utility-first CSS frameworks like Tailwind CSS for consistent and responsive styling."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "State Variants"
        }), ": Ensure active and disabled states are visually distinct for better user interaction."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
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
          children: "State Handling"
        }), ": Manage the current page state using React's state management hooks (e.g., ", _jsx(_components.code, {
          children: "useState"
        }), ", ", _jsx(_components.code, {
          children: "useReducer"
        }), ")."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "URL Synchronization"
        }), ": Use URL parameters or React Router to keep the current page in sync with the URL for better user experience."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "backend-implementation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#backend-implementation",
        children: "Backend Implementation"
      })
    }), "\n", _jsx(_components.h4, {
      id: "database-queries",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#database-queries",
        children: "Database Queries"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Pagination Methods"
        }), ": Use MongoDB's ", _jsx(_components.code, {
          children: "skip"
        }), " and ", _jsx(_components.code, {
          children: "limit"
        }), " methods to fetch a specific subset of data for each page."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Indexing"
        }), ": Ensure the database query is optimized with appropriate indexes to enhance performance."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "api-endpoints",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#api-endpoints",
        children: "API Endpoints"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Dedicated Endpoints"
        }), ": Create a dedicated API endpoint for fetching paginated data (e.g., ", _jsx(_components.code, {
          children: "/api/items?page=1&limit=10"
        }), ")."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Metadata"
        }), ": Return metadata along with the data, such as the total number of items and pages, to aid in frontend implementation."]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "example-function",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-function",
        children: "Example Function"
      })
    }), "\n", _jsx(_components.p, {
      children: "The following function demonstrates how to implement pagination in a Node.js/Express backend:"
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
              children: " getposts"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "next"
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
              children: "  try"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Parsing query parameters for pagination and sorting"
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
              children: " startIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " parseInt"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.startIndex) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " limit"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " parseInt"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.limit) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " sortDirection"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " req.query.order "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"asc\""
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ?"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " :"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
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
              children: "    // Building the query object dynamically based on provided filters"
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
              children: " posts"
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
              children: " Post."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "find"
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
                color: "#F97583"
              },
              children: "      ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.userId "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { userId: req.query.userId }),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.category "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { category: req.query.category }),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.slug "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { slug: req.query.slug }),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.postId "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { _id: req.query.postId }),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(req.query.searchTerm "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // Using regex for search functionality on title and content fields"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        $or: ["
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          { title: { $regex: req.query.searchTerm, $options: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"i\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " } },"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          { content: { $regex: req.query.searchTerm, $options: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"i\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " } },"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        ],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      }),"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    })"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // Sorting the posts based on the updatedAt field"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sort"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ updatedAt: sortDirection })"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // Applying pagination using skip and limit"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "skip"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(startIndex)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "limit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(limit);"
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
              children: "    // Getting the total number of posts in the collection"
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
              children: " totalPosts"
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
              children: " Post."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "countDocuments"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "();"
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
              children: "    // Calculating the date one month ago from today"
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
              children: " now"
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
              children: " Date"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " oneMonthAgo"
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
              children: " Date"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      now."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getFullYear"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      now."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getMonth"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "() "
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
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      now."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getDate"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    );"
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
              children: "    // Counting the number of posts created in the last month"
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
              children: " lastMonthPosts"
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
              children: " Post."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "countDocuments"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      createdAt: { $gte: oneMonthAgo },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    });"
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
              children: "    // Sending the response with the posts and metadata"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    res."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "status"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "200"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      posts,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      totalPosts,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      lastMonthPosts,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  } "
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Passing any errors to the error handling middleware"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    next"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(error);"
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
    }), "\n", _jsx(_components.p, {
      children: "This function handles the following:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Parsing query parameters for pagination (startIndex, limit) and sorting (order)."
      }), "\n", _jsx(_components.li, {
        children: "Building a dynamic query object based on provided filters (userId, category, slug, postId, searchTerm)."
      }), "\n", _jsx(_components.li, {
        children: "Fetching posts from the database with sorting and pagination applied."
      }), "\n", _jsx(_components.li, {
        children: "Counting the total number of posts and the number of posts created in the last month."
      }), "\n", _jsx(_components.li, {
        children: "Returning the fetched posts along with metadata in the response."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Error Handling"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Graceful Handling: Handle potential errors, such as invalid page numbers or empty results, gracefully and provide meaningful error messages."
      }), "\n", _jsx(_components.li, {
        children: "Fallback UI: Implement a fallback UI to handle scenarios where data fetching fails."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Performance Considerations"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Caching: Cache frequently accessed pages to reduce the load on the database and improve response times."
      }), "\n", _jsx(_components.li, {
        children: "Combination Pagination: Use a combination of server-side and client-side pagination for handling large datasets efficiently."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example Code (Frontend)"
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
                color: "#B392F0"
              },
              children: "useEffect"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetchPosts"
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
              children: " res"
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
              children: "`/api/post/getposts?userId=${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "currentUser"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "_id"
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
                color: "#E1E4E8"
              },
              children: " res."
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
              children: " (res.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "        setUserPosts"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(data.posts);"
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
              children: " (data.posts."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
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
                color: "#B392F0"
              },
              children: "          setShowMore"
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
              children: "        }"
            })
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
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(error.message);"
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
              children: " (currentUser.isAdmin) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    fetchPosts"
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
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}, [currentUser._id]);"
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " handleShowMore"
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
              children: " startIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " userPosts."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
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
              children: "  try"
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
              children: " res"
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
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "      `/api/post/getposts?userId=${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "currentUser"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "_id"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}&startIndex=${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "startIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    );"
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
                color: "#E1E4E8"
              },
              children: " res."
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
              children: " (res.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "      setUserPosts"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "prev"
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
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "prev, "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "data.posts]);"
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
              children: " (data.posts."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 9"
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
                color: "#B392F0"
              },
              children: "        setShowMore"
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
              children: "    }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  } "
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
              children: "(error.message);"
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
    }), "\n", _jsx(_components.p, {
      children: "By following these best practices, you can implement efficient and user-friendly pagination in your MERN stack projects, ensuring both performance and accessibility."
    }), "\n", _jsx(_components.p, {
      children: "References\nFor further reading on pagination techniques in MERN stack projects, refer to the official MongoDB, Express, React, and Node.js documentation."
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
