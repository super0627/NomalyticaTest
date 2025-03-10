

//Metamask wallet connection integration with Chess Hub
document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const address = accounts[0];

            // Request a signed message from the user
            const message = "Sign this message to authenticate with Chess Hub.";
            const signature = await window.ethereum.request({
                method: "personal_sign",
                params: [message, address],
            });

            // Send wallet address & signature to backend
            const response = await fetch("/auth/wallet-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ address, signature }),
            });

            const data = await response.json();
            console.log("Server Response:", data);
        } catch (error) {
            console.error("Wallet Connection Error:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
});
