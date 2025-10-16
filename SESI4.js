let film = {
    judul : "Interstellar",
    tahunRilis : 2014,
    sutradara : "Christopher Nolan",
    genre : ["Sci-fi", "Adventure", "Drama"],

  tampilkanDetail: function() {
    return `Judul: ${this.judul}\n` +
           `Tahun Rilis: ${this.tahunRilis}\n` +
           `Sutradara: ${this.sutradara}\n` +
           `Genre: ${this.genre.join(", ")}`;
  }

};

console.log(film.sutradara);
console.log(film.genre[1]);
console.log(film.tampilkanDetail());