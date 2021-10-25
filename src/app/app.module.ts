import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LiveWeddingComponent } from './live-wedding/live-wedding.component';
import { MapComponent } from './map/map.component';
import { BankComponent } from './bank/bank.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ClickToCallComponent } from './sharedUI/click-to-call/click-to-call.component';
import { ExpandedPhotoComponent } from './gallery/expanded-photo/expanded-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MessageComponent,
    ContactsComponent,
    GalleryComponent,
    LiveWeddingComponent,
    MapComponent,
    BankComponent,
    FooterComponent,
    NavComponent,
    ClickToCallComponent,
    ExpandedPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
