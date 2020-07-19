import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog; 
  blogs = null; 

  constructor(private blogsService: BlogService) { }

  ngOnInit(): void { 
    this.blogs = this.blogsService.blogs; 
  }

  // Delete blog function 
  removeBlog(blog){
    const i: number = this.blogs.indexOf(blog);
    if(i !== -1){
      this.blogs.splice(i,1);
    }
  }

  // Function to change the icon style
  setColor(index, blog){
    let styles;

    if(blog.rating ==  0){
      styles = {
        'margin-left': '5px', 
        'color': 'lightGray'
      }
    }else if(index <=  blog.rating){
      styles = {
        'margin-left': '5px', 
        'color': 'orange'
      }
    }else {
      styles = {
        'margin-left': '5px', 
        'color': 'lightGray'
      }
    }

    return styles;
  }

  // Function to change rating 
  setRating(rating, blog){
    blog.rating = rating ; 
  }
}
