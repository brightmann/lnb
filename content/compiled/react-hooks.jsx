import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      id: "react-hooks-fishing-for-components",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#react-hooks-fishing-for-components",
        children: "React Hooks: Fishing for Components"
      })
    }), "\n", _jsx(_components.p, {
      children: "In the vast sea of React, where components swim freely and side-effects lurk in the depths, a developer must become a skilled fisherman to catch their desired functionality. This guide will equip you with the React Hooks you need to catch components with precision and grace."
    }), "\n", _jsx(_components.h2, {
      id: "the-essential-fishing-gear",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-essential-fishing-gear",
        children: "The Essential Fishing Gear"
      })
    }), "\n", _jsx(_components.p, {
      children: "Before we set sail, let's ensure we have all the necessary gear:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "useState:"
        }), " The worm that tempts your components to the surface."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "useEffect:"
        }), " The lure that attracts side-effects and keeps them at bay."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "useContext:"
        }), " The net that gathers global states together, making it easier to share across your component sea."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "setting-sail-your-first-catch",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#setting-sail-your-first-catch",
        children: "Setting Sail: Your First Catch"
      })
    }), "\n", _jsx(_components.p, {
      children: "With our gear ready, it's time to set sail into the React sea. Here's how to make your first catch:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Bait your hook with useState:"
        }), " Begin by choosing the right worm. ", _jsx(_components.code, {
          children: "useState"
        }), " allows you to add state to your functional components, making them more dynamic and responsive."]
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "jsx",
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
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "fish"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setFish"
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
                color: "#9ECBFF"
              },
              children: "\"🐟\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.ol, {
      start: "2",
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Attract with useEffect:"
        }), " Now, use ", _jsx(_components.code, {
          children: "useEffect"
        }), " as your lure. This Hook lets you perform side effects in your components, such as fetching data or subscribing to services. It's like casting your line into the water and waiting for a bite."]
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "jsx",
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
              children: "`You've caught ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "fish"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}!`"
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
              children: "}, [fish]);"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.ol, {
      start: "3",
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Gather with useContext:"
        }), " Finally, use ", _jsx(_components.code, {
          children: "useContext"
        }), " as your net. This Hook lets you share state across many components without prop drilling. It's like gathering all your catches in one net for a bountiful harvest."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "the-catch-of-the-day",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-catch-of-the-day",
        children: "The Catch of the Day"
      })
    }), "\n", _jsx(_components.p, {
      children: "Congratulations! You've made your first catch in the React sea. But remember, the sea is vast, and there are many more components and hooks to explore. Each project is a new fishing trip, with its challenges and rewards."
    }), "\n", _jsx(_components.p, {
      children: "Remember to release any components back into the sea if you don't need them. Keeping your application's waters clean and sustainable is key to a healthy React ecosystem."
    }), "\n", _jsx(_components.p, {
      children: "Happy fishing in the React sea!"
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
