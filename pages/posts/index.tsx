import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    createAt: string;
    updateAt: string;
    publishedAt: string;
  };
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Esta nueva funcion es porque useEffect no permite asincronia, por eso delega a otra funcion
    const fetchPost = async () => {
      const response = await axios.get<Post[]>(
        'http://localhost:1337/api/posts',
        {
          headers: {
            // Esta aqui solo porque es de lectura, por que no es seguro
            Authorization:
              'Bearer 8e0844a67e67fa5e359a66040ee5e452558d261b1414046f96393a19cc32d710f7e2f7f63ec07a3552da4f85c86a1d6d853cd7fc44f33a8d4fcd23391e6faa80ff67f9378483cc99225039000a258fc188017bbb2f476fc4a0032f1d6933fec1ae028dd530326e56cffc14fa6b8f11419ab3182dea652a385c8366718c407e70',
          },
        }
      );
      // console.log(response.data.data);
      setPosts(response.data);
    };
    fetchPost();
  }, []);

  return (
    <section>
      <h1>Posts</h1>
      {posts.map(d => (
        <p key={d.id}>{d.attributes.Title}</p>
      ))}
    </section>
  );
}
