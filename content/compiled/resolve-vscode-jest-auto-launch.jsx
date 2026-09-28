import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
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
      id: "problem-description",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-description",
        children: "Problem Description"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["While learning unit testing, I followed a tutorial that configured Jest to run in ", _jsx(_components.code, {
        children: "watch"
      }), " mode within VSCode. This caused the ", _jsx(_components.strong, {
        children: "terminal to automatically open and run Jest every time I opened my project"
      }), ", which was quite annoying. I was unsure how to resolve this issue but have finally found a solution."]
    }), "\n", _jsx(_components.h2, {
      id: "solution-steps",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#solution-steps",
        children: "Solution Steps"
      })
    }), "\n", _jsx(_components.h3, {
      id: "1-open-vscode-settings",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-open-vscode-settings",
        children: "1. Open VSCode Settings"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Launch VSCode."
      }), "\n", _jsx(_components.li, {
        children: "Click on the gear icon in the bottom left corner and select \"Settings\"."
      }), "\n", _jsxs(_components.li, {
        children: ["Alternatively, use the shortcut ", _jsx(_components.code, {
          children: "Cmd + ,"
        }), " (Mac) to open the settings."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "2-search-for-jest-settings",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-search-for-jest-settings",
        children: "2. Search for Jest Settings"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["In the settings search bar, type ", _jsx(_components.code, {
          children: "jest"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Find the settings related to the Jest plugin."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "3-modify-jest-runmode-setting",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-modify-jest-runmode-setting",
        children: ["3. Modify Jest ", _jsx(_components.code, {
          children: "runMode"
        }), " Setting"]
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Locate the ", _jsx(_components.code, {
          children: "Jest: Run Mode"
        }), " setting in the search results."]
      }), "\n", _jsxs(_components.li, {
        children: ["From the dropdown menu, select ", _jsx(_components.code, {
          children: "on-demand"
        }), " (or choose another mode such as ", _jsx(_components.code, {
          children: "watch"
        }), " or ", _jsx(_components.code, {
          children: "on-save"
        }), " as needed)."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "4-directly-edit-settingsjson",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-directly-edit-settingsjson",
        children: ["4. Directly Edit ", _jsx(_components.code, {
          children: "settings.json"
        })]
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: ["In the settings page, click on the \"Open Settings (JSON)\" icon in the top right corner or search for ", _jsx(_components.code, {
            children: "settings.json"
          }), " and open it."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: ["Add or modify the following configuration in the ", _jsx(_components.code, {
            children: "settings.json"
          }), " file:"]
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
            children: _jsxs(_components.code, {
              "data-language": "json",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: [_jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "{"
                })
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "  \"jest.runMode\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"on-demand\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: " // Options: \"on-demand\", \"watch\", \"on-save\""
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
        children: ["\n", _jsxs(_components.p, {
          children: ["Save and close the ", _jsx(_components.code, {
            children: "settings.json"
          }), " file."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "5-check-project-configuration-file",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#5-check-project-configuration-file",
        children: "5. Check Project Configuration File"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: ["Open the ", _jsx(_components.code, {
            children: ".vscode/settings.json"
          }), " file in the root directory of your project (if it exists)."]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "Add or modify the following configuration:"
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
            children: _jsxs(_components.code, {
              "data-language": "json",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: [_jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "{"
                })
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "  \"jest.runMode\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"on-demand\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: " // Options: \"on-demand\", \"watch\", \"on-save\""
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
        children: ["\n", _jsxs(_components.p, {
          children: ["Save and close the ", _jsx(_components.code, {
            children: "settings.json"
          }), " file."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "additional-suggestions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#additional-suggestions",
        children: "Additional Suggestions"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "If the changes do not take effect immediately, try restarting VSCode."
      }), "\n", _jsx(_components.li, {
        children: "Check if there are other plugins or configuration files that might be overriding these settings."
      }), "\n", _jsx(_components.li, {
        children: "Ensure there are no conflicting settings in both the project and global configuration files."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "By following these steps, I successfully resolved the issue of VSCode automatically opening Jest in the terminal. I hope these steps are helpful to you. If you encounter any issues or need further assistance, feel free to reach out."
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
