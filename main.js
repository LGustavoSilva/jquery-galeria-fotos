$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown()
    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style = "display:none">  </li>')
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href= "${enderecoNovaImagem}" target="_blank" title="ver imgaem tamanho real" >
                Ver imagem tamanho real
            </a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })




    /*$('form button').click(function (e) {
        e.preventDefault()
        console.log('submit')
    })*/
})