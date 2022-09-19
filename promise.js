const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

// (async () => {
//   let dataTheaterIXX = await promiseTheaterIXX();
//   let dataTheaterVGC = await promiseTheaterVGC();
//   dataTheater = [...dataTheaterIXX, ...dataTheaterVGC];
//   console.log(dataTheater);
// })();

const promiseOutput = async (emosi) => {
  try {
    let dataTheater = [];
    const dataTheaterIXX = await promiseTheaterIXX();
    const dataTheaterVGC = await promiseTheaterVGC();
    dataTheater = [...dataTheaterIXX, ...dataTheaterVGC];
    let countEmosi = 0;
    
    return new Promise((resolve) => {
      // Kondisi terpenuhi
      if (emosi == "marah" || emosi == "tidak marah") {
        dataTheater.forEach(data => {
          if(data.hasil==emosi){
            countEmosi++;
          }
        });
        resolve(countEmosi);
      // Kondisi tidak terpenuhi
      }else{
        console.log('Maaf, jenis emosi tidak ditemukan');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
