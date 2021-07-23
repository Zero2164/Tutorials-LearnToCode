import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverName = '';
  onServerCreate = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer () {
    this.onServerCreate = true;
    this.serverCreationStatus = 'New Server was created! Named: ' + this.serverName;
  }

  onUpdateServerName (event:  any) {
    this.serverName = event.target.value;    
  }
}
