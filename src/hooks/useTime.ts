export default function useTime() {
  function convertRFC3339(d: Date) {
    function pad(n: number) {
      return n < 10 ? `0${n}` : n;
    }

    function timezoneOffset(offset: number) {
      if (offset === 0) {
        return 'Z';
      }
      const sign = offset > 0 ? '-' : '+';
      const reOffset = Math.abs(offset);
      return `${sign + pad(Math.floor(reOffset / 60))}:${pad(reOffset % 60)}`;
    }

    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate(),
    )}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
      d.getSeconds(),
    )}${timezoneOffset(d.getTimezoneOffset())}`;
  }
  return { convertRFC3339 };
}
