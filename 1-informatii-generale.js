// Elemente DOM
const dataEmiteriiFacturii = document.querySelector(
  '#j_id_u\\:dataFactura_Input'
)
const dataScadentei = document.querySelector('#j_id_u\\:dataPlata_Input')
const dataLivrarii = document.querySelector('#j_id_u\\:dataLivrarii_Input')
const numarulFacturii = document.querySelector('#input_j_id_u\\:numarFactura')
const referintaContractului = document.querySelector(
  '#input_j_id_u\\:refContract'
)
const referintaComenzii = document.querySelector('#input_j_id_u\\:numarOrdin')

//-- De completat --//
numarulFacturii.value = '1100278'
referintaContractului.value = ''
referintaComenzii.value = 'SEAP DA12345678'

// Invariabile
dataEmiteriiFacturii.value = new Date().toLocaleDateString('ro-RO')
const date = new Date()
date.setDate(date.getDate() + 33)
const payDate = date.toLocaleDateString('ro-RO')
dataScadentei.value = payDate
dataLivrarii.value = dataEmiteriiFacturii.value
