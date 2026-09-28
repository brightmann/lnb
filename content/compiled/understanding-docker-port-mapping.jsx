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
      id: "-overview",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-overview",
        children: "🔍 Overview"
      })
    }), "\n", _jsx(_components.p, {
      children: "This guide explains how port configurations work in a Dockerised Next.js project. You'll understand the relationship between:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["The port defined in ", _jsx(_components.code, {
          children: "package.json"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["The internal port exposed via the ", _jsx(_components.code, {
          children: "Dockerfile"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["The host-to-container mapping in ", _jsx(_components.code, {
          children: "docker-compose"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Getting these right ensures smooth development and debugging experiences."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-key-components-and-their-roles",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-key-components-and-their-roles",
        children: "✅ Key Components and Their Roles"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["| Component        | Example                         | Role                                           | Must Match?           |\n| ---------------- | ------------------------------- | ---------------------------------------------- | --------------------- |\n| ", _jsx(_components.code, {
        children: "package.json"
      }), "   | ", _jsx(_components.code, {
        children: "\"start\": \"next start -p 3001\""
      }), " | Defines internal port Next.js listens to       | ✅ Yes                |\n| ", _jsx(_components.code, {
        children: "Dockerfile"
      }), "     | ", _jsx(_components.code, {
        children: "EXPOSE 3001"
      }), "                   | Declares internal port for documentation/tools | ⚠️ Recommended only   |\n| ", _jsx(_components.code, {
        children: "docker-compose"
      }), " | ", _jsx(_components.code, {
        children: "ports: [\"4001:3001\"]"
      }), "          | Maps host (4001) → container (3001)            | ❌ No — host flexible |"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-how-it-works-step-by-step",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-how-it-works-step-by-step",
        children: "🧠 How It Works (Step-by-Step)"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Next.js starts inside the container"
        })
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
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
              children: "\"start\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"next start -p 3001\""
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "This defines the internal port your app binds to."
    }), "\n", _jsxs(_components.ol, {
      start: "2",
      children: ["\n", _jsxs(_components.li, {
        children: ["Dockerfile declares EXPOSE 3001\n", _jsx(_components.code, {
          children: "EXPOSE 3001"
        }), "\nThis is only for documentation/tooling purposes. It does not affect the app’s behaviour."]
      }), "\n", _jsx(_components.li, {
        children: "docker-compose maps host to container"
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "yaml",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "yaml",
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
              children: "ports"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  - "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"4001:3001\""
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Requests to ", _jsx(_components.code, {
        children: "http://localhost:4001"
      }), " on the host are forwarded to port 3001 inside the container."]
    }), "\n", _jsx(_components.h2, {
      id: "example-scenario",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-scenario",
        children: "Example Scenario"
      })
    }), "\n", _jsx(_components.p, {
      children: "package.json"
    }), "\n", _jsx(_components.figure, {
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
              children: "\"start\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"next start -p 3001\""
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Dockerfile"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "dockerfile",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "dockerfile",
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
              children: "EXPOSE"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " 3001"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "ocker-compose.dev.yaml"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "yaml",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "yaml",
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
              children: "ports"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  - "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"4001:3001\""
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "behaviour",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#behaviour",
        children: "Behaviour"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["| Access Point     | What It Does                   |\n| ---------------- | ------------------------------ |\n| ", _jsx(_components.code, {
        children: "localhost:4001"
      }), " | Entry point on host            |\n| ", _jsx(_components.code, {
        children: "container:3001"
      }), " | Where app is actually running  |\n| → Result         | Docker forwards → App responds |"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-note-on-next_public_port",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-note-on-next_public_port",
        children: ["📌 Note on ", _jsx(_components.code, {
          children: "NEXT_PUBLIC_PORT"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "NEXT_PUBLIC_PORT"
        }), " is ", _jsx(_components.strong, {
          children: "for frontend/browser use only"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["It does ", _jsx(_components.strong, {
          children: "not"
        }), " affect backend/server port binding."]
      }), "\n", _jsxs(_components.li, {
        children: ["Always use ", _jsx(_components.code, {
          children: "-p"
        }), " flag in ", _jsx(_components.code, {
          children: "next start"
        }), " to control server port."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-common-pitfall",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-common-pitfall",
        children: "🧪 Common Pitfall"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["| Configuration                               | Result                      |\n| ------------------------------------------- | --------------------------- |\n| ", _jsx(_components.code, {
        children: "next start -p 3002"
      }), " + ", _jsx(_components.code, {
        children: "ports: \"4001:3001\""
      }), " | ❌ Mismatch — Browser fails |\n| ", _jsx(_components.code, {
        children: "next start -p 3002"
      }), " + ", _jsx(_components.code, {
        children: "ports: \"4001:3002\""
      }), " | ✅ Works                    |"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-recommended-best-practices",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-recommended-best-practices",
        children: "✅ Recommended Best Practices"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Use a consistent internal port across the stack:"
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
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
              children: "\"start\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"next start -p 3001\""
            })]
          })
        })
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "Dockerfile",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "Dockerfile",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "EXPOSE 3001"
            })
          })
        })
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "yaml",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "yaml",
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
              children: "ports"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  - "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"${HOST_PORT:-4001}:3001\""
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Inject ", _jsx(_components.code, {
          children: "NEXT_PUBLIC_PORT=${HOST_PORT}"
        }), " into ", _jsx(_components.code, {
          children: ".env"
        }), " to let your frontend build dynamic URLs correctly."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-conclusion",
        children: "🧾 Conclusion"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "next start -p xxx"
        }), ": Defines app's internal port"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "EXPOSE xxx"
        }), ": Optional for documentation/tooling"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "docker-compose ports"
        }), ": Maps host ↔ container"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "NEXT_PUBLIC_PORT"
        }), ": Only for frontend use"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "With this knowledge, you'll avoid misconfigurations and ensure consistent behaviour across environments."
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
