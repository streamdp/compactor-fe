function isValidUrl(rawUrl) {
    try {
        let url = new URL(rawUrl);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (_){}
    return false;
}

function validate(input) {
    if (!isValidUrl(input.value)) {
        input.setCustomValidity('Please enter the correct url (with schema).')
        input.reportValidity()
    }
}

function clear(id) {
    document.getElementById(id).innerHTML=''
}

function getOrigin(id) {
    document.getElementById(id).textContent=window.location.origin
}

// Helper to show messages in the UI instead of alerts
function showStatus(text, type = 'success') {
    const msgEl = document.getElementById("status-message");
    if (!msgEl) return;

    msgEl.textContent = text;
    msgEl.classList.remove("hidden", "text-emerald-500", "text-amber-500");

    // Set color based on type
    const colorClass = type === 'success' ? "text-emerald-500" : "text-amber-500";
    msgEl.classList.add(colorClass);

    // Hide after 3 seconds
    setTimeout(() => {
        msgEl.classList.add("hidden");
    }, 5000);
}

function copy(silent = false) {
    const link = document.getElementById("link");
    const textToCopy = link.textContent.replace(/\s+/g, '').trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
        if (!silent) showStatus("✓ Link copied to clipboard", "success");
    });
}

function shareLink(path) {
    const fullUrl = window.location.origin + path;

    if (navigator.share) {
        navigator.share({
            title: 'Shortened Link',
            text: 'Check out this shortened link:',
            url: fullUrl,
        }).catch(console.error);
    } else {
        // Fallback behavior
        copy(true); // copy the link quietly
        showStatus("⚠ Share not supported - Link copied instead", "warning");
    }
}