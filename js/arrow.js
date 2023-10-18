for (let i = 1; i <= 5; i++) {
    $(`#questions__block0${i}`).on('click', function(event) {
        event.preventDefault();
        $(`#arrow${i}`).toggleClass('active');
    });
}