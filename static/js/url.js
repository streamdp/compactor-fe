const origin = window.location.origin

function copy() {
    const link = document.getElementById("link");
    navigator.clipboard.writeText(link.textContent).then(
        _ => alert("Copied link: " + link.textContent)
    );
}

function isValidUrl(rawUrl) {
    try {
        let url = new URL(rawUrl);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (_){}
    return false;
}