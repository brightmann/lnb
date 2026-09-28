import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
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
    children: [_jsx(_components.h3, {
      id: "readme",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#readme",
        children: "README"
      })
    }), "\n", _jsx(_components.h1, {
      id: "resolving-cookie-transmission-issue-in-a-mern-application-deployed-on-aws-ec2",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#resolving-cookie-transmission-issue-in-a-mern-application-deployed-on-aws-ec2",
        children: "Resolving Cookie Transmission Issue in a MERN Application Deployed on AWS EC2"
      })
    }), "\n", _jsx(_components.h2, {
      id: "problem-description",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-description",
        children: "Problem Description"
      })
    }), "\n", _jsx(_components.p, {
      children: "After deploying a MERN stack application on an AWS EC2 instance, the following issue was encountered:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Upon successful user login, the server correctly sets a JWT cookie. However, during subsequent requests to protected routes, the browser fails to send these cookies."
      }), "\n", _jsxs(_components.li, {
        children: ["This results in the server not receiving the required authentication information and responding with a ", _jsx(_components.code, {
          children: "401 Unauthorized"
        }), " error."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "problem-analysis",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#problem-analysis",
        children: "Problem Analysis"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Upon investigation, it was determined that the issue stemmed from the ", _jsx(_components.code, {
        children: "Secure"
      }), " attribute of the cookie. When the ", _jsx(_components.code, {
        children: "Secure"
      }), " attribute is set to ", _jsx(_components.code, {
        children: "true"
      }), ", cookies are only sent over HTTPS connections. Since the AWS EC2 instance was being accessed over HTTP instead of HTTPS, the cookies were not transmitted."]
    }), "\n", _jsx(_components.h3, {
      id: "cookie-attribute-overview",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#cookie-attribute-overview",
        children: "Cookie Attribute Overview"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure",
            children: "Secure"
          })
        }), ": Ensures that the cookie is only sent over HTTPS."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#httponly",
            children: "HttpOnly"
          })
        }), ": Prevents the cookie from being accessed via JavaScript, mitigating XSS attacks."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value",
            children: "SameSite"
          })
        }), ": Controls whether the cookie is sent with cross-site requests, preventing CSRF attacks."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "resolution-process",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#resolution-process",
        children: "Resolution Process"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Initial Debugging"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Added debug statements in the ", _jsx(_components.code, {
              children: "protectRoute"
            }), " middleware to check if the server received cookies and tokens from the client."]
          }), "\n", _jsxs(_components.li, {
            children: ["The output showed that ", _jsx(_components.code, {
              children: "req.cookies"
            }), " and ", _jsx(_components.code, {
              children: "token"
            }), " were ", _jsx(_components.code, {
              children: "undefined"
            }), ", confirming that the cookies were not being sent."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Review Cookie Settings"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Examined the server-side code responsible for setting the cookie and noted that the ", _jsx(_components.code, {
              children: "Secure"
            }), " attribute was set to ", _jsx(_components.code, {
              children: "true"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Adjust Secure Attribute"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Since the current environment used HTTP, the ", _jsx(_components.code, {
              children: "Secure"
            }), " attribute was set to ", _jsx(_components.code, {
              children: "false"
            }), " to allow cookies to be sent over HTTP."]
          }), "\n"]
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
                    color: "#E1E4E8"
                  },
                  children: "res."
                }), _jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "cookie"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"jwt-netflix\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", token, {"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  maxAge: "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "15"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " 24"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " 60"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " 60"
                }), _jsx(_components.span, {
                  style: {
                    color: "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " 1000"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: "// 15 days"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  httpOnly: "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ","
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  secure: "
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: "false"
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: "// Allow HTTP transmission"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "  sameSite: "
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: "\"lax\""
                }), _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    color: "#6A737D"
                  },
                  children: "// Or \"none\" if cross-site requests are needed"
                })]
              }), "\n", _jsx(_components.span, {
                "data-line": "",
                children: _jsx(_components.span, {
                  style: {
                    color: "#E1E4E8"
                  },
                  children: "});"
                })
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Verification"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "After making the adjustments, a test was conducted by logging in and accessing protected routes. It was confirmed that the browser successfully sent the cookies, and the server properly authenticated the requests, resolving the issue."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "solution",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#solution",
        children: "Solution"
      })
    }), "\n", _jsx(_components.h3, {
      id: "temporary-solution-development-environment",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#temporary-solution-development-environment",
        children: "Temporary Solution (Development Environment)"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In the development environment, since the AWS EC2 instance is accessed via HTTP, ensure the ", _jsx(_components.code, {
        children: "Secure"
      }), " attribute is set to ", _jsx(_components.code, {
        children: "false"
      }), ". This allows the browser to send cookies over HTTP."]
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
                color: "#E1E4E8"
              },
              children: "res."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "cookie"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"jwt-netflix\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", token, {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  maxAge: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "15"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 24"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 60"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 60"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1000"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 15 days"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  httpOnly: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  secure: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Allow HTTP transmission"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  sameSite: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"lax\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Or \"none\" for cross-site requests"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "long-term-solution-production-environment",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#long-term-solution-production-environment",
        children: "Long-term Solution (Production Environment)"
      })
    }), "\n", _jsx(_components.p, {
      children: "For production, it is recommended to configure the AWS EC2 instance to use HTTPS to ensure secure data transmission. The steps include:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Obtain an SSL certificate via AWS Certificate Manager (ACM) or another third-party provider."
      }), "\n", _jsx(_components.li, {
        children: "Configure a reverse proxy server (e.g., Nginx or Apache) to handle HTTPS and forward traffic to the application."
      }), "\n", _jsxs(_components.li, {
        children: ["Set the ", _jsx(_components.code, {
          children: "Secure"
        }), " attribute to ", _jsx(_components.code, {
          children: "true"
        }), " to ensure cookies are only sent over HTTPS."]
      }), "\n"]
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
                color: "#E1E4E8"
              },
              children: "res."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "cookie"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"jwt-netflix\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", token, {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  maxAge: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "15"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 24"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 60"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 60"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 1000"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 15 days"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  httpOnly: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  secure: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Enabled for HTTPS"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  sameSite: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"lax\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Or \"none\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.h2, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: "Conclusion"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["By correctly configuring the cookie attributes, especially setting the ", _jsx(_components.code, {
        children: "Secure"
      }), " attribute appropriately for the environment, the issue of the browser not sending cookies has been resolved. For production environments, it is crucial to use HTTPS for enhanced security and ensure the safe transmission of cookies."]
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
