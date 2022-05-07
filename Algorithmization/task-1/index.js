function triangleFunction() {
    let value1 = parseInt(document.getElementById("triangle1").value);
    let value2 = parseInt(document.getElementById("triangle2").value);
    let value3 = parseInt(document.getElementById("triangle3").value);
    let sides = (value1 + value2 + value3) / 2;

    document.getElementById("triangleArea").value = Math.floor(Math.sqrt(sides * (sides - value1) * (sides - value2) * (sides - value3)));
    document.getElementById("trianglePerimeter").value = sides * 3;
}