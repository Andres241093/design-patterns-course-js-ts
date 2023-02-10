class WeekDays {
    daysEs = ['Lunes','Martes'];
    daysEn = ['Monday','Tuesday'];
    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays(){
        return this.lang === 'es' ?
            this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays('es');
console.log(weekDays.getDays());