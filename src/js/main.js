document.addEventListener('scroll', () => {
    const header = document.querySelector('#topo');

    if (window.scrollY > 48) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

function toggleElementsById(id) {
    const ids = typeof id !== 'string' ? [ ...id ] : [ id ];

    for (id of ids) {
        const element = document.getElementById(id);

        element.classList.toggle('active');
    }
}