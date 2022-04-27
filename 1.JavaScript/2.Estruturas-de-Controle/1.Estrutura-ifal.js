function soSeForVerdade(valor) {
  if(valor) {
    console.log('É verdade...' + valor);
  }
};

// False
soSeForVerdade();
soSeForVerdade(null);
soSeForVerdade(undefined);
soSeForVerdade(NaN);
soSeForVerdade('');
soSeForVerdade(0);

// True
soSeForVerdade(-1);
soSeForVerdade(' ');
soSeForVerdade([]);
soSeForVerdade({});