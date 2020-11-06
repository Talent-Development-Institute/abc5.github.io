const tabs = document.querySelectorAll(".my-tabs .tabs li");
const sections = document.querySelectorAll(".my-tabs .tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", e => {
        e.preventDefault();
        removeActiveTab();
        addActiveTab(tab);
    });
})

const removeActiveTab = () => {
    tabs.forEach(tab => {
        tab.classList.remove("is-active");
    });
    sections.forEach(section => {
        section.classList.remove("is-active");
        section.classList.remove("is-noneByDefault");
    });
}

const addActiveTab = tab => {
    tab.classList.add("is-active");
    // tab.classList.add("is-noneByDefault");
    const href = tab.querySelector("a").getAttribute("href");
    const matchingSection = document.querySelector(href);
    matchingSection.classList.add("is-active");
}