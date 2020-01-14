const mcpadc = require('mcp-spi-adc');

const potentiometer = mcpadc.open(5, {speedHz: 20000}, err => {
  if (err) throw err;

  setInterval(_ => {
    potentiometer.read((err, reading) => {
      if (err) throw err;
      console.log(reading.value);
    });
  }, 1000);
});