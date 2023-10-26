function downloadFile(url, filename) {
    let link = document.getElementById('download');
    link.href = url;
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    downloadFile('download/program.pdf', 'program');
});
