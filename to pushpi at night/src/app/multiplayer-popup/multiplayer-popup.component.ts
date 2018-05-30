import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-multiplayer-popup',
  templateUrl: './multiplayer-popup.component.html',
  styleUrls: ['./multiplayer-popup.component.css']
})
export class MultiplayerPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MultiplayerPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

gameType : String = "Multiplayer";
}
