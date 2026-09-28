import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    figure: "figure",
    h1: "h1",
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
    children: [_jsx(_components.h1, {
      id: "implementing-a-one-click-copy-button-for-mdx-code-blocks",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementing-a-one-click-copy-button-for-mdx-code-blocks",
        children: "Implementing a One-Click Copy Button for MDX Code Blocks"
      })
    }), "\n", _jsx(_components.p, {
      children: "This document describes how to add a one-click copy button to code blocks in an MDX technical documentation blog built with Next.js."
    }), "\n", _jsx(_components.h2, {
      id: "background",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#background",
        children: "Background"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In many blogs, code blocks are typically wrapped with triple backticks and rendered as ", _jsx(_components.code, {
        children: "<pre><code>"
      }), " elements. To enhance user experience, we aim to place a copy button at the top-right corner of each code block, enabling users to copy the code with a single click."]
    }), "\n", _jsx(_components.h2, {
      id: "initial-approach",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#initial-approach",
        children: "Initial Approach"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Initially, we used a ", _jsx(_components.code, {
        children: "useEffect"
      }), " hook (or custom hook) on the client side to scan all ", _jsx(_components.code, {
        children: "<pre>"
      }), " elements and dynamically inject the copy button. This required minimal changes to the existing code structure."]
    }), "\n", _jsx(_components.h2, {
      id: "improved-approach-using-figure-as-the-positioning-container",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#improved-approach-using-figure-as-the-positioning-container",
        children: ["Improved Approach: Using ", _jsx(_components.code, {
          children: "<figure>"
        }), " as the Positioning Container"]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["When using tools like ", _jsx(_components.code, {
        children: "rehype-pretty-code"
      }), ", code blocks are often wrapped in a ", _jsx(_components.code, {
        children: "<figure data-rehype-pretty-code-figure>"
      }), " element. Instead of inserting the copy button directly into ", _jsx(_components.code, {
        children: "<pre>"
      }), ", we can place it inside ", _jsx(_components.code, {
        children: "<figure>"
      }), ". This avoids potential layout issues such as scrollbars or overflow on ", _jsx(_components.code, {
        children: "<pre>"
      }), "."]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Target ", _jsx(_components.code, {
              children: "<figure>"
            }), " Instead of ", _jsx(_components.code, {
              children: "<pre>"
            })]
          }), _jsx(_components.br, {}), "\n", "Search for:"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "tsx",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "tsx",
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
                  children: " figures"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " rootElement."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "querySelectorAll"
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
                    color: "#9ECBFF"
                  },
                  children: "  \"figure[data-rehype-pretty-code-figure]\""
                })
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), "\n", _jsxs(_components.p, {
          children: ["and append the button to the ", _jsx(_components.code, {
            children: "<figure>"
          }), " element rather than the ", _jsx(_components.code, {
            children: "<pre>"
          }), " element."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Set ", _jsx(_components.code, {
              children: "<figure>"
            }), " to ", _jsx(_components.code, {
              children: "position: relative;"
            })]
          }), _jsx(_components.br, {}), "\n", "In your global CSS (e.g., ", _jsx(_components.code, {
            children: "globals.css"
          }), "), add:"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "css",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "css",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: [_jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "figure"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "data-rehype-pretty-code-figure"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "] {"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "  position"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "relative"
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
                  children: "}"
                })
              })]
            })
          })
        }), "\n", _jsxs(_components.p, {
          children: ["This ensures that the button, with absolute positioning, will be positioned relative to the ", _jsx(_components.code, {
            children: "<figure>"
          }), "."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Define a ", _jsx(_components.code, {
              children: ".copy-button"
            }), " Class with Tailwind's ", _jsx(_components.code, {
              children: "@apply"
            })]
          }), _jsx(_components.br, {}), "\n", "To avoid issues with Tailwind Purge, define the button styles in your global CSS:"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "css",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "css",
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
                  children: ".copy-button"
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
                  children: "  @"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "apply"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " absolute"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " top-"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "2 "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "right-"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "2 "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "bg-gray-"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "700 "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "text-white"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " rounded"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " px-"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "2 "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "py-"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "1 "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "text-sm"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " opacity-"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "0 "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "group-hover"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ":opacity-100 transition;"
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
        }), "\n", _jsx(_components.p, {
          children: "Then, in your JavaScript/TypeScript code, simply add the class to the button:"
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "ts",
            "data-theme": "github-dark",
            children: _jsx(_components.code, {
              "data-language": "ts",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "button.classList."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "add"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"copy-button\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ");"
                })]
              })
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "handling-style-conflicts",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#handling-style-conflicts",
        children: "Handling Style Conflicts"
      })
    }), "\n", _jsx(_components.p, {
      children: "If other plugins or global styles interfere with the button’s positioning:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Use browser DevTools to ensure that the ", _jsx(_components.code, {
          children: "<figure>"
        }), " element has ", _jsx(_components.code, {
          children: "position: relative;"
        }), " and that the button receives the correct computed styles (e.g., ", _jsx(_components.code, {
          children: "position: absolute; top: 0.5rem; right: 0.5rem;"
        }), ")."]
      }), "\n", _jsxs(_components.li, {
        children: ["Adjust the styles on the ", _jsx(_components.code, {
          children: "<pre>"
        }), " element if necessary. For example:", "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "css",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "css",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: [_jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "figure"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "data-rehype-pretty-code-figure"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    color: "#85E89D"
                  },
                  children: "pre"
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
                    color: "#79B8FF"
                  },
                  children: "  overflow"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "auto"
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
                    color: "#79B8FF"
                  },
                  children: "  margin"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "0"
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
                    color: "#79B8FF"
                  },
                  children: "  padding"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "rem"
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
                  children: "}"
                })
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["Verify that the Tailwind classes are not purged by using the defined ", _jsx(_components.code, {
          children: ".copy-button"
        }), " class with ", _jsx(_components.code, {
          children: "@apply"
        }), "."]
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
      children: ["By injecting the copy button into the ", _jsx(_components.code, {
        children: "<figure>"
      }), " element and ensuring it has a proper positioning context and dedicated styling, we can achieve a clean, one-click copy solution for MDX code blocks. This approach aligns with modern React and Next.js best practices, providing a solid foundation for future enhancements."]
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
