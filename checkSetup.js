const exec = require('child_process').exec;

function checkNodeVersion() {
  return new Promise((resolve, reject) => {
    exec('node -v', (error, stdout) => {
      if (error) {
        reject(`Node.js no está instalado correctamente: ${error.message}`);
      } else {
        resolve(`Node.js está instalado correctamente. Versión: ${stdout.trim()}`);
      }
    });
  });
}

function checkNpmVersion() {
  return new Promise((resolve, reject) => {
    exec('npm -v', (error, stdout) => {
      if (error) {
        reject(`npm no está instalado correctamente: ${error.message}`);
      } else {
        resolve(`npm está instalado correctamente. Versión: ${stdout.trim()}`);
      }
    });
  });
}

async function checkSetup() {
  try {
    const nodeMessage = await checkNodeVersion();
    console.log(nodeMessage);

    const npmMessage = await checkNpmVersion();
    console.log(npmMessage);

    console.log('Tu entorno de Node.js está configurado correctamente.');
  } catch (error) {
    console.error(error);
  }
}

checkSetup();
