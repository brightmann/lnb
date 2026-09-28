import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Callout} = _components;
  if (!Callout) _missingMdxReference("Callout", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      id: "deployment-of-mern-netflix-clone-application-on-aws-ec2",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#deployment-of-mern-netflix-clone-application-on-aws-ec2",
        children: "Deployment of MERN Netflix-Clone Application on AWS EC2"
      })
    }), "\n", _jsx(_components.h2, {
      id: "overview",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#overview",
        children: "Overview"
      })
    }), "\n", _jsx(_components.p, {
      children: "This document outlines the process of deploying a MERN stack application, specifically a Netflix-Clone, on an AWS EC2 instance. The deployment process includes setting up the server environment, configuring the database, managing environment variables, and securing the application using HTTPS. The deployment was guided by various tutorials and resources to ensure a smooth and secure setup."
    }), "\n", _jsx(_components.h2, {
      id: "resources-referenced",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#resources-referenced",
        children: "Resources Referenced"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video Tutorial on Full Stack Node.js Deployment"
        }), ": A comprehensive guide that walks through the deployment of a Node.js application on AWS EC2, covering essential setup steps ", _jsx(_components.a, {
          href: "https://www.youtube.com/watch?v=nQdyiK7-VlQ",
          children: "View on YouTube"
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.sammeechward.com/deploying-full-stack-js-to-aws-ec2",
              children: "Deploying Full Stack Apps to AWS EC2 with SQL Databases"
            })
          }), "\n", _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.sammeechward.com/aws-route-53-domain-name",
              children: "AWS Route 53 Domain Name"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Deploy MERN Stack App with AWS EC2"
        }), ": A detailed tutorial focusing on deploying a MERN stack application, with a focus on configuration and best practices ", _jsx(_components.a, {
          href: "https://www.youtube.com/watch?v=P05__K0-4bg",
          children: "View on YouTube"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GitHub Actions for MERN Deployment"
        }), ": Utilized GitHub Actions for CI/CD pipeline setup, facilitating automated deployment processes ", _jsx(_components.a, {
          href: "https://www.youtube.com/watch?v=MmidULYvjYE",
          children: "View on YouTube"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "FullStack React App Deployment Guide"
        }), ": A tutorial that provided insights into setting up the front-end and back-end environments on AWS ", _jsx(_components.a, {
          href: "https://www.youtube.com/watch?v=FHn8c4Rk_yo",
          children: "View on YouTube"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "General MERN Stack Deployment"
        }), ": Covered aspects of deploying a MERN stack application, including securing the application with HTTPS and handling environment variables ", _jsx(_components.a, {
          href: "https://www.youtube.com/watch?v=FanoTGjkxhQ",
          children: "View on YouTube"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "deployment-steps",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#deployment-steps",
        children: "Deployment Steps"
      })
    }), "\n", _jsx(_components.h3, {
      id: "1-provisioning-aws-ec2-instance",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-provisioning-aws-ec2-instance",
        children: ["1. ", _jsx(_components.strong, {
          children: "Provisioning AWS EC2 Instance"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Instance Type"
        }), ": Chose a t2.micro instance (free tier eligible)."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Operating System"
        }), ": Ubuntu 20.04 LTS was used for its stability and support."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Security Group"
        }), ": Configured inbound rules to allow HTTP (80), HTTPS (443), and SSH (22) access."]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "2-server-setup",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-server-setup",
        children: ["2. ", _jsx(_components.strong, {
          children: "Server Setup"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Create SSH Key"
        })
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "SSH Access"
        }), ": Connected to the EC2 instance using SSH."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Environment Setup"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Installed Node.js (Install MongoDB if you need. I use Mongo Altas )"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Code Deployment"
        }), ": Rsync Code from your device"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "3-app-setup",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-app-setup",
        children: ["3. ", _jsx(_components.strong, {
          children: "App Setup"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Created a ", _jsx(_components.code, {
          children: ".env"
        }), " file to manage sensitive information such as database URIs and API keys."]
      }), "\n", _jsxs(_components.li, {
        children: ["Installed dependencies using ", _jsx(_components.code, {
          children: "npm run build"
        }), ".", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "\"build\" : \"npm install && npm install --prefix frontend && npm run build --prefix frontend\""
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "4-systemd-setup",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-systemd-setup",
        children: ["4. ", _jsx(_components.strong, {
          children: "SystemD Setup"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Create the Enviroenment file"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Create the systemd Service file"
        })
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "5-security-and-https-configuration",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#5-security-and-https-configuration",
        children: ["5. ", _jsx(_components.strong, {
          children: "Security and HTTPS Configuration"
        })]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Caddy as Web Server"
        }), ": Used Caddy to handle HTTPS redirection and SSL certificate management."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "SSL/TLS Certificates"
        }), ": Caddy automatically obtained and renewed SSL certificates from Let's Encrypt."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Configuration"
        }), ":", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Redirected all HTTP traffic to HTTPS."
          }), "\n", _jsxs(_components.li, {
            children: ["Ensured secure cookie transmission by setting the ", _jsx(_components.code, {
              children: "Secure"
            }), " flag to ", _jsx(_components.code, {
              children: "true"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "6-cicd-pipeline-optional",
      children: _jsxs(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#6-cicd-pipeline-optional",
        children: ["6. ", _jsx(_components.strong, {
          children: "CI/CD Pipeline"
        }), " (optional)"]
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Set up GitHub Actions to automate testing and deployment."
      }), "\n", _jsx(_components.li, {
        children: "Configured workflows to automatically deploy updates to the EC2 instance upon commits to the main branch."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "issues-encountered-and-solutions",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#issues-encountered-and-solutions",
        children: "Issues Encountered and Solutions"
      })
    }), "\n", _jsx(_components.h3, {
      id: "issue-secure-cookie-transmission",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#issue-secure-cookie-transmission",
        children: "Issue: Secure Cookie Transmission"
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Problem"
      }), ": The application was unable to transmit cookies when ", _jsx(_components.code, {
        children: "Secure"
      }), " was set to ", _jsx(_components.code, {
        children: "true"
      }), " due to the lack of HTTPS.\n", _jsx(_components.strong, {
        children: "Solution"
      }), ": Implemented Caddy to handle HTTPS, and updated cookie settings to use ", _jsx(_components.code, {
        children: "Secure: true"
      }), " once HTTPS was enabled."]
    }), "\n", _jsx(_components.h2, {
      id: "conclusion",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#conclusion",
        children: "Conclusion"
      })
    }), "\n", _jsx(_components.p, {
      children: "The deployment of the MERN Netflix-Clone application on AWS EC2 was successfully completed by setting up a secure and scalable environment. The use of Caddy for automatic HTTPS ensured secure data transmission. This deployment setup serves as a fundamental solution for production environments, ensuring security and efficiency."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "detailed-full-steps",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#detailed-full-steps",
        children: "Detailed Full Steps"
      })
    }), "\n", _jsx(_components.h3, {
      id: "setup-ec2-instance",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#setup-ec2-instance",
        children: "Setup EC2 Instance"
      })
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
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " update"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " upgrade"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "install-nodejs",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#install-nodejs",
        children: "Install Node.js"
      })
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
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -fsSL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " https://deb.nodesource.com/setup_20.x"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -E"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " bash"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " -"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt-get"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -y"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " nodejs"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h3, {
      id: "rsync-codes-from-your-device",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#rsync-codes-from-your-device",
        children: "rsync codes from your device"
      })
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
              children: "rsync"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -avz"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " --exclude"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " 'node_modules'"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " --exclude"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " '.git'"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " --exclude"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " '.env'"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " \\"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "-e "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"ssh -i ~/.ssh/your-key.pem\""
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " \\"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ". "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "ubuntu@ip-address:~/app"
            })]
          })]
        })
      })
    }), "\n", _jsxs(Callout, {
      type: "warning",
      children: [_jsxs(_components.p, {
        children: ["Name your key using ", _jsx(_components.code, {
          children: "<Location>-<Username>-<Device>"
        }), ","]
      }), _jsx(_components.p, {
        children: "For example: melbourne-yuelin-m1"
      })]
    }), "\n", _jsx(_components.h3, {
      id: "app-setup",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#app-setup",
        children: "App Setup"
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Created a ", _jsx(_components.code, {
          children: ".env"
        }), " file to manage sensitive information such as database URIs and API keys."]
      }), "\n", _jsxs(_components.li, {
        children: ["Installed dependencies using npm run build.", "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "\"build\" : \"npm install && npm install --prefix frontend && npm run build --prefix frontend\""
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      id: "systemd",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#systemd",
        children: "systemd"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "sudo vim /etc/netflix-clone.env"
      })
    }), "\n", _jsx(Callout, {
      type: "warning",
      children: "This environment file is for SystemD to use"
    }), "\n", _jsx(_components.h4, {
      id: "restrict-the-file-permissions-for-security",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#restrict-the-file-permissions-for-security",
        children: "Restrict the file permissions for security"
      })
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
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " chmod"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 600"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " /etc/netflx-clone.env"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " chown"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " ubuntu:ubuntu"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " /etc/netflix-clone.env"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "create-and-configure-systemd-service-file",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#create-and-configure-systemd-service-file",
        children: "Create and Configure SystemD Service File"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "sudo vim /etc/systemd/system/netflix-clone.service"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8"
        },
        tabIndex: "0",
        "data-language": "vim",
        "data-theme": "github-dark",
        children: _jsxs(_components.code, {
          "data-language": "vim",
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
              children: "[Unit]"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "Description"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "Netflix Clone MERN  App"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "After"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "network.target multi-user.target"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[Service]"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "User"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "ubuntu"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "WorkingDirectory"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DBEDFF"
              },
              children: "/home/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "ubuntu/app"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "ExecStart"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DBEDFF"
              },
              children: "/usr/"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "bin"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "/npm start"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "Re"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "start="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "always"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "Environment"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "NODE_ENV"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "production"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "EnvironmentFile"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DBEDFF"
              },
              children: "/etc/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "netflix-clone.env"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "StandardOutput"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "syslog"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "StandardError"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "syslog"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "SyslogIdentifier"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "netflix_clone_app"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[Install]"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "WantedBy"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "multi-user.target"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "reload-systemd-and-start-the-service",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#reload-systemd-and-start-the-service",
        children: "Reload systemd and start the service"
      })
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
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " systemctl"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " daemon-reload"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " systemctl"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " enable"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " netflix-clone.service"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " systemctl"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " netflix-clone.service"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "verify-the-service-running-status",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#verify-the-service-running-status",
        children: "Verify the service running status"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "sudo systemctl status netflix-clone.service"
      })
    }), "\n", _jsx(_components.h3, {
      id: "view-logs",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#view-logs",
        children: "View logs"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "sudo journalctl -u netflix-clone.service"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["tail logs:\n", _jsx(_components.code, {
        children: "sudo journalctl -fu netflix-clone.service"
      })]
    }), "\n", _jsx(_components.h3, {
      id: "caddy",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#caddy",
        children: "Caddy"
      })
    }), "\n", _jsx(_components.h4, {
      id: "install",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#install",
        children: "Install"
      })
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
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -y"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " debian-keyring"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " debian-archive-keyring"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt-transport-https"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " curl"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -1sLf"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key'"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " gpg"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " --dearmor"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -o"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " /usr/share/keyrings/caddy-stable-archive-keyring.gpg"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " -1sLf"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt'"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " tee"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " /etc/apt/sources.list.d/caddy-stable.list"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " update"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " apt"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " caddy"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " vim"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " /etc/caddy/Caddyfile"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: ":80"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    reverse_proxy"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " localhost:5001"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " systemctl"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " restart"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " caddy"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.h4, {
      id: "configure-caddy-to-use-https",
      children: _jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#configure-caddy-to-use-https",
        children: "Configure Caddy to Use HTTPS"
      })
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
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " vim"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " /etc/caddy/Caddyfile"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "netwatch.liuyuelin.xyz"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "    reverse_proxy"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " localhost:5001"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "sudo"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " systemctl"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " restart"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " caddy"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
