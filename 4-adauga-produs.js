// Elemente DOM
const numeArticol = document.querySelector('#input_j_id_x\\:numeArt')
const cantitateFacturata = document.querySelector(
  '#input_j_id_x\\:cantitateFacturata'
)
const unitateDeMasura = document.querySelector('#j_id_x\\:unitateMasuraInner')
const pretNet = document.querySelector('#input_j_id_x\\:pretNet')
const valoareNeta = document.querySelector('#input_j_id_x\\:valoareNeta')
const cotaTva = document.querySelector('#input_j_id_x\\:cotaTVA')
const categorieTva = document.querySelector('#j_id_x\\:categorieTVAInner')

//-- De completat --//
numeArticol.value = 'Denumire produs cumparat'.slice(0, 139) // limited chars @ 140
cantitateFacturata.value = 12
pretNet.value = 123.56

// Invariabile
unitateDeMasura.value = 'EA'
valoareNeta.value =
  Math.round(pretNet.value * cantitateFacturata.value * 100) / 100
cotaTva.value = 19
categorieTva.value = 'S'
