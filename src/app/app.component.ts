import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  toggle: boolean = true

  posts: Post[] = [
    {title: 'Заголовок второго поста', text: 'текст второго поста', id: 2},
    {title: 'Заголовок первого поста', text: 'текст первого поста', id: 1}
  ]

  ngOnInit() {
    setTimeout(() => {
      this.posts[this.posts.length - 1] = {
        title: 'changed in 5 seconds!',
        text: 'by ChangeDetectionStrategy.OnPush !'
      }
    }, 5000)
  }

  pushPost(post: Post) {
    this.posts.unshift(post)
  }

  invertColor(toggle) {
    this.toggle = toggle
  }

  updatePosts(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

}
