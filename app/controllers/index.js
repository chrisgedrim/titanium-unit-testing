$.label.text = "Hello, World";

$.toggleLabel = function(e) {
    if (e.source.text === "Hello, World") {
        e.source.text = "Goodbye, World";
    } else {
        e.source.text = "Hello, World";
    }
};

$.label.addEventListener('click', $.toggleLabel);

$.index.open();
