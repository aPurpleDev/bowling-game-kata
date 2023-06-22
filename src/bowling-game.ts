export class BowlingGame {

    private readonly SPARE_BONUSROLL: number = 1
    private readonly STRIKE_BONUSROLL: number = 2
    private readonly MAX_PINS: number = 10
    private readonly MAX_ROLLS: number = 2
    private readonly MAX_TURNS: number = 10

    private _bonusRollCount: number = 0
    private _gameScore: number = 0
    private _pinsUp: number = this.MAX_PINS
    private _rollCountdown: number = this.MAX_ROLLS
    private _turnCountdown: number = this.MAX_TURNS

    score(): number {
        return this._gameScore
    }

    roll(pinsDown: number): void {
        this._rollCountdown --
        this._pinsUp -= pinsDown
        
        if(this._bonusRollCount) {
            if(this.isSuccessiveStrikes()){
                this.countBonusRoll(pinsDown)
            }
            this.countBonusRoll(pinsDown)
        }

        if(this._turnCountdown){
            this._gameScore += pinsDown
            this.handleBonuses()
        }

        if(!this._rollCountdown){
            this.nextTurn()
        }
    }

    private isSuccessiveStrikes(): boolean {
        return this._bonusRollCount > this.STRIKE_BONUSROLL
    }

    private countBonusRoll(pinsDown: number): void {
        this._gameScore += pinsDown
        this._bonusRollCount -- 
    }

    private handleBonuses(): void {
        const isBonus: boolean = this.isStrike() || this.isSpare()
        const bonusPoints = isBonus === this.isStrike() ? this.STRIKE_BONUSROLL : this.SPARE_BONUSROLL

        if(isBonus){
            this._bonusRollCount += bonusPoints
            this.nextTurn()
        }
    }

    private isStrike = (): boolean => this._pinsUp === 0 && this._rollCountdown === 1
    private isSpare = () : boolean => !this._pinsUp && !this._rollCountdown

    private nextTurn(): void {
        this._rollCountdown = this.MAX_ROLLS
        this._pinsUp = this.MAX_PINS
        this._turnCountdown --
    }
}