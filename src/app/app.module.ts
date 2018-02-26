import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2'

import { MyApp } from './app.component';
import { ToDoListPage } from '../pages/to-do-list/to-do-list';
import { AddToDoPage } from '../pages/add-to-do/add-to-do';
import { EditToDoItemPage } from '../pages/edit-to-do-item/edit-to-do-item';

import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule} from 'angularfire2/database-deprecated';

@NgModule({
  declarations: [
    MyApp,
    ToDoListPage,
    AddToDoPage,
    EditToDoItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDoListPage,
    AddToDoPage,
    EditToDoItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
