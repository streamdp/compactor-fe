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
