import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
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
    children: [_jsx(_components.h2, {
      id: "-purpose",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-purpose",
        children: "🔗 Purpose"
      })
    }), "\n", _jsx(_components.p, {
      children: "In containerised development environments, it's easy to lose track of what port an app is running on — especially when host-to-container port mappings differ."
    }), "\n", _jsxs(_components.p, {
      children: ["To solve this, we introduce a simple pattern that ", _jsxs(_components.strong, {
        children: ["dynamically prints the correct app link (e.g. ", _jsx(_components.code, {
          children: "http://localhost:4001"
        }), ") when the server starts"]
      }), ", based on the current environment variable (e.g. ", _jsx(_components.code, {
        children: "HOST_PORT"
      }), ")."]
    }), "\n", _jsx(_components.p, {
      children: "This reduces guesswork and ensures developers always know exactly where to access the application — whether it's running locally or inside Docker."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "️-high-level-approach",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-high-level-approach",
        children: "⚙️ High-Level Approach"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Keep the app startup script clean and reusable"
          })
        }), "\n", _jsxs(_components.p, {
          children: ["Define your actual server start command in a dedicated script (e.g. ", _jsx(_components.code, {
            children: "start-server.sh"
          }), "):"]
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
                  children: "next"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " start"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " -p"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " 3001"
                })]
              })
            })
          })
        }), "\n", _jsx(_components.p, {
          children: "This script contains no logging or environment logic and can be reused in CI, production, or other automation."
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Add a dynamic wrapper"
          })
        }), "\n", _jsxs(_components.p, {
          children: ["Create a wrapper script (e.g. ", _jsx(_components.code, {
            children: "start.ts"
          }), " or ", _jsx(_components.code, {
            children: "start.js"
          }), ") that:"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Spawns the actual start script"
          }), "\n", _jsx(_components.li, {
            children: "Waits for the server \"ready\" signal"
          }), "\n", _jsxs(_components.li, {
            children: ["Detects the port from the environment (e.g. ", _jsx(_components.code, {
              children: "HOST_PORT"
            }), ")"]
          }), "\n", _jsx(_components.li, {
            children: "Prints the resolved URL like:"
          }), "\n"]
        }), "\n", _jsx(_components.pre, {
          children: _jsx(_components.code, {
            children: "App ready — visit: http://localhost:4001\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-why-this-matters",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-why-this-matters",
        children: "✅ Why This Matters"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["🧭 ", _jsx(_components.strong, {
          children: "Instant feedback"
        }), ": Clear startup logs help devs find the running app without searching Docker configs or port mappings."]
      }), "\n", _jsxs(_components.li, {
        children: ["💻 ", _jsx(_components.strong, {
          children: "Portable setup"
        }), ": Works the same in Docker, local dev, or cloud shell environments."]
      }), "\n", _jsxs(_components.li, {
        children: ["🔄 ", _jsx(_components.strong, {
          children: "DRY principle"
        }), ": Keeps logic clean and reusable across environments."]
      }), "\n", _jsxs(_components.li, {
        children: ["🧪 ", _jsx(_components.strong, {
          children: "CI/CD friendly"
        }), ": Start logic remains testable and scriptable."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-example-output",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-example-output",
        children: "🧪 Example Output"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "In Docker:"
      })
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "> App starting...\n> App ready — visit: http://localhost:4001\n"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Locally:"
      })
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "> App ready — visit: http://localhost:3001\n"
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "️-suggested-file-structure",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-suggested-file-structure",
        children: "🗂️ Suggested File Structure"
      })
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "scripts/\n├── start-server.sh      # Minimal entry point (no logs, no logic)\n└── start.js or start.ts # Dynamic wrapper (prints resolved URL)\n.env                     # Defines HOST_PORT or fallback\npackage.json\n"
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-tip",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-tip",
        children: "✨ Tip"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Inject ", _jsx(_components.code, {
        children: "HOST_PORT"
      }), " into your environment via Docker or shell:"]
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
                color: "#E1E4E8"
              },
              children: "HOST_PORT"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "4001"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " node"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " scripts/start.js"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "This makes it easy to reuse across local and containerised setups."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-summary",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-summary",
        children: "🧾 Summary"
      })
    }), "\n", _jsx(_components.p, {
      children: "This simple pattern helps teams:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Remove confusion around Docker port mapping"
      }), "\n", _jsx(_components.li, {
        children: "Improve developer onboarding and DX"
      }), "\n", _jsx(_components.li, {
        children: "Maintain clean separation of concerns between start logic and messaging"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Feel free to adapt it to your own stack — whether you're using Node.js, Python, or any web server."
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
