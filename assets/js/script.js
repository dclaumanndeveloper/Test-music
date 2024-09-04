
/* Criação da lista de músicas */
const musicas = [
    { id: 1, titulo: 'Boiadeira', artista: 'Ana Castela', genero: 'Sertanejo',dataLancamento: '12/01/2021' },
    { id: 2, titulo: 'Pais do Futebol', artista: 'Skank', genero: 'Rock',dataLancamento: '12/06/2001' },
    { id: 3, titulo: 'Lady Laura', artista: 'Cazuza', genero: 'MPB',dataLancamento: '26/04/1980' },
    { id: 4, titulo: 'Sequestraram minha sogra', artista: 'Bezerra da Silva', genero: 'Pagode',dataLancamento: '12/01/1989' },
    { id: 5, titulo: 'Renasci das Cinzas', artista: 'MC Daniel', genero: 'Funk',dataLancamento: '21/09/2023' },
  ];
/* Vinculação com os campos da tela html */
const listaMusicas = document.getElementById('lista-musicas');
const inputFiltro = document.getElementById('filtro');

/* Renderização da tabela com os dados da música */
function renderizarMusicas(musicasFiltradas) {
    listaMusicas.innerHTML = ''; 
    /* ForEach para criação de música por música na table */
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
    /* Colocação das tr na table do html */
    tr.appendChild(tdTitulo);
    tr.appendChild(tdArtista);
    tr.appendChild(tdGenero);
    tr.appendChild(tdDataLancamento);

    listaMusicas.appendChild(tr);
    });
  }
 
  /* Filtragem das músicas por todos os itens de uma música  */
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

  /* Renderização inicial da tabela ao abrir a página */
  renderizarMusicas(musicas);
  
  
  /* Adição do evento para verificar atualização do input de filtro e filtro em tempo real enquanto digita */
  inputFiltro.addEventListener('input', () => {
    const termo = inputFiltro.value;
    filtrarMusicas(termo);
  });

  /* Filtragem do Gênero ao trocar o gênero no dropdown */
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