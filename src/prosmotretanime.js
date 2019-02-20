console.log("prosmotretanime loaded");

function searchForAdsIn(element) {
    Array.from(element).forEach((f) => {
        const f_zindex = f.style.zIndex;
        console.log("prosmotretanime: found element with z-index " + f_zindex + " and id " + f.id);

        if (f_zindex > 100) {
            f.style.zIndex = -f_zindex;
            console.log("prosmotretanime: possible ad block with id " + f.id + " found; z-index changed to " + f.style.zIndex)
        }
    });
}

window.addEventListener("load", () => {
    const iframes = document.body.getElementsByTagName('iframe');

    console.log("prosmotretanime: start static searching");
    searchForAdsIn(iframes);
});

window.addEventListener("click", async () => {
    const divs = document.body.getElementsByTagName('div');

    console.log("prosmotretanime: start dynamic searching");
    searchForAdsIn(divs);
});