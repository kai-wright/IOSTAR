function handler(handler_input, handler_input_type) {
    // If empty do nothing
    console.log(handler_input);
    console.log(handler_input_type);
    console.log(input_types);
    if (handler_input == "") {
        return true;
    } else if (input_types.includes(handler_input)) {
        generateEntry("input", handler_input);
        generateEntry("output", "Switching to "+handler_input+" input");
        changeInputType(handler_input);
    } else if (handler_input_type == "date") {
        // Deal with dates by utilizing moment
        generateEntry("input", handler_input);
        generateEntry("output", moment(handler_input, "YYYY-MM-DD").format("LL"));
        generateEntry("output", "Switching back to text input");
        changeInputType("text");
        return true;
    } else if (handler_input_type == "time") {
        // Deal with time by utilizing moment
        generateEntry("input", handler_input);
        generateEntry("output", "The time given is "+moment(handler_input, "HH:mm").startOf('hour').fromNow());
        generateEntry("output", "Switching back to text input");
        changeInputType("text");
        return true;
    } else {
        // Deal with all other inputs
        generateEntry("input", handler_input);
        generateEntry("output", handler_input);
        if (input_type != "text") {
            generateEntry("output", "Switching to text input");
            changeInputType("text");
        }
        return true;
    }
}

generateEntry("output", "Demo", "h1");
generateEntry("output", "This is the IO-STAR demo", "h4");
generateEntry("output", 'Use ["text", "date", "color", "tel", "email", "url", "time", "month", "week", "file"] to change input type', "p");

// Commands available are defined in JS/root.js

// generateEntry("input" or "output", text to generate ,OPTIONAL type of element "p","h1","table");
// changeInputType(text or date or dropdown extra);