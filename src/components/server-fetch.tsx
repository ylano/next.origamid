type Produto = {
  id: number;
  nome: string;
};

export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = await response.json();
  return (
    <ul>
      {data.map((produto: Produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
