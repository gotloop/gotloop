import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'glp-loop-upload',
  templateUrl: './loop-upload.component.html',
  styleUrls: ['./loop-upload.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class LoopUploadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
