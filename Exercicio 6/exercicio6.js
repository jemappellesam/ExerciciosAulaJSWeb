

function juntarPorEspaco(array) {
    return array.join(" ");
  }
  
  const taylorSwiftSongs = ["Love Story", "Blank Space", "Shake It Off"];
  console.log(juntarPorEspaco(taylorSwiftSongs));
  
  function juntarPorVirgula(array) {
    return array.join(",");
  }
  
  const taylorSwiftAlbums = ["Fearless", "1989", "Reputation"];
  console.log(juntarPorVirgula(taylorSwiftAlbums));
  

  
  function juntarPorHifen(array) {
    return array.join("-");
  }
  
  const taylorSwiftAlbumYears = [2008, 2014, 2017];
  console.log(juntarPorHifen(taylorSwiftAlbumYears));
  
  function formatarDatas(array) {
    return array.map(date => {
      const formattedDate = new Date(date);
      return `${formattedDate.getDate().toString().padStart(2, '0')}/${(formattedDate.getMonth() + 1).toString().padStart(2, '0')}/${formattedDate.getFullYear().toString()}`;
    }).join(";");
  }
  
  const taylorSwiftTourDates = ["2022-06-01", "2022-06-05", "2022-06-10"];
  console.log(formatarDatas(taylorSwiftTourDates));
  

  function juntarMatrizPorPontoVirgula(matriz) {
    return matriz.map(subArray => subArray.join(";")).join(";"); 
  }
  
  const taylorSwiftLyrics = [["We Are Never Ever Getting Back Together", "Style", "You Belong with Me"], ["Wildest Dreams", "The Archer", "Cardigan"], ["I Knew You Were Trouble", "Blank Space", "Delicate"]];
  console.log(juntarMatrizPorPontoVirgula(taylorSwiftLyrics));
  
  function maiusculasSeparadasPorEspaco(array) {
    return array.map(str => str.toUpperCase()).join(" ");
  }
  
  const taylorSwiftAlbumTracks = ["State of Grace", "Holy Ground", "All Too Well"];
  console.log(maiusculasSeparadasPorEspaco(taylorSwiftAlbumTracks));
  