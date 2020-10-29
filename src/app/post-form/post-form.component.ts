import { Component, ElementRef, EventEmitter, AfterViewInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements AfterViewInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter<boolean>()

  @ViewChild('inputTitle') inputRef: ElementRef

  title = ''
  text = ''
  toggle: boolean = true

  ngAfterViewInit() {
    this.inputRef.nativeElement.focus()
  }

  addPost() {
    if ( this.title.trim() && this.text.trim() ) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.title = this.text = ''
      this.inputRef.nativeElement.focus()
    }
  }

  toggleColor() {
    this.toggle = !this.toggle
    const toggle: boolean = this.toggle
    this.onToggle.emit(toggle)
  }

}
