'use strict'

/**
 * edb-node-chrome
 *
 * Parte do Projeto:
 * https://github.com/digitalbocca/edb-node-chrome
 *
 * @file index.js
 * @namespace root
 * @description Arquivo principal da aplicação.
 * @since v0.1.0
 *
 * @copyright (c)2017-2019 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.2.0
 */

const chromeLauncher = require('chrome-launcher')

chromeLauncher.launch({
  startingUrl: 'https://estudiodigitalbocca.com.br'
}).then(chrome => {
  console.log(`Navegador rodando na porta ${chrome.port}`)
})
