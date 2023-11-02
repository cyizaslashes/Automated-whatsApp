import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { AppComponent } from './app.component';
import { WhatsappAutomationComponent } from './whatsapp-automation/whatsapp-automation.component'; // Import the WhatsappAutomationComponent

@NgModule({
  declarations: [
    AppComponent,
    WhatsappAutomationComponent // Add the WhatsappAutomationComponent to the declarations
  ],
  imports: [
    BrowserModule,
    FormsModule // Add the FormsModule to the imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
