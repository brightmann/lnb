import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
      id: "introduction",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#introduction",
        children: "Introduction"
      })
    }), "\n", _jsx(_components.p, {
      children: "The following markdown cheatsheet is adapted from: https://guides.github.com/features/mastering-markdown/"
    }), "\n", _jsx(_components.h1, {
      id: "what-is-markdown",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#what-is-markdown",
        children: "What is Markdown?"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like ", _jsx(_components.code, {
        children: "#"
      }), " or ", _jsx(_components.code, {
        children: "*"
      }), "."]
    }), "\n", _jsx(_components.h1, {
      id: "syntax-guide",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#syntax-guide",
        children: "Syntax guide"
      })
    }), "\n", _jsx(_components.p, {
      children: "Here’s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files."
    }), "\n", _jsx(_components.h2, {
      id: "headers",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#headers",
        children: "Headers"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#79B8FF",
                fontWeight: "bold"
              },
              children: "# This is a h1 tag"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#79B8FF",
                fontWeight: "bold"
              },
              children: "## This is a h2 tag"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#79B8FF",
                fontWeight: "bold"
              },
              children: "#### This is a h4 tag"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h1, {
      id: "this-is-a-h1-tag",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#this-is-a-h1-tag",
        children: "This is a h1 tag"
      })
    }), "\n", _jsx(_components.h2, {
      id: "this-is-a-h2-tag",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#this-is-a-h2-tag",
        children: "This is a h2 tag"
      })
    }), "\n", _jsx(_components.h4, {
      id: "this-is-a-h4-tag",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#this-is-a-h4-tag",
        children: "This is a h4 tag"
      })
    }), "\n", _jsx(_components.h2, {
      id: "emphasis",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#emphasis",
        children: "Emphasis"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "_"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "This text will be italic"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "_"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "This text will be bold"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "**"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "_"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "You "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "can"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " combine them"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "_"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "This text will be italic"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "This text will be bold"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.em, {
        children: ["You ", _jsx(_components.strong, {
          children: "can"
        }), " combine them"]
      })
    }), "\n", _jsx(_components.h2, {
      id: "lists",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#lists",
        children: "Lists"
      })
    }), "\n", _jsx(_components.h3, {
      id: "unordered",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#unordered",
        children: "Unordered"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 2"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "  -"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 2a"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "  -"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 2b"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Item 1"
      }), "\n", _jsxs(_components.li, {
        children: ["Item 2", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Item 2a"
          }), "\n", _jsx(_components.li, {
            children: "Item 2b"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "ordered",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#ordered",
        children: "Ordered"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 2"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 3"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   1"
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 3a"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "   1"
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Item 3b"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Item 1"
      }), "\n", _jsx(_components.li, {
        children: "Item 2"
      }), "\n", _jsxs(_components.li, {
        children: ["Item 3", "\n", _jsxs(_components.ol, {
          children: ["\n", _jsx(_components.li, {
            children: "Item 3a"
          }), "\n", _jsx(_components.li, {
            children: "Item 3b"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "images",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#images",
        children: "Images"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "!["
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "GitHub Logo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "]("
            }), _jsx(_components.span, {
              style: {
                color: "#DBEDFF",
                textDecoration: "underline"
              },
              children: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "Format: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "!["
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "Alt Text"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "]("
            }), _jsx(_components.span, {
              style: {
                color: "#DBEDFF",
                textDecoration: "underline"
              },
              children: "url"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ")"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        alt: "GitHub Logo"
      })
    }), "\n", _jsx(_components.h2, {
      id: "links",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#links",
        children: "Links"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DBEDFF",
                textDecoration: "underline"
              },
              children: "http://github.com"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " - automatic!"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "GitHub"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "]("
            }), _jsx(_components.span, {
              style: {
                color: "#DBEDFF",
                textDecoration: "underline"
              },
              children: "http://github.com"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ")"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["http://github.com - automatic!\n", _jsx(_components.a, {
        href: "http://github.com",
        children: "GitHub"
      })]
    }), "\n", _jsx(_components.h2, {
      id: "blockquotes",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#blockquotes",
        children: "Blockquotes"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
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
              children: "As Kanye West said:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "> We're living the future so"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "> the present is our past."
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "As Kanye West said:"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "We're living the future so\nthe present is our past."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "inline-code",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#inline-code",
        children: "Inline code"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
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
              children: "I think you should use an"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "<addr>"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " element here instead."
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["I think you should use an\n", _jsx(_components.code, {
        children: "<addr>"
      }), " element here instead."]
    }), "\n", _jsx(_components.h2, {
      id: "syntax-highlighting",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#syntax-highlighting",
        children: "Syntax highlighting"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Here’s an example of how you can use syntax highlighting with ", _jsx(_components.a, {
        href: "https://help.github.com/articles/basic-writing-and-formatting-syntax/",
        children: "GitHub Flavored Markdown"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "```"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "js:fancyAlert.js"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fancyAlert"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "arg"
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
                color: "#F97583"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (arg) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    $."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "facebox"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ div: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'#foo'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " })"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "```"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "And here's how it looks - nicely colored with styled code titles!"
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fancyAlert"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "arg"
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
                color: "#F97583"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (arg) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    $."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "facebox"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ div: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"#foo\""
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "footnotes",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#footnotes",
        children: "Footnotes"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
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
              children: "Here is a simple footnote"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "[^"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "]"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ". With some additional text after it."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "[^"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "]"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": My reference."
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Here is a simple footnote[^1]. With some additional text after it."
    }), "\n", _jsx(_components.p, {
      children: "[^1]: My reference."
    }), "\n", _jsx(_components.h2, {
      id: "task-lists",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#task-lists",
        children: "Task Lists"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " [x]"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " list syntax required (any unordered or ordered list supported)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " [x]"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " this is a complete item"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " [ ]"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " this is an incomplete item"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "[x] list syntax required (any unordered or ordered list supported)"
      }), "\n", _jsx(_components.li, {
        children: "[x] this is a complete item"
      }), "\n", _jsx(_components.li, {
        children: "[ ] this is an incomplete item"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "tables",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#tables",
        children: "Tables"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["You can create tables by assembling a list of words and dividing them with hyphens ", _jsx(_components.code, {
        children: "-"
      }), " (for the first row), and then separating each column with a pipe ", _jsx(_components.code, {
        children: "|"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
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
              children: "| First Header                | Second Header                |"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "| --------------------------- | ---------------------------- |"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "| Content from cell 1         | Content from cell 2          |"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "| Content in the first column | Content in the second column |"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "| First Header                | Second Header                |\n| --------------------------- | ---------------------------- |\n| Content from cell 1         | Content from cell 2          |\n| Content in the first column | Content in the second column |"
    }), "\n", _jsx(_components.h2, {
      id: "strikethrough",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#strikethrough",
        children: "Strikethrough"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Any word wrapped with two tildes (like ", _jsx(_components.code, {
        children: "~~this~~"
      }), ") will appear ~~crossed out~~."]
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
