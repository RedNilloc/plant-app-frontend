export default function convertToBinomial(str) {
    // Basic function to convert longer scientific names into standardised latin binomial names

    const splitStr = str.split(" ", 2)
    return splitStr.join(" ")
}
