// https://stackoverflow.com/a/78978176

htmx.on("htmx:responseError", function (evt) {
    const xhr = evt.detail.xhr;
    const response = JSON.parse(xhr.responseText)
    document.getElementById('error').innerHTML = `${xhr.statusText} (${xhr.status}): ${response.error}`

    const input = document.getElementById('url-input')
    input.setCustomValidity(`${response.error}`)
    input.reportValidity()
})

htmx.on("htmx:sendError", function (evt) {
    const requestConfig = evt.detail.requestConfig;
    document.getElementById('error').innerHTML = `Network error on <b>${requestConfig.verb} ${requestConfig.path}</b>`
})

htmx.on("htmx:beforeSend", function () {
    document.getElementById('error').innerHTML = ""
    document.getElementById('url-input').setCustomValidity('')
})
