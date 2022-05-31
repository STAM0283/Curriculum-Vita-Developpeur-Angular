import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export const SharedAnimations = [

    trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('350ms',
                style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate('350ms',
                style({ opacity: 0 })
            )
        ])
    ]),
    trigger('rotate', [
        transition(':enter', [
            animate('1000ms', 
            keyframes([
                style({transform: 'rotate(0deg)', offset: '0'}),
                style({transform: 'rotate(2turn)', offset: '1'})
            ])
            )
        ])
    ])

]