import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: 'sn-game-manager-popup',
  templateUrl: './game-manager-popup.component.html',
  styleUrls: ['./game-manager-popup.component.scss']
})
export class GameManagerPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<GameManagerPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  gameType: string = "Singleplayer";
}