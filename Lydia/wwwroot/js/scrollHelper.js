window.scrollHelper = {
    scrollTo: function (key) {
        document.getElementById(key).scrollIntoView({behavior:'smooth'})
    },
    goTo: function (key) {
        document.getElementById(key).scrollIntoView({behavior:'instant'})
    },
};
