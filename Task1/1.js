const a = Number.parseFloat(prompt("Введите число температуру в С⁰:"));

function celsyToFareng(n) {
return (9 / 5) * n + 32
}

alert(`${a}С⁰ равно ${celsyToFareng(a).toFixed(1)}F⁰`);