import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      id: "prop-drilling-the-horror-movie",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#prop-drilling-the-horror-movie",
        children: "Prop Drilling: The Horror Movie"
      })
    }), "\n", _jsx(_components.p, {
      children: "In the shadowy depths of a complex React application, a horror story unfolds. Components, innocent and unsuspecting, find themselves ensnared in a terrifying ordeal known as prop drilling. This tale of suspense and survival will take you through the darkest corridors of React development."
    }), "\n", _jsx(_components.h2, {
      id: "the-curse-of-prop-drilling",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-curse-of-prop-drilling",
        children: "The Curse of Prop Drilling"
      })
    }), "\n", _jsx(_components.p, {
      children: "Our story begins in a seemingly ordinary app, where a deep nesting of components lives in harmony. But beneath the surface, a curse lurks: the curse of prop drilling. Props, those precious pieces of data, must traverse through an endless labyrinth of components, each more terrifying than the last."
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
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Grandparent"
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
              children: "terror"
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Parent"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " terror"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{terror} />;"
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
                color: "#B392F0"
              },
              children: " Parent"
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
              children: "terror"
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
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "Child"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " terror"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{terror} />;"
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
                color: "#B392F0"
              },
              children: " Child"
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
              children: "terror"
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
              children: ">{"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`The terror has arrived: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "terror"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}</"
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
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "the-scream-in-the-console",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-scream-in-the-console",
        children: "The Scream in the Console"
      })
    }), "\n", _jsx(_components.p, {
      children: "As the props descend deeper into the component tree, strange things begin to happen. Console logs echo like screams in the night, warning of missing or undefined props. The components, panicked and confused, pass the props down with trembling hands, hoping not to be the next to encounter an error."
    }), "\n", _jsx(_components.h2, {
      id: "the-heroes-emerge-context-api-and-redux",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-heroes-emerge-context-api-and-redux",
        children: "The Heroes Emerge: Context API and Redux"
      })
    }), "\n", _jsx(_components.p, {
      children: "Just when all hope seems lost, heroes emerge from the shadows: the Context API and Redux. With their powers of global state management, they offer a beacon of light in the dark, illuminating a path to safety for the beleaguered props."
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
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " TerrorContext"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "createContext"
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " TerrorProvider"
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
              children: "children"
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
              children: "terror"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setTerror"
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
              children: "\"everywhere\""
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
              children: "TerrorContext.Provider"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{terror}>{children}</"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "TerrorContext.Provider"
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
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "the-final-showdown",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-final-showdown",
        children: "The Final Showdown"
      })
    }), "\n", _jsx(_components.p, {
      children: "Armed with Context and Redux, the components band together to confront the curse of prop drilling. With a mighty refactor, they implement a new architecture, freeing the props from their endless descent and bringing peace to the application once more."
    }), "\n", _jsx(_components.h2, {
      id: "epilogue-lessons-from-the-darkness",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#epilogue-lessons-from-the-darkness",
        children: "Epilogue: Lessons from the Darkness"
      })
    }), "\n", _jsx(_components.p, {
      children: "As dawn breaks on our tale, the components emerge wiser and stronger. They've learned that with the right tools and patterns, even the most terrifying challenges in React development can be overcome."
    }), "\n", _jsx(_components.p, {
      children: "Remember, when faced with the horror of prop drilling, do not despair. The Context API and Redux are your allies in the dark, ready to bring light to your React applications."
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
