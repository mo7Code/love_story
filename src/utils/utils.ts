import axios from "axios";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/zh-cn";

dayjs.extend(isLeapYear);
dayjs.locale("zh-cn");

export const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const timeOut = (param: any) => {
  const { func, time } = param;

  return new Promise((resolve) => {
    setTimeout(() => {
      func();
      resolve();
    }, time);
  });
};

export const cloneDeep = (param: any) => {
  return JSON.parse(JSON.stringify(param));
};

// 重新认识  按下按钮的那一刻  reset
export const getSaveTime = () => {
  return new Promise((resolve) => {
    axios.get("https://api.meichangliang.com/read").then((res) => {
      const resTime: any = res.data > 1000 && res.data;
      window.localStorage.setItem("time", resTime);
      resolve(resTime);
    });
  });
};

export const getTime = () => {
  return {
    know: 1188612000000, //相识  2007年9月1日  10：00 在初中相遇
    meet: 1601272800000, //相遇  2020年09月28日 14:00 在机场相遇
  };
};

export const doubleNum = (param: number) => {
  let num: any = param;
  if (param - 9 <= 0) {
    num = "0" + num;
  }
  return String(num);
};

export const timeElapse = (dateTime: number, nowTime: number) => {
  const NowDate = new Date(nowTime);
  const TimeDate = new Date(dateTime);
  const now: any = dayjs(NowDate);
  const time: any = dayjs(TimeDate);

  let year = now.format("YYYY") - time.format("YYYY");
  let month = now.format("M") - time.format("M");
  let day = now.format("D") - time.format("D");
  const MonthDays = new Date(now.format("YYYY"), now.format("M"), 0).getDate();

  let hours = now.format("H") - time.format("H");
  let minutes = now.format("m") - time.format("m");
  let seconds = now.format("s") - time.format("s");
  // 年

  // 月
  if (month < 0) {
    year = year - 1;
    month = month + 12;
  }
  // 日
  if (day < 0) {
    month = month - 1;
    day = MonthDays + day;
  }
  // 时
  if (hours < 0) {
    day = day - 1;
    hours = 24 + hours;
  }
  // 分
  if (minutes < 0) {
    hours = hours - 1;
    minutes = 60 + minutes;
  }
  // 秒
  if (seconds < 0) {
    minutes = minutes - 1;
    seconds = seconds + 60;
  }

  const dayTime = nowTime - dateTime;
  const dayNum = Math.floor(dayTime / (1000 * 60 * 60 * 24));

  return {
    Y: year,
    M: month,
    D: day,
    H: hours,
    m: minutes,
    s: seconds,
    day: dayNum,
  };
};

export const setMobile = () => {
  const meta: any = window.document.getElementsByTagName("meta");
  meta["viewport"].setAttribute(
    "content",
    "width=device-width,initial-scale=1.0",
  );
};

export const setPC = () => {
  const meta: any = window.document.getElementsByTagName("meta");
  meta["viewport"].setAttribute("content", "");
};

export const getMusic = () => {
  return {
    wrzd: "http://file.meichangliang.com/xixi/wrzd.mp3",
    pa: "http://file.meichangliang.com/xixi/pa.mp3",
    gym: "http://file.meichangliang.com/xixi/gym.mp3",
    dl: "http://file.meichangliang.com/xixi/%E6%89%93%E9%9B%B7.mp3",
    xy: "http://file.meichangliang.com/xixi/%E4%B8%8B%E9%9B%A8.mp3",
  };
};
