import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    mstyle: "mstyle",
    mtable: "mtable",
    mtd: "mtd",
    mtext: "mtext",
    mtr: "mtr",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "0-1 Knapsack problem"
      }), " is a classic in dynamic programming and the perfect introduction to space optimization techniques. Most tutorials show you the backward iteration trick without explaining why it's necessary. This guide builds the intuition behind the \"snapshot semantics\" that make 1D DP work correctly."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "problem-definition",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-definition",
        children: "Problem Definition"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["You have a knapsack with capacity ", _jsx(_components.code, {
        children: "N"
      }), " and ", _jsx(_components.code, {
        children: "M"
      }), " items. Each item has a weight ", _jsx(_components.code, {
        children: "w[i]"
      }), " and value ", _jsx(_components.code, {
        children: "v[i]"
      }), ". You can take each item at most once (0-1 constraint). Goal: maximize total value without exceeding capacity."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Capacity: 5"
      }), "\n", _jsxs(_components.li, {
        children: ["Items: ", _jsx(_components.code, {
          children: "weights = [2, 1, 3, 2]"
        }), ", ", _jsx(_components.code, {
          children: "values = [4, 2, 3, 2]"
        })]
      }), "\n", _jsx(_components.li, {
        children: "Optimal: Take items 0 and 2 → weight = 5, value = 7"
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "2d-dp-foundation",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2d-dp-foundation",
        children: "2D DP Foundation"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Define ", _jsx(_components.code, {
        children: "dp[i][c]"
      }), " = maximum value using first ", _jsx(_components.code, {
        children: "i"
      }), " items with capacity ", _jsx(_components.code, {
        children: "c"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Transition:"
      })
    }), "\n", _jsx(_components.span, {
      className: "katex-display",
      children: _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "c"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mrow, {
                  children: [_jsx(_components.mo, {
                    fence: "true",
                    children: "{"
                  }), _jsxs(_components.mtable, {
                    rowspacing: "0.36em",
                    columnalign: "left left",
                    columnspacing: "1em",
                    children: [_jsxs(_components.mtr, {
                      children: [_jsx(_components.mtd, {
                        children: _jsx(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: _jsxs(_components.mrow, {
                            children: [_jsx(_components.mi, {
                              children: "d"
                            }), _jsx(_components.mi, {
                              children: "p"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), _jsx(_components.mi, {
                              children: "i"
                            }), _jsx(_components.mo, {
                              children: "−"
                            }), _jsx(_components.mn, {
                              children: "1"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), _jsx(_components.mi, {
                              children: "c"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), _jsx(_components.mo, {
                              separator: "true",
                              children: ","
                            })]
                          })
                        })
                      }), _jsx(_components.mtd, {
                        children: _jsx(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: _jsxs(_components.mrow, {
                            children: [_jsx(_components.mi, {
                              children: "c"
                            }), _jsx(_components.mo, {
                              children: "<"
                            }), _jsx(_components.mi, {
                              children: "w"
                            })]
                          })
                        })
                      })]
                    }), _jsxs(_components.mtr, {
                      children: [_jsx(_components.mtd, {
                        children: _jsx(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: _jsxs(_components.mrow, {
                            children: [_jsx(_components.mi, {
                              children: "max"
                            }), _jsx(_components.mo, {
                              children: "⁡"
                            }), _jsx(_components.mo, {
                              fence: "false",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em",
                              children: "("
                            }), _jsx(_components.mi, {
                              children: "d"
                            }), _jsx(_components.mi, {
                              children: "p"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), _jsx(_components.mi, {
                              children: "i"
                            }), _jsx(_components.mo, {
                              children: "−"
                            }), _jsx(_components.mn, {
                              children: "1"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), _jsx(_components.mi, {
                              children: "c"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), _jsx(_components.mo, {
                              separator: "true",
                              children: ","
                            }), _jsx(_components.mtext, {
                              children: "  "
                            }), _jsx(_components.mi, {
                              children: "d"
                            }), _jsx(_components.mi, {
                              children: "p"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), _jsx(_components.mi, {
                              children: "i"
                            }), _jsx(_components.mo, {
                              children: "−"
                            }), _jsx(_components.mn, {
                              children: "1"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "["
                            }), _jsx(_components.mi, {
                              children: "c"
                            }), _jsx(_components.mo, {
                              children: "−"
                            }), _jsx(_components.mi, {
                              children: "w"
                            }), _jsx(_components.mo, {
                              stretchy: "false",
                              children: "]"
                            }), _jsx(_components.mo, {
                              children: "+"
                            }), _jsx(_components.mi, {
                              children: "v"
                            }), _jsx(_components.mo, {
                              fence: "false",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em",
                              children: ")"
                            }), _jsx(_components.mo, {
                              separator: "true",
                              children: ","
                            })]
                          })
                        })
                      }), _jsx(_components.mtd, {
                        children: _jsx(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: _jsxs(_components.mrow, {
                            children: [_jsx(_components.mi, {
                              children: "c"
                            }), _jsx(_components.mo, {
                              children: "≥"
                            }), _jsx(_components.mi, {
                              children: "w"
                            })]
                          })
                        })
                      })]
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "dp[i][c] =\n\\begin{cases}\ndp[i-1][c], & c < w \\\\\n\\max\\big(dp[i-1][c],\\; dp[i-1][c-w] + v\\big), & c \\ge w\n\\end{cases}"
              })]
            })
          })
        }), _jsxs(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [_jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "="
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "3em",
                verticalAlign: "-1.25em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsx(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: _jsx(_components.span, {
                  className: "delimsizing size4",
                  children: "{"
                })
              }), _jsx(_components.span, {
                className: "mord",
                children: _jsxs(_components.span, {
                  className: "mtable",
                  children: [_jsx(_components.span, {
                    className: "col-align-l",
                    children: _jsxs(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [_jsxs(_components.span, {
                        className: "vlist-r",
                        children: [_jsxs(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [_jsxs(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [_jsx(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "p"
                              }), _jsx(_components.span, {
                                className: "mopen",
                                children: "["
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "i"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord",
                                children: "1"
                              }), _jsx(_components.span, {
                                className: "mclose",
                                children: "]"
                              }), _jsx(_components.span, {
                                className: "mopen",
                                children: "["
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "c"
                              }), _jsx(_components.span, {
                                className: "mclose",
                                children: "]"
                              }), _jsx(_components.span, {
                                className: "mpunct",
                                children: ","
                              })]
                            })]
                          }), _jsxs(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [_jsx(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mop",
                                children: "max"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord",
                                children: _jsx(_components.span, {
                                  className: "delimsizing size1",
                                  children: "("
                                })
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "p"
                              }), _jsx(_components.span, {
                                className: "mopen",
                                children: "["
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "i"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord",
                                children: "1"
                              }), _jsx(_components.span, {
                                className: "mclose",
                                children: "]"
                              }), _jsx(_components.span, {
                                className: "mopen",
                                children: "["
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "c"
                              }), _jsx(_components.span, {
                                className: "mclose",
                                children: "]"
                              }), _jsx(_components.span, {
                                className: "mpunct",
                                children: ","
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "p"
                              }), _jsx(_components.span, {
                                className: "mopen",
                                children: "["
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "i"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord",
                                children: "1"
                              }), _jsx(_components.span, {
                                className: "mclose",
                                children: "]"
                              }), _jsx(_components.span, {
                                className: "mopen",
                                children: "["
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "c"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0269em"
                                },
                                children: "w"
                              }), _jsx(_components.span, {
                                className: "mclose",
                                children: "]"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mbin",
                                children: "+"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "v"
                              }), _jsx(_components.span, {
                                className: "mord",
                                children: _jsx(_components.span, {
                                  className: "delimsizing size1",
                                  children: ")"
                                })
                              }), _jsx(_components.span, {
                                className: "mpunct",
                                children: ","
                              })]
                            })]
                          })]
                        }), _jsx(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), _jsx(_components.span, {
                        className: "vlist-r",
                        children: _jsx(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.19em"
                          },
                          children: _jsx(_components.span, {})
                        })
                      })]
                    })
                  }), _jsx(_components.span, {
                    className: "arraycolsep",
                    style: {
                      width: "1em"
                    }
                  }), _jsx(_components.span, {
                    className: "col-align-l",
                    children: _jsxs(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [_jsxs(_components.span, {
                        className: "vlist-r",
                        children: [_jsxs(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [_jsxs(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [_jsx(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "c"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), _jsx(_components.span, {
                                className: "mrel",
                                children: "<"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0269em"
                                },
                                children: "w"
                              })]
                            })]
                          }), _jsxs(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [_jsx(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "c"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), _jsx(_components.span, {
                                className: "mrel",
                                children: "≥"
                              }), _jsx(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), _jsx(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0269em"
                                },
                                children: "w"
                              })]
                            })]
                          })]
                        }), _jsx(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), _jsx(_components.span, {
                        className: "vlist-r",
                        children: _jsx(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.19em"
                          },
                          children: _jsx(_components.span, {})
                        })
                      })]
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Implementation:"
      })
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " knapsack2D"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "capacity"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "weights"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "values"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " M"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " weights."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
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
                color: "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dp"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Array."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ length: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "M"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " +"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }, () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(capacity "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
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
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "));"
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
              children: "  for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " M"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " w"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " weights[i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "], "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "v"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " values[i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
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
              children: "    for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " capacity; c"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
                color: "#E1E4E8"
              },
              children: "      dp[i][c] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dp[i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "][c]; "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Don't take item"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "      if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " w) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        dp[i][c] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "max"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(dp[i][c], dp[i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "][c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " w] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " v); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Take item"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      }"
            })
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dp["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "M"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "][capacity];"
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
      children: ["This works but uses ", _jsx(_components.code, {
        children: "O(M × N)"
      }), " space. Since we only need the previous row, we can optimize."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "1d-space-optimization-the-snapshot-problem",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1d-space-optimization-the-snapshot-problem",
        children: "1D Space Optimization: The Snapshot Problem"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Key insight:"
      }), " We can use a single array ", _jsx(_components.code, {
        children: "dp[c]"
      }), " representing \"max value for capacity ", _jsx(_components.code, {
        children: "c"
      }), " with items processed so far.\""]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "The challenge:"
      }), " When processing item ", _jsx(_components.code, {
        children: "i"
      }), ", we need to compute:"]
    }), "\n", _jsx(_components.span, {
      className: "katex-display",
      children: _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "c"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mi, {
                  children: "m"
                }), _jsx(_components.mi, {
                  children: "a"
                }), _jsx(_components.mi, {
                  children: "x"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "c"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "p"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), _jsx(_components.mi, {
                  children: "c"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsx(_components.mi, {
                  children: "w"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "]"
                }), _jsx(_components.mo, {
                  children: "+"
                }), _jsx(_components.mi, {
                  children: "v"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "dp[c] = max(dp[c], dp[c-w] + v)"
              })]
            })
          })
        }), _jsxs(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [_jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "="
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "ma"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "["
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), _jsx(_components.span, {
              className: "mclose",
              children: "]"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "+"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["But ", _jsx(_components.code, {
        children: "dp[c-w]"
      }), " must be the value from ", _jsx(_components.strong, {
        children: "before"
      }), " processing item ", _jsx(_components.code, {
        children: "i"
      }), " (the \"old\" value), not after (which would double-count the item)."]
    }), "\n", _jsx(_components.h3, {
      id: "the-snapshot-mental-model",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#the-snapshot-mental-model",
        children: "The Snapshot Mental Model"
      })
    }), "\n", _jsx(_components.p, {
      children: "Think of it this way:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Take a snapshot"
        }), " ", _jsx(_components.code, {
          children: "S"
        }), " of current ", _jsx(_components.code, {
          children: "dp"
        }), " array"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Compute new values"
        }), " using snapshot: ", _jsx(_components.code, {
          children: "dp_new[c] = max(S[c], S[c-w] + v)"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Replace array"
        }), " with new values"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "We simulate this snapshot behavior through iteration direction."
    }), "\n", _jsx(_components.h3, {
      id: "why-backward-iteration-works",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#why-backward-iteration-works",
        children: "Why Backward Iteration Works"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Backward iteration (N → w):"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["When processing ", _jsx(_components.code, {
          children: "dp[c]"
        }), ", we read ", _jsx(_components.code, {
          children: "dp[c-w]"
        }), " where ", _jsx(_components.code, {
          children: "c-w < c"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["Since we iterate right-to-left, ", _jsx(_components.code, {
          children: "dp[c-w]"
        }), " hasn't been updated yet this round"]
      }), "\n", _jsxs(_components.li, {
        children: ["Therefore ", _jsx(_components.code, {
          children: "dp[c-w]"
        }), " still holds the \"snapshot\" value ✓"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Forward iteration (w → N) fails:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["When processing ", _jsx(_components.code, {
          children: "dp[c]"
        }), ", we read ", _jsx(_components.code, {
          children: "dp[c-w]"
        }), " where ", _jsx(_components.code, {
          children: "c-w < c"
        })]
      }), "\n", _jsxs(_components.li, {
        children: ["Since we iterate left-to-right, ", _jsx(_components.code, {
          children: "dp[c-w]"
        }), " was already updated this round"]
      }), "\n", _jsxs(_components.li, {
        children: ["Therefore ", _jsx(_components.code, {
          children: "dp[c-w]"
        }), " holds the \"new\" value, double-counting the item ✗"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "complete-visualization-step-by-step-table",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#complete-visualization-step-by-step-table",
        children: "Complete Visualization: Step-by-Step Table"
      })
    }), "\n", _jsx(_components.p, {
      children: "For a comprehensive view, let's trace through a complete example with multiple items:"
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example Setup:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Capacity"
        }), ": 10"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Items"
        }), ": ", _jsx(_components.code, {
          children: "[(2,1), (3,3), (4,5), (7,9)]"
        }), " (weight, value)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Initial state"
        }), " (no items processed): ", _jsx(_components.code, {
          children: "dp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "State Transition Table"
      })
    }), "\n", _jsx(_components.p, {
      children: "| Step | After Processing | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|------|------------------|---|---|---|---|---|---|---|---|---|---|----|\n| 0    | Initial state    | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0  |\n| 1    | Item (2,1)       | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1  |\n| 2    | Item (3,3)       | 0 | 0 | 1 | 3 | 3 | 4 | 4 | 4 | 4 | 4 | 4  |\n| 3    | Item (4,5)       | 0 | 0 | 1 | 3 | 5 | 5 | 6 | 8 | 8 | 9 | 9  |\n| 4    | Item (7,9)       | 0 | 0 | 1 | 3 | 5 | 5 | 6 | 9 | 9 | 10| 12 |"
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Final answer"
      }), ": ", _jsx(_components.code, {
        children: "dp[10] = 12"
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Key observation"
      }), ": Each round updates from right to left, so when computing ", _jsx(_components.code, {
        children: "dp[c]"
      }), ", the value at ", _jsx(_components.code, {
        children: "dp[c-w]"
      }), " hasn't been modified yet this round. This ensures we read from the \"snapshot\" before processing the current item."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "working-implementations",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#working-implementations",
        children: "Working Implementations"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Space-Optimized 1D (Correct):"
      })
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " knapsack1D"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "capacity"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "weights"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "values"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " dp"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Array"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(capacity "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1"
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
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
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
              children: "  for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; i "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " weights."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "; i"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "++"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " w"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " weights[i], "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "v"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " values[i];"
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
              children: "    // CRITICAL: Iterate backwards to preserve snapshot semantics"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " capacity; c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " w; c"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "--"
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
                color: "#E1E4E8"
              },
              children: "      dp[c] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "max"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(dp[c], dp[c "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " w] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " v);"
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
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
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
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " dp[capacity];"
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
      children: _jsx(_components.strong, {
        children: "Complete Example with Test:"
      })
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Test both implementations"
            })
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
              children: " capacity"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 5"
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
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " weights"
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
              children: "2"
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
              children: " values"
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
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "];"
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
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "knapsack2D"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(capacity, weights, values)); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 7"
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
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "knapsack1D"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(capacity, weights, values)); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 7"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Iteration Direction Rule:"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "0-1 Knapsack"
        }), " → backward iteration (prevent reusing items)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Unbounded Knapsack"
        }), " → forward iteration (allow reusing items)"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "key-takeaways",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-takeaways",
        children: "Key Takeaways"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Start with 2D DP"
        }), " for clear semantics, then optimize to 1D"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Snapshot mental model"
        }), ": 1D DP simulates 2D by preserving \"old row\" values during updates"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Direction matters"
        }), ": Backward iteration creates safe-read zones for snapshot values"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Pattern transfers"
        }), ": This snapshot preservation technique applies to many DP space optimizations"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "The core insight isn't memorizing \"go backward\" - it's understanding that space-optimized DP requires careful management of when values get updated to maintain correctness."
    }), "\n", _jsxs(_components.p, {
      children: ["This mental model applies to other DP problems like ", _jsx(_components.a, {
        href: "/blog/unique-binary-search-trees-dynamic-programming-catalan",
        children: "unique BST counting"
      }), " and helps you avoid ", _jsx(_components.a, {
        href: "/blog/javascript-array-initialization-pitfalls",
        children: "common JavaScript pitfalls"
      }), " when implementing DP solutions."]
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
