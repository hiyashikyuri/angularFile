import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angularFile';

    constructor(private readonly router: Router) {
    }

    public async downloadFile() {
        const response = await fetch('assets/sample.jpg');
        const blob =  await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'Angular_sample_file';
        a.click();
        window.URL.revokeObjectURL(url);
        this.router.navigate(['/homepage']);
    }
}
