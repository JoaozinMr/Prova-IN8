var contagemLinhas = 0
function cadastrar(nome, e_mail, nascimento, telefone) {
  if (contagemLinhas > 3) {
    alert('A tabela já está cheia!!')
    console.log('A tabela já está cheia!!')
  }

  if (contagemLinhas == 0) {
    let name = document.getElementById('name1')
    let nameText = document.createTextNode(nome)
    name.appendChild(nameText)
    let email = document.getElementById('email1')
    let emailText = document.createTextNode(e_mail)
    email.appendChild(emailText)
    let nasc = document.getElementById('nascimento1')
    let nascText = document.createTextNode(nascimento)
    nasc.appendChild(nascText)
    let tel = document.getElementById('telefone1')
    let telText = document.createTextNode(telefone)
    tel.appendChild(telText)

    contagemLinhas++
  } else if (contagemLinhas == 1) {
    let name = document.getElementById('name2')
    let nameText = document.createTextNode(nome)
    name.appendChild(nameText)
    let email = document.getElementById('email2')
    let emailText = document.createTextNode(e_mail)
    email.appendChild(emailText)
    let nasc = document.getElementById('nascimento2')
    let nascText = document.createTextNode(nascimento)
    nasc.appendChild(nascText)
    let tel = document.getElementById('telefone2')
    let telText = document.createTextNode(telefone)
    tel.appendChild(telText)

    contagemLinhas++
  } else if (contagemLinhas == 2) {
    let name = document.getElementById('name3')
    let nameText = document.createTextNode(nome)
    name.appendChild(nameText)
    let email = document.getElementById('email3')
    let emailText = document.createTextNode(e_mail)
    email.appendChild(emailText)
    let nasc = document.getElementById('nascimento3')
    let nascText = document.createTextNode(nascimento)
    nasc.appendChild(nascText)
    let tel = document.getElementById('telefone3')
    let telText = document.createTextNode(telefone)
    tel.appendChild(telText)

    contagemLinhas++
  } else if (contagemLinhas == 3) {
    let name = document.getElementById('name4')
    let nameText = document.createTextNode(nome)
    name.appendChild(nameText)
    let email = document.getElementById('email4')
    let emailText = document.createTextNode(e_mail)
    email.appendChild(emailText)
    let nasc = document.getElementById('nascimento4')
    let nascText = document.createTextNode(nascimento)
    nasc.appendChild(nascText)
    let tel = document.getElementById('telefone4')
    let telText = document.createTextNode(telefone)
    tel.appendChild(telText)

    contagemLinhas++
  }
}
