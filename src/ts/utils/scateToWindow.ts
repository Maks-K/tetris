export function scaleToWindow(canvas: HTMLCanvasElement) {
    //Figure out the scale amount on each axis
    const scaleX = window.innerWidth / canvas.offsetWidth;
    const scaleY = window.innerHeight / canvas.offsetHeight;

    //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
    const scale = Math.min(scaleX, scaleY);
    canvas.style.transform = "scale(" + scale + ")";
}
