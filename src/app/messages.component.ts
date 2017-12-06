import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: `this is the messages component
        <div *ngFor="let message of messages">
            <mat-card style="margin:8px;">
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </mat-card>
        </div>
        <button mat-button>test</button>
    `
})
export class MessagesComponent {
    messages = [
        { text: 'Texto de prueba 1', owner: 'Aphex Twin'},
        { text: 'Texto de otra weá', owner: 'Otto Von Schirach'}
    ];
}