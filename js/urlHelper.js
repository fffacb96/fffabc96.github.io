window.urlHelper = {
    setUrl: function (url) {
        history.pushState({}, '', url);
    },
    replaceUrl: function (url) {
        history.replaceState({}, '', url);
    }
};
