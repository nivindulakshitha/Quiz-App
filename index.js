const selectionHandler = (element) => {
    document.querySelectorAll("#answer-container p").forEach(loopElement => {
        if (loopElement == element) {
            element.classList.add("select");
            element.getElementsByTagName("input")[0].checked = true;
        } else {
            loopElement.classList.remove("select");
            loopElement.getElementsByTagName("input")[0].checked = false;
        }
    })
}