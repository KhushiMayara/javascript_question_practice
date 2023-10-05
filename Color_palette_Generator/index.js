const generateBtn = document.querySelector("#generate-btn")

const singleHaxColorGenerator = () => {
    const hax = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let haxColor = "#";
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hax.length);
        haxColor += hax[random];

    }
    return haxColor
}
const colorPaletteGenerator = () => {
    let colorPalette = [];
    for (let i = 0; i < 4; i++) {
        colorPalette.push(singleHaxColorGenerator());
    }
    console.log(colorPalette);
    return colorPalette;
}
const colorContainer = document.querySelector(".color_container")

const colorRenderGenerator = () => {
    colorContainer.innerHTML = "";
    const colorPalette = colorPaletteGenerator()
    colorPalette.forEach((color, i) => {
        const colorDiv = document.createElement("div");
        colorDiv.id = `color${i + 1}`
        colorDiv.style.background = color;
        colorDiv.className = "color-box"

        const colorTag = document.createElement("p");
        colorTag.id = `color${i + 1}Tag`
        colorTag.innerHTML = color;
        colorTag.className = "colorCopy"

        colorDiv.appendChild(colorTag)
        colorContainer.appendChild(colorDiv)
    });
}

colorRenderGenerator()

generateBtn.addEventListener("click", colorRenderGenerator)