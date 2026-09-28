import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      children: [_jsx(_components.strong, {
        children: "DeepSeek-R1"
      }), " is known for its ", _jsx(_components.strong, {
        children: "excellent chain-of-thought and reasoning capabilities"
      }), ", making it incredibly helpful in both work and daily life. Moreover, the overall cost for using DeepSeek-R1 can be very low. However, because it’s ", _jsx(_components.strong, {
        children: "free and open-source"
      }), ", the official ", _jsx(_components.strong, {
        children: "DeepSeek"
      }), " web or app services are often overloaded with heavy traffic and even malicious attacks. As a result, these services can become unstable or frequently show “server busy” errors."]
    }), "\n", _jsxs(_components.p, {
      children: ["In my quest for a more ", _jsx(_components.strong, {
        children: "reliable way"
      }), " to use DeepSeek-R1, I first tried ", _jsx(_components.strong, {
        children: "Ollama"
      }), " on my local M1 Pro MacBook, downloading and running the ", _jsx(_components.strong, {
        children: "DeepSeek-R1 7B"
      }), " model directly in Chat Box. Unfortunately, it proved insufficiently intelligent, produced many errors, and sometimes fell into endless loops. Eventually, I discovered ", _jsx(_components.strong, {
        children: "Siliconflow"
      }), "—a stable and efficient provider that has dramatically improved my DeepSeek-R1 experience. Below is how I set it up using Chat Box."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Official Documentation:"
        }), _jsx(_components.br, {}), "\n", "For more detailed or advanced scenarios, refer to the official Siliconflow docs:", _jsx(_components.br, {}), "\n", _jsx(_components.a, {
          href: "https://docs.siliconflow.cn/cn/usercases/use-siliconcloud-in-chatbox",
          children: "Use SiliconCloud in ChatBox"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "1-why-i-chose-siliconflow",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-why-i-chose-siliconflow",
        children: "1. Why I Chose Siliconflow"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Stability and Reliability:"
        }), _jsx(_components.br, {}), "\n", "Siliconflow provides robust servers and APIs, ensuring minimal downtime and faster response times even under heavy load."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cost-Effective:"
        }), _jsx(_components.br, {}), "\n", "While DeepSeek-R1 is free to use in some environments, the performance can suffer. By purchasing a small amount of tokens (e.g., ~20 RMB, 4 Australian dollars), which can be used for quite long, I experienced ", _jsx(_components.strong, {
          children: "fast"
        }), " and ", _jsx(_components.strong, {
          children: "smooth"
        }), " responses."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Ease of Integration:"
        }), _jsx(_components.br, {}), "\n", "Configuring Chat Box to call the Siliconflow-provided DeepSeek-R1 model is straightforward—no manual downloads or complex local installations needed."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "2-sign-up-for-a-siliconflow-account",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-sign-up-for-a-siliconflow-account",
        children: "2. Sign Up for a Siliconflow Account"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: ["Visit ", _jsx(_components.a, {
            href: "https://www.siliconflow.cn",
            children: "Siliconflow"
          }), " and create an account."]
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "You’ll need to verify your phone and complete your profile."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check Your Free Tokens:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["New users receive a certain amount of free tokens, but ", _jsx(_components.strong, {
              children: "DeepSeek-R1"
            }), " is resource-intensive and may not perform well on the free plan."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "3-retrieve-your-siliconflow-api-key",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-retrieve-your-siliconflow-api-key",
        children: "3. Retrieve Your Siliconflow API Key"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Log into Your Siliconflow Dashboard:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "View your usage, tokens, and account settings."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Locate the API Key Section:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "In the “API Keys” section, generate and copy your API key."
          }), "\n", _jsx(_components.li, {
            children: "Keep it safe—this key grants access to your account resources."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "4-configure-chat-box-to-use-prodeepseek-aideepseek-r1",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-configure-chat-box-to-use-prodeepseek-aideepseek-r1",
        children: "4. Configure Chat Box to Use Pro/DeepSeek-AI/DeepSeek-R1"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Open Chat Box Settings:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Look for a gear icon or “Settings” menu."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Select Siliconflow as the Provider:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Choose “SILICONFLOW API” or an equivalent from the provider list."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Paste Your API Key:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "In the “API Key” field, paste the key from your Siliconflow dashboard."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Set the Model Name:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["Under “Model” or “Engine,” choose ", _jsx(_components.code, {
              children: "Pro/deepseek-ai/DeepSeek-R1"
            }), "."]
          }), "\n", _jsx(_components.li, {
            children: "Save your changes."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "At this point, Chat Box should be configured to call the DeepSeek-R1 model through Siliconflow’s cloud infrastructure."
    }), "\n", _jsx(_components.h2, {
      id: "5-overcoming-performance-issues",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#5-overcoming-performance-issues",
        children: "5. Overcoming Performance Issues"
      })
    }), "\n", _jsx(_components.h3, {
      id: "51-free-tokens-vs-paid-tokens",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#51-free-tokens-vs-paid-tokens",
        children: "5.1 Free Tokens vs. Paid Tokens"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Free Token Constraints:"
        }), _jsx(_components.br, {}), "\n", "With the free tier, DeepSeek-R1 often responds slowly or times out due to high demand."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Paid Token Solution:"
        }), _jsx(_components.br, {}), "\n", "After purchasing about 20 RMB worth of tokens, I noticed a ", _jsx(_components.strong, {
          children: "significant"
        }), " performance boost—faster responses, fewer errors, and a generally stable experience."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "52-monitoring-usage",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#52-monitoring-usage",
        children: "5.2 Monitoring Usage"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Dashboard Metrics:"
        }), _jsx(_components.br, {}), "\n", "Track token consumption in your Siliconflow dashboard to avoid unexpected service interruptions."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Notifications:"
        }), _jsx(_components.br, {}), "\n", "If available, enable email or in-app alerts to warn you when your tokens are running low."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "6-testing-your-setup",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#6-testing-your-setup",
        children: "6. Testing Your Setup"
      })
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Open Chat Box:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Enter a query or prompt to confirm everything is configured correctly."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check Response Speed and Quality:"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "If it’s slow or timing out, you may need more tokens or to check your API key setup."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Refine Configuration (Optional):"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Adjust temperature, context limits, or other Chat Box settings to suit your needs."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "7-troubleshooting",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#7-troubleshooting",
        children: "7. Troubleshooting"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Slow or Hanging Responses:"
        }), _jsx(_components.br, {}), "\n", "Typically caused by insufficient token resources on the free plan. Recharging helps."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Incorrect API Key:"
        }), _jsx(_components.br, {}), "\n", "Double-check you pasted the correct key in Chat Box settings."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Model Not Found:"
        }), _jsx(_components.br, {}), "\n", "Ensure you typed ", _jsx(_components.code, {
          children: "Pro/deepseek-ai/DeepSeek-R1"
        }), " without typos."]
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
      children: ["By leveraging ", _jsx(_components.strong, {
        children: "Siliconflow"
      }), "’s stable platform and ", _jsx(_components.strong, {
        children: "Chat Box"
      }), " integration, I’ve been able to tap into DeepSeek-R1’s impressive chain-of-thought and reasoning capabilities—without the instability of free-tier servers or the complexity of local installation. If you find DeepSeek’s free or open-source services unreliable, consider ", _jsx(_components.strong, {
        children: "purchasing a small token package"
      }), " on Siliconflow to ensure a smooth and efficient experience."]
    }), "\n", _jsx(_components.p, {
      children: "Happy exploring!"
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
