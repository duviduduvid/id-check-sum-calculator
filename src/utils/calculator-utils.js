const mapDigits = maskArray => (value, index) => value * maskArray[index];

const accumulateDigits = (accumulator, current) =>
  accumulator + (current % 10) + Math.floor(current / 10);

const reminainderByDivider = divider => check =>
  (divider - (check % divider)) % divider;

const calculateCheckSumDigit = (digits, mapper, reducer, remainder) =>
  remainder(digits.map(mapper).reduce(reducer));

const calculateIsrCheckSum = idDigits => {
  const maskArray = [1, 2, 1, 2, 1, 2, 1, 2];
  return calculateCheckSumDigit(
    idDigits,
    mapDigits(maskArray),
    accumulateDigits,
    reminainderByDivider(10)
  );
};

export default calculateIsrCheckSum;
