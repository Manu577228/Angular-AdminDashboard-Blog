import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './postlist/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  constructor(private ps: PostsService) {}

  onPostData(form: NgForm) {
    if (!form.invalid) {
      this.ps.addPost(
        form.value.title,
        form.value.content,
        form.value.dateTime
      );
      form.resetForm();
    } else {
      return;
    }
  }
}
