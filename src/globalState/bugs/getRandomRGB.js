export default function getRandomRBG() {
    let newColor = []
    let i
    for (i=0;i<3;i++) {
        newColor.push(Math.ceil(Math.random()*255))
    }
    return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`
}