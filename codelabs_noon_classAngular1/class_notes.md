b## SPA
    have a single html file where the entire application is

    PWA: can give native features like a mobile app

## Commands
    ng new angular_app --no-strict
    ng serve --open
    ng g c component_name

## Key takeaways
    structureal & attribute directives
    string interpolation: One way data-binding technique that is used to transfer the data from a typscript code to an html template
        using  {{    }}
    property binding
        <button [disabled]="isDisabled>Like</button>
            disabled property is bound to the button
            only properties or object.methods can be bound to the button
    event binding
        <button [disabled]=isDisabled" (click)="LikeArticle()">Like</button>
            *the (click) is the bound event

        <div *nfIf="count > 3">
        


