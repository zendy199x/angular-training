import { Component } from '@angular/core';
import { authors, Author } from '../authors.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: `author-list`,
  template: `
    <author-details *ngFor='let author of authors' [author]='author' (selected)="onSelected($event)" (delete)="onDelete($event)"></author-details>
    <br />
    <div>
      Current selected author: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
  `
})

export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author): any {
    this.currentAuthor = selectedAuthor;
  }

  onDelete(id: number): void {
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
