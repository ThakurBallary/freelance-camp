import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard";
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "asdf asdfjksjflksj",
			file_url: "http://google.com",
			updated_at: "15/10/2017",
			image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
		},
		{
			title: "My Second Doc",
			description: "asdf asdfjksjflksj",
			file_url: "http://google.com",
			updated_at: "15/10/2017",
			image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
		},
		{
			title: "My Third Doc",
			description: "asdf asdfjksjflksj",
			file_url: "http://google.com",
			updated_at: "15/10/2017",
			image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
		},
	]
}
