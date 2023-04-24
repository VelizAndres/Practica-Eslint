import Link from 'next/link';

export default function StudentsPage() {
  return (
    <section>
      <h1>Students</h1>
      <ul>
        <li>
          <Link href="/students/1">Estudiantes 1</Link>
        </li>
        <li>
          <Link href="/students/2">Estudiantes 2</Link>
        </li>
        <li>
          <Link href="/students/3">Estudiantes 3</Link>
        </li>
        <li>
          <Link href="/students/4">Estudiantes 4</Link>
        </li>
        <li>
          <Link href="/students/5">Estudiantes 5</Link>
        </li>
      </ul>
    </section>
  );
}
