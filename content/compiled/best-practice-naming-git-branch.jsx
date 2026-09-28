import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
    children: [_jsx(_components.h2, {
      id: "best-practices-for-naming-git-branches",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#best-practices-for-naming-git-branches",
        children: _jsx(_components.strong, {
          children: "Best Practices for Naming Git Branches"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/liuyuelintop/PicGo@main/Best-Practices-For-Naming-Git-Branches.png",
        alt: "mind map"
      })
    }), "\n", _jsx(_components.h3, {
      id: "1-use-clear-and-descriptive-names",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-use-clear-and-descriptive-names",
        children: _jsx(_components.strong, {
          children: "1. Use Clear and Descriptive Names"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Purpose"
        }), ": The branch name should clearly indicate the work being done."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Examples"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/backend-integration"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/add-new-components"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/rebuild-codebase"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "2-follow-a-standard-naming-convention",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-follow-a-standard-naming-convention",
        children: _jsx(_components.strong, {
          children: "2. Follow a Standard Naming Convention"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Adopting a consistent naming convention helps maintain order in your repository. Common conventions include:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Feature Branches"
        }), ": ", _jsx(_components.code, {
          children: "feature/branch-name"
        }), " or ", _jsx(_components.code, {
          children: "feat/branch-name"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Bug Fixes"
        }), ": ", _jsx(_components.code, {
          children: "fix/branch-name"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Hotfixes"
        }), ": ", _jsx(_components.code, {
          children: "hotfix/branch-name"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Release Branches"
        }), ": ", _jsx(_components.code, {
          children: "release/branch-name"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Experimental"
        }), ": ", _jsx(_components.code, {
          children: "experiment/branch-name"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Refactoring"
        }), ": ", _jsx(_components.code, {
          children: "refactor/branch-name"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "3-use-hyphens-to-separate-words",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-use-hyphens-to-separate-words",
        children: _jsx(_components.strong, {
          children: "3. Use Hyphens to Separate Words"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Readability"
        }), ": Use hyphens ", _jsx(_components.code, {
          children: "-"
        }), " to separate words in the branch name for better readability."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Examples"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/add-project-modals"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "refactor/codebase-structure"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "4-keep-it-concise",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-keep-it-concise",
        children: _jsx(_components.strong, {
          children: "4. Keep It Concise"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Avoid Overly Long Names"
        }), ": While the name should be descriptive, try to keep it as concise as possible."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Examples"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Too Long"
            }), ": ", _jsx(_components.code, {
              children: "feature/integrate-backend-api-and-add-new-components"
            })]
          }), "\n", _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Better"
            }), ": ", _jsx(_components.code, {
              children: "feature/backend-api-integration"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "5-include-issue-or-ticket-numbers-optional",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#5-include-issue-or-ticket-numbers-optional",
        children: _jsx(_components.strong, {
          children: "5. Include Issue or Ticket Numbers (Optional)"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "If you're using a project management tool like Jira or Trello, you can include the issue number:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Format"
        }), ": ", _jsx(_components.code, {
          children: "feature/ISSUE-123-description"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Example"
        }), ": ", _jsx(_components.code, {
          children: "feature/PROJ-456-backend-integration"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "6-avoid-personal-names-or-initials",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#6-avoid-personal-names-or-initials",
        children: _jsx(_components.strong, {
          children: "6. Avoid Personal Names or Initials"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Focus on the Task"
        }), ": Branch names should reflect the work, not the developer."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Avoid"
        }), ": ", _jsx(_components.code, {
          children: "john/backend-work"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Prefer"
        }), ": ", _jsx(_components.code, {
          children: "feature/backend-integration"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "7-use-lowercase-letters",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#7-use-lowercase-letters",
        children: _jsx(_components.strong, {
          children: "7. Use Lowercase Letters"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Consistency"
        }), ": Stick to lowercase letters to avoid confusion on case-sensitive file systems."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Example"
        }), ": ", _jsx(_components.code, {
          children: "feature/add-reviews-section"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "applying-these-practices-to-your-scenario",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#applying-these-practices-to-your-scenario",
        children: _jsx(_components.strong, {
          children: "Applying These Practices to Your Scenario"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Given that you want to rebuild your codebase by adding components and integrating a backend API, here are some suitable branch names:"
    }), "\n", _jsx(_components.h3, {
      id: "for-adding-new-features",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#for-adding-new-features",
        children: _jsx(_components.strong, {
          children: "For Adding New Features:"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Integrating Backend API"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/backend-api-integration"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/integrate-backend-api"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Adding New Components"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/add-latest-projects-section"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/add-reviews-section"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "feature/project-cards-and-modals"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "for-refactoring-or-rebuilding",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#for-refactoring-or-rebuilding",
        children: _jsx(_components.strong, {
          children: "For Refactoring or Rebuilding:"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Rebuilding Codebase"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "refactor/rebuild-codebase"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "refactor/codebase-overhaul"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Restructuring Components"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "refactor/restructure-components"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "refactor/component-architecture"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "for-experimental-work",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#for-experimental-work",
        children: _jsx(_components.strong, {
          children: "For Experimental Work:"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Testing New Integrations"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "experiment/backend-integration-test"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "experiment/new-components"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "additional-tips",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#additional-tips",
        children: _jsx(_components.strong, {
          children: "Additional Tips"
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "1-communicate-with-your-team",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-communicate-with-your-team",
        children: _jsx(_components.strong, {
          children: "1. Communicate with Your Team"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Consistency Is Key"
        }), ": If you work with a team, agree on branch naming conventions to ensure everyone is on the same page."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Document Conventions"
        }), ": Add a section in your project's README or CONTRIBUTING file about branch naming."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "2-clean-up-after-merging",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-clean-up-after-merging",
        children: _jsx(_components.strong, {
          children: "2. Clean Up After Merging"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Delete Branches"
        }), ": After your feature has been merged into the main branch, delete the feature branch to keep the repository clean."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "3-use-feature-flags-optional",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-use-feature-flags-optional",
        children: _jsx(_components.strong, {
          children: "3. Use Feature Flags (Optional)"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Gradual Integration"
        }), ": If you're integrating significant changes, consider using feature flags to merge code incrementally."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "example-workflow",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#example-workflow",
        children: _jsx(_components.strong, {
          children: "Example Workflow"
        })
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Create a New Branch"
          }), ":"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "bash",
            "data-theme": "github-dark",
            children: _jsx(_components.code, {
              "data-language": "bash",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " checkout"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " -b"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " feature/backend-api-integration"
                })]
              })
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Work on Your Changes"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Add new components."
          }), "\n", _jsx(_components.li, {
            children: "Integrate the backend API."
          }), "\n", _jsx(_components.li, {
            children: "Rebuild parts of the codebase as needed."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Commit Regularly with Meaningful Messages"
          }), ":"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "bash",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "bash",
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
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " commit"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " -m"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"Add backend API service for project data\""
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " commit"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " -m"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " \"Implement LatestProjects component with API integration\""
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Push the Branch to Remote Repository"
          }), ":"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "bash",
            "data-theme": "github-dark",
            children: _jsx(_components.code, {
              "data-language": "bash",
              "data-theme": "github-dark",
              style: {
                display: "grid"
              },
              children: _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " push"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " origin"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " feature/backend-api-integration"
                })]
              })
            })
          })
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Create a Pull Request"
          }), ":"]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Review your code."
          }), "\n", _jsx(_components.li, {
            children: "Request reviews from team members if applicable."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Merge and Delete the Branch"
          }), ":"]
        }), "\n", _jsx(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: _jsx(_components.pre, {
            style: {
              backgroundColor: "#24292e",
              color: "#e1e4e8"
            },
            tabIndex: "0",
            "data-language": "bash",
            "data-theme": "github-dark",
            children: _jsxs(_components.code, {
              "data-language": "bash",
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
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " checkout"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " main"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " merge"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " feature/backend-api-integration"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " push"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " origin"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " main"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " branch"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " -d"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " feature/backend-api-integration"
                })]
              }), "\n", _jsxs(_components.span, {
                "data-line": "",
                children: [_jsx(_components.span, {
                  style: {
                    color: "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " push"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " origin"
                }), _jsx(_components.span, {
                  style: {
                    color: "#79B8FF"
                  },
                  children: " --delete"
                }), _jsx(_components.span, {
                  style: {
                    color: "#9ECBFF"
                  },
                  children: " feature/backend-api-integration"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: _jsx(_components.strong, {
          children: "Conclusion"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "By following these best practices for Git branch naming:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Clarity"
        }), ": Everyone can quickly understand the purpose of the branch."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Organization"
        }), ": Maintains a clean and manageable repository structure."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Efficiency"
        }), ": Simplifies the code review and merging process."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["For your specific case, a branch name like ", _jsx(_components.code, {
        children: "feature/backend-api-integration"
      }), " or ", _jsx(_components.code, {
        children: "refactor/rebuild-codebase"
      }), " would be appropriate. Choose the prefix (", _jsx(_components.code, {
        children: "feature/"
      }), ", ", _jsx(_components.code, {
        children: "refactor/"
      }), ", ", _jsx(_components.code, {
        children: "experiment/"
      }), ") that best matches the nature of your work."]
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
