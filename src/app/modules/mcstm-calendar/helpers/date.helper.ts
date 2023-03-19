export class DateHelper {

  public static getDateForNextMonth(currentDate: Date) : Date {

    console.log("currentDate", currentDate);
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    console.log("newDate", newDate);

    return newDate;
  }
}
