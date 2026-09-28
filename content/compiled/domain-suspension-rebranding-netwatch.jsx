import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "introduction",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#introduction",
        children: "Introduction"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["This technical documentation outlines the challenges faced and the steps taken to resolve domain suspension issues, rebrand a project, and ensure compliance with trademark laws. The project involved deploying a Netflix clone application using AWS, Caddy for reverse proxying, and Namecheap for domain registration. The original domain ", _jsx(_components.code, {
        children: "netflix-clone.liuyuelin.xyz"
      }), " was suspended due to potential trademark violations, necessitating a rebranding to ", _jsx(_components.code, {
        children: "netwatch.liuyuelin.xyz"
      }), "."]
    }), "\n", _jsx(_components.h2, {
      id: "table-of-contents",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#table-of-contents",
        children: "Table of Contents"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#overview",
          children: "Overview"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#issues-encountered",
          children: "Issues Encountered"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#key-problems-and-solutions",
          children: "Key Problems and Solutions"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#detailed-steps-taken",
          children: "Detailed Steps Taken"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#conclusion",
          children: "Conclusion"
        })
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "overview",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#overview",
        children: "Overview"
      })
    }), "\n", _jsx(_components.p, {
      children: "The project faced issues related to domain accessibility and legal concerns regarding the use of the \"Netflix\" trademark. The goal was to resolve these issues by rebranding the project and ensuring compliance with relevant legal and technical requirements."
    }), "\n", _jsx(_components.h2, {
      id: "issues-encountered",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#issues-encountered",
        children: "Issues Encountered"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Domain Inaccessibility"
        }), ": The domain ", _jsx(_components.code, {
          children: "netflix-clone.liuyuelin.xyz"
        }), " became inaccessible, prompting an investigation."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Domain Suspension"
        }), ": The domain was suspended by Namecheap due to an abuse report, indicating potential trademark violations."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "key-problems-and-solutions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#key-problems-and-solutions",
        children: "Key Problems and Solutions"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "SSL/TLS Configuration Issues"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Problem"
            }), ": Automatic redirection from HTTP to HTTPS was occurring, even when not desired."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Solution"
            }), ": Configured SSL/TLS settings in Caddy to allow HTTP access without forced HTTPS redirection."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Namecheap Suspension Notice"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Problem"
            }), ": Unauthorized use of the \"Netflix\" trademark led to domain suspension."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Solution"
            }), ": Contacted Namecheap support and agreed to re-register the domain under a different name to comply with their Terms of Service."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Rebranding and Compliance"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Problem"
            }), ": The project needed to avoid any references to the \"Netflix\" trademark."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Solution"
            }), ": Rebranded the project to \"NetWatch\" and updated the domain to ", _jsx(_components.code, {
              children: "netwatch.liuyuelin.xyz"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "detailed-steps-taken",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#detailed-steps-taken",
        children: "Detailed Steps Taken"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Initial Investigation"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Used ", _jsx(_components.code, {
              children: "dig"
            }), " and ", _jsx(_components.code, {
              children: "nslookup"
            }), " to verify domain settings and identified issues with DNS configurations and SSL/TLS setup."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Handling Domain Suspension"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Communicated with Namecheap’s Legal & Abuse Department, explaining the educational purpose of the project. Agreed to re-register the domain with a different name to resolve the issue."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Rebranding Process"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Renamed Project"
            }), ": Changed all references in the codebase and project documentation from \"Netflix Clone\" to \"NetWatch\"."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Updated Domain"
            }), ": Registered the new domain ", _jsx(_components.code, {
              children: "netwatch.liuyuelin.xyz"
            }), "."]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Codebase Changes"
            }), ": Updated project metadata, configuration files, and user interface to reflect the new branding."]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Caddy Configuration Update"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Updated the Caddy configuration to serve the new domain and set up the necessary reverse proxy rules."
          }), "\n", _jsx(_components.li, {
            children: "Restarted the Caddy service and the application backend to apply the changes."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Verification and Testing"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Verified that the new domain resolved correctly and that the application was accessible. Ensured that no forced HTTPS redirection occurred unless explicitly configured."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: "Conclusion"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The domain ", _jsx(_components.code, {
        children: "netwatch.liuyuelin.xyz"
      }), " is now successfully deployed, with all trademark issues resolved and compliance ensured. The rebranding process and domain update were necessary to avoid legal complications and provide a seamless user experience. This documentation serves as a reference for handling similar issues in the future, emphasizing the importance of legal compliance and thorough technical verification."]
    }), "\n", _jsx(_components.hr, {})]
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
