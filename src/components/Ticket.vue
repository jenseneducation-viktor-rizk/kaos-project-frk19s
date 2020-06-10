<template>
    <div id="ticket">
        
        <div class="what">
            <label>WHAT</label>
            <h2 class="band-name">
            {{ ticket.name }} 
            </h2>
        </div>
        <div class="where">
            <label>WHERE</label>
            <p class="location"> {{ ticket.location }} </p>
        </div>
        <div class="info">
            <div class="info-box">
                <label>WHEN</label>
                <p class="info-font">
                    {{ ticket.date.day }} {{ ticket.date.month }}
                </p>
            </div> 
            <div class="info-box mid">
                <label>FROM</label>
                <p class="info-font">
                    {{ ticket.date.time.start }}
                </p>
            </div>
            <div class="info-box">
                <label>TO</label>
                <p class="info-font">
                    {{ ticket.date.time.end }}
                </p>
            </div>
        </div>
        <div class="barcode">
            <img src="@/assets/A2ED7barcode.png" alt="barcode">
            <p class="ticket-number"> Biljettnummer: {{ticket.ticketNr}} </p>
        </div>
    </div>
</template>

<script>
export default {
data(){return{
    // ticket: {}
}},
computed: {
    ticket() {
        return this.$store.state.boughtTicket
    }
},
// beforeCreate() {
//    this.getTicket
// },
// methods: {
//     async getTicket() {
//         this.ticket = await this.$store.state.boughtTicket
//         console.log("done")
//     }
// }


}

</script>

<style lang="scss" scoped>
@import "../scss/variables";
    #ticket {
        display: flex;  
        flex-direction: column;
        max-width: 311px;
        max-height: 450px;
        width: 70%;
        height: 70%;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.34);
        border-radius: 3px;
        text-align: center;
        label {
            font-family: "Fira Sans", sans-serif;
            font-weight: bold;
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.4);
            margin: 10px 0 0 10px;
        }
        p {
            font-family: "Fira Sans", sans-serif ;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
        }
        h2, .location {
                margin: 10px
            }
        .band-name {
            color: $pink;
        }
        .what {
            max-width: 100%;
            height: 90px;
            
        }
        .what, .where {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .where {
            height: 120px;
            background: rgba(0, 0, 0, 0.03);
            border-top: 1px dashed rgba(0, 0, 0, 0.4);
            border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
        }
        .info {
            width: 100%;
            height: 60px;
            flex-direction: row;
            display: flex;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
            .info-font {
                font-family: Fira Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                margin: 0 auto;
                color: rgba(0, 0, 0, 0.6);
            }
            .info-box {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                max-height: 100%;
                width: 100%;
                background: rgba(0, 0, 0, 0.03);
            }
            .mid {
                border-left: 1px dashed rgba(0, 0, 0, 0.4);
                border-right: 1px dashed rgba(0, 0, 0, 0.4);
            }
                           
        }
        .barcode {
            display: flex;
            flex-direction: column;
            height: 180px;
            width: 100%;
            background: rgba(0, 0, 0, 0.12);
            img {
                margin: auto;
            }
            .ticket-number {
                margin: 0;
                font-family: Fira Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.3em;
                color: rgba(0, 0, 0, 0.4);
                margin: auto;
            }
        }
    }
</style>