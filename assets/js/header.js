function showFormButton() {
    document.getElementById('hidden').style.display = 'block';
    document.getElementById('main').style.backgroundColor = '#ccc';
}

function cancel() {
    document.getElementById('hidden').style.display = 'none';
    document.getElementById('main').style.backgroundColor = '#fff';
}

function buy() {
    const hiddenSubNav = document.getElementById('hidden-sub-nav');
    if (hiddenSubNav.style.display === 'block') {
        hiddenSubNav.style.display = 'none';

        document.getElementById('hidden-sub1').style.display = 'none';
        document.getElementById('hidden-sub2').style.display = 'none';
        document.getElementById('hidden-sub3').style.display = 'none';
    } else {
        hiddenSubNav.style.display = 'block';
    }
}

function buy1() {
    const hiddenSub1 = document.getElementById('hidden-sub1');
    if (hiddenSub1.style.display === 'block') {
        hiddenSub1.style.display = 'none';
    } else {
        hiddenSub1.style.display = 'block';
    }

    document.getElementById('hidden-sub2').style.display = 'none';
    document.getElementById('hidden-sub3').style.display = 'none';
}

function buy2() {
    document.getElementById('hidden-sub1').style.display = 'none';

    const hiddenSub2 = document.getElementById('hidden-sub2');
    if (hiddenSub2.style.display === 'block') {
        hiddenSub2.style.display = 'none';
    } else {
        hiddenSub2.style.display = 'block';
    }

    document.getElementById('hidden-sub3').style.display = 'none';
}

function buy3() {
    document.getElementById('hidden-sub1').style.display = 'none';
    document.getElementById('hidden-sub2').style.display = 'none';

    const hiddenSub3 = document.getElementById('hidden-sub3');
    if (hiddenSub3.style.display === 'block') {
        hiddenSub3.style.display = 'none';
    } else {
        hiddenSub3.style.display = 'block';
    }
}