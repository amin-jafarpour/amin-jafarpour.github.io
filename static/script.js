async function fillPage(fileName, elementID) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) throw new Error("Failed to load " + fileName);

        const html = await response.text();
        document.getElementById(elementID).innerHTML = html;
    }
    catch (err) {
        console.error(err);
    }
}