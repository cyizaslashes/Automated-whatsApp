import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-automation',
  templateUrl: './whatsapp-automation.component.html',
  styleUrls: ['./whatsapp-automation.component.css']
})
export class WhatsappAutomationComponent {
  phoneNumber: string = '';
  message: string = '';

  sendWhatsAppMessage(): void {
    // Add your logic here to send the WhatsApp message using backend APIs
    console.log('Sending WhatsApp message to ' + this.phoneNumber + ' with message: ' + this.message);
    // You will need to implement the logic to send the WhatsApp message here
  }
}
