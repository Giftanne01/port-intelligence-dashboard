// ===============================
// CYBER PORT INTELLIGENCE DASHBOARD
// ===============================

// Port Database
const portDatabase = [
    {
        port: 22,
        service: "SSH",
        risk: "Medium",
        description: "Secure remote login protocol.",
        threat: "Brute-force password attacks.",
        mitigation: "Use key-based authentication and disable root login."
    },
    {
        port: 23,
        service: "Telnet",
        risk: "High",
        description: "Unencrypted remote login protocol.",
        threat: "Credentials transmitted in plaintext.",
        mitigation: "Disable Telnet and use SSH instead."
    },
    {
        port: 80,
        service: "HTTP",
        risk: "Medium",
        description: "Standard web traffic protocol.",
        threat: "Man-in-the-middle attacks if not redirected to HTTPS.",
        mitigation: "Force HTTPS and enable HSTS."
    },
    {
        port: 443,
        service: "HTTPS",
        risk: "Low",
        description: "Encrypted web communication protocol.",
        threat: "Outdated TLS configurations.",
        mitigation: "Use modern TLS versions and valid certificates."
    },
    {
        port: 3306,
        service: "MySQL",
        risk: "Critical",
        description: "Database communication port.",
        threat: "Database exposure to the public internet.",
        mitigation: "Restrict access to internal network and firewall rules."
    }
];

// DOM Elements
const portInput = document.getElementById("portInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDiv = document.getElementById("result");
const statsDiv = document.getElementById("stats");

// ===============================
// Search Function
// ===============================
function searchPort() {
    const portNumber = parseInt(portInput.value);

    if (!portNumber) {
        resultDiv.innerHTML = `<p>Please enter a valid port number.</p>`;
        return;
    }

    const port = portDatabase.find(p => p.port === portNumber);

    if (!port) {
        resultDiv.innerHTML = `
            <div class="card">
                <h3>Port ${portNumber}</h3>
                <p>No intelligence available in database.</p>
            </div>
        `;
        return;
    }

    resultDiv.innerHTML = `
        <div class="card">
            <h3>${port.service} (Port ${port.port})</h3>
            <p><strong>Risk Level:</strong> 
                <span class="risk ${port.risk.toLowerCase()}">
                    ${port.risk}
                </span>
            </p>
            <p><strong>Description:</strong> ${port.description}</p>
            <p><strong>Common Threat:</strong> ${port.threat}</p>
            <p><strong>Mitigation:</strong> ${port.mitigation}</p>
        </div>
    `;
}

// ===============================
// Clear Function
// ===============================
function clearResults() {
    portInput.value = "";
    resultDiv.innerHTML = "";
}

// ===============================
// Statistics Dashboard
// ===============================
function loadStats() {
    const total = portDatabase.length;
    const highRisk = portDatabase.filter(p => p.risk === "High").length;
    const criticalRisk = portDatabase.filter(p => p.risk === "Critical").length;

    statsDiv.innerHTML = `
        <div class="card">
            <h3>Threat Intelligence Summary</h3>
            <p>Total Ports in Database: ${total}</p>
            <p>High Risk Ports: ${highRisk}</p>
            <p>Critical Exposure Ports: ${criticalRisk}</p>
        </div>
    `;
}

// ===============================
// Event Listeners
// ===============================
searchBtn.addEventListener("click", searchPort);
clearBtn.addEventListener("click", clearResults);

// Load statistics when page loads
loadStats();