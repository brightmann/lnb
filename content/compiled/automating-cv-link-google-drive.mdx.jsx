import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
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
      id: "optimizing-google-drive-cv-link-for-portfolio-",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#optimizing-google-drive-cv-link-for-portfolio-",
        children: "Optimizing Google Drive CV Link for Portfolio 🚀"
      })
    }), "\n", _jsx(_components.p, {
      children: "When I initially integrated my resume (CV) into my portfolio, I faced several frustrating issues:"
    }), "\n", _jsx(_components.h2, {
      id: "-the-problems-i-faced",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-the-problems-i-faced",
        children: _jsx(_components.strong, {
          children: "🛑 The Problems I Faced"
        })
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Manual URL Updates"
        }), ": Every time I updated my CV, Google Drive assigned a new file ID, requiring manual updates to my portfolio and redeployment."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Slow API Response"
        }), ": Every time someone clicked the CV button, it triggered a Google Drive API call, taking 3-4 seconds to fetch the latest file."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Forced Download"
        }), ": Using ", _jsx(_components.code, {
          children: "export=download"
        }), " in the URL made the file download automatically, rather than opening in a viewable format."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Security Risk"
        }), ": My ", _jsx(_components.strong, {
          children: "Google API key was exposed in the code"
        }), ", creating a major security vulnerability."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "-solutions-explored",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-solutions-explored",
        children: _jsx(_components.strong, {
          children: "🔍 Solutions Explored"
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "-initial-approach-exportdownload",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-initial-approach-exportdownload",
        children: _jsx(_components.strong, {
          children: "❌ Initial Approach (export=download)"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "I initially used the following Google Drive link:"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "js",
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
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " `https://drive.google.com/uc?export=download&id=${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "latestFileId"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["🔴 ", _jsx(_components.strong, {
        children: "Issue"
      }), ": This forced a download, which was disruptive for users who just wanted to view my CV."]
    }), "\n", _jsx(_components.h3, {
      id: "-solution-1-use-preview-mode-faster-but-full-screen-display-issue",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-solution-1-use-preview-mode-faster-but-full-screen-display-issue",
        children: _jsxs(_components.strong, {
          children: ["✅ Solution 1: Use ", _jsx(_components.code, {
            children: "preview"
          }), " Mode (Faster but Full-Screen Display Issue)"]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Instead of downloading, I switched to ", _jsx(_components.code, {
        children: "preview"
      }), " mode:"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "js",
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
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " `https://drive.google.com/file/d/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "latestFileId"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/preview`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["✅ ", _jsx(_components.strong, {
        children: "Fixed slow API response"
      }), " (faster loading)", _jsx(_components.br, {}), "\n", "❌ ", _jsx(_components.strong, {
        children: "Problem"
      }), ": Opened the PDF in full-screen mode, which didn’t look great."]
    }), "\n", _jsx(_components.h3, {
      id: "-final-solution-use-view-mode",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-final-solution-use-view-mode",
        children: _jsxs(_components.strong, {
          children: ["🎯 Final Solution: Use ", _jsx(_components.code, {
            children: "view"
          }), " Mode"]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The best solution was using ", _jsx(_components.code, {
        children: "view"
      }), " mode:"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark",
        children: _jsx(_components.code, {
          "data-language": "js",
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
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " `https://drive.google.com/file/d/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "latestFileId"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/view`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["✅ ", _jsx(_components.strong, {
        children: "Fast loading"
      }), " 🚀", _jsx(_components.br, {}), "\n", "✅ ", _jsx(_components.strong, {
        children: "Does not force download"
      }), " 📄", _jsx(_components.br, {}), "\n", "✅ ", _jsx(_components.strong, {
        children: "Displays the CV in a clean Google Drive preview UI"
      }), _jsx(_components.br, {}), "\n", "✅ ", _jsx(_components.strong, {
        children: "Automatically fetches the latest file without needing to redeploy the portfolio"
      })]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-security-fix-preventing-api-key-exposure",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-security-fix-preventing-api-key-exposure",
        children: _jsx(_components.strong, {
          children: "🔐 Security Fix: Preventing API Key Exposure"
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["During this optimization, I ", _jsx(_components.strong, {
        children: "accidentally leaked my API key"
      }), " in the source code. Here's how I ", _jsx(_components.strong, {
        children: "fixed it"
      }), " and ensured it won’t happen again:"]
    }), "\n", _jsx(_components.h3, {
      id: "1️⃣-storing-api-keys-securely-in-env",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1️⃣-storing-api-keys-securely-in-env",
        children: _jsxs(_components.strong, {
          children: ["1️⃣ Storing API Keys Securely in ", _jsx(_components.code, {
            children: ".env"
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Instead of hardcoding the API key, I stored it in an ", _jsx(_components.strong, {
        children: "environment variable"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "env",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "env",
          "data-theme": "github-dark",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "VITE_GOOGLE_API_KEY=your-new-api-key"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "VITE_GOOGLE_FOLDER_ID=your-folder-id"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["And ", _jsx(_components.strong, {
        children: "updated my code"
      }), " to use ", _jsx(_components.code, {
        children: "import.meta.env"
      }), ":"]
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " folderId"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "meta"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".env."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "VITE_GOOGLE_FOLDER_ID"
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
              children: " apiKey"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "meta"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".env."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "VITE_GOOGLE_API_KEY"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "2️⃣-ensuring-env-is-ignored-by-git",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2️⃣-ensuring-env-is-ignored-by-git",
        children: _jsxs(_components.strong, {
          children: ["2️⃣ Ensuring ", _jsx(_components.code, {
            children: ".env"
          }), " is Ignored by Git"]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["I added ", _jsx(_components.code, {
        children: ".env"
      }), " to ", _jsx(_components.code, {
        children: ".gitignore"
      }), " to ", _jsx(_components.strong, {
        children: "prevent accidental commits"
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
                color: "#79B8FF"
              },
              children: "echo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \".env\""
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " >>"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " .gitignore"
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
              children: " add"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " .gitignore"
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
              children: " \"Ignore .env to prevent API key leaks\""
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
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "3️⃣-setting-environment-variables-in-deployment-platform",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3️⃣-setting-environment-variables-in-deployment-platform",
        children: _jsx(_components.strong, {
          children: "3️⃣ Setting Environment Variables in Deployment Platform"
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["If you're using ", _jsx(_components.strong, {
        children: "Vercel / Netlify"
      }), ", you must ", _jsx(_components.strong, {
        children: "manually add environment variables"
      }), ":"]
    }), "\n", _jsx(_components.h4, {
      id: "for-vercel",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#for-vercel",
        children: _jsx(_components.strong, {
          children: "For Vercel"
        })
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Navigate to ", _jsx(_components.strong, {
          children: "Project → Settings → Environment Variables"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Add:", "\n", _jsx(_components.pre, {
          children: _jsx(_components.code, {
            children: "VITE_GOOGLE_API_KEY = your-new-api-key\nVITE_GOOGLE_FOLDER_ID = your-folder-id\n"
          })
        }), "\n"]
      }), "\n", _jsx(_components.li, {
        children: "Redeploy your project."
      }), "\n"]
    }), "\n", _jsx(_components.h4, {
      id: "for-netlify",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#for-netlify",
        children: _jsx(_components.strong, {
          children: "For Netlify"
        })
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.strong, {
          children: "Site Settings → Build & Deploy → Environment Variables"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Add the same environment variables."
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-implementing-the-final-solution-in-react-vite-project",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-implementing-the-final-solution-in-react-vite-project",
        children: _jsx(_components.strong, {
          children: "🚀 Implementing the Final Solution in React (Vite Project)"
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "1️⃣-updating-getlatestcv-in-utilsapijs",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1️⃣-updating-getlatestcv-in-utilsapijs",
        children: _jsxs(_components.strong, {
          children: ["1️⃣ Updating ", _jsx(_components.code, {
            children: "getLatestCV()"
          }), " in ", _jsx(_components.code, {
            children: "utils/api.js"
          })]
        })
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " getLatestCV"
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
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " folderId"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "meta"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".env."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "VITE_GOOGLE_FOLDER_ID"
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
              children: " apiKey"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "meta"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".env."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "VITE_GOOGLE_API_KEY"
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
              children: " url"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " `https://www.googleapis.com/drive/v3/files?q='${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "folderId"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}'+in+parents&orderBy=modifiedTime+desc&key=${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "apiKey"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
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
              children: "  try"
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
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(url);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "response.ok) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "throw"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`HTTP error! Status: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "response"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "status"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
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
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "data.files "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " data.files."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
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
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"No CV file found in the Google Drive folder.\""
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
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"#\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
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
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " `https://drive.google.com/file/d/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "files"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "]."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/view`"
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
                color: "#E1E4E8"
              },
              children: "  } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (error) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Error fetching latest CV:\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", error);"
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
                color: "#9ECBFF"
              },
              children: " \"#\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
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
    }), "\n", _jsx(_components.h3, {
      id: "2️⃣-preloading-the-cv-url-in-navbar",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2️⃣-preloading-the-cv-url-in-navbar",
        children: _jsx(_components.strong, {
          children: "2️⃣ Preloading the CV URL in Navbar"
        })
      })
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " React, { useEffect, useState } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"react\""
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { getLatestCV } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"../utils/api\""
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { HiOutlineDocumentDownload } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"react-icons/hi\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " Navbar"
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
              children: "cvUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setCvUrl"
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
              children: "\"#\""
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
                color: "#B392F0"
              },
              children: "  useEffect"
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
                color: "#B392F0"
              },
              children: "    getLatestCV"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "url"
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
                color: "#B392F0"
              },
              children: " setCvUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(url));"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }, []); "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Preloads CV link on page load"
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
                color: "#85E89D"
              },
              children: "nav"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"flex items-center justify-between py-6\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"flex items-center\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "a"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "          href"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{cvUrl}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "          target"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"_blank\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "          rel"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"noopener noreferrer\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "          className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"flex items-center\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        >"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "HiOutlineDocumentDownload"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " /> CV"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "nav"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-key-takeaways",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-key-takeaways",
        children: _jsx(_components.strong, {
          children: "💡 Key Takeaways"
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: ["Avoid ", _jsx(_components.code, {
            children: "export=download"
          })]
        }), " → Forces download, which is not ideal."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: ["Use ", _jsx(_components.code, {
            children: "view"
          }), " instead of ", _jsx(_components.code, {
            children: "preview"
          })]
        }), " → Improves layout and keeps the PDF readable."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Preload the CV link on page load"
        }), " → Faster user experience."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: ["Secure API keys using ", _jsx(_components.code, {
            children: ".env"
          }), " and ignore them in Git"]
        }), " → Prevent security risks."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Set environment variables in deployment platforms"
        }), " → Ensures proper API key management."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "-final-thoughts",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-final-thoughts",
        children: _jsx(_components.strong, {
          children: "✨ Final Thoughts"
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["This simple optimization ", _jsx(_components.strong, {
        children: "improved performance, security, and usability"
      }), ". Now, my portfolio’s ", _jsx(_components.strong, {
        children: "CV button loads much faster"
      }), ", and I never have to manually update my CV link again. If you're using Google Drive for hosting documents, this approach can help ", _jsx(_components.strong, {
        children: "enhance speed, usability, and maintainability"
      }), ". 🚀"]
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
