window.draw = (x,y,l,fa) =>{
    var c = document.getElementById("canvas");
    var parent = c.parentElement;
    c.width = parent.clientWidth;
    
    c.height = parent.clientWidth / 1.7;
    window.sizefactor = c.width / 1000;
    console.log(parent.clientWidth)
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight)
    //ctx.beginPath();
    fractal(x * sizefactor,y * sizefactor,l * sizefactor,45,ctx, fa, 20);
    window.fractalLength= l;
    window.fractalAngle= fa;
    console.log(fractalAngle)
    console.log(fractalLength)
    console.log(fa)
}
window.fractal= (x,y,l,a,ctx, fa, color) =>{
    if (l>3){
        b = a * (Math.PI / 180);
        const fx = l * Math.cos(b)
        const fy = l * Math.sin(b)
        ctx.beginPath();
        ctx.moveTo(x, y);
        let x2 = x + fx;
        let y2 = y + fy;
        let x3 = x + fx * 0.8;
        let y3 = y + fy * 0.8;
        let x4 = x + fx * 0.8;
        let y4 = y + fy * 0.8;
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(0, " + color + ", 0, 1)";
        ctx.stroke();
        fractal(x3,y3,l-10 * sizefactor,a-fa,ctx, fa, color + 20)
        fractal(x4,y4,l-10 * sizefactor,a+fa,ctx, fa, color + 20)
    }
}
window.slider = () =>{
    var slider = document.getElementById("myRange");   
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() {
    output.innerHTML = this.value;
}
}