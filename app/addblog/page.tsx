'use client'

import React, { useState, FormEvent } from 'react';
import { db, app } from '../firebase'; // Import Firestore from your firebase.js file
import { addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Image from 'next/image'

interface BlogPost {
  title: string;
  category: string;
  content: string;
}

export default function Page() {
  const auth = getAuth(app);
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    category: '',
    content: '',
  });

  const userId = auth.currentUser?.uid;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!userId) {
      console.error('User is not authenticated.'); // Handle this error as needed
      return;
    }

    const userBlogPostsCollectionRef = collection(db, 'users_blogs', userId, 'blog_posts');

    try {
      await addDoc(userBlogPostsCollectionRef, {
        title: formData.title,
        category: formData.category,
        content: formData.content,
      });

      // Clear the form data
      setFormData({
        title: '',
        category: '',
        content: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="mt-[10rem]">
      <div className="h-[100%] flex justify-around items-center container m-auto">
      <div className='w-[100%]'>
         <Image src='/undraw_blog_post_re_fy5x.svg' width={500} height={500} alt='fukc' />

/      </div>
        <form className="border w-[100%] flex flex-col items-start px-5 py-5" onSubmit={handleSubmit}>
          <input
            className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
            type="text"
            placeholder="Enter your blog title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <input
            className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
            type="text"
            placeholder="Enter your blog category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
          <textarea
            className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
            rows={10}
            placeholder="Enter your blog content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          ></textarea>
          <button
            className="bg-indigo-500 px-5 py-2 text-white rounded-full transition-opacity hover:opacity-[0.8]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
