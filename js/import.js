function loadingPage(idElemento, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(idElemento).innerHTML = html;
        })
        .catch(error => {
            console.error(`Loading Error ${idElemento}:`, error);
        });
}

loadingPage('menu', '/pages/1-menu/menu.html');
loadingPage('event', '/pages/2-event/event.html');
loadingPage('planner', '/pages/3-planner/planner.html');
loadingPage('goal', '/pages/4-goal/goal.html');
loadingPage('speakers', '/pages/5-speakers/speakers.html');
loadingPage('location', '/pages/6-location/location.html');
loadingPage('footer', '/pages/7-footer/footer.html');
