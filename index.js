async function initiatePayment() {
    const inputAmount = document.getElementById('input');
    const amount = parseInt(inputAmount.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return; 
    }

    showConnectingPage();


    try {
        await simulatePayment(amount);
        showSuccessPage();
    } catch (error) {
        showFailurePage();
    }
}

function showConnectingPage() {
    hideAllPages();
    const connectingImage = document.createElement("img");
    connectingImage.src = "https://static.centro.org.uk/XnwmAssets/img/spinner.gif"; 
    connectingImage.alt = "Connecting securely...";
    document.getElementById("imageContainer").innerHTML = ""; 
    document.getElementById("imageContainer").appendChild(connectingImage);
    document.getElementById("connectingPage").classList.remove("hidden");
}

function showSuccessPage() {
    hideAllPages();
    const statusDiv = document.getElementById("status");
    statusDiv.innerText = "Transaction Succeeded";

    const successImage = document.createElement("img");
    successImage.src = "https://iptvify.com/images/done.gif";
    successImage.alt = "Transaction Succeeded";
    document.getElementById("imageContainerSuccess").innerHTML = '';
    document.getElementById("imageContainerSuccess").appendChild(successImage);

    document.getElementById("successPage").classList.remove("hidden");
}

function showFailurePage() {
    hideAllPages();
    const statusDiv = document.getElementById("status");
    statusDiv.innerText = "Transaction Failed";
    statusDiv.style.color = "red";

    const failureImage = document.createElement('img');
    failureImage.src = "https://osteohondrosy.net/wp-content/uploads/2016/12/abort-146072_640.png";
    failureImage.alt = "Transaction Failed";
    document.getElementById("imageContainerFailure").innerHTML = "";
    document.getElementById("imageContainerFailure").appendChild(failureImage);

    document.getElementById("failurePage").classList.remove("hidden");
}


function simulatePayment(amount) {
    return new Promise((resolve, reject) => {
        const fixedBalance = 10000; 

        
        showConnectingPage();

        setTimeout(() => {
            if (amount > fixedBalance) {
            
                reject("Insufficient balance");
            } else {
             
                resolve();
            }
        }, 3000); 
    });
}

function showHomeButton() {
    hideAllPages();
    document.getElementById("inputPage").classList.remove("hidden");
}

function hideAllPages() {
    document.getElementById("inputPage").classList.add("hidden");
    document.getElementById("connectingPage").classList.add("hidden");
    document.getElementById("successPage").classList.add("hidden");
    document.getElementById("failurePage").classList.add("hidden");
}



  