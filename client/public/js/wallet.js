document.addEventListener("DOMContentLoaded", function () {
    const connectWalletBtn = document.getElementById("connectWallet");

    if (connectWalletBtn) {
        connectWalletBtn.addEventListener("click", async function () {
            if (window.ethereum) {
                try {
                    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                    const walletAddress = accounts[0];

                    // Send wallet address to backend for authentication
                    const response = await fetch("/auth/wallet-login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ address: walletAddress }),
                    });

                    const data = await response.json();
                    if (data.success) {
                        alert("Wallet connected successfully: " + walletAddress);
                        window.location.reload(); // Refresh to update UI
                    } else {
                        alert("Wallet connection failed!");
                    }
                } catch (error) {
                    console.error("Wallet connection error:", error);
                    alert("Failed to connect wallet.");
                }
            } else {
                alert("MetaMask is not installed. Please install MetaMask to continue.");
            }
        });
    }
});
