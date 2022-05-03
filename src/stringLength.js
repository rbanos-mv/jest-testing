const stringLength = (string) => {
  const length = string.length;
  if (length >= 1 && length <= 10)
    return length;
  else 
    throw('length out of range (1-10)')
}

module.exports = stringLength;