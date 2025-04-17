function procuraSobremesa(sobremesas, valorDoInput) {
  const valorPesquisado = valorDoInput.toLowerCase();

  const resultado = sobremesas.filter(sobremesa =>
    sobremesa.nome.toLowerCase().includes(valorPesquisado)
  );

  return resultado;
}
