const form = document.getElementById("formulario");
let funcionarios = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const salario = document.getElementById("salario").value;
  const salarioFormatado = parseFloat(salario);
  const salario2casas = salarioFormatado.toFixed(2);
  const totalVendas = document.getElementById("totalVendas").value;
  const totalVendasFormatado = parseFloat(totalVendas);
  const totalVendas2casas = totalVendasFormatado.toFixed(2);

  function salarioTotal(nome, sal, totalVendas) {
    let total = (sal + totalVendas * 0.15).toFixed(2);
    return `${nome} receberá um salário total de ${total} reais`;
  }

  console.log(salarioTotal(nome, salarioFormatado, totalVendasFormatado));

  let funcionarioData = {
    nome: nome,
    salario: salario2casas,
    totalEmVendas: totalVendas2casas,
  };

  funcionarios.push(funcionarioData);
  console.table(funcionarios);
});
