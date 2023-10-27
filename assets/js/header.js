function showFormButton() {
    document.getElementById('hiden').style.display = 'block';
    document.getElementById('main').style.backgroundColor = '#ccc';
}

function cancle() {
    document.getElementById('hiden').style.display = 'none';
    document.getElementById('main').style.backgroundColor = '#fff';
}

function mua() {
    const hidenSubNav = document.getElementById('hiden-sub-nav');
    if (hidenSubNav.style.display === 'block') {
        hidenSubNav.style.display = 'none';

        document.getElementById('hiden-sub1').style.display = 'none';
        document.getElementById('hiden-sub2').style.display = 'none';
        document.getElementById('hiden-sub3').style.display = 'none';
    } else {
        hidenSubNav.style.display = 'block';
    }
}

function mua1() {
    const hidenSub1 = document.getElementById('hiden-sub1');
    if (hidenSub1.style.display === 'block') {
        hidenSub1.style.display = 'none';
    } else {
        hidenSub1.style.display = 'block';
    }

    document.getElementById('hiden-sub2').style.display = 'none';
    document.getElementById('hiden-sub3').style.display = 'none';
}

function mua2() {
    document.getElementById('hiden-sub1').style.display = 'none';

    const hidenSub2 = document.getElementById('hiden-sub2');
    if (hidenSub2.style.display === 'block') {
        hidenSub2.style.display = 'none';
    } else {
        hidenSub2.style.display = 'block';
    }

    document.getElementById('hiden-sub3').style.display = 'none';
}

function mua3() {
    document.getElementById('hiden-sub1').style.display = 'none';
    document.getElementById('hiden-sub2').style.display = 'none';

    const hidenSub3 = document.getElementById('hiden-sub3');
    if (hidenSub3.style.display === 'block') {
        hidenSub3.style.display = 'none';
    } else {
        hidenSub3.style.display = 'block';
    }
}