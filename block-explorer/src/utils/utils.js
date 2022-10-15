export function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  }

export function timeSet(cTimeStamp, timeStamp) {
    const day = 86400000;
    const hour = 3600000;
    const min = 60000;

    const timeDiff = cTimeStamp - timeStamp * 1000;

    if (timeDiff > day) {
      const date = new Date(timeStamp * 1000).toLocaleString();
      return date;
    } else {
      const hours = Math.floor(timeDiff / hour);
      const mins = Math.floor((timeDiff % hour) / 1000 / 60);
      const secs = Math.floor((timeDiff % min) / 1000);

      if (hours < 1 && mins < 1) {
        return `${secs} secs ago`;
      } else {
        if (hours < 1) {
          return `${mins} mins ${secs} secs ago`;
        }
      }

      return `${hours} hours ${mins} mins ${secs} secs ago`;
    }
  }