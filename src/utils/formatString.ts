export function formatString(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s/g, "") // Remove espaços
    .toLowerCase(); // Converte para letras minúsculas
}