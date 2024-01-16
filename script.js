var elementLuas = document.getElementById('luas');
var elementKeliling = document.getElementById('keliling');
var pilihan = "luas";

elementLuas.addEventListener('click', function () {
    elementLuas.classList.add('selected-pilihan');
    elementKeliling.classList.remove('selected-pilihan');
    document.getElementById('kelilingRumus').style.display = 'none';
    document.getElementById('luasRumus').style.display = 'flex';
    document.querySelector('.wrapper-hasil #Title').textContent = 'Hitung Luas Persegi';
    document.querySelector('.wrapper-pilihan').textContent = 'Luas Persegi';
    pilihan = "luas";
})

elementKeliling.addEventListener('click', function () {
    elementKeliling.classList.add('selected-pilihan');
    elementLuas.classList.remove('selected-pilihan');
    document.getElementById('luasRumus').style.display = 'none';
    document.getElementById('kelilingRumus').style.display = 'flex';
    document.querySelector('.wrapper-hasil #Title').textContent = 'Hitung Keliling Persegi';
    document.querySelector('.wrapper-pilihan').textContent = 'Keliling Persegi';
    pilihan = "keliling";
})

var hitungButton = document.querySelector('.hitung');
var elementHasil = document.querySelector('.hasil');
hitungButton.addEventListener('click', function () {
    var sisi = document.querySelector('.input-sisi').value;
    if (pilihan == "luas") {
        var hasil = sisi * sisi;
        document.querySelector('.hasil span:nth-child(1)').textContent = 'L = S * S';
        document.querySelector('.hasil span:nth-child(2)').textContent = 'L = ' + sisi + ' * ' + sisi;
        document.querySelector('.hasil span:nth-child(3)').textContent = 'L = ' + hasil;
    }else {
        var hasil = 4 * sisi;
        document.querySelector('.hasil span:nth-child(1)').textContent = 'K = 4 * S';
        document.querySelector('.hasil span:nth-child(2)').textContent = 'K = 4' + ' * ' + sisi;
        document.querySelector('.hasil span:nth-child(3)').textContent = 'K = ' + hasil;
    }
})
