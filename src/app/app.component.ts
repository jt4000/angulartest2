import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AlertDialogComponent } from "./Components/alert-dialog/alert-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angulartest2";

  constructor(public dialog: MatDialog) {}

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: "HelloWorld",
        buttonText: {
          cancel: "Done",
        },
      },
    });
  }
}
