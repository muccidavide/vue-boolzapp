
const app = new Vue({
    el: '#app',
    data: {
        activeIndex: 0,
        selectedIndex: '',
        search_user: '',
        writing_user:[],
        newMessage: {
            date: new Date().toLocaleString('it'),
            message: '',
            status: 'sent'
        },
        answerMessages: [{
            date: new Date().toLocaleString('it'),
            message: 'Non ti preccupare ci penso io!',
            status: 'received'
        },
        {
            date: new Date().toLocaleString('it'),
            message: 'Non esistono più le mezze stagioni!',
            status: 'received'
        },
        {
            date: new Date().toLocaleString('it'),
            message: 'Non oggi ma domani!',
            status: 'received'
        },
        {
            date: new Date().toLocaleString('it'),
            message: 'non posso ora, sentiamoci piu tardi!',
            status: 'received'
        },
        {
            date: new Date().toLocaleString('it'),
            message: 'Grazie mille non dovevi',
            status: 'received'
        }],
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },
    methods: {
        selectionChat(i) {
            return this.activeIndex = i
        },
        sendNewMessage(index) {
            let new_message = {...this.newMessage};
            
            if (new_message.message !== "") {
                this.contacts[index].messages.push(new_message)
                if (this.contacts[index].messages[0].status === 'default') {
                    this.contacts[index].messages.splice(0, 1)
                } 
                let app = this                    
                let random_index = Math.floor(Math.random() * app.answerMessages.length) 
                let answerMessage = app.answerMessages[random_index]
                this.writing_user.push(1)
                setTimeout(function () {
                    app.contacts[index].messages.push(answerMessage)
                    app.writing_user.push(2)
                    let app_2 = app
                    setTimeout(function () {
                        app_2.writing_user.splice(0,2)   
                    },3000)
                }, 2000)
                
            }
            
            console.log(this.newMessage);
            this.newMessage.message = ""

        },
        dropDownMenu(i) {
            if (this.selectedIndex === i) {
                this.selectedIndex = ""
            } else {
                return this.selectedIndex = i
            }


        },
        deleteMessage(i, activeIndex) {

            if (this.contacts[activeIndex].messages.length === 1) {
                let reset_message = {
                    date: '',
                    message: 'questa conversazione non contiene messaggi',
                    status: 'default'
                }
                this.contacts[activeIndex].messages.push(reset_message)
                this.contacts[activeIndex].messages.splice(this.selectedIndex, 1)
                this.selectedIndex = ""

            } else {
                this.contacts[activeIndex].messages.splice(this.selectedIndex, 1)
                this.selectedIndex = ""
            }
        },

        searching(contact) {
            if (contact.name.toLowerCase().includes(this.search_user.toLowerCase())) {
                return true
            } else {
                return false
            }

        },
    }
})