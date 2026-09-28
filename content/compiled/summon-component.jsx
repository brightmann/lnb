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
      id: "how-to-summon-a-react-component",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#how-to-summon-a-react-component",
        children: "How to Summon a React Component"
      })
    }), "\n", _jsx(_components.p, {
      children: "Ever wondered how to summon a React component from the netherworld? Fear not, for I shall guide you through this arcane ritual, combining ancient JavaScript lore with the modern magic of JSX. This guide is perfect for apprentices who wish to embark on the mystical journey of React development."
    }), "\n", _jsx(_components.h2, {
      id: "ingredients",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#ingredients",
        children: "Ingredients"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "1 cup of JavaScript knowledge, freshly brewed"
      }), "\n", _jsx(_components.li, {
        children: "A pinch of JSX, for that extra flavor"
      }), "\n", _jsx(_components.li, {
        children: "3 tablespoons of patience, aged to perfection"
      }), "\n", _jsx(_components.li, {
        children: "A sprinkle of creativity (optional but highly recommended)"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "instructions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#instructions",
        children: "Instructions"
      })
    }), "\n", _jsx(_components.p, {
      children: "First, prepare your development cauldron (also known as your code editor). Make sure it's clean and ready for brewing a new React component."
    }), "\n", _jsx(_components.p, {
      children: "Now, follow these steps carefully:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Mix the JavaScript knowledge thoroughly"
          }), " until it's smooth and free of lumps. This forms the base of your component."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Fold in a pinch of JSX carefully."
          }), " This is what brings your component to life, allowing it to render in the browser realm."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Stir in the patience slowly."
          }), " Sometimes, the component might not render correctly on the first try. Patience is key here."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Add a sprinkle of creativity."
          }), " This is what makes your component truly unique. Whether it's a stylish button or a dynamic form, let your imagination run wild."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "Finally, chant the incantation below:"
        }), "\n"]
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
                color: "#F97583"
              },
              children: "class"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " MyComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " React"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Component"
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
              children: "  render"
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
              children: ">Hello, World!</"
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
      children: "With the incantation complete, your React component should now be summoned successfully. It will serve you faithfully, reacting to user inputs and rendering data dynamically."
    }), "\n", _jsx(_components.p, {
      children: "Congratulations, you've now summoned your first React component. Handle with care, or it might turn against you by throwing errors and warnings. Remember, with great power comes great responsibility. Happy coding!"
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
