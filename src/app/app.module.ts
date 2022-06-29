import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, HashLocationStrategy } from '@angular/common';

import {NgxWebstorageModule} from 'ngx-webstorage';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider } from '@abacritt/angularx-social-login';

/* PrimeNG Module */
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import {TreeModule} from 'primeng/tree';
import {CalendarModule} from 'primeng/calendar';
import {BlockUIModule} from 'primeng/blockui';
import {PanelMenuModule} from 'primeng/panelmenu';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { ConfirmationService, MessageService } from 'primeng/api';

/* Feature Modules */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SafeHtmlPipe} from './common/pipe/safe-html.pipe'
import {PrivateComponent} from './private/private.component';
import { ProfileComponent } from './private/profile/profile.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { DocRoutingModule } from './doc/doc-routing.module';
import { HomeComponent } from './private/home/home.component';
import { NavComponent } from './private/utils/nav.component';
import { AbstractComponent } from './private/abstract.component';
import { ValidateDirective } from './common/directive/validate.directive';
import { ValidateNumberDirective } from './common/directive/validate.number.directive';
import { RequiredDirective } from './common/directive/required.directive';
import { LegendComponent } from './private/utils/legend.component';
import { AppSearchComponent } from './private/utils/search.component';
import { AppImportExcelComponent } from './private/utils/excel.import.component';
import { CapitalizeFirstPipe } from './common/pipe/capitalize-first.pipe';
import { BlurDirective } from './common/directive/blur.directive';
import { NumberDirective } from './common/directive/number.directive';
import { EnumComponent } from './private/utils/enum.component';
import { ColumnComponent } from './private/utils/column.component';
import { AppImportImgComponent } from './private/utils/img.import.component';
import { Principal } from './common/service/principal.service';
import { NavService } from './private/utils/nav.service';
import { AuthInterceptor } from './common/service/http.interceptor';
import { LanguageService } from './common/service/language.service';
import { NotificationService } from './common/service/notification.service';
import { ConfirmService } from './common/service/confirm.service';
import { UtilsService } from './private/utils/utils.service';
import { LoadingService } from './private/utils/loading.service';
import { LanguageComponent } from './public/language/language.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const privateRoutes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      {
        path: 'main',
        component: HomeComponent
      },
    ]
  }
];

const publicRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent
  }
];

const routes: Routes = [
  { path: '', redirectTo: '/private', pathMatch: 'full' }  
];

@NgModule({
  declarations: [
    AppComponent,    
    EnumComponent,
    PrivateComponent,
    HomeComponent,
    
    AbstractComponent,
    ProfileComponent,    
    AppSearchComponent,
    AppImportExcelComponent,    
    ColumnComponent,
    AppImportImgComponent,
    LanguageComponent,
    LoginComponent,

    /** util */
    NavComponent,
    LegendComponent,
    SafeHtmlPipe,
    CapitalizeFirstPipe,
    ValidateDirective,
    BlurDirective,
    ValidateNumberDirective,
    NumberDirective,
    RequiredDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    DocRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true, onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' }),
    RouterModule.forChild(privateRoutes),
    RouterModule.forChild(publicRoutes),
/*****  prime module  *****/
    InputTextareaModule,
    DialogModule,
    ProgressSpinnerModule,
    TreeModule,
    TabViewModule,
    RadioButtonModule,
    FieldsetModule,
    ButtonModule,
    TreeTableModule,
    DialogModule,
    TableModule,
    DropdownModule,
    MenubarModule,
    SplitButtonModule,
    ConfirmDialogModule,
    SidebarModule,
    TieredMenuModule,
    MenuModule,
    BlockUIModule,
    PanelMenuModule,
    ToolbarModule,
    ProgressBarModule,
    CalendarModule,
    ToastModule,
    MessageModule,
    DividerModule,
    CardModule,
    
/***** Social login *****/
    SocialLoginModule,
  ],
  providers: [
    
    NavService,
    Principal,
    AuthInterceptor,
    LanguageService,
    TranslateService,
    NotificationService,
    ConfirmationService,
    ConfirmService,
    UtilsService,
    LoadingService,
    /** primng **/
    MessageService,
    /**  **/
    { provide: APP_BASE_HREF, useValue: '/shop' },
    { provide: HashLocationStrategy, useValue: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    /** social login */
    {provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('704837689637-jatiki2n3gpq0o48bm08a433t6vllkke.apps.googleusercontent.com',{
              'scope':'openid email profile',
              'apiKey':'AIzaSyC6qc6hrY73i5lLdiYOHw6UKF8_GY4uX9w'
            })            
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
