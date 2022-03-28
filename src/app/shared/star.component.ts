import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5
    }
    @Input() rating: number;
    starWidth: number;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.notify.emit('You have clicked');
    }
}