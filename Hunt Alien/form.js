



function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
function displayGreeting() {
    const name = getQueryParam('name');
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = `Welcome to the Alien Hunt, ${name}`;
}

