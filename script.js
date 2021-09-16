const form = document.getElementById("formulario");
let funcionarios = [];

form.addEventListener("submit", (e) => {
    
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const salario = document.getElementById("salario").value;
  const salarioFormatado = parseFloat(salario)
  const totalVendas = document.getElementById("totalVendas").value;
  const totalVendasFormatado = parseFloat(totalVendas)

  function salarioTotal(nome, sal, totalVendas) {
    let total = sal + (totalVendas * 0.15)
    return `${nome} receberá um salário total de ${total} reais`;
  }

  console.log(salarioTotal(nome, salarioFormatado, totalVendasFormatado))
  
  let funcionarioData = {
    nome,
    salario,
    totalVendas,
  };

  funcionarios.push(funcionarioData);
  console.table(funcionarios)

});
