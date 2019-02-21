function tambah()
{
    var bil1 = parseInt(document.getElementById("txtbil1").value);
    var bil2 = parseInt(document.getElementById("txtbil2").value);
    var hasil= bil1+bil2;

    alert(hasil);
}

function kurang()
{
    var bil1 = parseInt(document.getElementById("txtbil1").value);
    var bil2 = parseInt(document.getElementById("txtbil2").value);
    var hasil = bil1-bil2;
    alert(hasil);
}

function kali()
{
    var bil1 = parseInt(document.getElementById("txtbil1").value);
    var bil2 = parseInt(document.getElementById("txtbil2").value);
    var hasil = bil1*bil2;
    alert(hasil);
}

function bagi()
{
    var bil1 = parseInt(document.getElementById("txtbil1").value);
    var bil2 = parseInt(document.getElementById("txtbil2").value);
    var hasil = bil1/bil2;
    alert(hasil);
}