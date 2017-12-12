import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'messages',
    template: `this is the messages component
        <div *ngFor="let message of messages">
            <mat-card class="card">
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </mat-card>
        </div>
        <button mat-button>test</button>
    `
})
export class MessagesComponent {
    constructor(private webService: WebService) {}

    async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages = response.json();
    }

    messages = [];
}