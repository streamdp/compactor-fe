const origin = window.location.origin

function copy() {
    const link = document.getElementById("link");
    navigator.clipboard.writeText(link.textContent).then(
        _ => alert("Copied link: " + link.textContent)
    );
}

function isValidUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
