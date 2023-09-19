// Begin initial connections and update status accordingly
// Check if jQuery is loaded
if (typeof jQuery === "undefined") {
    document.getElementById("info_jquery").innerHTML = "Fatal Error : Not Loaded";
    alert("Fatal Error : Not Loaded");
    // Break all execution
    throw new Error("Fatal Error : Not Loaded");
} else {
    $("#info_jquery").text("Loaded");
}
// Check if moment.js is loaded
if (typeof moment === "undefined") {
    $("#info_momentjs").text("Not Loaded");
} else {
    $("#info_momentjs").text("Loaded");
}
// Check if localStorage is loaded
if (typeof localStorage === "undefined") {
    $("#info_localstorage").text("Not Loaded");
} else {
    $("#info_localstorage").text("Loaded");
}

// Setup the date in the sidebar
setInterval(function() {
    $("#info_time").text(moment().format("MMM Do YYYY"));
}, 1000); // Run every 1000 milliseconds (1 second)

// Entry generation
function generateEntry(entry_type,entry_content,entry_format = "p") {
    let export_value = "<"+entry_format+" class='item_" + entry_type + "'>" + entry_content + "</"+entry_format+">";
    $("#anchor").before(export_value);
    // Scroll to bottom of #output_box
    $("#output_box").scrollTop($("#output_box")[0].scrollHeight);
    return true;
}
// Input type change
const input_types = ["text", "date", "color", "tel", "email", "url", "time", "month", "week", "file"];
input_type = "text";
function changeInputType(new_input_type) {
    console.log("Changing input type to "+new_input_type);
    input_type = new_input_type;
    // Generate array of all input types except input_type
    let input_types_array = input_types.filter(type => type !== input_type);
    for (let input_hide of input_types_array) {
        $("#main_input_"+input_hide).hide();
    }
    $("#main_input_"+input_type).show();
    return true;
}
// Input handler
function main_input_click() {
    // Get input from main_input_text and clear it
    let input_text = $("#main_input_"+input_type).val();
    $("#main_input_"+input_type).val("");
    // Pass all data to handler
    handler(input_text, input_type)
    return true;
}
