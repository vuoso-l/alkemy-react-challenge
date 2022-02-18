export const color = {
    bgPrimary: "rgb(61, 61, 240)",
    bgSecondary: "#3f87a6",
    addBtn: "#0d6efdd6",
}

export const displayFlex = (display, direction, justifyContent, alignItem) => {
    return `
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItem};
    `    
}