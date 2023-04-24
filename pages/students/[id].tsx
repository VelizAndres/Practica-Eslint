import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Student {
  id: string;
  name: string;
}

const students: Student[] = [
  { id: '1', name: 'Andres Veliz' },
  { id: '2', name: 'Paolo Veliz' },
  { id: '3', name: 'Pablo Isaac' },
  { id: '4', name: 'Jorge' },
  { id: '5', name: 'Paolo' },
];

export default function StudentsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (id) {
      const student = students.find(s => s.id === id);
      if (student) {
        setName(student.name);
      } else {
        router.push('/404');
      }
    }
  }, [id]);

  return (
    <section>
      <h1>Student {id}</h1>
      <h2>{name}</h2>
    </section>
  );
}
