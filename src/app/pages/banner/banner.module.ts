import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [MenuComponent],
})
export class BannerModule {}
