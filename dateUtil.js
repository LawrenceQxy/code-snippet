var dateUtil = {
    now: new Date(),
    nowDayOfWeek: new Date().getDay(),
    nowDay: new Date().getDate(),
    nowMonth: new Date().getMonth(),
    nowYear: new Date().getFullYear(),
    getWeekStartDate: function () {
        var weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 1).format('yyyy-MM-dd');
        return weekStartDate;
    },
    getWeekEndDate: function() {
        var weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay + (7 - this.nowDayOfWeek)).format('yyyy-MM-dd');
        return weekEndDate;
    },
    getLastWeekStartDate: function () {
        var weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek - 6).format('yyyy-MM-dd');
        return weekStartDate
    },
    getLastWeekEndDate: function () {
        var weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek).format('yyyy-MM-dd');
        return weekEndDate
    },
    getAnyWeekStartDate: function (time) {
        var year = new Date(time).getFullYear(),
            month = new Date(time).getMonth(),
            day = new Date(time).getDate(),
            dayOfWeek = new Date(time).getDay();
        var weekStartDate = new Date(year, month, day - dayOfWeek + 1).format('yyyy/MM/dd');
        return weekStartDate;
    },
    getAnyWeekEndDate: function (time) {
        var year = new Date(time).getFullYear(),
            month = new Date(time).getMonth(),
            day = new Date(time).getDate(),
            dayOfWeek = new Date(time).getDay();
        var weekEndDate = new Date(year, month, day + 7 - dayOfWeek).format('yyyy/MM/dd');
        return weekEndDate;
    },
    getMonthDays: function (myMonth) {
        var monthStartDate = new Date(this.nowYear, myMonth, 1);
        var monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    },
    getMonthStartDate: function () {
        var monthStartDate = new Date(this.nowYear, this.nowMonth, 1).format('yyyy-MM-dd');
        return monthStartDate;
    },
    getLastMonthStartDate: function () {
        var lastMonthDate = new Date();
        lastMonthDate.setDate(1);
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        var lastMonth = lastMonthDate.getMonth();
        var lastMonthStartDate = new Date(this.nowYear, lastMonth, 1).format('yyyy-MM-dd');
        return lastMonthStartDate;
    },
    getLastMonthEndDate: function () {
        var lastMonthDate = new Date();
        lastMonthDate.setDate(1);
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        var lastMonth = lastMonthDate.getMonth();
        var lastMonthEndDate = new Date(this.nowYear, lastMonth, this.getMonthDays(lastMonth)).format('yyyy-MM-dd');
        return lastMonthEndDate;
    },
    getAnyMonthStartDate: function (time) {
        var year = new Date(time).getFullYear(),
            month = new Date(time).getMonth();
        var monthStartDate = new Date(year, month, 1).format('yyyy/MM/dd');
        return monthStartDate;
    },
    getAnyMonthEndDate: function (time) {
        var year = new Date(time).getFullYear(),
            month = new Date(time).getMonth() + 1;
        var monthEndDate = new Date(year, month, 0).format('yyyy/MM/dd');
        return monthEndDate;
    }
}