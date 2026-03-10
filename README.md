# 📡 Port Intelligence Dashboard

> A cybersecurity-focused reconnaissance tool for analyzing exposed network services.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-None-00ff41?style=flat-square)

🔗 **[Live Demo →](https://giftanne01.github.io/port-intelligence-dashboard)**

---

## What It Does

Enter any port number and instantly get a full intelligence report:

- **Service name** — what protocol or application runs on that port
- **Risk level** — Low / Medium / High / Critical with color coding
- **Description** — what the service does
- **Common threat** — how attackers typically exploit it
- **Mitigation** — how to defend against it
- **Threat Intelligence Summary** — live stats on your port database on page load

---

## Why I Built This

During my Cisco Networking studies and TryHackMe pathways, I kept referencing port tables manually. I built this dashboard to make that lookup instant — and to reinforce my own knowledge by implementing it from scratch.

Understanding which ports are exposed, what runs on them, and how they're exploited is a core skill in any security workflow.

---

## Features

| Feature | Detail |
|---|---|
| **Instant lookup** | No page reload — results appear immediately |
| **Risk classification** | Color-coded Low / Medium / High / Critical indicators |
| **Threat intelligence** | Each port includes attack vectors and mitigations |
| **Stats dashboard** | Summary of total, high risk, and critical ports on load |
| **Clean UI** | Dark cybersecurity-themed interface |
| **Zero dependencies** | Pure HTML, CSS, and JavaScript — no frameworks |

---

## Ports Covered

| Port | Service | Risk | Notes |
|------|---------|------|-------|
| 22 | SSH | Medium | Brute-force target — use key-based auth |
| 23 | Telnet | High | Plaintext credentials — replace with SSH |
| 80 | HTTP | Medium | MITM risk — force HTTPS redirect |
| 443 | HTTPS | Low | Encrypted — keep TLS configs updated |
| 3306 | MySQL | Critical | Never expose databases to public internet |

*More ports being added as the project grows.*

---

## Run Locally

```bash
git clone https://github.com/Giftanne01/port-intelligence-dashboard.git
cd port-intelligence-dashboard
```

Then open `index.html` in your browser — no build step, no installs needed.

---

## Project Structure

```
port-intelligence-dashboard/
├── index.html    # UI layout and inline styles
├── script.js     # Port database and search logic
├── style.css     # Additional styling
└── README.md     # Documentation
```

---

## What I Learned Building This

- How to structure a client-side search tool without a backend
- The security implications of common ports and why version disclosure matters
- How risk classification works in real vulnerability databases
- Reinforced TCP/IP port knowledge from Cisco Networking studies

---

## Disclaimer

This tool is for **educational purposes only**. Designed to support learning and authorized security assessments — not unauthorized scanning or exploitation.

---

## Author

**Gift Anne Khaoya** — [github.com/Giftanne01](https://github.com/Giftanne01)

*Part of an ongoing series of practical cybersecurity tools.*
