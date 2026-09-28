import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "handling-route-conflicts-and-optimizing-delete-operations-in-expressjs",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#handling-route-conflicts-and-optimizing-delete-operations-in-expressjs",
        children: "Handling Route Conflicts and Optimizing Delete Operations in Express.js"
      })
    }), "\n", _jsx(_components.p, {
      children: "In this blog post, we explore how to handle route conflicts in Express.js and optimize the deletion operations for bookmarks and posts in our Twitter-clone project."
    }), "\n", _jsx(_components.h3, {
      id: "problem-overview",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-overview",
        children: "Problem Overview"
      })
    }), "\n", _jsx(_components.p, {
      children: "After adding bookmark functionality to posts, we encountered issues with route conflicts and the correct deletion of posts. Specifically, when attempting to delete all bookmarks, we faced route conflicts that caused incorrect behavior. Additionally, when deleting a post, it is crucial to ensure that any references to the post in other collections are also removed or updated. In our case, we need to clear bookmarks referencing the post before deleting it."
    }), "\n", _jsx(_components.h3, {
      id: "route-conflicts-in-expressjs",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#route-conflicts-in-expressjs",
        children: "Route Conflicts in Express.js"
      })
    }), "\n", _jsx(_components.p, {
      children: "When working with Express.js, defining routes with similar patterns can sometimes lead to conflicts. This is especially true when a route parameter is defined at the same path level as a static route. For example, consider the following route definitions:"
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
                color: "#E1E4E8"
              },
              children: "router."
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
              children: "\"/:id\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", protectRoute, deletePost);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "router."
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
              children: "\"/bookmarks\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", protectRoute, deleteAllBookmarks);"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The issue here is that the ", _jsx(_components.code, {
        children: "/bookmarks"
      }), " route can be mistakenly interpreted as a parameter ", _jsx(_components.code, {
        children: ":id"
      }), ", leading to unexpected behavior and errors, such as the one we encountered:"]
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
        children: _jsx(_components.code, {
          "data-language": "bash",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Error"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " in"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " deletePost"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " controller:"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " CastError:"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " Cast"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " to"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " ObjectId"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " failed"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " for"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"bookmarks\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (type "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") at path "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"\\_id\""
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " model "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Post\""
            })]
          })
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "route-conflict-resolution",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#route-conflict-resolution",
        children: "Route Conflict Resolution"
      })
    }), "\n", _jsx(_components.p, {
      children: "The primary issue was the route conflict caused by the way Express matches routes. To resolve this, we reordered our routes to prevent conflicts and ensure proper route handling."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "Place more specific routes before the more general ones:"
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
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "router."
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
              children: "\"/bookmarks\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", protectRoute, deleteAllBookmarks);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "router."
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
              children: "\"/:id\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", protectRoute, deletePost);"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "optimizing-delete-operations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#optimizing-delete-operations",
        children: "Optimizing Delete Operations"
      })
    }), "\n", _jsx(_components.h4, {
      id: "deletepost-function",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#deletepost-function",
        children: [_jsx(_components.code, {
          children: "deletePost"
        }), " Function"]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["After adding bookmark functionality to posts, we must address an important issue: when deleting a post, it is essential to ensure that any references to the post in other collections are also removed or updated. Specifically, we need to clear bookmarks that reference the post before deleting it.\nUpdated ", _jsx(_components.code, {
        children: "deletePost"
      }), " function:"]
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
              children: " deletePost"
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
              children: "id"
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
              children: " req.params;"
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
              children: " userId"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " req.user._id."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "toString"
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
              children: "mongoose.Types.ObjectId."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "isValid"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(id)) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res."
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
              children: "400"
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
              children: "({ error: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Invalid post ID\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
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
            children: " "
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
              children: " post"
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
              children: "findById"
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
              children: "post) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res."
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
              children: "404"
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
              children: "({ error: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Post not found\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // check authorization"
            })
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
              children: " (post.user."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "toString"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " userId) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        ."
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
              children: "401"
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
              children: "        ."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ error: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"You are not authorized to delete this post\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // delete post img (if it exists)"
            })
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
              children: " (post.img) {"
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
              children: " destroyImage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(post.img);"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Clear bookmarks referencing this post"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " User."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "updateMany"
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
              children: "      { bookmarkedPosts: id },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      { $pull: { bookmarkedPosts: id } }"
            })
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
              children: "    // delete the post"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Post."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "findByIdAndDelete"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(id);"
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
              children: "({ message: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Post deleted successfully\""
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
              children: "\"Error in deletePost controller:\""
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
              children: "500"
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
              children: "({ error: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Internal server error\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
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
      id: "handling-bookmarks",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#handling-bookmarks",
        children: "Handling Bookmarks"
      })
    }), "\n", _jsx(_components.h4, {
      id: "deleteallbookmarks-function",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#deleteallbookmarks-function",
        children: [_jsx(_components.code, {
          children: "deleteAllBookmarks"
        }), " Function"]
      })
    }), "\n", _jsx(_components.p, {
      children: "To delete all bookmarks for a user, we need to clear the bookmarks in the user's document and update all posts that reference the user in their bookmarks array."
    }), "\n", _jsxs(_components.p, {
      children: ["Updated ", _jsx(_components.code, {
        children: "deleteAllBookmarks"
      }), " function:"]
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
              children: " deleteAllBookmarks"
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
              children: " userId"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " req.user._id;"
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
              children: "    const"
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
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " User."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "findById"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(userId)."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "populate"
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
              children: "      path: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"bookmarkedPosts\""
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
              children: "      populate: {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        path: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"user\""
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
              children: "        select: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"username profileImg fullName\""
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
              children: "      },"
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
              children: "user) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res."
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
              children: "404"
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
              children: "({ error: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"User not found\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
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
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // Clear user's bookmarkedPosts"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    user.bookmarkedPosts "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [];"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " user."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "save"
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
              children: "    // Clear bookmarks in the posts"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Post."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "updateMany"
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
              children: "      { bookmarks: userId },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      { $pull: { bookmarks: userId } }"
            })
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
              children: "({ message: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"All bookmarks deleted successfully\""
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
              children: "\"Error in deleteAllBookmarks controller:\""
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
              children: "500"
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
              children: "({ error: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Internal server error\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " });"
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
      id: "references",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#references",
        children: "References"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["For further reading on Express.js routing and middleware, refer to the ", _jsx(_components.a, {
        href: "https://expressjs.com/en/guide/routing.html",
        children: "official Express.js documentation"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: "By correctly ordering our routes and ensuring all references are handled when deleting documents, we can avoid conflicts and maintain data integrity in our application."
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
