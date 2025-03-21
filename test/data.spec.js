import { filmesDiretores, moviesByScore, sortMoviesByyear, porcMoviesDirector, sortMoviesAz } from '../src/data.js';


describe('filmesDiretores filtra conforme a vontade do usuario', () => {
  it('deve filtrar filmes por diretor selecionado', () => {
    const semFiltro = {
      films:[
        {director: "Yoshifumi Kondō"},
        { director: "Hiromasa Yonebayashi" },
        { director: "Hayao Miyazaki" },
        {director: "Isao Takahata"},
      ]
    }
    const selecionada = "Hayao Miyazaki"
    const comFiltro = filmesDiretores(semFiltro, selecionada);
    expect(comFiltro[0].director).toBe("Hayao Miyazaki");
  });
});

describe('moviesByScore ordena filmes pelo score conforme a vontade do usuario', () => {
  it('deve ordenar filmes por score, do menor para o maior', () => {
    const semOrdenar = {
      films:[
        { rt_score: "100" },
        {rt_score: "97"},
        {rt_score: "96"},
        { rt_score: "95" },
      ]
    }
    const selecionada = "lower"
    const ordenarScore = moviesByScore(semOrdenar, selecionada)
    expect(ordenarScore[0].rt_score).toBe('95');
  });

  it('deve ordenar filmes por score, do maior para o menor', () => {
    const semOrdenar = {
      films:[
        { rt_score: "100" },
        {rt_score: "97"},
        {rt_score: "96"},
        { rt_score: "95" },
      ]
    }
    const selecionada = "bigger"
    const ordenarScore = moviesByScore(semOrdenar, selecionada)
    expect(ordenarScore[0].rt_score).toBe('100');
  });
});

describe('sortMoviesByyear ordena filmes pelo ano conforme a vontade do usuario', () => {
  it('deve ordenar filmes pelo ano, do mais antigo para o mais novo', () => {
    const semOrdenarAno = { films:[
      { release_date: "1986"},
      {release_date: "1989"},
      {release_date: "2001"},
      { release_date: "2014" },
    ]}
    const selecionada = "oldest"
    const ordenarAno = sortMoviesByyear(semOrdenarAno, selecionada)
    expect(ordenarAno[0].release_date).toBe('1986');
  });

  it('deve ordenar filmes pelo ano, do mais novo para o mais antigo', () => {
    const semOrdenarAno = { films:[
      { release_date: "1986"},
      {release_date: "1989"},
      {release_date: "2001"},
      { release_date: "2014" },
    ]}
    const selecionada = "newest"
    const ordenarAno = sortMoviesByyear(semOrdenarAno, selecionada)
    expect(ordenarAno[0].release_date).toBe('2014');
  });
});

describe(' sortMoviesAz ordena os filmes de a-z de z-a', () => {
  it('Deve ordenar os títulos dos filmes por ordem alfabética de A-Z', () => {
      const semOrdenação = { films:[
          { title: "Ponyo on the Cliff by the Sea" },
          { title: "My Neighbor Totoro" },
          {title: "Kiki's Delivery Service"},
          {title: "Castle in the Sky"},
      ]}
      const selecionada = "A-Z"
      const comOrdenação = sortMoviesAz(semOrdenação, selecionada);
      expect(comOrdenação[0].title).toBe("Castle in the Sky");
  })

  it('Deve ordenar os títulos dos filmes por ordem alfabética de Z-A', () => {
    const semOrdenação = { films:[
        { title: "Ponyo on the Cliff by the Sea" },
        { title: "My Neighbor Totoro" },
        {title: "Kiki's Delivery Service"},
        {title: "Castle in the Sky"},
    ]}
    const selecionada = "Z-A"
    const comOrdenação = sortMoviesAz(semOrdenação, selecionada);
    expect(comOrdenação[0].title).toBe("Ponyo on the Cliff by the Sea");
})
});

describe('porcMoviesDirector calcula a porcentagem de filmes por diretor, de acordo com a seleçao do usuario ', () => {
  it('deve retornar 25', () => {
      const objeto = { films: [
          { director: "Hayao Miyazaki"},
          { director: "Hiromasa Yonebayashi"},
          {director: "Isao Takahata"},
          {director: "Yoshifumi Kondō"},
      ]}
      const objetoFiltrado = [{ director:"Hayao Miyazaki"}]
      expect(porcMoviesDirector(objeto, objetoFiltrado)).toBe(25);
  })
});
