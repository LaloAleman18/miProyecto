document.getElementById('boton').addEventListener('click', function() {
    document.getElementById('titulo').textContent = 'Titulo Modificado';
})

document.getElementById('button1').addEventListener('dblclick', function() {
    document.getElementById('titulo1').textContent = 'Modificaste el texto exitosamente'
})

document.getElementById('button2').addEventListener('blur', function() {
    document.getElementById('titulo2').textContent = 'Puro pinche Cruz Azul'
})

document.getElementById('button3').addEventListener('click', function() {
    alert('No toque chamaco wey')
})