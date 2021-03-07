const format = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~]/;

const isLastCharEqualTo = (string, character) => {
    return string.includes(character, string.length - 1)
}
const firstCharToLowercase = (string) => {
    return string[0] ? string[0].toLowerCase() + string.slice(1) : "";
}

const findStartIndexOfIngredients = (detections, ingredientsSubstring) => {
    let startIndexOfIngredients = 0;
    for (let i = 1; i < detections.length; i++) {
        if (detections[i].description && detections[i].description.toLocaleLowerCase().includes(ingredientsSubstring)) {
            startIndexOfIngredients = i;
            return startIndexOfIngredients
        }
    }
    return startIndexOfIngredients;
}
const isStringContainAnySpecialCharactersInFormat = (format, string) => {
    return format.test(string);
}

const concatenateDescriptionInNewLine = (firstPartOfDescription, restOfDescription) => {
    const next = isLastCharEqualTo(restOfDescription, ',')
        ? restOfDescription : restOfDescription + '?'
    return firstPartOfDescription.slice(0, -1) + next.toString();
}

const parseDetections = (detections) => {
    const parsedDetectionsFirstIteration = [];
    const startIndexOfIngredients = findStartIndexOfIngredients(detections, "ingredients")

    if (startIndexOfIngredients > 0) {
        for (let j = startIndexOfIngredients; j < detections.length; j++) {
            if (detections[j] && detections[j].description) {
                let ingredientText = detections[j].description.toLocaleLowerCase();
                let nextIngredientText = j + 1 < detections.length ? detections[j + 1].description.toLocaleLowerCase() : '';

                if (!isStringContainAnySpecialCharactersInFormat(format, ingredientText)) {
                    if (isLastCharEqualTo(ingredientText, '.')) {
                        parsedDetectionsFirstIteration.push(ingredientText.slice(0, -1) + ',');
                        break;
                    } else if (isLastCharEqualTo(ingredientText, '-')) {
                        parsedDetectionsFirstIteration.push(concatenateDescriptionInNewLine(ingredientText, nextIngredientText));
                        j++;
                    } else if (isLastCharEqualTo(ingredientText, ',')) {
                        parsedDetectionsFirstIteration.push(ingredientText);
                    } else {
                        parsedDetectionsFirstIteration.push(ingredientText + '?');
                    }
                }
            }
        }
        let parsedDetections = [];
        for (let i = 0; i < parsedDetectionsFirstIteration.length; i++) {
            if (isLastCharEqualTo(parsedDetectionsFirstIteration[i], '?')) {
                const firstWord = parsedDetectionsFirstIteration[i];
                const secondWord = parsedDetectionsFirstIteration[i + 1];
                parsedDetections.push(firstCharToLowercase(firstWord.replace(/[^a-zA-Z0-9]/g, "")) + secondWord.replace(/[^a-zA-Z ]/g, ""));
                i++;
            } else {
                const word = parsedDetectionsFirstIteration[i];
                parsedDetections.push(firstCharToLowercase(word.replace(/[^a-zA-Z0-9]/g, "")));
            }
        }
        return parsedDetections;
    } else {
        return [];
    }
}

module.exports = {parseDetections}
