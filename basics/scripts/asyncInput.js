import { getElements, getState, refreshView, } from "./asyncInput.utils.js";
(() => {
    const { formEl, inputEl, resultsEl } = getElements();
    const state = getState();
    // API
    const callApi = (q) => {
        const callId = +new Date();
        state.lastCallId = callId;
        return Promise.all([
            fetch("https://dummyjson.com/recipes" +
                (q !== "" ? "/search?q=" + q : "")),
            new Promise((res) => setTimeout(res, Math.random() * 1000 + 200)),
        ])
            .then(([res]) => {
            if (Math.random() < 0.2) {
                throw new Error("Server Error");
            }
            else {
                return res;
            }
        })
            .then((res) => {
            if (callId !== state.lastCallId)
                return;
            res.json().then((data) => {
                state.results = data.recipes.map((r) => r.name);
            });
        })
            .catch(() => {
            if (callId !== state.lastCallId)
                return;
            state.isError = true;
        })
            .finally(() => {
            if (callId !== state.lastCallId)
                return;
            state.isLoading = false;
            refreshView();
        });
    };
    // Events
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    let timer = null;
    const debouncedCallback = () => {
        state.isLoading = true;
        state.isError = false;
        state.lastCallId = -1;
        state.results = [];
        refreshView();
        resultsEl.classList.add("open");
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            const formData = new FormData(formEl);
            callApi((formData.get("search") ?? ""));
        }, 300);
    };
    inputEl.addEventListener("keyup", debouncedCallback);
    document.addEventListener("click", (e) => {
        const classes = e.target.classList;
        if (classes.contains("list-item") ||
            classes.contains("async-input-form-input")) {
            return;
        }
        resultsEl.classList.remove("open");
    });
    inputEl.addEventListener("click", () => {
        resultsEl.classList.add("open");
    });
    resultsEl.addEventListener("click", (e) => {
        if (state.results.length) {
            const selected = e.target.textContent;
            inputEl.value = selected;
            resultsEl.classList.remove("open");
        }
    });
    // Telemetry
    console.log("Setup Finished. Async Input Ready.");
})();
