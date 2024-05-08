const buttons = document.querySelectorAll('.action-btn');
let tracker;
let prevButton;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let descriptionFieldId = button.getAttribute('description-id');
        
        let descriptionElement = document.getElementById(descriptionFieldId);

        if (descriptionElement !== tracker) {
            hidePreviousDescription(tracker, prevButton)
            showDescription(descriptionElement, button);
        } else {
            hideDescription(descriptionElement, button);
        }
    });
});

function showDescription(descriptionElement, actionButton) {
    descriptionElement.classList.add("show-description")
    actionButton.classList.add("focused");

    actionButton.textContent = "-";

    tracker = descriptionElement;
    prevButton = actionButton;
}

function hideDescription(descriptionElement, actionButton) {
    descriptionElement.classList.remove("show-description");
    actionButton.classList.remove("focused");

    actionButton.textContent = "+";

    tracker = null;
    prevButton = null;
}

function hidePreviousDescription(prevDescriptionElement, prevActionButton) {
    if (prevDescriptionElement && prevActionButton) {
        prevDescriptionElement.classList.remove("show-description");
        prevActionButton.classList.remove("focused");
        prevActionButton.textContent = "+";
    }
}