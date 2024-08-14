import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  @Input() postListTitle: string = '';
  @Input() postIsLogin: boolean = false;

  childMessage: string = 'passing arguments from child to parent';

  parentMessage: string = 'Message from the child component using click Event';

  @Output() MessageEvent = new EventEmitter();
  sendMessage() {
    console.log('button Clicked');
    this.MessageEvent.emit(this.parentMessage);
  }
}
