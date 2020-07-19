import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs : Blog[] = [
    {
      id: 1,
      title: 'Getting started with Angular',
      date: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 
      description: 'This is an introduction to Angular. Stat learning from the very basics',
      rating: 0
    },
    {
      id: 2,
      title: 'Everyday coding challanges',
      date: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80', 
      description: 'This is a comprehensive set of challanges to make you a better coder than yesterday',
      rating: 0
    },
    {
      id: 3,
      title: 'Break the Routine',
      date: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
      description: 'Software engineering is hard!... Exhaustive....Learn how to take a break',
      rating: 0
    },
    {
      id: 4,
      title: 'Coding on the Fly',
      date: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 
      description: 'It is hard to stay in one place. Learn how to stay productive while you travel',
      rating: 0
    },
    {
      id: 5,
      title: 'All About Planning',
      date: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 
      description: 'You need to make sure that you grow. You need a plan for that',
      rating: 0
    },
    {
      id: 6,
      title: 'Code Editors',
      date: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80', 
      description: 'Ther are many IDE\'s available, Learn how to choose the right one',
      rating: 0
    }
  ]

  constructor() { }
}
