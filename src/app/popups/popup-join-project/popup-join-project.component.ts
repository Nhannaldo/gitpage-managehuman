import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/Service/master.service';
import { JoinProject } from 'src/model/model';

@Component({
  selector: 'app-popup-join-project',
  templateUrl: './popup-join-project.component.html',
  styleUrls: ['./popup-join-project.component.css'],
})
export class PopupJoinProjectComponent implements OnInit {
  joinprojectObj: JoinProject = new JoinProject();

  constructor(
    private _dialog: MatDialogRef<PopupJoinProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MasterService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.joinprojectObj = this.data;
    }
  }
  closeModal() {
    this._dialog.close();
  }

  onSubmit(): void {
    if (this.data) {
      this.masterService.updateJoinProject(this.joinprojectObj).subscribe(
        (res) => {
          console.log('Update thành công:', res);
          alert('Cập nhật thành công!!');
          this._dialog.close();
          this.joinprojectObj = new JoinProject();
        },
        (error) => {
          console.error('Lỗi khi update:', error);
        }
      );
    } else {
      if (
        this.joinprojectObj.SanPhamCNTT != '' &&
        this.joinprojectObj.MoTa != ''
      ) {
        this.masterService.addJoinProject(this.joinprojectObj).subscribe(
          (res) => {
            console.log('Thêm mới thành công:', res);
            alert('Thêm mới thành công!!');
            this._dialog.close();
            this.joinprojectObj = new JoinProject();
          },
          (error) => {
            console.error('Lỗi khi thêm:', error);
          }
        );
      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
      }
    }
  }
}
