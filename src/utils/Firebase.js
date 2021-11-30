const firebase = require('firebase')
require('firebase/firestore')

export class Firebase {

    constructor(){

        this._config = {
            apiKey: "AIzaSyCwvv_Vbi8NxuNOq7r9Fq9Iz0c-gB7jUWw",
            authDomain: "whatsapp-clone-ee917.firebaseapp.com",
            projectId: "whatsapp-clone-ee917",
            storageBucket: "whatsapp-clone-ee917.appspot.com",
            messagingSenderId: "207139810503",
            appId: "1:207139810503:web:61680920bc557ba93962e2"
          }

        this.init()

    }

    init(){

        if(!window._initializedFirebase){

            firebase.initializeApp(this._config)
            
            firebase.firestore().settings({
                timestampsInSnapshots: true
            })
            
            window._initializedFirebase = true

        }

    }

    static db(){

        return firebase.firestore()

    }

    static hd(){

        return firebase.storage()

    }

    initAuth(){

        return new Promise((s, f) =>{

            let provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider).then(result=>{

                let token = result.credential.accessToken
                let user = result.user

                s({
                    user, token
                })

            }).catch(err=>{

                f(err)

            })

        })

    }

}