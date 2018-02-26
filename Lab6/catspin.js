/**
 * Created by john on 10/03/2016.
 */

var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.005;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 200) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    cat.style.transform = "scale(" + Math.sin(angle*0.05) + "," + Math.sin(angle*0.05) +")";

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
