import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
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
