import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng-lts/button';
import {CardModule} from 'primeng-lts/card';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { PanelModule } from 'primeng-lts/panel';
import { ToastModule } from 'primeng-lts/toast';
import { MessageService } from 'primeng-lts/api';
import {TabMenuModule} from 'primeng-lts/tabmenu';



@NgModule({
  
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    PanelModule,
    ToastModule,
    TabMenuModule,
  ],
  
  providers:[
    MessageService,
  ]
  
})
export class PrimengModule { }
