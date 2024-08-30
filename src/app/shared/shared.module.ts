import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpConfigInterceptor } from './service/http/httpconfig.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigurationService } from './service/http/configuration.service';
import { HttpService } from './service/http/http.service';
import { HelperService } from './service/helper.service';
import { FilterpipePipe } from './Pipes/filterpipe.pipe';


@NgModule({
    declarations: [
        // Decleare you common component pipe and directive here 
    
    // FilterpipePipe
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
        },
        ConfigurationService,
        HttpService,
        HelperService
    ]
})
export class SharedModule { }
