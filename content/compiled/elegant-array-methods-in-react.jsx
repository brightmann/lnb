import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [_jsxs(_components.p, {
      children: ["In our React and TypeScript card game project, the design of the ", _jsx(_components.code, {
        children: "handleFlip"
      }), " and ", _jsx(_components.code, {
        children: "handleFlipAll"
      }), " functions demonstrates a clever way to manage the flipping state of cards. Below is a detailed explanation and further exploration of this elegant design."]
    }), "\n", _jsx(_components.h2, {
      id: "detailed-explanation-of-handleflip-and-handleflipall-functions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#detailed-explanation-of-handleflip-and-handleflipall-functions",
        children: "Detailed Explanation of handleFlip and handleFlipAll Functions"
      })
    }), "\n", _jsx(_components.h3, {
      id: "handleflip-function",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#handleflip-function",
        children: "handleFlip Function"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "handleFlip"
      }), " function is used to individually flip the state of a single card."]
    }), "\n", _jsx(_components.h4, {
      id: "implementation-logic",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementation-logic",
        children: "Implementation Logic"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Receive Card Index"
        }), ": The ", _jsx(_components.code, {
          children: "handleFlip"
        }), " function receives an index of the card as an argument."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Update State"
        }), ": It uses the ", _jsx(_components.code, {
          children: "setFlipped"
        }), " function to update the ", _jsx(_components.code, {
          children: "flipped"
        }), " state array.", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Create a new copy of the ", _jsx(_components.code, {
              children: "flipped"
            }), " array."]
          }), "\n", _jsxs(_components.li, {
            children: ["Toggle the value at the specified index (i.e., if it is currently ", _jsx(_components.code, {
              children: "true"
            }), ", change it to ", _jsx(_components.code, {
              children: "false"
            }), ", and vice versa)."]
          }), "\n", _jsxs(_components.li, {
            children: ["Set the updated array as the new ", _jsx(_components.code, {
              children: "flipped"
            }), " state."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "code-example",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#code-example",
        children: "Code Example"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " handleFlip"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "index"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " number"
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
                color: "#B392F0"
              },
              children: "  setFlipped"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "prevFlipped"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " newFlipped"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "prevFlipped];"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    newFlipped[index] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "newFlipped[index];"
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
              children: " newFlipped;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  });"
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
      id: "handleflipall-function",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#handleflipall-function",
        children: "handleFlipAll Function"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "handleFlipAll"
      }), " function is used to flip the state of all cards."]
    }), "\n", _jsx(_components.h4, {
      id: "implementation-logic-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#implementation-logic-1",
        children: "Implementation Logic"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check Current State"
        }), ": The ", _jsx(_components.code, {
          children: "handleFlipAll"
        }), " function first checks the state of all cards in the ", _jsx(_components.code, {
          children: "flipped"
        }), " array."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Update State"
        }), ": It uses the ", _jsx(_components.code, {
          children: "setFlipped"
        }), " function to update the ", _jsx(_components.code, {
          children: "flipped"
        }), " state array.", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["If all cards are already flipped (", _jsx(_components.code, {
              children: "true"
            }), "), set all cards to not flipped (", _jsx(_components.code, {
              children: "false"
            }), ")."]
          }), "\n", _jsxs(_components.li, {
            children: ["If any card is not flipped (", _jsx(_components.code, {
              children: "false"
            }), "), set all cards to flipped (", _jsx(_components.code, {
              children: "true"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "code-example-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#code-example-1",
        children: "Code Example"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " handleFlipAll"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
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
                color: "#79B8FF"
              },
              children: " allFlipped"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " flipped."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "every"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "state"
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
              children: " state);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "  setFlipped"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(deck."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "fill"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "allFlipped));"
            })]
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
    }), "\n", _jsx(_components.h4, {
      id: "detailed-explanation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#detailed-explanation",
        children: "Detailed Explanation"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The line ", _jsx(_components.code, {
        children: "const allFlipped = flipped.every((state) => state);"
      }), " checks whether all elements in the ", _jsx(_components.code, {
        children: "flipped"
      }), " array are ", _jsx(_components.code, {
        children: "true"
      }), "."]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "Array.prototype.every"
          }), " Method"]
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Iterates through each element of the array."
          }), "\n", _jsx(_components.li, {
            children: "Executes the provided test function on each element."
          }), "\n", _jsxs(_components.li, {
            children: ["If the test function returns ", _jsx(_components.code, {
              children: "true"
            }), " for all elements, the ", _jsx(_components.code, {
              children: "every"
            }), " method returns ", _jsx(_components.code, {
              children: "true"
            }), "."]
          }), "\n", _jsxs(_components.li, {
            children: ["If the test function returns ", _jsx(_components.code, {
              children: "false"
            }), " for any element, the ", _jsx(_components.code, {
              children: "every"
            }), " method returns ", _jsx(_components.code, {
              children: "false"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["In this way, the ", _jsx(_components.code, {
        children: "handleFlipAll"
      }), " function elegantly flips the state of all cards."]
    }), "\n", _jsx(_components.h2, {
      id: "other-elegant-uses-of-the-every-method-in-practical-development",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#other-elegant-uses-of-the-every-method-in-practical-development",
        children: "Other Elegant Uses of the every() Method in Practical Development"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Array.prototype.every"
      }), " method has many other elegant uses in practical development. Here are some common scenarios:"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Form Validation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Check if all fields in a form meet validation criteria."
          }), "\n"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "typescript",
            "data-theme": "github-dark",
            children: _jsx(_components.code, {
              "data-language": "typescript",
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
                    color: "#79B8FF"
                  },
                  children: " isValidForm"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " formFields."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "every"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "field"
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
                  children: " field.isValid);"
                })]
              })
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Permission Check"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Check if a user has all necessary permissions to perform certain actions."
          }), "\n"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "typescript",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "typescript",
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
                  children: " hasAllPermissions"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " requiredPermissions."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "every"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "permission"
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
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  userPermissions."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "includes"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "(permission)"
                })]
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
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Data Integrity Check"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Check if all items in a data set meet expected format or criteria."
          }), "\n"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "typescript",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "typescript",
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
                  children: " isDataComplete"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " dataEntries."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "every"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  ("
                }), _jsx(_components.span, {
                  style: {
                    color: "#FFAB70"
                  },
                  children: "entry"
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
                  children: " entry "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "!=="
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " null"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " &&"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: " entry "
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: "!=="
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " undefined"
                })]
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
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "other-elegant-array-method-designs",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#other-elegant-array-method-designs",
        children: "Other Elegant Array Method Designs"
      })
    }), "\n", _jsx(_components.h3, {
      id: "some",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#some",
        children: "some()"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Array.prototype.some"
      }), " method tests whether at least one element in the array passes the provided test function. It returns a boolean."]
    }), "\n", _jsx(_components.h4, {
      id: "example",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example",
        children: "Example"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " hasIncompleteData"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dataEntries."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "some"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "entry"
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
              children: " entry "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " entry "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " undefined"
            })]
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
    }), "\n", _jsx(_components.h3, {
      id: "filter",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#filter",
        children: "filter()"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Array.prototype.filter"
      }), " method creates a new array with all elements that pass the provided test function."]
    }), "\n", _jsx(_components.h4, {
      id: "example-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-1",
        children: "Example"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " validEntries"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dataEntries."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "filter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "entry"
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
              children: " entry "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " &&"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " entry "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " undefined"
            })]
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
    }), "\n", _jsx(_components.h3, {
      id: "map",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#map",
        children: "map()"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Array.prototype.map"
      }), " method creates a new array with the results of calling a provided function on every element in the original array."]
    }), "\n", _jsx(_components.h4, {
      id: "example-2",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-2",
        children: "Example"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "typescript",
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
                color: "#79B8FF"
              },
              children: " doubledNumbers"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " numbers."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "map"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "num"
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
              children: " num "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "exercise-questions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#exercise-questions",
        children: "Exercise Questions"
      })
    }), "\n", _jsx(_components.h3, {
      id: "question-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#question-1",
        children: "Question 1"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.code, {
        children: "every"
      }), " method to check if all numbers in an array are even."]
    }), "\n", _jsx(_components.h3, {
      id: "answer",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#answer",
        children: "Answer"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " numbers"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "6"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "8"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "];"
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
                color: "#79B8FF"
              },
              children: " allEven"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " numbers."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "every"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "num"
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
              children: " num "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "%"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ==="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
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
                color: "#E1E4E8"
              },
              children: "console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(allEven); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// true"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "question-2",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#question-2",
        children: "Question 2"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.code, {
        children: "some"
      }), " method to check if an array contains any negative numbers."]
    }), "\n", _jsx(_components.h3, {
      id: "answer-1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#answer-1",
        children: "Answer"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " numbers"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "];"
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
                color: "#79B8FF"
              },
              children: " hasNegative"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " numbers."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "some"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "num"
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
              children: " num "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
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
                color: "#E1E4E8"
              },
              children: "console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(hasNegative); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// true"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "question-3",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#question-3",
        children: "Question 3"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.code, {
        children: "filter"
      }), " method to filter out all strings longer than 3 characters from an array."]
    }), "\n", _jsx(_components.h3, {
      id: "answer-2",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#answer-2",
        children: "Answer"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " strings"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"a\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"ab\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"abc\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"abcd\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "];"
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
                color: "#79B8FF"
              },
              children: " longStrings"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " strings."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "filter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "str"
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
              children: " str."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 3"
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
                color: "#E1E4E8"
              },
              children: "console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(longStrings); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [\"abcd\"]"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "question-4",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#question-4",
        children: "Question 4"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.code, {
        children: "map"
      }), " method to square each number in an array of numbers."]
    }), "\n", _jsx(_components.h3, {
      id: "answer-3",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#answer-3",
        children: "Answer"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
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
              children: " numbers"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "];"
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
                color: "#79B8FF"
              },
              children: " squaredNumbers"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " numbers."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "map"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "num"
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
              children: " num "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " num);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(squaredNumbers); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// [1, 4, 9, 16]"
            })]
          })]
        })
      })
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
