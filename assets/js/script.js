const musicas = [
    { id: 1, titulo: 'Boiadeira', artista: 'Ana Castela', genero: 'Sertanejo',dataLancamento: '12/01/2021' },
    { id: 2, titulo: 'Pais do Futebol', artista: 'Skank', genero: 'Rock',dataLancamento: '12/06/2001' },
    { id: 3, titulo: 'Lady Laura', artista: 'Cazuza', genero: 'MPB',dataLancamento: '26/04/1980' },
    { id: 4, titulo: 'Sequestraram minha sogra', artista: 'Bezerra da Silva', genero: 'Pagode',dataLancamento: '12/01/1989' },
    { id: 5, titulo: 'Renasci das Cinzas', artista: 'MC Daniel', genero: 'Funk',dataLancamento: '21/09/2023' },
  ];

const listaMusicas = document.getElementById('lista-musicas');
const inputFiltro = document.getElementById('filtro');

function renderizarMusicas(musicasFiltradas) {
    listaMusicas.innerHTML = ''; 
  
    musicasFiltradas.forEach(musica => {
      const tr = document.createElement('tr');

    const tdTitulo = document.createElement('td');
    tdTitulo.textContent = musica.titulo;

    const tdArtista = document.createElement('td');
    tdArtista.textContent = musica.artista;

    const tdGenero = document.createElement('td');
    tdGenero.textContent = musica.genero;

    const tdDataLancamento = document.createElement('td');
    tdDataLancamento.textContent = musica.dataLancamento;

    tr.appendChild(tdTitulo);
    tr.appendChild(tdArtista);
    tr.appendChild(tdGenero);
    tr.appendChild(tdDataLancamento);

    listaMusicas.appendChild(tr);
    });
  }

  function filtrarMusicas(termo) {
    const musicasFiltradas = musicas.filter(musica => {
      return( musica.titulo.toLowerCase().includes(termo.toLowerCase()) || 
      (musica.artista.toLowerCase().includes(termo.toLowerCase())) ||
      (musica.genero.toLowerCase().includes(termo.toLowerCase())) ||
      (musica.dataLancamento.toLowerCase().includes(termo.toLowerCase()))
    
    );
    });
  
    renderizarMusicas(musicasFiltradas);
  }

  renderizarMusicas(musicas);

  inputFiltro.addEventListener('input', () => {
    const termo = inputFiltro.value;
    filtrarMusicas(termo);
  });
  function filtrarGenero(){
   const genero = document.getElementById('genero').value;
   console.log(genero);
   if(genero != 'todos'){
   filtrarMusicas(genero);
   }
   else{
    renderizarMusicas(musicas);
   }
  }