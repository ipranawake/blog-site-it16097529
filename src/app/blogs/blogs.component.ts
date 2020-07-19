import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs = null; 
  // deleteBlog = null;

  constructor(private blogsService: BlogService){ }

  ngOnInit(): void { // Life cycle hook - Triggers when the component is created 
    // To do on initialization 
    this.blogs = this.blogsService.blogs
  }
}
