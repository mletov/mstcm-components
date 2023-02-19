export class CalendarDayItem {

    public date: Date = new Date();

    public get dayNum() {
        return this.date.getDay();
    }

    public isSelected : boolean = false;
    
}