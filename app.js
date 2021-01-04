new Vue({
    el: '#app',
    data: {
        playerHealth: 100, 
        monsterHealth: 100,
        // checking for the display of GAme Control Buttons
        gameIsRunning: false,
        // for Logging the game activity
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack() {
            let max = 10;   let min = 3
            let damage = this.calculateDamage(min, max)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })

            if (this.checkWin()){
                return
            }
            // monster Attack damage
            this.monsterAttack()

            
        },
        specialAttack () {
            let max = 10;   let min = 20
            let damage = this.calculateDamage(min, max)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.checkWin()){
                return
            }
            // monster Attack damage
            this.monsterAttack()

        },
        heal () { 
            if (this.playerHealth <= 90){
                this.playerHealth += 10
            } else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            })
            this.monsterAttack()
        },
        giveUp () {
            this.gameIsRunning = false
        },
        monsterAttack () {
            let max = 12,  min = 5
            damage = this.calculateDamage(min, max)
            this.playerHealth -= damage
            this.checkWin()
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })

        },

        calculateDamage(min, max) {
             // if random number generated is less than the min(3) then it will be set to 3
            return Math.max(Math.floor(Math.random() * max) + 1, min)

        },
        checkWin () {
            if (this.monsterHealth <= 0 ){
                if (confirm('You won! New Game?')){
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <=0) {
                if (confirm('You lost! New Game?')){
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    }
})


