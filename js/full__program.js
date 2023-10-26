function downloadFile(url, filename) {
    let link = document.getElementById('download');
    link.href = url;
    link.download = filename;

    // Делаем ссылку невидимой
    // link.style.display = 'none';

    // document.body.appendChild(link);

    // // Удаляем ссылку из DOM
    // document.body.removeChild(link);
}

// Привязываем функцию к событию click на кнопке
document.getElementById('download').addEventListener('click', function() {
    downloadFile('download/program.pdf', 'program');
});
