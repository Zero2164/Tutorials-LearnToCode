import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = '10.0.0.1';
  serverStatus = 'online';
  getServerStatus() {
    return this.serverStatus;
  }
  isOnline = "display: none;";
  isOffline = "color: red; font-weight: bold;";

  serverStatusSwitch() {
    this.isOnline = "color: lightgreen; font-weight: bold;";
    this.isOffline = "display: none;";
  }

}