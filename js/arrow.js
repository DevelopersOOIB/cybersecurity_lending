for (let i = 1; i <= 5; i++) {
    $(`#questions__block0${i}`).on('click', function() {
        $(`#arrow${i}`).toggleClass('active');
    });
}