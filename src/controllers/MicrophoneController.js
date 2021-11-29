import { ClassEvent } from "../utils/ClassEvent";

export class MicrophoneController extends ClassEvent{

    constructor(){

        super()

        this._mimeType = 'audio/webm'

        this._available = false

        navigator.mediaDevices.getUserMedia({

            audio: true

        }).then(stream=>{

            this._available = true

            this._stream = stream

            let audio = new Audio()

            audio.src = new MediaStream(stream);

            audio.play()

            this.trigger('play', audio)

        }).catch(err=>{
            console.error(err);
        })

    }

    isAvailable(){

        return this._available

    }

    stop(){

        this._stream.getTracks().forEach(track => {
            track.stop()
        })

    }

    startRecorder(){

        if (this.isAvailable()) {

            this._mediaRecorder =  new MediaRecorder(this._stream, this._mimeType)
             
        }

    }

    stopRecorder(){

        if (this.isAvailable()) {

            
            
        }

    }

}