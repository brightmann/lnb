import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/liuyuelintop/PicGo@main/GraphQL%20vs%20REST.png",
        alt: "mind map"
      })
    }), "\n", _jsx(_components.h2, {
      id: "1-data-fetching",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-data-fetching",
        children: "1. Data Fetching"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Uses multiple endpoints for different resources. Each resource (e.g., /users, /posts) has its own endpoint, and to get data from multiple resources, you may need to make multiple requests."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Uses a single endpoint for all requests. You can fetch exactly what you need in a single query, even if the data comes from multiple resources."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Example:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": You may need to call /users and /posts separately to get data about users and their posts."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": A single query can fetch both users and their posts simultaneously."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "2-over-fetching-and-under-fetching",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-over-fetching-and-under-fetching",
        children: "2. Over-fetching and Under-fetching"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Often leads to over-fetching or under-fetching. Over-fetching occurs when more data than necessary is retrieved, while under-fetching happens when you don't get enough data in one request, requiring additional requests."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Minimizes over-fetching and under-fetching because you specify exactly the data fields you need in your query."]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Example:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": If you need only a user’s name but the /users endpoint returns name, email, and age, you get unwanted data."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": You can request only the name field."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "3-flexibility-and-versioning",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-flexibility-and-versioning",
        children: "3. Flexibility and Versioning"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Typically requires versioning (/v1/users, /v2/users) as APIs evolve, which can lead to multiple endpoints for different versions."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Doesn’t require versioning because the schema can evolve. New fields can be added without affecting existing queries."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "4-performance",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-performance",
        children: "4. Performance"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Multiple round trips to the server may be needed to gather all necessary data, which can lead to slower performance."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Typically faster for complex data fetching, as it reduces the number of requests by aggregating all needed data in one request."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Note"
      }), ": However, ", _jsx(_components.strong, {
        children: "GraphQL"
      }), " can be less performant for simple, one-resource fetches because the server needs to parse and resolve a more complex query structure."]
    }), "\n", _jsx(_components.h2, {
      id: "5-error-handling",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#5-error-handling",
        children: "5. Error Handling"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Uses HTTP status codes (e.g., 404, 500) to handle errors."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Always returns a 200 OK status for queries but includes error details in the response’s error object, making it more uniform but less integrated with HTTP status codes."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "6-caching",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#6-caching",
        children: "6. Caching"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Has better caching at the HTTP level because each endpoint corresponds to a specific resource that can be cached using standard techniques."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": More challenging to cache, as all requests go through a single endpoint, making it harder to leverage traditional HTTP caching mechanisms."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "7-tooling-and-ecosystem",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#7-tooling-and-ecosystem",
        children: "7. Tooling and Ecosystem"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Is widely adopted with many mature libraries, frameworks, and built-in browser tools."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Has a growing ecosystem with modern tools (e.g., Apollo Client), but requires more setup and learning, especially for caching and error handling."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "8-real-time-data",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#8-real-time-data",
        children: "8. Real-Time Data"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "REST"
        }), ": Not natively designed for real-time data. Requires polling or additional tools (e.g., WebSockets) for real-time capabilities."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GraphQL"
        }), ": Offers built-in support for real-time data through subscriptions."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "concise-summary",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#concise-summary",
        children: "Concise Summary:"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["| Aspect              | ", _jsx(_components.strong, {
        children: "REST"
      }), "                             | ", _jsx(_components.strong, {
        children: "GraphQL"
      }), "                    |\n| ------------------- | ------------------------------------ | ------------------------------ |\n| Data Fetching       | Multiple endpoints                   | Single endpoint                |\n| Over/Under Fetching | Common problem                       | Rare due to selective querying |\n| Versioning          | Requires versioning                  | No versioning needed           |\n| Performance         | Slower for complex data              | Faster for complex data        |\n| Error Handling      | HTTP status codes                    | Custom error objects           |\n| Caching             | Easier with HTTP caching             | More challenging               |\n| Real-Time Data      | Needs extra tools (e.g., WebSockets) | Supports subscriptions         |"]
    }), "\n", _jsx(_components.h2, {
      id: "test-questions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#test-questions",
        children: "Test Questions"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "How does GraphQL handle over-fetching and under-fetching differently from REST?"
      }), "\n", _jsx(_components.li, {
        children: "Why might GraphQL be less suitable for simple data-fetching tasks compared to REST?"
      }), "\n", _jsx(_components.li, {
        children: "How does error handling differ between REST and GraphQL?"
      }), "\n", _jsx(_components.li, {
        children: "In what scenarios would REST’s versioning be a disadvantage compared to GraphQL?"
      }), "\n", _jsx(_components.li, {
        children: "By understanding these points, you can decide which approach—GraphQL or REST—best suits different requirements in API design and data fetching scenarios."
      }), "\n"]
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
