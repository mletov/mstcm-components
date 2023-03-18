import { Nullable } from "../system-types/nullable";

export class CalendarDayItem {

    public date: Nullable<Date> = new Date();

    public get dayNum():Nullable<number> {
        return this.date?.getDate();
    }

    public dayGridCellNum:number = 0;


    public isSelected : boolean = false;

}
