import {
  catetoDois,
  catetoUm,
  calculate,
  hipotenusa,
  resultado
} from './elements.js'

function calculaHipotenusa(catetoUm, catetoDois) {
  if (catetoUm != 0 && catetoDois != 0) {
    let resultadoHipotenusa = Math.pow(catetoUm, 2) + Math.pow(catetoDois, 2)
    console.log(resultadoHipotenusa)
    resultadoHipotenusa = Math.sqrt(resultadoHipotenusa)
    console.log(resultadoHipotenusa)
    return resultadoHipotenusa
  } else return alert('Preencha um valor nos catetos')
}

function calculaCatetoDois(hipotenusa, catetoUm) {
  if (hipotenusa != 0 && catetoUm != 0) {
    let resultadoCatetoDois
    let catetoDoisPow = Math.pow(catetoUm, 2)
    console.log(catetoDoisPow)
    let hipotenusaPow = Math.pow(hipotenusa, 2)
    console.log(hipotenusaPow)
    if (catetoDoisPow > hipotenusaPow) {
      resultadoCatetoDois = catetoDoisPow - hipotenusaPow
      resultadoCatetoDois = Math.sqrt(resultadoCatetoDois)
      return resultadoCatetoDois
    } else resultadoCatetoDois = hipotenusaPow - catetoDoisPow
    resultadoCatetoDois = Math.sqrt(resultadoCatetoDois)
    return resultadoCatetoDois
  } else return alert('Preencha um valor na hipotenusa e cateto 1')
}

function calculaCatetoUm(catetoDois, hipotenusa) {
  if (hipotenusa != 0 && catetoDois != 0) {
    let resultadoCatetoUm = Math.pow(hipotenusa, 2)
    resultadoCatetoUm = Math.pow(catetoDois, 2) - resultadoCatetoUm
    console.log(resultadoCatetoUm)
    resultadoCatetoUm = Math.sqrt(resultadoCatetoUm)
    console.log(resultadoCatetoUm)

    return resultadoCatetoUm
  } else return alert('Preencha um valor no cateto 2 e na hipotenusa')
}

calculate.addEventListener('click', () => {
  if (hipotenusa.value == '') {
    let resultadoFinal = calculaHipotenusa(catetoUm.value, catetoDois.value)
    if (resultadoFinal != undefined && resultadoFinal != null) {
      resultado.value = resultadoFinal
    }
  }
  if (catetoUm.value == '') {
    let resultadoFinal = calculaCatetoUm(hipotenusa.value, catetoDois.value)
    if (resultadoFinal != undefined && resultadoFinal != null) {
      resultado.value = resultadoFinal
    }
  }
  if (catetoDois.value == '') {
    let resultadoFinal = calculaCatetoDois(hipotenusa.value, catetoUm.value)
    if (resultadoFinal != undefined && resultadoFinal != null) {
      resultado.value = resultadoFinal
    }
  }
})
