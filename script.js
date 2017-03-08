$(document).ready(function() {
    gridsize = 300;
    xbyx = 16;
    createGrid();



    $('#reset').click(function() {
        xbyx = prompt("Enter new gridsize");
        $('#wrapper').empty();
        createGrid();
    });
});

function createGrid() {
    for (i = 1; i <= xbyx; i++) {
        for (j = 1; j <= xbyx; j++) {
            $('#wrapper').append('<div class="square"></div>')
        };
        $('#wrapper').append('<br />')
        var size = gridsize / xbyx;
        $('.square').css('width', size);
        $('.square').css('height', size);
    };


    $('.square').hover(function() {
        $(this).addClass('highlight');
    });
}
