import { getCursos } from '@/api/cursos';
import Link from 'next/link';
export default async function CursosPage() {
  const curso = await getCursos();
  console.log(curso);

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {curso.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>
              <h3>{curso.nome}</h3>
            </Link>
            {curso.descricao}
          </li>
        ))}
      </ul>
    </main>
  );
}
