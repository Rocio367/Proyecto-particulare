import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { environment } from 'src/environments/environment';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.scss']
})
export class ReunionComponent implements OnInit, AfterViewInit {

  domain: string = "meet.jit.si"; // For self hosted use your domain
  //domain: string = "localhost:4200"; // For self hosted use your domain
  room: any;
  options: any;
  api: any;
  user: any;
  idUser=localStorage.getItem('idUser');

  // For Custom Controls
  isAudioMuted = false;
  isVideoMuted = false;
  handleClose: any;
  handleParticipantLeft: any;
  handleParticipantJoined: any;
  handleVideoConferenceJoined: any;
  handleVideoConferenceLeft: any;
  handleMuteStatus: any;
  handleVideoStatus: any;
  id:number;
  linkClase:string;
  constructor(private aRouter:ActivatedRoute,private router: Router,private claseServices:ClaseService) {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.id=Number(params.q);
        this.linkClase= environment.frontUrl+"/reunion/"+this.id
        this.claseServices.detalleClase(this.id).subscribe(res=>{
          console.log(res)
          //vreficiar que el idUser este entre los alumnos
        })
      }
    );
    
    }
  ngOnInit(): void {



  }

  ngAfterViewInit(): void {

    this.room = 'Clase online'; // Set your room name
    this.user = {
      name: 'Rocio Centurion' // Set your username

    }
    //aca podemos moficiar el link con un id para mandarlo a los estudiantes
    this.options = {
      roomName: this.room,
      width: 900,
      height: 500,
      inviteServiceUrl: this.linkClase,
      configOverwrite: {
        inviteServiceUrl: this.linkClase
      },
      interfaceConfigOverwrite: {
        filmStripOnly: true,
        inviteServiceUrl: this.linkClase
      },

      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: this.user.name
      }
    }

    this.handleClose = () => {
      console.log("handleClose");
    }

    this.handleParticipantLeft = async (participant) => {
      console.log("handleParticipantLeft", participant); // { id: "2baa184e" }
      const data = await this.getParticipants();
    }

    this.handleParticipantJoined = async (participant) => {
      console.log("handleParticipantJoined", participant); // { id: "2baa184e", displayName: "Shanu Verma", formattedDisplayName: "Shanu Verma" }
      const data = await this.getParticipants();
    }

    this.handleVideoConferenceJoined = async (participant) => {

      /*this.api.executeCommand('startRecording', {
        mode: 'file', //recording mode, either `file` or `stream`.
        dropboxToken: 'sl.A76FNSokVyRzpHCe31_GGPSewzDv8wisWvD8Sluh60M_g2XegPGUAq9_x9jjlWkkJa90I7zMyz0RVMhGscbSHm6rf3Du__K8Tk3MfUQE2CcadaGXwBOlUtmx_kOwZqqISMoT7r0', //dropbox oauth2 token.
        shouldShare: true, //whether the recording should be shared with the participants or not. Only applies to certain jitsi meet deploys.

      });*/
      this.claseServices.claseIniciada(this.id,this.linkClase).subscribe(res=>{
        console.log(res)
      })
    }

    this.handleVideoConferenceLeft = () => {
      /*this.api.executeCommand('stopRecording',{
        mode: 'file' ,//recording mode to stop, `stream` or `file`
        dropboxToken: 'sl.A76FNSokVyRzpHCe31_GGPSewzDv8wisWvD8Sluh60M_g2XegPGUAq9_x9jjlWkkJa90I7zMyz0RVMhGscbSHm6rf3Du__K8Tk3MfUQE2CcadaGXwBOlUtmx_kOwZqqISMoT7r0', //dropbox oauth2 token.
        shouldShare: true, //whether the recording should be shared with the participants or not. Only applies to certain jitsi meet deploys.

      }
      );*/
      this.claseServices.claseFinalizada(this.id).subscribe(res=>{
        console.log(res)
        this.router.navigate(['/home']);

      })
    }

    this.handleMuteStatus = (audio) => {
      console.log("handleMuteStatus", audio); // { muted: true }
    }

    this.handleVideoStatus = (video) => {
      console.log("handleVideoStatus", video); // { muted: true }
    }
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    this.api.addEventListeners({
      readyToClose: this.handleClose,
      participantLeft: this.handleParticipantLeft,
      participantJoined: this.handleParticipantJoined,
      videoConferenceJoined: this.handleVideoConferenceJoined,
      videoConferenceLeft: this.handleVideoConferenceLeft,
      audioMuteStatusChanged: this.handleMuteStatus,
      videoMuteStatusChanged: this.handleVideoStatus
    });

  }


  getParticipants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.api.getParticipantsInfo()); // get all participants
      }, 500)
    });
  }

  executeCommand(command: string) {
    this.api.executeCommand(command);;
    if (command == 'hangup') {
      this.router.navigate(['/thank-you']);
      return;
    }

    if (command == 'toggleAudio') {
      this.isAudioMuted = !this.isAudioMuted;
    }

    if (command == 'toggleVideo') {
      this.isVideoMuted = !this.isVideoMuted;
    }
  }
}
