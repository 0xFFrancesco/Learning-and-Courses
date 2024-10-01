export const getElements = (() => {
    const formEl = document.querySelector(".async-input-form");
    const inputEl = document.querySelector(".async-input-form-input");
    const resultsEl = document.querySelector(".async-input-results-box");
    const messageEl = document.createElement("span");
    const loaderEl = document.createElement("img");
    loaderEl.src = "./assets/spinner.svg";
    loaderEl.className = "loader";
    return () => ({
        formEl,
        inputEl,
        resultsEl,
        loaderEl,
        messageEl,
    });
})();
export const getState = (() => {
    const state = {
        results: [],
        isLoading: false,
        isError: false,
        lastCallId: -1,
    };
    return () => state;
})();
export const refreshView = () => {
    const { resultsEl, loaderEl, messageEl } = getElements();
    const { isError, isLoading, results } = getState();
    resultsEl.textContent = "";
    resultsEl.classList.remove("isMessage");
    resultsEl.classList.remove("isError");
    let message = "";
    if (isLoading) {
        resultsEl.appendChild(loaderEl);
        message = "Loading...";
    }
    else if (isError) {
        resultsEl.classList.add("isError");
        message = "An error occurred, please retry...";
    }
    else if (results.length === 0) {
        message = "No results found.";
    }
    if (message) {
        messageEl.textContent = message;
        resultsEl.classList.add("isMessage");
        resultsEl.appendChild(messageEl);
    }
    else {
        results.map((r) => {
            const el = document.createElement("button");
            el.classList.add("list-item");
            el.textContent = r;
            el.type = "button";
            el.tabIndex = 0;
            resultsEl.appendChild(el);
        });
    }
};
