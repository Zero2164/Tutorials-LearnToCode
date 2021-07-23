// variables
let appName = 'Quick Quiz';
let homeTitle = document.getElementById('appName');
let browsTab = document.querySelector('title');
let browsLocate = this.window.location.toString().substr(29).split('.').slice(0, -1).join('.');
let headr = document.querySelector('head');

// functions

// capitalise string
function capitalise(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase()
        + lower.slice(1);
}

// set home page title and browser tab title
function getAppName() {
    browsTab.text = appName + ' | ' + capitalise(browsLocate);
    if (browsLocate === 'index') browsTab.text = appName;
    if (homeTitle) return homeTitle.innerHTML = appName;
}
getAppName();


// set browser icon
function setBrowserIcon() {
    headr.innerHTML = headr.innerHTML + '<link rel="icon" href="assets/img/help-logo.ico">';
}
setBrowserIcon()


