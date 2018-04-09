import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatInputModule],
 exports: [MatButtonModule, MatToolbarModule,MatInputModule],
})
export class MaterialModule { }
