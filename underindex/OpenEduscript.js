document.getElementById('2to1').addEventListener('click', function() {
    document.getElementById('2').classList.add('hidden');
    document.getElementById('1').classList.remove('hidden');
});
document.getElementById('1to2').addEventListener('click', function() {
    document.getElementById('1').classList.add('hidden');
    document.getElementById('2').classList.remove('hidden');
});
document.getElementById('3to2').addEventListener('click', function() {
    document.getElementById('3').classList.add('hidden');
    document.getElementById('2').classList.remove('hidden');
});
document.getElementById('2to3').addEventListener('click', function() {
    document.getElementById('2').classList.add('hidden');
    document.getElementById('3').classList.remove('hidden');
});
document.getElementById('5to4').addEventListener('click', function() {
    document.getElementById('5').classList.add('hidden');
    document.getElementById('4').classList.remove('hidden');
});
document.getElementById('4to5').addEventListener('click', function() {
    document.getElementById('4').classList.add('hidden');
    document.getElementById('5').classList.remove('hidden');
});
document.getElementById('6to5').addEventListener('click', function() {
    document.getElementById('6').classList.add('hidden');
    document.getElementById('5').classList.remove('hidden');
});
document.getElementById('5to6').addEventListener('click', function() {
    document.getElementById('5').classList.add('hidden');
    document.getElementById('6').classList.remove('hidden');
});
document.getElementById('8to9').addEventListener('click', function() {
    document.getElementById('8').classList.add('hidden');
    document.getElementById('9').classList.remove('hidden');
});
document.getElementById('9to8').addEventListener('click', function() {
    document.getElementById('9').classList.add('hidden');
    document.getElementById('8').classList.remove('hidden');
});
document.getElementById('9to10').addEventListener('click', function() {
    document.getElementById('9').classList.add('hidden');
    document.getElementById('10').classList.remove('hidden');
});
document.getElementById('10to9').addEventListener('click', function() {
    document.getElementById('10').classList.add('hidden');
    document.getElementById('9').classList.remove('hidden');
});
document.getElementById('10to11').addEventListener('click', function() {
    document.getElementById('10').classList.add('hidden');
    document.getElementById('11').classList.remove('hidden');
});
document.getElementById('11to10').addEventListener('click', function() {
    document.getElementById('11').classList.add('hidden');
    document.getElementById('10').classList.remove('hidden');
});
document.getElementById('11to12').addEventListener('click', function() {
    document.getElementById('11').classList.add('hidden');
    document.getElementById('12').classList.remove('hidden');
});
document.getElementById('12to11').addEventListener('click', function() {
    document.getElementById('12').classList.add('hidden');
    document.getElementById('11').classList.remove('hidden');
});
document.getElementById('13to14').addEventListener('click', function() {
    document.getElementById('13').classList.add('hidden');
    document.getElementById('14').classList.remove('hidden');
});
document.getElementById('14to13').addEventListener('click', function() {
    document.getElementById('14').classList.add('hidden');
    document.getElementById('13').classList.remove('hidden');
});
document.getElementById('14to15').addEventListener('click', function() {
    document.getElementById('14').classList.add('hidden');
    document.getElementById('15').classList.remove('hidden');
});
document.getElementById('15to16').addEventListener('click', function() {
    document.getElementById('15').classList.add('hidden');
    document.getElementById('16').classList.remove('hidden');
});
document.getElementById('15to14').addEventListener('click', function() {
    document.getElementById('15').classList.add('hidden');
    document.getElementById('14').classList.remove('hidden');
});
document.getElementById('16to15').addEventListener('click', function() {
    document.getElementById('16').classList.add('hidden');
    document.getElementById('15').classList.remove('hidden');
});
document.getElementById("testobutton").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("testother");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});
document.getElementById("testubutton").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("testurfu");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});
