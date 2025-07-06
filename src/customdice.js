function getNumberFromElement(elementID) {
    var element = document.getElementById(elementID);
    var text = element.nodeValue;

    var result = Number(text);

    if (isNaN(result)) {
        // fail with bad number input
        element.className="menuInputError";
        return NaN;
    }

    // get the max and min vlues from the input field
    var max = Number(element.getAttribute("max"));
    var min = Number(element.getAttribute("min"));

    if (result>max || result<min) {
        // fail cause of outside range
        element.className = "menuInputError";
        return NaN;
    }

    // if we get here the number is valid
    // set to normal background
    element.className="menuInput";

    return result;
}

function doRollDice(minElementName, maxElementName, outputElementName) {
    var outputElement = document.getElementById(outputElementName);

    var minRand = getNumberFromElement(minElementName);
    var maxRand = getNumberFromElement(maxElementName);

    if (isNaN(minRand) || isNaN(maxRand)) {
        outputElement.textContent = "Invalid rang values";
        return;
    }

    if (minRand >= maxRand) {
        outputElement.textContent="Minimum above maximum";

        return;
    }

    var spots = getCustomDiceSpots(minRand, maxRand);
    var message = "Rolled: " + spots;
    outputElement.textContent = message;
}