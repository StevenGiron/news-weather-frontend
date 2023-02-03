import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng-lts/button';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { PanelModule } from 'primeng-lts/panel';
import { ToastModule } from 'primeng-lts/toast';
import { MessageService } from 'primeng-lts/api';
import {DataViewModule} from 'primeng-lts/dataview';

@NgModule({
  
  exports:[
    ButtonModule,
    FieldsetModule,
    InputTextModule,
    PanelModule,
    ToastModule,
    DataViewModule
  ],
  providers:[
    MessageService,
  ]
  
})
export class PrimengModule { }
